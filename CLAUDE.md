# Personal Website — Project Architecture

## Overview
Academic personal website for Luis Sarmiento, built with Astro 5 + Tailwind CSS 4. Deployed at https://luissarmiento.com. Hosted on GitHub at `gsaabogado/PersonalWebsite`.

## Tech Stack
- **Framework:** Astro 5 (static site generation)
- **Styling:** Tailwind CSS 4 (via `@tailwindcss/vite`)
- **i18n:** Custom system — EN (default, no prefix) / ES (`/es/` prefix)
- **Build:** `npm run build` → `dist/`
- **Dev:** `npm run dev`

## Directory Structure
```
src/
  components/       # Astro components (home/, research/, cv/, contact/)
  data/             # TypeScript data files (publications, cv, research areas, conferences)
  i18n/             # Translations (ui.ts), navigation (navigation.ts), utilities (utils.ts)
  layouts/          # BaseLayout.astro, PageLayout.astro
  pages/            # Route pages (EN at root, ES under es/)
  styles/           # Global CSS
public/             # Static assets (images, CV PDF, favicon)
```

## Pages
| Route | EN | ES |
|-------|----|----|
| Home | `/` | `/es/` |
| Research | `/research/` | `/es/research/` |
| Applied Econometrics | `/research/applied-econometrics` | `/es/research/applied-econometrics` |
| Energy Modeling | `/research/energy-modeling` | `/es/research/energy-modeling` |
| Publications | `/publications/` | `/es/publications/` |
| CV | `/cv/` | `/es/cv/` |
| Contact | `/contact/` | `/es/contact/` |

## Key Patterns
- **i18n:** All UI strings in `src/i18n/ui.ts` keyed by `en`/`es`. Navigation links in `src/i18n/navigation.ts`. Use `getLangFromUrl()` and `t(lang, key)` from `src/i18n/utils.ts`.
- **Data-driven pages:** Publications, CV entries, research areas defined as TypeScript arrays in `src/data/`. Components consume these directly.
- **Components:** `ResearchHero` for page headers (supports background image or gradient fallback). `PublicationList` groups publications by status (published, R&R, under review, working papers).
- **Nav highlighting:** Active tab determined by current URL path matching nav `href`.
- **A paper's citation lives in TWO places, and both must move together.** The
  publications list reads `src/data/publications.ts`; the ED-visits outreach hub
  reads the `PAPER` constant in `src/data/outreach.ts`, which also feeds the
  eyebrow and the "Cite the paper" block in `paper/HubContent.astro`. Status
  words leak further still, into `src/data/tools.ts` and the meta descriptions
  of both hub index pages. Grep the journal name, never just `publications.ts`.
- **The downloadable CV PDF is a build artifact copied in from another repo.**
  `~/projects/cv` owns it; `./render.sh all` there rewrites
  `public/cv/Luis_Sarmiento_CV.pdf` and the deploy still needs a commit here.
  Editing `src/data/publications.ts` alone leaves the PDF contradicting the page.

## Deployment
**luissarmiento.com is served by Netlify**, which builds from `main` on push.
That is the only deploy path. A GitHub Pages workflow and Pages site used to
exist alongside it, deploying a copy the domain never routed to; both were
removed on 2026-08-23 because their runs carried no signal about the live site
and their failures twice read as real breakage.

- **One workflow: `.github/workflows/build.yml`** (added 2026-08-23). It runs
  `npm ci && npm run build` on pushes to main, on PRs, and on demand. It
  **deploys nothing** — Netlify still does that on its own from main. Its only
  job is to make a broken build loud in GitHub rather than silent until someone
  opens the Netlify dashboard. A red check here does NOT mean the live site is
  down; it means the next Netlify build will fail too.
  - Its `node-version: '22'` must stay in step with `NODE_VERSION` in
    `netlify.toml`. If they drift, CI can pass while Netlify fails — which is
    exactly the 2026-07-25 Astro 7 breakage (Node <22.12).
- **Netlify needs Node 22** (Astro 7 requires `>=22.12.0`): `netlify.toml` sets
  `NODE_VERSION = "22"`. Without it the build fails with "Node.js v20 is not
  supported by Astro!".
- **Verify a deploy against something unique to the NEW build.** Grepping for
  content that was already live passes on a stale cache and proves nothing.
  Check the `age:` header too — a large value means you are reading cache.
- Identify the host with:
  `curl -sS -D - -o /dev/null https://luissarmiento.com/ | grep -i '^server:'`
- **The apex 301-redirects to `www.luissarmiento.com`.** `curl` without `-L`
  returns a 45-byte redirect body, so any grep for page content silently finds
  nothing and reads as "the deploy failed". Always verify with `curl -sSL`.

## Analytics
Google Analytics 4, account "Luis Sarmiento" (405640314), property
`luissarmiento.com` (551174257), measurement ID **G-N6C4L0GZLS**, web stream
"Personal website" (15485179603) at `https://www.luissarmiento.com`. Everything
lives in `src/components/Analytics.astro`, rendered from `BaseLayout` so every
page carries it. Mirrors the Trifecta setup.

- **Internal traffic:** loading any page once with `?internal=1` sets a two-year
  `ls_internal` cookie; every later hit then carries `traffic_type=internal`,
  which the property's "Internal Traffic" data filter (state: Active) excludes.
  `?internal=0` clears it. Because the filter excludes rather than tags, an
  internal visit will NOT show up in Realtime — that is the filter working.
- **Custom events** beyond enhanced measurement: `publication_click` (carries
  `paper_title`, sourced from `data-publication` on `PublicationCard`),
  `email_click`, `cv_download`, `profile_click`. One delegated listener, so new
  links are covered without further edits.
- **Property config (2026-08-23), none of it retroactive:** event data retention
  2 → **14 months** (2 is the GA4 default and silently drops anything older;
  user data was already 14); custom dimension **"Paper title"**, event-scoped on
  parameter `paper_title` (without it the parameter is collected but unusable as
  a report breakdown, so publication clicks could never be split by paper); key
  events `publication_click`, `cv_download`, `email_click`. Timezone
  Switzerland, currency USD. `profile_click` is deliberately NOT a key event.
  Google Signals OFF — at this traffic level it only triggers data thresholding,
  hiding rows rather than adding insight.
- The air-purifiers calculator at `/tools/air-purifiers-trial/app/` is untagged
  ON PURPOSE — it is an iframe inside an already-tagged page. Tagging it would
  double-count every visit.
- **Ownership: `gsaabogado@gmail.com` is the SOLE Administrator**, at the account
  level (405640314), which cascades to the property. The account was created
  under the WORK address `luis.sarmiento@cmcc.it` and for a few hours had no
  other user — a single point of failure, since CMCC deprovisioning that
  Workspace account would have orphaned the analytics. Fixed 2026-08-23: Gmail
  added as account Administrator, then cmcc.it removed. Access changes touch no
  collection — measurement ID, stream, filters and history were unaffected.
  - **You must be signed in AS Gmail to reach it.** cmcc.it is the browser's
    DEFAULT Google account, so any bare Google link opens as work; force it with
    `?authuser=gsaabogado@gmail.com`. The picker at top-left switches
    PROPERTIES, not logins — clicking it jumps to the separate **Trifecta** GA
    account (404648778).

## SEO / crawlability
- **`site` is the WWW host** (`https://www.luissarmiento.com`). The apex 301s to
  www, so canonical tags, `og:url` and the sitemap must all point at www or the
  site advertises URLs that redirect. `BaseLayout.astro`'s fallback matches.
- **`@astrojs/sitemap`** → `sitemap-index.xml` + `sitemap-0.xml` (36 URLs). Two
  non-obvious config points:
  - its `i18n` block pairs pages by path after the locale prefix, so the
    outreach pages (translated slugs, `/temperature-and-emergency-visits` vs
    `/es/temperatura-y-urgencias`) stay UNPAIRED in the sitemap. Correct, not a
    bug — `BaseLayout`'s own hreflang pairs them, and prefix-matching could only
    ever mis-pair them.
  - a `serialize` hook strips trailing slashes to match `BaseLayout`'s
    canonical. Without it the sitemap says `/research/` while the page's own
    canonical says `/research`. The root URL keeps its slash.
- **`public/robots.txt`** names the sitemap; there was none before. hreflang was
  already correct in both directions — only `x-default` was missing, now added.
- `public/CNAME` is dead since Pages was deleted. Netlify ignores it.

## Google Search Console
Domain property `sc-domain:luissarmiento.com` (covers apex + www + http + https
in one), owned by `gsaabogado@gmail.com`. Sitemap submitted (Success) and linked
to GA4 against the "Personal website" stream; the Search Console report
collection published ITSELF on linking — no manual Reports > Library step.

- **Verified by a DNS TXT record at the apex. Do not delete it** — verification
  and the property go with it:
  `google-site-verification=7QYxo5nwLYX22GYLfJm4aYw1pI_6MnGD8w3b9qJhpDI`
- **DNS is Netlify-managed** (NS1, `dns[1-4].p01.nsone.net`); the domain is
  registered THROUGH Netlify and auto-renews Sep 11 (~$19.99/yr). whois names
  Name.com, but records are edited at
  `app.netlify.com/teams/gsaabogado/dns/luissarmiento.com`. `netlify api
  createDnsRecord` returns 422 for reasons I could not pin down — use the web
  panel; read-only `getDnsZones` / `getDnsRecords` work and are the fastest way
  to inspect the zone.
- "Couldn't fetch" immediately after submitting a sitemap is a pending state,
  not an error. Reports stay empty for a day or two while data accumulates.
