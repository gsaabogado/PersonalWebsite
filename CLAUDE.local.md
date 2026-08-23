# Personal Website — Session Log & Status

## Current Status
Live, current and fully instrumented as of 2026-08-23. Builds **36 pages** on **Astro
7.1.3**, served by **Netlify** (the only deploy path), now with a build-only GitHub
Actions check so a broken build is no longer silent. **GA4 collects on every page**
(`G-N6C4L0GZLS`) and **Search Console is verified**, sitemap submitted and linked to GA4.
Analytics, Search Console, Netlify and the domain are ALL owned by `gsaabogado@gmail.com`
— the CMCC work account has no access to any of them. Publications match
`~/projects/cv/data/publications.csv` exactly (34 entries: 18 published / 4 R&R / 2 under
review / 10 working papers). `npm audit` 0 vulnerabilities, no open Dependabot alerts.
Nothing pending but letting Google accumulate data.

## Last Session: 2026-08-23 (part 3 — ownership, SEO, Search Console, CI)
Began with Luis noticing that the GA property built earlier the same day had been created
under his CMCC work account. That was a genuine single point of failure, and fixing it
cascaded into finishing the whole analytics/search stack. Durable detail is in CLAUDE.md
§§ Analytics, SEO / crawlability, Google Search Console.

- **GA ownership moved off the work account.** `luis.sarmiento@cmcc.it` was the ONLY user
  on account 405640314; CMCC deprovisioning it would have orphaned the analytics. Added
  `gsaabogado@gmail.com` as account-level Administrator, then removed cmcc.it while signed
  in as Gmail. No collection impact.
- **SEO groundwork (`3c9282b` → `aaafa53`).** The site had NO sitemap and NO robots.txt,
  and `site` was the apex, so every canonical tag and `og:url` advertised a URL that 301s.
  Added `@astrojs/sitemap` (36 URLs, i18n alternates, trailing-slash `serialize` hook),
  `robots.txt`, `x-default` hreflang; repointed `site` at www. Verified on the built
  output: 36 sitemap URLs, zero apex URLs left in the HTML, GA tag on 36 of 37 files (the
  37th is the air-purifiers iframe app, untagged on purpose).
- **GA4 property config (`a058a86`).** Event retention 2 → 14 months, `paper_title` custom
  dimension, three key events — all non-retroactive, hence done immediately. Timezone
  verified as Switzerland.
- **Search Console (`ed01bfe`).** Domain property `sc-domain:luissarmiento.com`, verified
  by a TXT record added in Netlify DNS, sitemap submitted (Success), linked to GA4.
- **Build-only CI (`4a6ee53` → `1a865a9`).** `.github/workflows/build.yml`, green on its
  first run (22s). Ran `npm ci` locally first, since lockfile drift after adding
  `@astrojs/sitemap` was the likeliest first-run failure.

**Wrong turns worth remembering.** (1) A window resize between screenshots moved the
controls under my cursor, so a click meant for a close button hit the account picker and
switched me into the **Trifecta** GA account — screenshot coordinates go stale, so
re-screenshot before clicking. (2) I read a Search Console token off a screenshot and it
was truncated at 35 of 43 characters; `read_page` gave the real value. Never transcribe a
credential-shaped string from pixels. (3) I claimed hreflang was missing after grepping
with a pattern that could not match the second `<link>` line, and claimed the GA4 Library
collection needed manual publishing when it self-publishes on linking.

## Pending
- [ ] Check Search Console in ~1 week: Indexing → Pages, for URLs Google declined to
  index. Empty reports for a day or two after setup are by design, not a broken link.
- [ ] Optional, cosmetic: `public/CNAME` is dead weight since GitHub Pages was deleted.
  Netlify ignores it. Left in place deliberately — remove only if tidying.
- [x] Build-only CI workflow added 2026-08-23 (`1a865a9`) — previously deferred on the
  grounds that Luis builds locally; added on request.
- [x] Search Console + sitemap + robots.txt + canonical-host fix 2026-08-23.
- [x] GA4 moved to the personal Gmail; property config set 2026-08-23.
- [x] GA4 configured, deployed and verified live 2026-08-23 (`8bb8840` → `a53c13f`).
- [x] Dependabot alerts 2 → 0 and GitHub Pages removed 2026-08-23.
- [x] `cv.ts` English-only on `/es/` — DECIDED 2026-07-25: leave as is. Course and
  institution names read as proper nouns. Do not add `courseEs`/`roleEs`.
- [x] Grants page single entry — DECIDED 2026-07-25: awarded grants only. Do not add
  pending proposals.
- [x] Tassinari chapter + Global Burden — DECIDED 2026-07-25: stay bibliographic-only, no
  expandable panel; no abstract exists publicly or locally. Do not remove the entries.
- [x] AEA P&P 2026-07-25: invited but not submitted → moved to working papers.
- [x] Vulnerabilities 12 → 0 (2026-07-25), incl. Astro 5.18.2 → 7.1.3.

## Astro 7 notes (upgraded 2026-07-25)
- **The compiler rejects HTML comments inside JSX expressions**
  (`{cond ? ( <!-- c --> ... )}`). Astro 5 tolerated them, and `{/* */}` is NOT a valid
  substitute in that position — remove the comment or move it outside the expression.
  This was the only breaking change.
- Verified by diffing VISIBLE page text (script/style excluded) against the Astro 5 build:
  178,891 chars, 0 of 16 pages differ. Script/style diffs are pure minifier churn
  (const→var, quotes→backticks, new astro-cid hashes) — ignore them.
- Caution when testing in headless/automation Chrome: the tab is `visibilityState:
  "hidden"`, so IntersectionObserver never fires and every `[data-animate]` element stays
  at opacity 0. Pages look blank and screenshots show empty sections. An artifact, NOT a
  site bug — do not chase it.

## Prior Sessions (condensed)
- 2026-08-23 (part 2): Dependabot 2 → 0 (`c34d43f`); Pages workflow AND Pages site deleted
  (`1f67e6a`); GA stream URL relabelled to www. Two lessons: the push output's
  vulnerability banner is computed BEFORE the rescan, so check
  `gh api .../dependabot/alerts`; and `gh api -X DELETE .../pages` is blocked by the
  auto-mode classifier — Luis ran it with `!`.
- 2026-08-23 (part 1): GA4 built from scratch mirroring Trifecta — account/property/stream
  created in-browser, `Analytics.astro` + `data-publication` on `PublicationCard`, ToS
  accepted under Switzerland with GDPR terms, Internal Traffic filter set Active
  (`8bb8840` → `a53c13f`). Lost ~7 min reporting a failed deploy after grepping the apex
  without `curl -L`.
- 2026-07-25: CV/Scholar sync — 12 publication corrections, 5 additions, Grants page + tab,
  2026 conferences, refreshed CV PDF, Astro 5 → 7, vulnerabilities 12 → 0. Astro 7 also
  broke the Netlify build for ~70 min (Node <22.12) while Pages reported success; fixed by
  `netlify.toml` with `NODE_VERSION = "22"` (`e6f3f13`).
- 2026-03-06: Boundary-layer paper → under review at PNAS; hurricane damages working paper
  added (`f7e1c0f`, `3bbb38d`).
- 2026-02-28: Dedicated Publications page + nav tab in EN and ES; favicon update.
- Initial build: full website with Astro + Tailwind CSS.
