# PHASE 2 — ART DIRECTION
### DNO Engineering Consultants Limited · Decision Record · 8 September 2026

> This is a **decision record**, not a mood description. Every value below is committed and
> machine-checked. Phase 5 (build) consumes it directly — nothing here gets renegotiated
> mid-build without a written revision to this document.

---

## 2.1 — THE VISUAL THESIS

> **This site feels like a set of construction documents that turned out to be beautiful —
> precise, unhurried, drawn by someone who has stood in the trench — because the buyer is
> afraid of being publicly wrong about a consultant, and responds to visible rigour,
> institutional memory, and the absence of any hint of improvisation.**

Three consequences that govern everything downstream:

1. **The aesthetic is drafting, not luxury.** The reference is a plan-and-profile sheet, a
   survey field book, an instrument readout — not a watch catalogue and not a SaaS landing
   page. Engineering buyers read precision as competence. Decoration reads as a firm with
   spare time.
2. **Authority comes from restraint at scale.** Big type, long whitespace, few words, real
   numbers. The opposite of the dense-brochure instinct most engineering firms have — which
   is exactly why it will look more expensive than every competitor site in the sector.
3. **Nothing may look improvised.** No placeholder grey, no default easing, no misaligned
   hairline. In a sector where the product *is* accuracy, a sloppy pixel is a substantive
   claim about the firm.

---

## 2.2 — PALETTE

One neutral (near-black dominant) + one accent (Signal Orange). **Committed after a
numerical WCAG 2.2 contrast audit, not by eye.**

### The audit that decided this

All three accent candidates were measured. The results changed the design:

| Candidate | on ink-900 | on paper-100 | Verdict |
|---|---|---|---|
| Signal Orange `#FF6A13` | **6.82:1** ✅ | 2.32:1 ❌ | Chosen — strongest on dark, most distinctive in sector |
| Hydraulic Cyan `#00B4C8` | 7.79:1 ✅ | 2.03:1 ❌ | Rejected — adjacent to generic SaaS blue |
| Drafting Amber `#F2C14E` | 11.66:1 ✅ | 1.36:1 ❌ | Rejected — reads as "terminal/tech", wrong sector |

**Two findings that most builds get wrong, and that this design now encodes as law:**

> **Finding 1 — every candidate fails on the light ground.** A single `--accent` token used
> on both dark and light sections is an accessibility defect waiting to ship. Solution: the
> accent is **two tokens**, hue-locked at 22.1°, with the light-ground variant darkened until
> it passes 4.5:1 on *all three* paper surfaces — not just the palest one.
>
> `#B54300` passes on paper-100 (4.51) but **fails on raised surfaces** (paper-200: 4.11,
> paper-300: 3.62). `#A63D00` still fails paper-300 (4.15). **`#9C3A00` is the first value
> that clears all three** (5.63 / 5.13 / 4.52). That is the committed `--accent-ink`.

> **Finding 2 — white text on the orange button fails at 2.87:1.** The reflex is white-on-
> accent. It is non-compliant. **Button labels are `--ink-900` on accent fill (6.82:1 ✅).**
> This also happens to look better: dark-on-hi-vis is how the colour is actually used on
> real jobsite signage, so it reads as *correct* rather than as a compromise.

### Committed tokens

```css
:root {
  /* ── GROUNDS ─────────────────────────────────────────────── */
  --ink-900:   #0B0C0E;   /* dominant dark ground      · paper-on-it 15.85:1 */
  --ink-850:   #101215;   /* recessed dark             · paper-on-it 15.19:1 */
  --ink-800:   #15171A;   /* raised dark surface       · paper-on-it 14.54:1 */
  --ink-700:   #1E2126;   /* dark card / panel         · paper-on-it 13.07:1 */
  --ink-600:   #2A2E34;   /* dark hover state          · paper-on-it 11.05:1 */

  --paper-100: #EAE7E0;   /* dominant light ground     · ink-on-it 15.85:1   */
  --paper-200: #E1DDD3;   /* raised light surface      · ink-on-it 14.43:1   */
  --paper-300: #D5D0C4;   /* light card / panel        · ink-on-it 12.72:1   */

  --rule-dark:  #24282E;  /* hairline on dark          · accent-on-it 5.16:1 */
  --rule-light: #C9C3B4;  /* hairline on light         · ink-on-it 11.13:1   */

  /* ── ACCENT — hue-locked 22.1°, TWO tokens ───────────────── */
  --accent:      #FF6A13; /* DARK GROUNDS ONLY   · 6.82:1 on ink-900        */
  --accent-ink:  #9C3A00; /* LIGHT GROUNDS ONLY  · 5.63 / 5.13 / 4.52 on
                             paper-100 / 200 / 300 — passes all three       */
  --accent-deep: #6B3515; /* large light-ground fills · 7.93:1 on paper-100  */
  --accent-glow: #FF6A1314; /* 8% wash, dark grounds only, never as a fill  */

  /* ── SECONDARY TEXT ─────────────────────────────────────── */
  --muted-on-dark:  #A8ACB4;  /* 8.60:1 on ink-900  ✅ */
  --muted-on-light: #5A5751;  /* 5.83:1 on paper-100 ✅ */

  /* ── ON-ACCENT (button labels) ──────────────────────────── */
  --on-accent: #0B0C0E;   /* 6.82:1 ✅  — NEVER white (2.87:1 ❌) */
}
```

### Accent discipline — binding rules

| Rule | Why |
|---|---|
| The accent covers **≤ 5% of any viewport** | If it is everywhere it is a theme, not an accent. Themes look cheap. |
| `--accent` appears **only on dark grounds**; `--accent-ink` **only on light grounds** | Enforced by the contrast audit. A lint check should flag misuse. |
| Accent is used for exactly **five roles**: eyebrows · key numerals · primary CTA fill · active nav state · focus ring | Any sixth role requires a written revision to this document. |
| **Never** accent as a section background, never as a gradient endpoint, never as a shadow | These are the four fastest routes to a cheap-looking site. |
| Focus ring: `--accent` on dark (6.82:1), `--accent-ink` on light (5.63:1) — both clear the 3:1 non-text minimum | Keyboard users get the same brand, not a default blue outline. |

**Ground rhythm:** the site is dark-dominant (hero, positioning, proof, close) with light
interludes (capabilities, engagement). Dark-to-light-to-dark gives the scroll a sense of
chapters and stops the page feeling like one long tunnel.

---

## 2.3 — TYPOGRAPHY

Three faces. One published scale. No fourth face, no fallback drift.

| Role | Face | Weight / axis | Why |
|---|---|---|---|
| **Display** | **Archivo** (expanded width, `wdth` 112–125) | 700–800 | Expanded grotesk reads as *institutional* — the visual register of public works, transit authorities, federal agencies. Not startup-cheerful, not serif-nostalgic. The width axis lets the hero go genuinely monumental without the type feeling decorative. |
| **Body** | **Geist Sans** | 400 / 500 | Engineered neutrality; your stated preference. Designed for interfaces, so it stays legible at 16–17px in dense service copy. Deliberately *not* Inter — Inter is the single most recognisable "AI built this" signal in body copy. |
| **Mono** | **Geist Mono** | 400 / 500 | **Doing niche work, not decoration.** Spec callouts, stationing, pipe class, RFP reference numbers, registration/licence numbers in the footer, and every counter. Mono is how engineering actually writes numbers down. Tabular figures are mandatory on counters so nothing reflows mid-animation. |

### Committed modular scale

Mixed ratio by design: **tight (~1.26, major third) for the reading ladder**, **wide
(~1.41–1.54) for the display ladder.** A single ratio across both either makes body copy
lumpy or makes the hero timid. Fluid between 390px and 1440px.

```css
:root {
  --step-xs: clamp(0.6875rem, 0.6643rem + 0.0952vw, 0.75rem);   /* 11 → 12px   mono captions, eyebrows */
  --step-sm: clamp(0.875rem,  0.8518rem + 0.0952vw, 0.9375rem); /* 14 → 15px   UI, labels, table data  */
  --step-0:  clamp(1rem,      0.9768rem + 0.0952vw, 1.0625rem); /* 16 → 17px   BODY — the reading size */
  --step-1:  clamp(1.1875rem, 1.129rem  + 0.2381vw, 1.3438rem); /* 19 → 21.5px lead paragraphs         */
  --step-2:  clamp(1.375rem,  1.282rem  + 0.381vw,  1.625rem);  /* 22 → 26px   h4 / card titles        */
  --step-3:  clamp(1.625rem,  1.439rem  + 0.762vw,  2.125rem);  /* 26 → 34px   h3 / section subheads   */
  --step-4:  clamp(2rem,      1.629rem  + 1.524vw,  3rem);      /* 32 → 48px   h2 / section headings   */
  --step-5:  clamp(2.5rem,    1.85rem   + 2.667vw,  4.25rem);   /* 40 → 68px   h1 / page titles        */
  --step-6:  clamp(3.25rem,   2.229rem  + 4.19vw,   6rem);      /* 52 → 96px   display                 */
  --step-7:  clamp(4rem,      2.05rem   + 8vw,      9.25rem);   /* 64 → 148px  HERO — display-xl       */
}
```

### Type rules

- **Line-height:** display `0.92` · h1–h2 `1.0` · h3–h4 `1.12` · lead `1.45` · body `1.6` · mono `1.5`
- **Letter-spacing:** display/h1 `-0.035em` · h2 `-0.025em` · h3 `-0.015em` · body `0` ·
  **mono eyebrows `+0.18em` uppercase** (the drafting-sheet signature) · never track body copy
- **Measure:** body and lead capped at `max-width: 62ch`; card copy at `38ch`
- **The hero sets `--step-7` at up to 148px.** A display face used only at small sizes is
  money spent for nothing. The brand name must be monumental at least once.
- **Widow control:** `text-wrap: balance` on all headings, `text-wrap: pretty` on body.
- **Numerals:** `font-variant-numeric: tabular-nums` on every counter and every spec row.

### Spacing rhythm (fluid, same 390→1440 range)

```css
:root {
  --space-section: clamp(64px, 1.59rem + 9.9vw, 168px);   /* between major sections */
  --space-block:   clamp(40px, 1.2rem  + 5.33vw, 96px);   /* between blocks in a section */
  --space-stack:   clamp(24px, 0.943rem + 2.29vw, 48px);  /* between stacked items */
  --space-inline:  clamp(12px, 0.564rem + 0.762vw, 20px); /* inline gaps */
}
```

Section padding is **asymmetric**: `padding-block: var(--space-section) calc(var(--space-section) * 1.15)` —
slightly more air below than above, so each section lands before the next one starts.

### Grid

```
container max-width 1440px, centred
  < 768px      4 columns,  gutter 20px
  768–1279px   8 columns,  gutter 32px
  ≥ 1280px    12 columns,  gutter 40px
```

Display type is permitted to **bleed to the container edge** (no gutter inset) at ≥1280px.
Everything else respects the grid. One deliberate break per section, maximum.

---

## 2.4 — MOTION LANGUAGE

> **Our motion is unhurried on departure and decisive on arrival. Nothing snaps, nothing
> bounces, nothing overshoots. It moves like machinery under load — weighted, damped, and
> certain of exactly where it will stop.**

That is the house personality, and it is drawn directly from the niche: valve actuators,
gantries, pump start-ups. Engineering motion has mass. Consumer-site motion has spring.
We use mass.

### Committed curves — two, and only two

```css
:root {
  /* THE HOUSE CURVE — entrances, reveals, LineMask, hover states.
     Decisive departure, long confident settle. Never bounces. */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);

  /* THE MACHINE CURVE — scrubs, pinned transitions, DrawPath, hero sequence.
     Symmetric and heavy at both ends: motion that feels like it has inertia
     and is being driven, not released. */
  --ease-machine: cubic-bezier(0.83, 0, 0.17, 1);
}
```

**One curve applied everywhere is what makes motion feel authored rather than installed.**
Any third curve — and specifically any `ease-in-out` default leaking in from a library — is
a defect. GSAP defaults are overridden globally in `lib/motion.ts` so `power2.out` can never
appear by accident.

### Committed durations

| Token | Value | Used for |
|---|---|---|
| `--dur-instant` | 120ms | hover, cursor, focus |
| `--dur-fast` | 240ms | UI transitions, nav, magnetic button return |
| `--dur-base` | 600ms | `LineMask` reveals, standard entrances |
| `--dur-slow` | 1000ms | section-scale transitions, `ClipWipe` |
| `--dur-glacial` | 1600ms | hero brand name, counters, `DrawPath` |

Stagger: **60ms** between siblings, **40ms** between characters in `CHAR-TRACK`.
Never exceed 120ms stagger — beyond that a reveal reads as a queue, not as one event.

### The reveal primitive decision

**`LineMask` replaces fade-up as the site's default reveal.** Every significant headline
splits into lines, each wrapped in `overflow: hidden`, inner span travelling `y: 110% → 0`
on `--ease-out` over `--dur-base`.

This one substitution does more for perceived cost than anything else in the motion system.
A fade-up-10px on every block — which is what the current codebase does — is the single
most recognisable template tell in existence. A line-mask reveal is what editorial and
Awwwards-tier sites actually use, and it is *structural*: it implies the type was measured
and set, not dropped in.

### Scroll engine

- **Lenis**, one instance, `lerp: 0.09`, `wheelMultiplier: 0.9`, `touchMultiplier: 1.6`
- **One shared RAF loop.** Lenis drives; GSAP's ticker is synced to it:
  `gsap.ticker.add((t) => lenis.raf(t * 1000))` + `gsap.ticker.lagSmoothing(0)`.
  Two competing scroll loops is the most common cause of scroll jank and it is invisible
  in code review — it only shows up as a stutter on a real device.
- `ScrollTrigger.defaults({ ease: 'none' })` for all scrubs — scrubbed motion must be
  linear against scroll position. Easing belongs to time-based animation, not to scrub.
- Scroll-driven work touches **`transform` and `opacity` only.** Never `top`, `left`,
  `width`, `height`, `margin`, or `filter: blur()`.
- `will-change` applied on animation start and **removed on completion.** A permanent
  `will-change` on 40 elements is worse than none.
- **Pinned sections: 3 total.** Not more. Pinning every section destroys scroll rhythm and
  the user loses their sense of position in the page.

---

## 2.5 — VISUAL ASSET DIRECTION

### The hero concept: **"LINE TO LAND"**

A single continuous camera move along a water-main alignment. It opens on a **drafting
sheet** — a plan-and-profile drawing, line work on dark ground. As the user scrolls, the
drawing's lines **lift off the sheet into three dimensions**, gain terrain, gain material,
and resolve into the **built street**: trench, main, pavement, the neighbourhood it serves.
Same vantage. Same alignment. Same camera path. Drawing becomes reality.

**Why this is right for this buyer — and not just handsome:**

- **It performs the value proposition instead of illustrating it.** DNO's own brief says
  *"total project management, turning our client's vision into reality."* The hero does not
  say that. It *shows* that, in five seconds, without a word.
- **It closes the buyer's central fear on screen.** Municipal buyers are afraid of the gap
  between a design and what actually gets built — because that gap becomes a public record.
  The hero collapses the gap. That is persuasion, not decoration.
- **It spans the actual service range in one move:** Master Planning (the sheet) → Water
  Supply (the main) → Road/Street Improvements (the pavement) → Design-Build (resolution
  into built condition).
- **It justifies `SCRUB-ORBIT` honestly.** A fake orbit interpolated from stills looks
  broken. A *state transition along a fixed camera path* survives interpolation far better,
  because the eye reads change-of-state as intentional.
- **It is un-fakeable by a template builder**, which is the point of Phase 4 in the master
  prompt — the CRAFT section is the strongest anti-cheap signal available.

### Production plan and honest risk

| | |
|---|---|
| **Frames** | 40 (not 60) over a **300vh pin range** |
| **Why fewer** | Each frame stays on screen longer, so cross-fade blending between frames hides interpolation seams. 40 frames over 300vh reads smoother than 60 over 200vh. |
| **Method** | Generate 7 anchor keyframes with locked art direction + subject reference → interpolate → export WebP → total < 2.5 MB |
| **Primary risk** | Continuity drift across generated frames — geometry shifting, lighting changing, the alignment wandering. This is the failure mode that makes AI sequences look cheap. |
| **Mitigation** | Fixed camera path stated in every prompt; identical grade and grain; anchor keyframes carry the subject reference. |
| **Defined fallback** | If continuity will not hold: a **3-state crossfade scrub** (SHEET → LIFT → BUILT) on the same scroll progress and the same pin range. Less spectacular, still bespoke, still not a template, **zero continuity risk.** Trigger for switching: drift still visible after two generation attempts. |
| **Tier B mobile** | `PARALLAX-DEPTH` + `CLIP-WIPE` on the BUILT frame, with the SHEET as a wiped overlay. Same story, no sequence. |
| **Tier C** | Static BUILT frame, SHEET overlay at 30% opacity, `LINE-MASK` headline. Complete and dignified. |

### Photography / render direction

| Dimension | Direction |
|---|---|
| **Lighting** | Available and natural. **Overcast preferred**; dawn or late-afternoon low sun as the dramatic option. Never midday. Never HDR. Never a lifted, glowing "cinematic teal-and-orange" grade — that reads as stock. |
| **Lens** | 35mm and 50mm equivalent. Eye-level or marginally low. **No wide-angle distortion heroics. No drone as a default** — aerials are used once, for the master-planning scale moment, not as wallpaper. |
| **Grade** | Desaturated midtones. Blacks lifted to `--ink-800` so they sit in the page rather than on top of it. Cool shadows. Warm highlights pulled toward the accent hue at very low saturation. **High micro-contrast, low global contrast.** |
| **Grain** | Fine, ~3%, identical across every asset. Grain that varies between images is what makes a set look sourced rather than shot. |
| **Subject** | Infrastructure at working scale: treatment trains, pump stations, valve vaults, main alignments, paving operations. Drawing sheets and instrument detail (total station, level rod, pressure gauge). Empty public space at dawn. Water as *material*, not as a droplet macro. |
| **Continuity** | One grade, one lighting logic, one grain, one lens family across every asset. **The accent hue must be present somewhere in every frame** — a rusted valve, a marker post, a hi-vis element, a warning plate — so photography and design system read as one object. |

### The composition law

> **Every asset must contain a legible straight line — a horizon, a pipe run, a kerb, a
> sheet edge, a plumb line.**

Engineering is the discipline of alignment. An image with no straight edge in it feels soft
and un-engineered no matter how well it is graded. This single rule does more to make
generated assets look *authentic to the sector* than any prompt adjective.

### Never shown — negative direction

- Stock executives shaking hands, or pointing at a plan
- The smiling-hard-hat-at-a-laptop pose
- Drone golden-hour over generic suburbia
- Clip-art isometric city illustrations
- Blueprint-blue-on-white overlay used as a cheap "engineering" signifier
- **Generated human faces in identifiable professional roles** — fabricated staff imagery
  on a firm whose credentials are reviewed by funding agencies is a misrepresentation risk,
  not an aesthetic choice. Leadership portraits are client-supplied or the section is built
  without them.
- Water-droplet macro "clean water" clichés
- Any asset containing an identifiable competitor or client facility without release

---

## AMBIENT ALLOCATION — one element per section, no more

Applying the master prompt's alive/noisy rule (zero feels dead, two competes, three is a
slot machine). Each section gets exactly one non-content motion:

| # | Section | Techniques | Ambient element |
|---|---|---|---|
| 1 | HERO | `SCRUB-ORBIT` + `CHAR-TRACK` | *none* — the scrub **is** the motion; adding grain here would compete |
| 2 | POSITIONING | `PIN-SWAP` | `GRAIN-DRIFT` (dark, ≤ 0.045 opacity) |
| 3 | CAPABILITIES | `NUMBERED-INDEX` + `LINE-MASK` | a hairline rule that draws across on enter |
| 4 | CRAFT / DETAIL | `DRAW-PATH` (plan & profile of a main alignment) | *none* — the drawing drawing itself is the ambient |
| 5 | PROOF | `COUNTER-UP` over `PIN-STACK` | `GRAIN-DRIFT` (dark) |
| — | *transition* | `MARQUEE-KINETIC` — **exactly 1, sitewide** | funding/credential ticker: EPA SRF · USDA-RD W&L · State DOT · FEMA · … *substantive content, not decorative kinetic energy* |
| 6 | ENGAGEMENT | `STICKY-COLUMN` | slow parallax on the sticky panel only |
| 7 | CLOSE | `MAGNETIC-BUTTON` + `SCRAMBLE-DECODE` | `GRAIN-DRIFT` (dark) |
| 8 | FOOTER | static | *none* — the footer is a trust surface; motion there undermines it |

`CURSOR-LABEL` on capability rows and project cards, **desktop hover-only**, gated behind
`matchMedia('(hover: hover) and (pointer: fine)')`.

---

## COMMITTED TECHNIQUE SET

```yaml
hero:        SCRUB-ORBIT ("LINE TO LAND") + CHAR-TRACK
positioning: PIN-SWAP
capabilities: NUMBERED-INDEX + LINE-MASK
craft:       DRAW-PATH
proof:       COUNTER-UP + PIN-STACK
transition:  MARQUEE-KINETIC (×1)
engagement:  STICKY-COLUMN
close:       MAGNETIC-BUTTON + SCRAMBLE-DECODE
ambient:     GRAIN-DRIFT (×3, dark sections only)
cursor:      CURSOR-LABEL (desktop only)
default_reveal: LINE-MASK   # replaces fade-up sitewide
```

**Explicitly rejected:** `HORIZONTAL-DRIFT` (fights the mobile gesture, and a timeline is
not the story this firm needs to tell) · `PIN-STACK` beyond 3 pins · `SCRAMBLE-DECODE` more
than once · `SCALE-DISSOLVE` (reads as a transition effect, not as intent).

---

## DEGRADATION SUMMARY

| Tier | Trigger | Hero | Motion |
|---|---|---|---|
| **A** | desktop, hover+fine, ≥4GB, fast | 40-frame `SCRUB-ORBIT`, 300vh pin | Full set, all pins, grain, cursor |
| **B** | capable mobile / mid-range | `PARALLAX-DEPTH` + `CLIP-WIPE` on BUILT frame | Lenis retained, pins simplified, grain 50%, **no cursor** |
| **C** | `prefers-reduced-motion` · `saveData` · 2g/3g · `deviceMemory < 4` · or runtime FPS < 45 for 2s | Static BUILT frame + SHEET overlay at 30% | Native scroll, `LINE-MASK` → opacity, no grain/cursor/marquee/pin |

**At Tier C the site remains complete, correct, and dignified. Degradation removes cinema,
never content.** `prefers-reduced-motion: reduce` resolves to Tier C immediately and is
never overridden.

---

## OPEN ITEMS REQUIRING YOUR INPUT

| Item | Status | Blocks |
|---|---|---|
| **Accent veto** | `#FF6A13` committed on evidence. Say the word if you want Hydraulic Cyan instead — the derivation re-runs in minutes. | Nothing; swappable in one token |
| **`PROOF` numbers** | All `{{CLIENT TO SUPPLY}}` | Section 5 (PROOF) and the footer trust surface. Ships as visible placeholders if unresolved. |
| **Named projects** | `{{CLIENT TO SUPPLY}}` — need 4–8 with location, scope, value, year | Section 4 (CRAFT) and Projects route |
| **Certifications / registrations** | `{{CLIENT TO SUPPLY}}` | Footer trust surface, marquee ticker content |
| **Leadership portraits** | Client-supplied or the section is built without them | About route |
| **Logo** | No SVG supplied. Wordmark set in Archivo Expanded is the fallback — which is a legitimate solution, not a placeholder. | Nav, footer, OG image |

---

## APPROVAL

This document is the committed art direction. **Phase 5 build order step 1 (`tokens.css`)
is generated directly from §2.2 and §2.3 above — no values will be invented during the build.**

Next: **Phase 5, steps 1–7** — tokens, base CSS, content model, capability detection,
motion config, Lenis/GSAP sync, then the fifteen motion primitives built and tested in
isolation before any section exists.
