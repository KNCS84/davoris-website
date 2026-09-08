# PROJECT QUOTATION

**Prepared for:** DNO Engineering Consultants Limited
**Project:** Cinematic scroll-driven brand & lead-generation website
**Prepared:** 8 September 2026
**Validity:** 30 days

---

## THE SHORT VERSION

A full-front-end engineering engagement, art-directed and built to a five-figure agency
standard: a scroll-scrubbed cinematic hero, pinned narrative sections, a reusable motion
system, an optimised asset pipeline, WCAG 2.2 AA accessibility, and three QA passes.

| Tier | Investment | Timeline |
|---|---|---|
| **Signature** | **$14,600** | 4–5 weeks |
| **Landmark** *(recommended)* | **$19,400** | 5–7 weeks |

Payment: **40% on approval · 30% at first full-page preview · 30% on handoff.**

---

## RECOMMENDED SCOPE — LANDMARK, $19,400

### Line-item breakdown

| # | Phase | What you're actually buying | Cost |
|---|---|---|---|
| 1 | **Discovery, positioning & art direction** | Buyer psychology mapped (city managers, utility GMs, DOT district engineers, federal PMs, procurement officers). A committed visual thesis, palette with written accent rationale, published modular type scale, house easing curve, photography direction. This is the document every later decision cites. | **$1,500** |
| 2 | **Design system & tokens** | Full token architecture — colour roles, type scale with `clamp()` values at every step, spacing rhythm, radius scale, motion curves. Nothing hardcoded anywhere in the build. This is why the accent can be changed in one line two years from now. | **$1,800** |
| 3 | **Cinematic hero — canvas frame-sequence + scroll scrub** | The Apple-product-page effect: scroll position drives frame index across a pinned canvas range. Includes frame budget engineering (≤60 frames, <2.5 MB), concurrency-capped preloading, progressive-start strategy, and scroll-synced `CHAR-TRACK` brand reveal. The single most expensive-feeling element on the page and the hardest to fake. | **$2,800** |
| 4 | **Pinned scroll-narrative sections (×3)** | `PIN-SWAP` for positioning, `PIN-STACK` for capabilities, `PIN-STACK` for proof. Locked visuals with progressive content reveal, scrub-timed to scroll position, each with a real mobile alternative that unpins and stacks. | **$2,400** |
| 5 | **Site-wide motion system** | Lenis smooth scroll synced to a single GSAP ticker (one RAF loop — the thing most builds get wrong). Fifteen reusable primitives: `LineMask`, `Pinned`, `Parallax`, `ClipWipe`, `Counter`, `Marquee`, `Grain`, `Cursor`, `DrawPath`, `ScrambleDecode`, `MagneticButton`, `NumberedIndex`, `CharTrack`, `ScrubSequence`, `SmoothScroll`. Built generic, so new sections inherit them free. | **$1,800** |
| 6 | **Page architecture & build** | Home, Services (index + detail template), Projects, About, Contact. Route-level composition with zero copy, colour, or numbers in JSX — everything driven from a typed content layer. Includes nav, footer, and the trust surface (registrations, licences, office address) that does real conversion work in a regulated sector. | **$2,400** |
| 7 | **AI asset generation, grading & continuity direction** | Written asset brief approved before generation. One continuous art direction across every frame and every section image — same subject treatment, lighting direction, colour grade, and grain. Graded to the palette including the accent hue. Exported through the optimised pipeline. | **$1,400** |
| 8 | **Conversion layer & lead capture** | CTA architecture with one primary action per decision point, verb+object labels, `MagneticButton` on the close, project-inquiry form with real validation and accessible labelling, and an engagement section that removes ambiguity about what happens next. In B2B infrastructure, *clarity about the process is the conversion mechanism.* | **$800** |
| 9 | **Performance engineering** | AVIF/WebP pipeline with correct responsive `srcset` and explicit dimensions on every image (this is how CLS stays under 0.05). Budget enforcement: LCP < 2.0s, INP < 200ms, JS < 220KB gzipped, no delivered image > 180KB, Lighthouse ≥ 90 mobile. Plus the **three-tier degradation ladder** with a runtime FPS probe that steps the site down if it drops below 45fps — so the hero never falls over on a jobsite phone. | **$1,200** |
| 10 | **Accessibility (WCAG 2.2 AA) + cross-device QA** | Contrast verified at 4.5:1 / 3:1 including the accent-on-neutral pair. Visible focus states, full keyboard path, skip link, semantic landmarks, honest alt text. Pinned content proven reachable with JS disabled and with `prefers-reduced-motion: reduce`. Tested at 1440 / 834 / 390. | **$900** |
| 11 | **SEO architecture, JSON-LD, sitemap, OG** | Typed metadata per route, `ProfessionalService` and `Organization` schema, dynamic sitemap, robots, Open Graph. Structured so funding-agency reviewers and procurement officers searching the firm land on something that resolves cleanly. | **$600** |
| 12 | **Three iteration passes** | **Pass 1 — structure & hierarchy:** section rhythm, type jumps, focal points, grid alignment, hunting repeated-section patterns. **Pass 2 — craft & micro-interaction:** bespoke hover/focus/active states, one hand-made detail per section, easing consistency, and rebuilding the single weakest section rather than restyling it. **Pass 3 — polish & performance:** typography rhythm, colour discipline, token audit, budget verification, reduced-motion and keyboard testing. | **$1,800** |
| | | | **$19,400** |

### Included with every build, at no line-item cost
- **Handoff / build guide** — how to run, deploy, and edit content without a developer;
  which content field controls which part of the page; how to swap the accent in one place;
  how the degradation tiers behave.
- **CLIENT MUST FILL table** — every placeholder, its location, and what it needs.
  No invented statistics ship on this site.
- **Verification report** — per-animation evidence records (trigger / expected / verified by /
  result), screenshots at three breakpoints, and *measured* metrics rather than estimates.
- **Assumptions log** — every decision made without asking, and the reasoning.
- A running preview URL throughout, not a repo and a promise at the end.

---

## REDUCED SCOPE — SIGNATURE, $14,600

For a faster launch that keeps the architectural standard and trades away the hero's
highest-cost technique.

**You keep:** everything in lines 1, 2, 5, 6, 7, 8, 9, 10, 11, and the full handoff package.

**What changes:**

| | Landmark | Signature |
|---|---|---|
| Hero | Canvas frame-sequence, scroll-scrubbed | `PARALLAX-DEPTH` + `CLIP-WIPE` on a graded still |
| Pinned sections | 3 | 2 |
| Iteration passes | 3 | 2 (structure + polish; craft pass folded in) |
| `DRAW-PATH` craft section | Included | Deferred |
| Frame budget engineering | Included | Not applicable |

**What you lose, stated plainly:** the scroll-scrubbed sequence is the element that makes a
first-time visitor stop and scroll back up. A parallax hero is handsome and correct; a
scrubbed hero is *memorable*. If the site's job is to be forwarded to a council or a
funding reviewer and remembered, that difference matters.

**Upgrade path:** Signature → Landmark is a clean $4,800 add-on later. The motion system is
built generic, so the sequence drops into the existing hero shell without rework.

---

## OPTIONAL ADD-ONS

| Add-on | Cost |
|---|---|
| Real 3D-scanned or CAD-derived hero subject (a plant, a structure, an assembly) | from $3,500 |
| Filmed project reel, edited and graded to palette | from $4,000 |
| Headless CMS for the project archive (non-developer publishing) | $2,800 |
| Project case-study template with `DRAW-PATH` site plans per project | $1,900 |
| Second language (Spanish) with full i18n routing | $2,400 |
| RFP / pre-qualification response resource hub | $2,200 |
| Photography direction on a real shoot (art direction, shot list, grade) | $1,600/day |

---

## WHAT THIS PRICE BUYS THAT A $2,500 SITE DOES NOT

Said plainly, and without contempt for the cheaper option — you have almost certainly
already seen one.

**A $2,500 site is assembled. This is authored.**

1. **A motion system instead of a motion effect.** The cheap version installs a fade-up
   animation and applies it to every block identically — which is precisely why it reads as
   a template within four seconds. This build ships fifteen generic primitives and one
   shared scroll engine. New sections inherit craft for free, and every animation shares a
   single easing curve. Consistency of curve is what makes motion feel *designed* rather
   than *added*.

2. **A committed art direction with a written rationale.** Not "modern and professional."
   A thesis sentence tying the visual language to what your buyers actually fear and
   actually purchase — certainty and public defensibility — and every downstream decision
   citing it.

3. **An enumerated refusal to look cheap.** There is a specific, nameable set of things that
   make AI-built and template-built sites read as low-budget: purple gradients,
   glassmorphism cards, the three-equal-cards row, `border-radius: 12px`, glow shadows,
   Inter as the only face, the centred eyebrow-H1-two-buttons hero, eighteen banned filler
   phrases. This build carries that blacklist as an enforceable spec and is audited against
   it in Pass 3.

4. **Performance as a gate, not a hope.** LCP < 2.0s, CLS < 0.05, Lighthouse ≥ 90 on mobile,
   no delivered image over 180KB, AVIF/WebP throughout. The cheap version ships photographic
   PNGs and calls the site responsive. This one carries measured numbers in the delivery
   report.

5. **A degradation ladder.** When the cinematic hero meets a five-year-old phone on a rural
   3G connection — which, for field and municipal staff, is a normal Tuesday — the site
   steps itself down through three defined tiers and a runtime FPS probe. It removes cinema,
   never content. Most builds have no answer here and simply break.

6. **Accessibility to WCAG 2.2 AA.** You sell to cities, state agencies, and federal
   funders. Section 508 and ADA exposure is a procurement reality, not a nicety. Contrast is
   verified including the accent pair, keyboard paths are complete, and pinned content is
   provably reachable with motion reduced and with JavaScript disabled.

7. **Nothing fabricated.** Every statistic traces to something you supplied, or ships as a
   visible placeholder with a CLIENT MUST FILL table. For a firm whose credentials are
   reviewed by funding agencies, invented numbers are not a design shortcut — they are
   liability.

8. **A site you can maintain.** A typed content layer, a handoff guide, and one-line accent
   changes. The cheap version requires the person who built it, forever.

---

## TIMELINE — LANDMARK

| Week | Phase | You see |
|---|---|---|
| 1 | Discovery, art direction, design system, content model | Art direction document for approval; committed palette, type scale, motion language |
| 2 | Motion engine + all primitives; asset generation begins | Working smooth scroll and primitives demonstrated in isolation; asset brief for approval |
| 3 | Cinematic hero + pinned sections | **First full-page preview** (30% milestone) |
| 4 | Remaining sections, conversion layer, responsive pass | Complete site at all three breakpoints |
| 5 | Performance, accessibility, SEO | Measured metrics report |
| 6 | QA Passes 1–2 | Structurally and interaction-refined site |
| 7 | QA Pass 3, verification, handoff | **Delivery:** preview URL, verification report, handoff guide, CLIENT MUST FILL |

*Signature runs 4–5 weeks on the same sequence, compressed.*

---

## EXCLUSIONS

Hosting and infrastructure · domain registration and DNS · ongoing maintenance or retainer
· copywriting (we structure, edit, and place your copy; we do not author your credentials)
· photography and video licensing · real project photography or drone work · legal, ADA, or
Section 508 certification (we build to WCAG 2.2 AA; we do not issue conformance reports)
· CRM or marketing-automation integration · content migration beyond the supplied archive.

---

## WHY I'M COMFORTABLE QUOTING THIS NUMBER

The work that justifies it is invisible in a screenshot and obvious in use: one shared RAF
loop instead of two fighting ones; a frame-sequence that starts scrubbing at 40% preload
instead of blocking; `LineMask` headline reveals instead of a fade-up applied everywhere;
tabular mono numerals on counters so nothing reflows mid-animation; explicit dimensions on
every image so CLS never moves; a degradation ladder with a runtime FPS probe; contrast
checked on the accent pair that everyone else forgets; and a content layer that means
nobody has to call a developer to change a phone number.

None of that is decoration. All of it is why the site still feels right in eighteen months.

**Make it more expensive, not busier.**

---

*Awaiting your go-ahead to begin Phase 2 — Art Direction.*
