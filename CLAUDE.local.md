# Personal Website — Session Log & Status

## Current Status
Live and current as of 2026-07-25. Publications match
`~/projects/cv/data/publications.csv` exactly (**34 entries: 18 published / 4 R&R /
2 under review / 10 working papers**). Conferences cover the 2026 season with an award
badge; a Grants section and a top-level Grants tab are live; the downloadable CV PDF is
current. Site is 16 pages on **Astro 7.1.3 with 0 vulnerabilities**, served by **Netlify**.

## Last Session: 2026-07-25
Synced with the CV after a Google Scholar audit of published metadata. Driven from
the CV side; see `~/projects/cv/CLAUDE.local.md` for the full account.

**`src/data/publications.ts` — 12 corrections, 4 status changes, 5 additions**
- Corrections the site had been serving wrong for months: JPubE `277`→`227`;
  Energy Policy `151, 113378`→`156, 112378`; TRD `S.1022774`→`82, 102274`;
  ECC Bistline `100118`→`6, 100191` (100118 is the Equity paper's number, duplicated).
  Added ECC vol `5` ×3, JUE `153, 103846`, EEEP pages `57–82`.
  Issue years: Equity→2024, Policy Reversals→2024, SJE→2022, Energies→2019.
- Status: Recycling → "Empirical Economics (Accepted)" (kept in the R&R group on
  purpose — Luis does not want that journal made prominent); boundary layer PNAS→JEEM;
  Madrid Central → R&R at JEEM; crop-residue → under review at AJAE.
- Added: Reissl/Sarmiento/Emmerling 2025 (sourced from IOP, DOI 10.1088/2753-3751/ade79a),
  Tassinari & Sarmiento 2023 Handbook chapter, Migrant Networks (AEA P&P, invited),
  Sembrando Vida, and The Global Economic Burden of Air Pollution.
- Tassinari and Global Burden are **bibliographic-only** — no abstract exists publicly
  or locally, so they render without the question/findings panel. Both optional.

**`src/data/conferences.ts` + `ConferenceTable.astro`**
- Added WCERE Lisbon, Mannheim Energy, Essen Health (2026).
- Added optional `award`/`awardEs` to the `Conference` interface, rendered as a badge.
  Essen carries "Best Paper Award, 3rd Place".
- Fixed ES translation maps: `Lisbon`→`Lisboa` and `Portugal` were **missing**, so
  they silently displayed in English on `/es/`. Also added `Essen`.

**`src/data/cv.ts` — grants added, teaching was stale**
- New `Grant` interface + `grants` array (SFOE EVEN-DEMAND, PI, CHF 220,000, 2027–2029).
- Rendered as a section on both CV pages via the existing `Timeline`, guarded by
  `grantItems.length > 0`, with a nav anchor.
- **Teaching was two years behind**: ETH Fall 2026, Bologna Spring 2026, and
  Bologna Spring 2025 were all missing. The publications/conferences sync never
  touched `cv.ts`. Visiting lectures, experience, and education were current.

**New Grants page + tab**
- `/grants/` and `/es/grants/`, nav tab directly after Publications
  (Grants / Financiamiento). Footer and language switcher inherit it from
  `getNavigation()`. `grants.title` / `grants.description` added to `ui.ts`.

**Downloadable CV PDF — was 5 months stale**
- `public/cv/Luis_Sarmiento_CV.pdf` was dated 2026-02-08 and still served the
  wrong JPubE `277` and Energy Policy `113378`. Identified as the academic PHOTO
  variant (1024x1536 embedded image, non-private header, no phone) and replaced
  with a fresh render. `~/projects/cv/render.sh` now syncs it automatically via a
  `website` target that verifies the copy by byte size — but **deploying still
  needs a manual commit + push here**.

**Commits (all pushed to main → deployed)**
- `65d8036` — publications sync with Google Scholar; 5 papers added
- `8bff715` — 2026 conference presentations
- `1cfb70d` — conference award field; Lisbon/Portugal ES translations
- `5c51de9` — Grants section + missing teaching entries
- `cbdd6fc` — Grants top-level page and nav tab
- `f36f438` — refreshed downloadable CV PDF

## Pending
- [x] Vulnerabilities cleared 2026-07-25: `npm audit` 12 → 0, in two steps — `c0ba1c8` (lockfile-only, 12→3) then `e6e2d75` (Astro 5.18.2 → 7.1.3, 3→0) + `37f7ff0` (CI Node 22 — e6e2d75's deploy failed)
- [x] `cv.ts` English-only on `/es/` — DECIDED 2026-07-25: leave as is. Course and institution names read as proper nouns. Deliberate, not an oversight — do not add `courseEs`/`roleEs`.
- [x] Grants page single entry — DECIDED 2026-07-25: awarded grants only, deliberately. Do not add pending proposals.
- [x] Tassinari chapter + Global Burden question/findings — DECIDED 2026-07-25: skip. Both stay listed as bibliographic-only entries (no expandable panel). No abstract exists publicly or locally for either. Do not remove the entries.
- [x] AEA P&P resolved 2026-07-25: invited but not yet submitted → moved to working papers, venue text removed.
- [x] CLAUDE.md + CLAUDE.local.md committed 2026-07-25 (`b4b0a53`).

## Hosting (discovered 2026-07-25)
- **Netlify serves luissarmiento.com**, not GitHub Pages. The Pages workflow deploys an
  unused site; `gh run list` being green is not evidence the domain updated.
- Astro 7 broke the Netlify build for ~70 min (same Node <22.12 cause as Actions) while
  Pages reported success. Fixed by adding `netlify.toml` with `NODE_VERSION = "22"` (`e6f3f13`).
- [ ] Decide whether to delete `.github/workflows/deploy.yml` — it builds and deploys a
  Pages site nobody visits, and its failures are noise.

## Astro 7 notes (upgraded 2026-07-25)
- **CI needs Node 22.** Astro 7 requires `node >=22.12.0`; `withastro/action@v3`
  defaults to Node 20 and the deploy failed with "Node.js v20.20.2 is not supported
  by Astro!". Fixed in `.github/workflows/deploy.yml` via `with: node-version: 22`
  (`37f7ff0`). A local build proves nothing here — local Node is 22.22.0.
- **The compiler rejects HTML comments inside JSX expressions** (`{cond ? ( <!-- c --> ... )}`).
  Astro 5 tolerated them. `{/* */}` is NOT a valid substitute in that position — remove
  the comment or move it outside the expression. This was the only breaking change.
- Verified by diffing VISIBLE page text (script/style excluded) against the Astro 5
  build: 178,891 chars, 0 of 16 pages differ. Script/style diffs are pure minifier
  churn (const→var, quotes→backticks, new astro-cid hashes) — ignore them.
- Caution when testing in headless/automation Chrome: the tab is `visibilityState:
  "hidden"`, so IntersectionObserver never fires and every `[data-animate]` element
  stays at opacity 0. Pages look blank and screenshots show empty sections. This is an
  artifact, NOT a site bug — do not chase it.

## Prior Sessions (condensed)
- 2026-03-06: Moved boundary-layer paper to under review at PNAS; added hurricane damages working paper (`f7e1c0f`, `3bbb38d`).
- 2026-02-28: Added dedicated Publications page with nav tab in EN and ES; favicon update.
- Initial build: full website with Astro + Tailwind CSS.
