/**
 * Minimal SVG chart helpers.
 *
 * Everything here runs at BUILD time inside .astro components: the pages ship
 * finished SVG, so the core charts render with JavaScript disabled. There is no
 * charting library on purpose — a handful of chart types styled to one palette
 * is lighter and less generic than any library's defaults.
 */

export type Side = "cold" | "reference" | "hot";

export interface Estimate {
  bin: string;
  bin_order: number;
  bin_label_en: string;
  bin_label_es: string;
  side: Side;
  horizon: number;
  estimate: number;
  se: number | null;
  p: number | null;
  pct: number;
  ci_low: number;
  ci_high: number;
  stars: string;
  reference?: boolean;
}

export type Lang = "en" | "es";

/** Colour tokens, mirroring the semantic scale defined in global.css. */
export const SIDE_COLOR: Record<Side, string> = {
  cold: "var(--color-temp-cold)",
  reference: "var(--color-temp-reference)",
  hot: "var(--color-temp-hot)",
};

export const SIDE_CI_COLOR: Record<Side, string> = {
  cold: "var(--color-temp-cold-ci)",
  reference: "var(--color-temp-reference-ci)",
  hot: "var(--color-temp-hot-ci)",
};

export function binLabel(d: Estimate, lang: Lang): string {
  return lang === "es" ? d.bin_label_es : d.bin_label_en;
}

/** Linear scale from a data domain to a pixel range. */
export function scaleLinear(
  domain: [number, number],
  range: [number, number]
): (v: number) => number {
  const [d0, d1] = domain;
  const [r0, r1] = range;
  const span = d1 - d0 || 1;
  return (v: number) => r0 + ((v - d0) / span) * (r1 - r0);
}

/**
 * Evenly spaced band centres for ordinal categories, plus the band width.
 * Used for temperature bins, which are categories with a meaningful order.
 */
export function scaleBand(
  n: number,
  range: [number, number],
  innerPadding = 0.25
): { centre: (i: number) => number; width: number } {
  const [r0, r1] = range;
  const step = (r1 - r0) / Math.max(n, 1);
  return {
    centre: (i: number) => r0 + step * (i + 0.5),
    width: step * (1 - innerPadding),
  };
}

/**
 * Axis ticks at a human-readable interval covering the domain.
 * Guarantees zero is included, because zero is the null hypothesis here and the
 * reader must be able to see which intervals cross it.
 */
export function niceTicks(min: number, max: number, target = 6): number[] {
  const lo = Math.min(min, 0);
  const hi = Math.max(max, 0);
  const raw = (hi - lo) / Math.max(target, 2);
  const mag = Math.pow(10, Math.floor(Math.log10(raw || 1)));
  const step = [1, 2, 2.5, 5, 10].map((m) => m * mag).find((s) => s >= raw) ?? mag * 10;
  const start = Math.ceil(lo / step) * step;
  const out: number[] = [];
  for (let v = start; v <= hi + step * 1e-6; v += step) {
    out.push(Math.abs(v) < step * 1e-6 ? 0 : v);
  }
  if (!out.some((v) => v === 0)) out.push(0);
  return out.sort((a, b) => a - b);
}

/** Percent, signed, with a true minus sign rather than a hyphen. */
export function fmtPct(v: number, digits = 1): string {
  const s = v.toFixed(digits);
  if (Number(s) === 0) return `0.${"0".repeat(digits)}%`;
  return `${v > 0 ? "+" : "−"}${Math.abs(Number(s)).toFixed(digits)}%`;
}

/** Unsigned magnitude, for prose where the direction is already stated. */
export function fmtMag(v: number, digits = 1): string {
  return `${Math.abs(v).toFixed(digits)}%`;
}

/** Polyline path through [x, y] pixel pairs. */
export function linePath(points: Array<[number, number]>): string {
  return points.map((p, i) => `${i === 0 ? "M" : "L"}${p[0]},${p[1]}`).join(" ");
}

/** Closed band between an upper and a lower series, for confidence ribbons. */
export function bandPath(
  upper: Array<[number, number]>,
  lower: Array<[number, number]>
): string {
  if (!upper.length) return "";
  const down = upper.map((p) => `L${p[0]},${p[1]}`).join(" ");
  const back = [...lower].reverse().map((p) => `L${p[0]},${p[1]}`).join(" ");
  return `M${upper[0][0]},${upper[0][1]} ${down} ${back} Z`;
}

/**
 * Marker shapes, so a group is identified by form as well as colour.
 *
 * Colour alone fails for roughly 1 in 12 men, and it also fails on a printout or
 * a compressed screenshot. Every group therefore carries a shape, and the same
 * shape appears on its selector button.
 *
 * All shapes are emitted as paths so fill, stroke and the hollow reference
 * variant behave identically across them. Sizes are tuned for roughly equal
 * visual weight rather than equal bounding box.
 */
export const MARK_KINDS = [
  "circle",
  "square",
  "triangleUp",
  "diamond",
  "triangleDown",
  "plus",
] as const;
export type MarkKind = (typeof MARK_KINDS)[number];

export function markKind(i: number): MarkKind {
  return MARK_KINDS[i % MARK_KINDS.length];
}

export function markPath(kind: MarkKind, cx: number, cy: number, r: number): string {
  const p = (n: number) => Number(n.toFixed(2));
  switch (kind) {
    case "square": {
      const h = r * 0.88;
      return `M${p(cx - h)},${p(cy - h)}H${p(cx + h)}V${p(cy + h)}H${p(cx - h)}Z`;
    }
    case "triangleUp": {
      const w = r * 1.08;
      const up = r * 1.12;
      const dn = r * 0.72;
      return `M${p(cx)},${p(cy - up)}L${p(cx + w)},${p(cy + dn)}L${p(cx - w)},${p(cy + dn)}Z`;
    }
    case "triangleDown": {
      const w = r * 1.08;
      const dn = r * 1.12;
      const up = r * 0.72;
      return `M${p(cx)},${p(cy + dn)}L${p(cx + w)},${p(cy - up)}L${p(cx - w)},${p(cy - up)}Z`;
    }
    case "diamond": {
      const vx = r * 1.06;
      const vy = r * 1.28;
      return `M${p(cx)},${p(cy - vy)}L${p(cx + vx)},${p(cy)}L${p(cx)},${p(cy + vy)}L${p(cx - vx)},${p(cy)}Z`;
    }
    case "plus": {
      const a = r * 1.22; // arm length
      const b = r * 0.40; // arm half-width
      return (
        `M${p(cx - b)},${p(cy - a)}H${p(cx + b)}V${p(cy - b)}H${p(cx + a)}` +
        `V${p(cy + b)}H${p(cx + b)}V${p(cy + a)}H${p(cx - b)}V${p(cy + b)}` +
        `H${p(cx - a)}V${p(cy - b)}H${p(cx - b)}Z`
      );
    }
    case "circle":
    default:
      return (
        `M${p(cx - r)},${p(cy)}a${p(r)},${p(r)} 0 1,0 ${p(r * 2)},0` +
        `a${p(r)},${p(r)} 0 1,0 ${p(-r * 2)},0Z`
      );
  }
}
