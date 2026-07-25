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
The repo also contains `.github/workflows/deploy.yml` ("Deploy to GitHub Pages"),
which deploys a SEPARATE Pages site that the domain does not use — a green
Actions run says nothing about the live site.

- **Both build environments need Node 22** (Astro 7 requires `>=22.12.0`):
  `netlify.toml` sets `NODE_VERSION = "22"`; the workflow passes
  `node-version: 22` to `withastro/action@v3`. Miss either and that pipeline
  fails silently.
- **Verify a deploy against something unique to the NEW build.** Grepping for
  content that was already live passes on a stale cache and proves nothing.
  Check the `age:` header too — a large value means you are reading cache.
- Identify the host with:
  `curl -sS -D - -o /dev/null https://luissarmiento.com/ | grep -i '^server:'`
