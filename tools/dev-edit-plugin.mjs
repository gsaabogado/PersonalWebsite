/**
 * Dev-only in-browser text editing.
 *
 * Vite plugin that registers a POST /__dev-edit middleware on the `astro dev`
 * server. The client overlay (src/components/DevEdit.astro) sends the text as
 * it was rendered and the text as edited; this middleware locates the rendered
 * text in the source tree and rewrites it in place. Whitespace runs are matched
 * loosely so wrapped template text still resolves.
 *
 * It is wired through `configureServer`, which Vite only calls for the dev
 * server, so nothing here exists in `astro build` output.
 */
import { promises as fs } from "node:fs";
import path from "node:path";

const ROOTS = ["src/components", "src/data", "src/pages", "src/layouts", "src/i18n"];
const EXTS = new Set([".astro", ".ts", ".tsx", ".js", ".mjs", ".json", ".md", ".mdx"]);

async function listFiles(dir, out = []) {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) await listFiles(p, out);
    else if (EXTS.has(path.extname(e.name))) out.push(p);
  }
  return out;
}

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Exact text, but any whitespace run in the needle matches any whitespace run in the file. */
function looseRegex(text) {
  const parts = text.trim().split(/\s+/).map(escapeRe);
  return new RegExp(parts.join("\\s+"), "g");
}

/** Split a template literal body into [{text}|{expr}] parts; null if braces are unbalanced. */
function splitTemplate(lit) {
  const parts = [];
  let i = 0, text = "";
  while (i < lit.length) {
    if (lit[i] === "$" && lit[i + 1] === "{") {
      if (text) parts.push({ text });
      text = "";
      let depth = 1, j = i + 2;
      while (j < lit.length && depth) {
        if (lit[j] === "{") depth++;
        else if (lit[j] === "}") depth--;
        j++;
      }
      if (depth) return null;
      parts.push({ expr: lit.slice(i + 2, j - 1) });
      i = j;
    } else {
      text += lit[i++];
    }
  }
  if (text) parts.push({ text });
  return parts;
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (c) => (data += c));
    req.on("end", () => resolve(data));
    req.on("error", reject);
  });
}

export default function devEditPlugin() {
  return {
    name: "dev-edit",
    apply: "serve",
    configureServer(server) {
      const root = server.config.root;
      server.middlewares.use("/__dev-edit", async (req, res) => {
        const send = (code, obj) => {
          res.statusCode = code;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(obj));
        };
        if (req.method !== "POST") return send(405, { error: "POST only" });
        let body;
        try {
          body = JSON.parse(await readBody(req));
        } catch {
          return send(400, { error: "bad JSON" });
        }
        const before = String(body.before ?? "").trim();
        const after = String(body.after ?? "").trim();
        if (!before) return send(400, { error: "empty `before`" });
        if (before === after) return send(200, { ok: true, unchanged: true });
        if (before.length < 4) return send(400, { error: "text too short to locate safely" });

        const files = (await Promise.all(ROOTS.map((r) => listFiles(path.join(root, r))))).flat();
        const sources = [];
        for (const f of files) sources.push({ file: path.relative(root, f), src: await fs.readFile(f, "utf8") });

        // 1. Exact (whitespace-loose) match of the rendered text in a source literal.
        const re = looseRegex(before);
        const hits = [];
        for (const { file, src } of sources) {
          const n = (src.match(re) ?? []).length;
          if (n) hits.push({ file, n, src });
        }
        const total = hits.reduce((s, h) => s + h.n, 0);
        if (total > 1) {
          return send(409, {
            error: `Text occurs ${total} times; refusing to guess.`,
            files: hits.map((h) => `${h.file} (${h.n})`),
          });
        }
        if (total === 1) {
          const h = hits[0];
          const m = re.exec(h.src);
          const quote = h.src[m.index - 1];
          if (["'", '"', "`"].includes(quote) && after.includes(quote)) {
            return send(400, {
              error: `The new text contains ${quote}, which would break the ${quote}-quoted string in ${h.file}.`,
            });
          }
          const updated = h.src.slice(0, m.index) + after + h.src.slice(m.index + m[0].length);
          await fs.writeFile(path.join(root, h.file), updated, "utf8");
          return send(200, { ok: true, file: h.file });
        }

        // 2. Template literal with ${...} interpolations. Each interpolation is
        //    treated as a wildcard when locating the literal; on save, the values
        //    it rendered to are substituted back with their expressions, so the
        //    numbers stay computed. A value the editor removed or altered is an
        //    error, not a silent hard-coding.
        const tplHits = [];
        for (const { file, src } of sources) {
          const tplRe = /`((?:[^`\\]|\\.)*)`/g;
          let t;
          while ((t = tplRe.exec(src))) {
            const lit = t[1];
            if (!lit.includes("${")) continue;
            const parts = splitTemplate(lit);
            if (!parts) continue;
            // Only prose-like literals: enough fixed text to identify the sentence.
            const fixed = parts.filter((x) => !x.expr).map((x) => x.text.trim()).join(" ");
            if (fixed.length < 20) continue;
            const pattern =
              "^" +
              parts
                .map((x) => (x.expr ? "([\\s\\S]+?)" : x.text.trim().split(/\s+/).map(escapeRe).join("\\s+")))
                .join("\\s*") +
              "$";
            const mm = new RegExp(pattern).exec(before);
            if (mm) tplHits.push({ file, src, start: t.index + 1, end: t.index + 1 + lit.length, parts, values: mm.slice(1) });
          }
        }
        if (tplHits.length === 0) {
          return send(404, { error: "Text not found in source. Edit the template by hand." });
        }
        if (tplHits.length > 1) {
          return send(409, {
            error: `Text matches ${tplHits.length} template literals; refusing to guess.`,
            files: tplHits.map((h) => h.file),
          });
        }
        const h = tplHits[0];
        if (after.includes("`")) return send(400, { error: "The new text contains a backtick, which would break the template literal." });
        // Numbers may be deleted along with their clause, but not rewritten:
        // any numeral in `after` that was not in `before` means a computed value
        // was edited by hand, which would silently hard-code it.
        const nums = (t) => t.match(/\d+(?:[.,]\d+)?/g) ?? [];
        const beforeNums = new Set(nums(before));
        const newNum = nums(after).find((x) => !beforeNums.has(x));
        if (newNum) {
          return send(400, {
            error: `"${newNum}" is not in the original text. Computed numbers come from the data; edit the words around them, or delete the clause, but do not retype a number.`,
          });
        }
        // Rebuild: walk `after`, replacing each rendered value (in order) with its
        // expression; a value no longer present was deleted with its clause.
        const exprs = h.parts.filter((x) => x.expr).map((x) => x.expr);
        let rest = after;
        let out = "";
        let dropped = 0;
        for (let k = 0; k < exprs.length; k++) {
          const v = h.values[k].trim();
          const at = rest.indexOf(v);
          if (at < 0) {
            dropped++;
            continue;
          }
          out += rest.slice(0, at) + "${" + exprs[k] + "}";
          rest = rest.slice(at + v.length);
        }
        out += rest;
        const updated = h.src.slice(0, h.start) + out + h.src.slice(h.end);
        await fs.writeFile(path.join(root, h.file), updated, "utf8");
        return send(200, { ok: true, file: h.file, interpolations: exprs.length - dropped, dropped });
      });
    },
  };
}
