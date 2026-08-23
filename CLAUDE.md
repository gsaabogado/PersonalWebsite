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
- **Property config set 2026-08-23** (all three are NOT retroactive, which is why
  they were done immediately):
  - **Event data retention 2 → 14 months.** 2 months is the GA4 default and it
    silently discards everything older. User-data retention was already 14.
  - **Custom dimension "Paper title"**, event-scoped, parameter `paper_title`.
    Without it the parameter is collected but cannot be used as a report
    breakdown, so `publication_click` could never be split by paper.
  - **Key events**: `publication_click`, `cv_download`, `email_click`.
    `profile_click` is deliberately NOT a key event — add it if the Scholar/ORCID
    links become something worth tracking as an outcome.
  - Reporting timezone verified as Switzerland (GMT+02:00); currency USD.
  - Google Signals left OFF on purpose: at this traffic level it triggers data
    thresholding, which hides rows rather than adding insight.
- The air-purifiers calculator at `/tools/air-purifiers-trial/app/` is untagged
  ON PURPOSE — it is an iframe inside an already-tagged page. Tagging it would
  double-count every visit.
- **Ownership.** The GA account was created in-browser on 2026-08-23 under the
  WORK account `luis.sarmiento@cmcc.it`, which was for a few hours its only
  user — a single point of failure for a personal site, since CMCC
  deprovisioning that Workspace account would have orphaned the analytics.
  Fixed the same day: `gsaabogado@gmail.com` added as **Administrator at the
  ACCOUNT level** (405640314), which cascades to the property, then
  `luis.sarmiento@cmcc.it` removed. **`gsaabogado@gmail.com` is now the sole
  Administrator** — the personal Gmail, not the work address. Access changes
  touch no collection: measurement ID, stream, filters and history were all
  unaffected.
  - To reach this account you must be signed in AS Gmail. If a browser has both
    Google accounts, force it with
    `?authuser=gsaabogado@gmail.com` in the analytics.google.com URL — the
    account picker at top-left switches PROPERTIES, not logins, and clicking it
    by mistake jumps to the separate **Trifecta** GA account (404648778).

## SEO / crawlability
Added 2026-08-23, alongside the GA ownership fix.

- **`site` is the WWW host**, `https://www.luissarmiento.com`. The apex
  301-redirects to www, so everything derived from `site` (canonical tags,
  `og:url`, the sitemap) must point at www or the site advertises URLs that
  redirect. `BaseLayout.astro`'s fallback URL was changed to match.
- **`@astrojs/sitemap`** generates `sitemap-index.xml` + `sitemap-0.xml` (36
  URLs). Two non-obvious bits of its config:
  - the `i18n` block emits EN/ES `xhtml:link` alternates. It pairs pages by path
    after the locale prefix, so the outreach pages (translated slugs,
    `/temperature-and-emergency-visits` vs `/es/temperatura-y-urgencias`) stay
    UNPAIRED there. That is correct, not a bug — `BaseLayout`'s own hreflang
    tags pair them, and prefix-matching could only ever mis-pair them.
  - a `serialize` hook strips trailing slashes, because `BaseLayout`'s canonical
    strips them. Without it the sitemap says `/research/` while the page's own
    canonical says `/research`, and the two disagree about the same page. The
    root URL keeps its slash.
- **`public/robots.txt`** points at the sitemap. There was none before.
- **hreflang was already correct** in both directions (`BaseLayout.astro`);
  only `x-default` was missing and was added.
- `public/CNAME` (`luissarmiento.com`) is dead since GitHub Pages was deleted.
  Harmless — Netlify ignores it — but it is not doing anything.

## Google Search Console
Set up 2026-08-23, owned by `gsaabogado@gmail.com` (same account as GA and Netlify).

- **Domain property** `sc-domain:luissarmiento.com` — covers apex + www + http +
  https in one property, unlike a URL-prefix property.
- **Verified by DNS TXT.** DNS is **Netlify-managed** (NS1 nameservers,
  `dns[1-4].p01.nsone.net`); the domain is registered THROUGH Netlify and
  auto-renews Sep 11 (~$19.99/yr). whois names Name.com, but records are edited
  at `app.netlify.com/teams/gsaabogado/dns/luissarmiento.com`, NOT at Name.com.
  The TXT record at the apex is
  `google-site-verification=7QYxo5nwLYX22GYLfJm4aYw1pI_6MnGD8w3b9qJhpDI`.
  **Do not delete it** — verification is lost and the property goes away.
- `netlify api createDnsRecord` returns 422 for reasons I could not pin down;
  the web DNS panel works. Read-only calls (`getDnsZones`, `getDnsRecords`) are
  fine and are the quickest way to inspect the zone.
- **Sitemap** `https://www.luissarmiento.com/sitemap-index.xml` submitted,
  status Success. "Couldn't fetch" right after submitting is a pending state,
  not an error; it flipped to Success within a minute.
- **Linked to GA4** (Admin > Product links > Search Console links) against the
  "Personal website" stream. The Search Console report collection **published
  itself on linking** — the Queries and "Google organic search traffic" reports
  appeared without a manual step in Reports > Library.
- Reports stay empty until Search Console accumulates its own data (a day or
  two); that is not a broken link.
