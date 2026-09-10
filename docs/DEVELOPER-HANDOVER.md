# DEVELOPER HANDOVER — DNO Engineering Consultants Limited website

**Prepared:** 10 September 2026
**Audience:** the developer taking over this build
**Read time:** ~20 minutes. Everything you need to run, edit, extend and deploy is in this document; the companion files listed in §14 go deeper on design doctrine.

---

## 1. What this project is

A lead-generation marketing website for **DNO Engineering Consultants Limited**, a Nigerian consulting engineering firm targeting **public-sector and intervention-funded work** (federal ministries, state ministries of works, universities/tertiary institutions, RUWASSA agencies, and funder programmes such as TETFUND, UBEC/SUBEB and World Bank/IDA-assisted programmes).

The site is deliberately positioned as a **public-sector consultancy**, not a general private-practice firm. Every copy decision flows from that positioning.

**Hard business rules baked into the code (do not break these):**

1. **No fabricated credentials.** No invented clients, project values, dates, staff counts or registration numbers. Where a fact is not yet supplied by the client, the UI renders a visible placeholder token (`{{EMAIL}}`, `{{ON APPROVAL}}`, …) styled as a drawing title-block field, or `null` in data.
2. **Evidence vs capability.** Real, client-approved projects are `kind: 'record'` and may cite client, location and delivered scope. Everything else is `kind: 'representative'` and must be labelled *representative scope* — it demonstrates capability without claiming a client.
3. **Real photography is authorised evidence.** Once the client supplies site photos they may be published and cited as delivered work (see §10).
4. **Standalone pages, not a one-page scroll.** Every nav destination is its own rich page; the homepage carries only a homepage's worth of content.

---

## 2. Repository and branch state (important — read before touching Git)

| Location | What it contains | Status |
|---|---|---|
| `KNCS84/davoris-website` → branch `main` | The **original Davoris template site** this repo started from | **Untouched. Do not modify.** Still named `davoris-limited`, 55 files, commit `94d1ebd`. |
| `KNCS84/davoris-website` → branch `arena/01a07e2d-davoris-website` | The **DNO build** (all work in this handover) | Active working branch of the build session. Tip at time of writing: `df43989`. |
| `KNCS84/dno-engineering-website` → branch `main` | Intended **permanent home of the DNO site**, clean single-commit history | **Not yet created** — GitHub permissions blocked automated creation. The client must create the empty repo, then the DNO tree is pushed to it as `main`. Until then the arena branch above is the source of truth. |
| `dno-website-source.zip` (46 MB) | Snapshot of the DNO tree for offline transfer | Served from the preview at `/dno-website-source.zip`; regenerated on every meaningful change. |

**Git rules for this session's tooling:** all commits go to `arena/01a07e2d-davoris-website`; never switch to or push any other branch in `davoris-website`. Once `dno-engineering-website` exists, normal rules apply there (branch `main`).

---

## 3. Stack

| Layer | Choice | Version | Notes |
|---|---|---|---|
| Framework | Next.js **App Router** (React Server Components first) | 14.2.35 | All pages are server components unless motion needs the browser |
| Language | TypeScript (strict) | 5.5.4 | `@/*` path alias → repo root |
| UI | React | 18.3.1 | No UI kit; everything hand-built |
| Animation | GSAP + ScrollTrigger | ^3.15.0 | Single shared RAF loop, house curves in `lib/motion.ts` |
| Smooth scroll | Lenis | ^1.3.26 | Wrapped in `components/providers/SmoothScroll.tsx` |
| Email | nodemailer | ^6.9.14 | Contact API route; optional at runtime (§9) |
| Images | `next/image` + sharp (dev) | sharp ^0.35.4 | sharp is only used by the ingest script |
| Fonts | Self-hosted variable fonts via `@fontsource-variable/*` | — | Archivo (display, wdth axis), Geist (sans), Geist Mono (data). **Not** `next/font/google` — Google Fonts is unreachable from some build sandboxes; keep self-hosting |
| Styling | Hand-written CSS, custom properties | — | **No Tailwind, no CSS-in-JS.** Four files in `styles/` |
| Dead dependency | `framer-motion` ^11.3.19 | — | **Listed in package.json but never imported.** Safe to remove when convenient |

Node: **≥ 18.17** (developed/tested on Node 22).

---

## 4. Run it

```bash
npm install          # or npm ci
npm run dev          # http://localhost:3000  (hot reload)
npm run build        # production build (type-checks; fails loudly on bad data)
npm start            # serve the production build
npm run lint
```

`next.config.js` sets `output: 'standalone'`; `npm start` prints a warning about it. **The warning is benign** — `next start` works. For container deploys use `.next/standalone/server.js` and copy `public/` + `.next/static/` alongside it.

Environment variables (all optional at runtime — see `.env.example`):

| Variable | Purpose |
|---|---|
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS` | Outbound mail transport |
| `CONTACT_TO_EMAIL` | Where enquiries land |
| `CONTACT_FROM_EMAIL` | Envelope sender |

Without SMTP config the contact endpoint validates and returns `{ ok: false, error: 'Email not configured' }`-style responses; the form UI surfaces a graceful message. The site never crashes on missing env.

---

## 5. Route map (21 HTML routes + 3 non-HTML)

| Route | File | Purpose |
|---|---|---|
| `/` | `app/page.tsx` | Homepage: hero (3-state crossfade "LINE TO LAND"), positioning, capabilities, selected work, proof, page CTA |
| `/services` | `app/services/page.tsx` | Index of 7 service lines + scoping guidance + FAQ |
| `/services/[slug]` | `app/services/[slug]/page.tsx` | 7 detail pages (one per service line) |
| `/projects` | `app/projects/page.tsx` | Work index with client-side filter (`WorkFilter`) |
| `/projects/[slug]` | `app/projects/[slug]/page.tsx` | 9 project pages (1 record + 8 representative), each with parameters table, "Site record" gallery section, related work |
| `/about` | `app/about/page.tsx` | Approach: Positioning / Craft / Commitments |
| `/contact` | `app/contact/page.tsx` | Process explanation, form, FAQ |
| `/api/contact` | `app/api/contact/route.ts` | POST endpoint; requires `name`, `organisation`, `email`, `message`; 422 on missing fields |
| `/robots.ts`, `/sitemap.ts` | generated | Sitemap URLs derive from `SITE.domain` |

**Launch task:** `SITE.domain` in `content/site.ts` is the placeholder `https://dno-engineering.example`. Replace with the real domain at go-live (it feeds sitemap, robots, canonical and JSON-LD).

---

## 6. Architecture

### 6.1 Content layer = single source of truth
All copy and data live in `content/*.ts`. **Nothing is hard-coded in JSX.**

| File | Holds |
|---|---|
| `content/site.ts` | `SITE` (name, sector, positioning, contact fields, domain, registration/founded/credits), `NAV` |
| `content/services.ts` | 7 service lines: slug, number, name, card copy, phases, typical-parameter tables, interim image |
| `content/projects.ts` | `Project[]` (9 entries) + `Project` interface (§7) |
| `content/proof.ts` | Frameworks marquee list (TETFUND, UBEC/SUBEB, FMW, State MoW, RUWASSA, World Bank/IDA), credential statements |

Client-supply gaps are typed as `null` or rendered through `components/primitives/Field.tsx`, which draws a `{{TOKEN}}` title-block placeholder. **Never replace a token with an invented value.**

### 6.2 `lib/`
| File | Responsibility |
|---|---|
| `lib/assets.ts` | **Asset-existence gating (server-only).** `assetExists()`, `fallbackImage()`, `enrichProject()`, `enrichAll()`. Every page passes its project list through `enrichAll`, which (a) swaps a missing hero image for the first existing file in `FALLBACK_CHAIN`, and (b) filters `gallery[]` to files actually on disk. Result: the site can never render a broken image, and dropping real photos into `public/projects/` + rebuilding lights them up with **zero code changes**. |
| `lib/motion.ts` | GSAP global config, house eases (`EASE_OUT`, `EASE_MACHINE`), durations (`DUR`), staggers. Scrubbed timelines are always linear against scroll. |
| `lib/perf.ts` | Capability tiers **A/B/C**: reduced-motion ⇒ C (absolute, never overridden); save-data/slow connection ⇒ C; low core count/memory ⇒ B. Components read the tier and degrade. |

### 6.3 Components
- `components/sections/*` — page sections: `Hero`, `Positioning`, `Capabilities`, `Craft`, `Proof`, `Engagement`, `Statement`, `Faq`, `Close`, `PageCta`, `MarqueeStrip`.
- `components/primitives/*` — `Button`, `Container`, `Eyebrow`, `Field` (placeholder tokens), `Section`.
- `components/motion/*` — the motion vocabulary (§8): `CharTrack`, `LineMask`, `ScrambleDecode`, `DrawPath`, `Marquee`, `Pinned`, `Parallax`, `MagneticButton`, `Counter`, `Cursor`, `Grain`.
- `components/providers/SmoothScroll.tsx` — Lenis + single RAF driving GSAP.
- Page furniture: `Nav` (centred overlay menu at ≤ ~940 px — **that is the intended burger behaviour, not a bug**), `Footer`, `PageHero`, `ProjectCard`, `WorkFilter`, `ContactForm`.

### 6.4 Styles
`styles/tokens.css` (palette, type scale, spacing — every value a custom property), `base.css` (reset, typography), `layout.css` (grid systems, section rhythm), `components.css` (block styles, BEM-ish names like `.proj__gallery`).

**CSS gotcha that has bitten before:** grid children must receive an explicit `grid-column` at every breakpoint, or they overflow. Keep that discipline when adding sections.

---

## 7. Data models

### Project (`content/projects.ts`)
```ts
interface Project {
  slug: string;
  kind: 'representative' | 'record';   // 'record' only with client approval
  title: string;
  scope: string;                        // ≤ 12 words
  serviceSlug: string;                  // links to a service line
  image: string;                        // hero/card path; gated by lib/assets.ts
  gallery?: string[];                   // extra frames; rendered only if on disk
  client: string | null;                // null until approved
  location: string | null;
  value: string | null;                 // never invent
  year: string | null;
  parameters: { label: string; value: string }[];  // standards/typicals, labelled as such
}
```
Current record: `nasarawa-physical-planning-centre` — *Centre for Physical Planning & Sustainable Development*, client **Nasarawa State University, Keffi**, contractor DNO, `kind: 'record'`, four "Delivered —" evidence parameters, `value`/`year` intentionally `null`.

### Adding a new project (the agreed workflow is **one project at a time**)
1. Client supplies: project title, client, location, scope summary, delivered parameters, and photo files.
2. Add photos via the ingest script (§10) so `public/projects/<name>.webp` exist.
3. Add the entry to `PROJECTS` with `kind: 'record'`, real fields only, gallery paths matching the ingested names.
4. `npm run build` — gating picks the images up automatically. No component changes needed.

### Services
Seven lines, in order: `building-institutional` (01), `water-supply` (02), `road-street` (03), `design-build` (04), `master-planning` (05), `regulatory-funding` (06), `project-management` (07). Each carries phases and a "typical" parameter table.

---

## 8. Motion system and degradation

- One Lenis instance + one RAF loop (`SmoothScroll`); GSAP ticks off it. Never create a second loop.
- House curves/durations only (`lib/motion.ts`). Scrubbed animation is linear against scroll position.
- Vocabulary: `LineMask` (line-by-line reveals), `CharTrack` (per-char hero treatment — time-based, **visible at rest at scroll 0 by design rule**), `ScrambleDecode` (mono labels), `DrawPath` (SVG rule drawing), `Marquee` (frameworks strip — exactly one marquee on the site), `Pinned` (pinned scroll sections), `Parallax`, `MagneticButton`, `Counter` (stat counters — **remain `{{PLACEHOLDER}}` until real numbers are supplied**), `Cursor`, `Grain`.
- Degradation contract: tier C (reduced motion) removes scrub/pins and shows final states; pinned sections must also degrade on **short viewports** via the `useCanPin` guard. When adding motion, honour both.
- The hero is a 3-state crossfade, not a 40-frame canvas sequence (bundle/perf decision — do not "upgrade" it without re-checking the JS budget).

---

## 9. Performance, images, headers

**Budgets (design targets):** LCP < 2.0 s, CLS < 0.05, INP < 200 ms, JS < 220 kB gzipped. Homepage copy 250–450 words; headlines ≤ 8 words; paragraphs ≤ 45 words.

**Images:** WebP, quality 78, longest side ≤ 1600 px, unified grade (`saturation ×0.88`, linear lift `1.03, −6`). Served via `next/image` with explicit `sizes`. The ingest script enforces this (§10) — never hand-place unprocessed photos in `public/projects/`.

**Security headers** are set in `next.config.js` (`nosniff`, `X-Frame-Options: SAMEORIGIN`, strict referrer). `poweredByHeader` off.

**SEO:** metadata + JSON-LD `ProfessionalService` in `app/layout.tsx` with `areaServed: 'Nigeria'`; sitemap/robots generated from `SITE.domain`.

---

## 10. Photography pipeline (the most operationally important part)

**Current state:** the repository contains **no real project photos**. `public/dno/*.webp` are AI-generated stand-in artwork (11 files). `public/projects/` does not exist yet; every reference to it is gated and falls back gracefully.

**Contract:** content files may list intended paths; `lib/assets.ts` renders only what exists. Therefore photos can arrive at any time and light up on rebuild.

**Ingest command:**
```bash
node scripts/ingest-projects.mjs [folder]     # default folder: ./photos
```
The script reads originals, applies the committed grade/crops, writes `public/projects/*.webp`. Missing source files are skipped silently (no breakage). Then `npm run build`.

**Committed mappings (source filename → site name):**

Nasarawa State University, Keffi — Centre for Physical Planning (the live record):
`IMG-20210706-WA0124.jpg` → `nsu-courtyard-colonnade` (hero/card) · `nasarawa-physical-planning-c.jpg` → `nsu-corridor` · `IMG-20210706-WA0115.jpg` → `nsu-walkway-tanks` · `IMG-20210706-WA0116.jpg` → `nsu-compound-gate` · `IMG-20210706-WA0118.jpg` → `nsu-side-walkway` · `IMG-20210706-WA0119.jpg` → `nsu-building-corner` · `IMG-20210706-WA0120.jpg` → `nsu-office-interior` · `IMG-20210706-WA0122.jpg` → `nsu-conference-room`

Deferred TETFUND / UBEC-SUBEB set (mappings exist; **no project record written yet**):
`IMG-20210706-WA0100.jpg` → `lecture-theatre-interior` (crop 0.85) · `IMG-20210706-WA0104.jpg` → `telfund-2015-signage` · `IMG-20210706-WA0074.jpg` → `lecture-block-exterior` (crop 0.62) · `subeb-delta-classroom-2.jpeg.jpg` → `subeb-classroom-block` · `IMG-20210706-WA0013.jpg` → `subeb-2018-signage` · `IMG-20210706-WA0114.jpg` → `courtyard-drainage`

**Curation decisions already made:** WA0078 dropped (overgrown foreground, uncorrectable); WA0074 cropped to 0.62 height; WA0100 cropped to 0.85; unified grade across the set.

---

## 11. Copy-editing rules for whoever maintains content

- Edit **only** `content/*.ts`; JSX stays copy-free.
- Never invent a number, client, date or credential. Use `null` / placeholder tokens.
- `kind: 'representative'` entries must read as capability, labelled *representative scope*; the record card shows the tag **"Delivered — public record"** and is listed before representative work.
- One marquee only; accent orange on ≤ 5 % of any viewport; accent `#FF6A13` on dark grounds only, `--accent-ink`/`--accent-deep` on light grounds (contrast ratios are annotated in `tokens.css` — keep them).
- Frameworks list is authoritative: TETFUND, UBEC/SUBEB, FMW, State Ministries of Works, RUWASSA, World Bank/IDA.

---

## 12. Known issues, scars and gotchas

1. **Platform snapshot merge scars.** The build sandbox occasionally re-introduced Git conflict markers into working files mid-session; all were resolved (commits `f07d6cd`, `ac2927d`). If you ever see `<<<<<<<`/`=======`/`>>>>>>>` in this codebase, resolve **keeping the Nigerian/DNO side** and verify with a build.
2. **`next/font/google` unavailable** in restricted sandboxes (TLS). Fonts are `@fontsource-variable` packages — keep them self-hosted.
3. **`output: 'standalone'` + `next start` warning** — benign.
4. **Grid overflow** — explicit `grid-column` on all grid children at all breakpoints (§6.4).
5. **Windows case-insensitivity** — folder names (`public`, `app`, …) must keep their exact spelling; renamed/moved folders are a common source of "works on my machine" bugs.
6. **`npx next` in a fresh clone can pull the wrong Next major.** Use the local binary via npm scripts.
7. **`framer-motion` is an unused dependency** — removable.
8. History note: this repo's early commits belong to the Davoris template; the DNO lineage starts after `94d1ebd`.

---

## 13. Outstanding work (prioritised)

1. **Create `KNCS84/dno-engineering-website`** (empty, no README) and push the DNO tree as `main`; retire the arena branch as source of truth.
2. **Ingest the 8 Nasarawa photos** when the client re-supplies the files (they existed in chat only and never reached disk).
3. **Second project record** from the deferred TETFUND/SUBEB photo set, once its project facts are approved.
4. **Client-supplied fields:** email, phone, addresses, PE-firm registration, founding year, credits; project `value`/`year` for the Nasarawa record; real stat numbers to replace `{{PLACEHOLDER}}` counters.
5. **Go-live:** real domain in `SITE.domain`, SMTP env in hosting, DNS, then Lighthouse pass against the §9 budgets.
6. Optional: replace AI stand-in artwork with real/authorized imagery site-wide; remove `framer-motion`; decide on analytics (none implemented by design).

---

## 14. File map and companion documents

| Path | What it is |
|---|---|
| `content/` | All copy/data (§6.1) |
| `app/` | Routes (§5) |
| `components/` | Sections, primitives, motion, providers (§6.3) |
| `styles/` | tokens / base / layout / components (§6.4) |
| `lib/` | assets gating, motion config, perf tiers (§6.2) |
| `scripts/ingest-projects.mjs` | Photo pipeline (§10) |
| `public/dno/` | AI stand-in artwork (replace over time) |
| `RUN-LOCALLY.md` | Non-developer setup guide (clone, install, run, photos) |
| `docs/MASTER-PROMPT.md` | The build doctrine this site was generated from |
| `docs/ART-DIRECTION-DNO.md` | Committed visual values (palette, type, motion rules) |
| `docs/QUOTE-DNO-ENGINEERING.md` | The client-facing price quote (Landmark $19,400 / Signature $14,600) |
| `docs/PROMPT-EXTRACTION-RATIONALE.md` | Why each doctrine element exists |
| `docs/HANDOVER.md` | Internal session build log (historical; mentions Davoris accurately) |

**Handover protocol for new project records:** the client supplies one project at a time — title, client, location, scope, delivered parameters, photos — and it is published only after approval, per §7.

---

*End of handover. If something in the live site contradicts this document, trust the code and update this file in the same commit.*
