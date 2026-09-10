# HANDOVER NOTE — DNO build, resume here

**Read first:** `docs/MASTER-PROMPT.md` (doctrine) → `docs/ART-DIRECTION-DNO.md` (committed values) → this file.
**Branch:** `arena/01a07e2d-davoris-website` (never switch/push elsewhere). `main` still holds the old Davoris site — do not touch it.
**Update (2026-09-10):** the DNO site now also lives in its own repository, `KNCS84/dno-engineering-website` (branch `main`, clean single-commit history). This workspace remains the build session; the original Davoris template stays untouched in `KNCS84/davoris-website` on `main`.

## QUICK START (first commands of the next session)

```bash
cd /home/user/davoris-website && git status --short && git branch --show-current   # confirm branch
npm i -D sharp                                                                      # for PNG->WebP
# then follow "WHAT IS LEFT" step 1..8 below, in order.
npx next build                                                                      # after routes rewritten
npx next dev -H 0.0.0.0 -p 3000                                                     # via start_process, then verify
```

**Do not re-derive decisions.** Palette, type scale, easing, tiers, and copy limits are committed in
`ART-DIRECTION-DNO.md`; doctrine (blacklist, word limits, no-fabrication, verification protocol) is in
`MASTER-PROMPT.md`. If a value is missing, it is deliberately open — check the OPEN ITEMS table there.

## STATUS — BUILD COMPLETE & SERVING (production build passes)

All 8 handover steps 1–6 are DONE. `npx next build` ✓ (17 routes, First Load JS 157 kB < 220 kB budget).
Server: `npx next start -H 0.0.0.0 -p 3000` → all routes 200; hero webp layers, LineMask, CharTrack,
marquee, DrawPath verified present in served HTML; no Davoris references remain.

**OPERATIONAL GOTCHA:** `node_modules/` and `.next/` are snapshot-excluded and DO NOT persist between
sessions. Every new session must run `npm ci && ./node_modules/.bin/next build` first, then start with
`./node_modules/.bin/next start -H 0.0.0.0 -p 3000`. **Never bare `npx next`** — it fetches next@16 and
fails with "Could not find a production build".

**Resolutions recorded (do not re-litigate):**
- `fonts.googleapis.com` TLS is BLOCKED in this sandbox → `next/font` can never build here. Fonts are now
  **self-hosted via Fontsource**: `@fontsource-variable/archivo/wdth.css` (wght+wdth), `@fontsource-variable/geist`,
  `@fontsource-variable/geist-mono`. Family names wired in `styles/tokens.css` ('Archivo Variable' etc.).
- `ScrollTrigger.defaults({ease})` does not exist → removed; scrub is linear by default.
- Images converted PNG→WebP via sharp (22 MB → ~1.03 MB; largest 162 kB, inside the 180 kB budget). PNGs deleted.
- Images generated hit the 10/turn cap; Design-Build card reuses `section-positioning.webp`.

**REMAINING (needs a real browser / human eye — cannot be done headless here):**
1. Phase 9 visual verification in the live preview: hero scrub fires & holds, pins hold, counters/fields,
   marquee loops once, tier-C (reduced-motion) shows full content, keyboard + focus rings.
2. QA passes 1–3 (structure → craft → polish) per MASTER-PROMPT §8.2.
3. Fill `content/proof.ts`, `content/site.ts` contact/registration, and flip `projects.ts` `kind` to
   'record' when the client supplies approved data.

---

## WHAT IS DONE

- Deps installed: `gsap ^3.15`, `lenis ^1.3.26` (plus existing next 14.2.35 / react 18). `framer-motion` still installed but **unused by new code**.
- `styles/` tokens.css · base.css · layout.css · components.css — transcribed from ART-DIRECTION §2.2–2.4. Do not invent new values.
- `lib/perf.ts` (tier A/B/C detection + FPS probe + `useTier`), `lib/motion.ts` (house curves/durations, `configureMotion`).
- `content/` site.ts · services.ts (6 lines) · projects.ts (`kind:'representative'`) · proof.ts (all numbers `null` = CLIENT TO SUPPLY).
- `components/motion/` CharTrack, Counter, Cursor, DrawPath(hook), Grain, LineMask, MagneticButton, Marquee, Parallax, Pinned, ScrambleDecode.
- `components/primitives/` Button, Container, Eyebrow, Field, Section.
- `components/providers/SmoothScroll.tsx` (Lenis↔GSAP single RAF loop).
- `components/sections/` Hero(LINE TO LAND), Positioning(PIN-SWAP), Capabilities(NUMBERED-INDEX), Craft(DRAW-PATH), Proof(COUNTER+PIN-STACK), MarqueeStrip, Engagement(STICKY-COLUMN), Close.
- `components/Nav.tsx` + `components/Footer.tsx` — **already replaced** with new DNO versions.
- 10 generated images in `public/dno/*.png` (coherent grade). Image-gen cap hit; Design-Build card reuses `section-positioning`.

## WHAT IS LEFT — do in this order

1. **Convert images PNG→WebP.** Code references `/dno/*.webp` but only `.png` exist.
   `npm i -D sharp` then a node script: read each `public/dno/*.png`, write `.webp` quality ~78. Keep PNGs or delete after (delete preferred; they are ~2–3 MB each).
   If sharp fails, fallback: sed code refs back to `.png` (violates perf budget — note it).
2. **Rewrite `app/globals.css`** to be only: `@import '../styles/tokens.css'; @import '../styles/base.css'; @import '../styles/layout.css'; @import '../styles/components.css';` (order matters). Keep filename so `layout.tsx` import line still works.
3. **DELETE old Davoris files** (they import `@/content` and will fail type-check otherwise):
   `content.ts`, and from `components/`: `Button.tsx ClosingCta.tsx ContactForm.tsx CountUp.tsx HeroSlider.tsx IconDraw.tsx JsonLd.tsx MapGraphic.tsx Media.tsx PageHero.tsx ProjectsGrid.tsx Reveal.tsx Stats.tsx cards.tsx icons.tsx`.
   (New equivalents live in `components/primitives|motion|sections`; JSON-LD goes inline in layout.)
4. **Rewrite app routes** (all currently Davoris):
   - `layout.tsx`: fonts via next/font/google — `Archivo` (needs `axes:['wdth','wght']` for font-stretch; if it errors, drop `font-stretch` or pass axes), `Geist`, `Geist_Mono` mapped to `--font-display/--font-sans/--font-mono`. **If Geist is missing from the Next 14.2 font manifest → switch all three to a Google Fonts `<link>` in `<head>` (preconnect + display=swap) instead of next/font.** Add inline `<script>document.documentElement.classList.add('js')</script>` before paint (progressive-enhancement gate). Wrap children in `<SmoothScroll>`; render `<Nav/>`, `<Footer/>`, `<Cursor/>`, skip-link; metadata + inline JSON-LD (Organization/ProfessionalService) built from `content/site`.
   - `page.tsx`: compose `<Hero/> <Positioning/> <Capabilities/> <Craft/> <Proof/> <MarqueeStrip/> <Engagement/> <Close/>`.
   - `services/page.tsx` + `services/[slug]/page.tsx`: index + detail from `content/services` (use `.svc__*` classes already in components.css).
   - `projects/page.tsx`: cards from `content/projects` with `.proj__*` classes; always show the `REPRESENTATIVE SCOPE` tag while `kind==='representative'`.
   - `about/page.tsx`: lean page reusing primitives + `section-craft`/`section-proof` imagery.
   - `contact/page.tsx`: accessible form (`.form` classes exist) posting to `/api/contact`; labels are real `<label>`s.
   - `api/contact/route.ts`: keep nodemailer handler, re-point env/fields; if SMTP unset return a clear 200-with-note rather than 500.
   - `sitemap.ts`, `robots.ts`: import from `@/content/site` (they currently import `@/content`).
5. **Build & fix:** `npx next build`. Anticipated type traps: `subscribe` in perf.ts returning boolean (wrap to return void if it errors); `gsap.to(cueRef.current)` null-guard in Hero; empty-array guards in Positioning/Proof.
6. **Run & verify (Phase 9):** `npx next dev -H 0.0.0.0 -p 3000` via start_process (must bind 0.0.0.0). Confirm hero scrub fires, pins hold, counters/fields render, marquee loops once, tier-C (set `prefers-reduced-motion`) still shows full content, keyboard path + focus rings visible. Capture metrics; fix or report misses.
7. **QA passes 1–3** per MASTER-PROMPT §8.2 (structure → craft → polish).
8. **Commit + push** to `arena/01a07e2d-davoris-website` only.

## INVARIANTS — do not violate while finishing

- Accent = TWO tokens: `--accent #FF6A13` dark grounds ONLY; `--accent-ink #9C3A00` light grounds ONLY. Button label = `--on-accent #0B0C0E`, **never white** (2.87:1 fail).
- `LineMask` is the default reveal. No fade-up-10px anywhere.
- Exactly ONE marquee. ≤4 pinned sections (currently Hero pin + Positioning + Proof = 3).
- Grain ≤0.045 opacity, per-section `position:absolute` (NOT fixed — fixed would stack opacity).
- No hardcoded hex/px in components; tokens only. No fabricated numbers — `null` renders `<Field>` title-block token.
- Copy limits: headlines ≤8 words, leads ≤22, paras ≤3 sentences/≤45 words, cards ≤12, homepage 250–450 words.
- Images: AVIF/WebP only, explicit dimensions/`sizes` everywhere, `priority` on hero sheet only.

## KNOWN STATE / RISKS

- Old 45 MB `public/images/*.png` (Davoris) still present; unreferenced by new code. Leave for now (main needs them); optionally prune at the very end.
- `components/Section.tsx` primitive exists but sections mostly use raw `<section className="section section--…">`; either is fine, don't refactor mid-build.
- Hero tier-B path uses clip-wipe (no pin); tier-C shows BUILT + sheet at 0.3 — already coded, just verify visually.
