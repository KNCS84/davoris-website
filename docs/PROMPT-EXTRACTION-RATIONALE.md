# EXTRACTION RATIONALE — what I took, from where, and why

You gave me five sources: the existing **MASTER PROMPT**, plus **Agent Prompts 1–4**
(steakhouse, free-form showcase, KING CONNECT watch, personal portfolio). This document
shows what survived, what was discarded, what was synthesised from contradictions, and what
I added that wasn't in any of them.

---

## PART 1 — SOURCE-BY-SOURCE EXTRACTION

### SOURCE: THE MASTER PROMPT (your existing v1)

| Extracted | Kept because |
|---|---|
| **"Make it more expensive, not busier"** | The single highest-value line in the entire corpus. It is a *decision procedure*, not a vibe — it tells the agent what to do when a section feels weak (subtract, enlarge, specify) instead of the default (add). Promoted to **THE LAW** in Phase 3.1. |
| **One neutral + exactly ONE accent** | Directly kills the #1 AI-website tell (rainbow / purple-gradient palettes). Kept, and made enforceable with a **≤5% viewport coverage rule** — v1 stated the constraint but gave no way to check it. |
| **ONE display + ONE body typeface** | Prevents font-soup. Extended to **three** (display + body + mono) because mono does genuine niche work — spec callouts, stationing, registration numbers. |
| **Banned filler copy list** | Concrete and checkable. Kept verbatim and expanded to 18 phrases. |
| **Phase 0 clarifying questions** | Prevents the most expensive failure mode: the agent guessing the brand voice and building 2,000 lines on a wrong assumption. |
| **Phase 1 pricing before code** | The anchor changes the output. Kept, and given a required structure (tiers, timeline, payment schedule, exclusions). |
| **3 iteration passes** | Correct instinct — but v1's passes were underspecified and overlapping. Rewritten with **distinct mandates** (structure → craft → polish) so the agent cannot do the same work three times. |
| **"Do not report completion based on code correctness alone"** | Profound and correct. But unenforceable as written. Became **Phase 9: Verification Evidence Protocol** with a required per-behaviour record format. |
| **Section skeleton (Hero → Story → Proof → Stats → Offer → CTA → Footer)** | Sound narrative arc. Kept, and each section now must declare its **one idea** in ≤5 words. |
| **Named premium fonts (Geist, Neue Montreal, General Sans)** | Useful default. Geist retained per your Agent Prompt 1 preference. |

**Discarded from v1:** the "target customer: you decide" instruction — replaced with an
explicit `NICHE_PSYCHOLOGY` block (buyers, fears, what they actually buy). An agent that
*decides* the customer silently decides the entire design; making it explicit is what lets
you swap niches deliberately.

---

### SOURCE: AGENT PROMPT 1 (Seattle steakhouse)

| Extracted | Kept because |
|---|---|
| **"Build a website worth $10"** | The *inverse* of the pricing anchor — and it proves the mechanism. Told to build cheap, an agent builds cheap *confidently*. This is direct evidence that Phase 1 pricing is a build step, not a formality. |
| **"The lower sections feel a bit generic. We don't need to make them busier, just more expensive."** | The exact refinement language a client uses. Became the mandate for **Pass 2**, which now specifically hunts the weakest section and *rebuilds* rather than restyles it. |
| **"handcrafted micro-interactions"** | The word *handcrafted* carries the requirement: bespoke, not library defaults. Encoded as "every hover/focus/active state must be considered, and none of them may be `opacity: 0.8`." |
| **"make the tech embers move in the reserve-a-table section… something that gives a sense of movement"** | Section-specific ambient life. Generalised into the **ONE-AMBIENT-ELEMENT-PER-SECTION RULE** (3.1 corollary) — zero feels dead, two competes, three is a slot machine. |
| **"make it feel alive without being noisy… subtle and refined"** | The alive/noisy axis. v1 stated it as a preference; I made it **countable** via the ambient rule and the ≤5% accent coverage rule. |
| **"Font — Geist by Vercel"** | A named font preference beats a suggested list. Config now requires a committed `display_font` / `body_font` / `mono_font` with written rationale. |
| **"Ask me any clarifying questions you need before building"** | Confirms Phase 0. (Conflicts with Prompt 2 — resolved below.) |

---

### SOURCE: AGENT PROMPT 2 (free-form showcase)

| Extracted | Kept because |
|---|---|
| **"three iteration passes… fine-toothed comb, looking for design problems, opportunities to improve/complexify"** | The origin of the pass structure. Note the tension: this prompt says *complexify*, Prompt 1 says *not busier*. **Resolved:** Pass 1 may simplify, Pass 2 may add craft detail, Pass 3 only polishes. Complexity is permitted in exactly one pass. |
| **"put them on my local server and serve me the link"** | Delivery requires a **running, reachable URL**. Encoded in Phase 9 deliverable #3 — with the practical detail that the server must bind `0.0.0.0`, not localhost. |
| **"add a brief description of how you did so on a guide route, so others can do the same"** | **The most underrated line in the corpus.** Documentation is precisely what separates a $20K engagement from a $2K one — the client receives something they can maintain. Became deliverable #5: **Handoff / build guide**, specifying *how to edit content without a developer*. |
| **"I will credit you fully, so go nuts and show the world what you are capable of"** | Stakes framing. Retained in spirit as the **FINAL STANDARD** self-interrogation ("would this pass for a $20,000 agency build if a stranger compared it?"). |
| **"download images / generate similar but different / borrow from advanced motion design"** | Asset-sourcing freedom. Kept but **constrained** by the continuity rule and the no-generated-faces rule. |
| **"completely autonomously, do not ask me for anything until all are done"** | See conflict resolution below. |

---

### SOURCE: AGENT PROMPT 3 (KING CONNECT — luxury watch)

| Extracted | Kept because |
|---|---|
| **Scroll-scrubbed canvas frame sequence (Apple-style)** | The hero technique with the highest perceived-cost-per-byte ratio. Kept as `SCRUB-ORBIT`, with a **frame budget (≤60 frames, <2.5 MB)** and a **preload strategy** that v1 lacked. |
| **Lenis smooth scroll** | Named, correct, and now specified properly: one instance, `lerp ≈ 0.09`, **synced to the GSAP ticker**. Two competing RAF loops is the most common cause of scroll jank and no source prompt mentioned it. |
| **Text reveals pinned to scroll position** | Became `PIN-SWAP` and `LineMask`. |
| **Spec callouts with real numbers — "42mm grade-5 titanium, 72 hours power reserve, 217 hand-finished components"** | **The most transferable idea in the corpus.** Specificity *is* luxury. Generalised into doctrine 3.3 (**Specificity over adjectives**) with a substitution table — and it maps perfectly onto engineering: pipe class, flow rate, acres, MGD, stationing, regulation numbers. |
| **"Edition of 88 — $48,000"** | Scarcity + price transparency as trust mechanics. Translated for B2B services in section 6 (ENGAGEMENT): *removing ambiguity about what happens next is the conversion*. |
| **"Design off black background, gold accent, high-contrast serif display paired with a minimal sans"** | The palette/type formula. Kept as the `ART_DIRECTION` structure. |
| **"Copy tone quiet, expensive, very few words"** | Kept — and given teeth: ≤8-word headlines, ≤45-word paragraphs, 250–450 total homepage words. |
| **"every clip shares the same watch design"** | **Asset continuity.** Became Phase 7's mandatory continuity rule — same subject treatment, lighting direction, colour grade, and grain across every asset. A hero in warm gold and a body image in cold blue reads as a stock dump. |
| **"verify every scroll animation actually works in the browser before telling me it's done"** | Phase 9. |
| **Exploded-assembly / macro fly-through sequence types** | Generalised into Phase 4 (CRAFT / DETAIL): *show the work at a level of detail only a practitioner would publish*. This is the strongest anti-cheap signal available, because a template builder cannot produce it. |

---

### SOURCE: AGENT PROMPT 4 (personal portfolio)

| Extracted | Kept because |
|---|---|
| **"Study the style of the Awwwards SOTY 2025 (Lando Norris / OFF+BRAND)"** | Named references beat adjectives. But "study the style of" is too loose — an agent will claim influence and borrow nothing. Became the **reference-borrowing protocol**: name the site, name the *single* technique, name the section it came from. |
| **"huge bold typography… massive display type tracks in letter-by-letter"** | `CHAR-TRACK`. Constrained to **once, on the brand name, in the hero** — used elsewhere it becomes a tic. Also: "a display face must be set at a genuinely large size at least once" (Phase 2.3). |
| **"Animated stats strip that counts up on scroll"** | `COUNTER-UP`, now specified: `easeOutExpo`, fires once, **tabular mono numerals, no layout shift** (CLS protection v1 omitted). |
| **"THREE PILLARS section pinned over clip 2, revealing one at a time"** | **The exact structure an engineering consultancy needs for its service lines.** Became `PIN-STACK` + section 3 (CAPABILITIES). |
| **"cards… each with a one-line pitch and hover motion"** | Card copy limit (≤12 words) + Pass 2 micro-interaction mandate. |
| **"subtle grain overlay"** | `GRAIN-DRIFT`, with **opacity ≤ 0.045** and **dark sections only** (on light grounds it reads as dirt). |
| **"marquee strip of skill names scrolling between sections"** | `MARQUEE-KINETIC`, capped at **exactly 1 instance** — v1 said "1–2 max"; 1 is the correct answer. |
| **"black background, emerald accent, cream typography"** | Reinforces the one-neutral-one-accent law with a third independent example. |
| **"high-contrast editorial meets cinematic"** | Named style axis. Became the Phase 2.1 **visual thesis sentence template**. |
| **"every section scrub-pinned"** | **Rejected.** Pinning every section is monotonous and destroys scroll rhythm — the user loses their sense of position. Constrained to **2–4 pinned sections sitewide**. |
| **"pass my photo as an identity reference on every generation so my face is consistent"** | The *mechanism* for asset continuity. Kept in Phase 7 — but with a hard **no-generated-faces** rule for professional-services niches, where fabricated staff imagery is a credibility and misrepresentation risk. |
| **"verify the orbit scrub is buttery and my name animation syncs to scroll"** | Note the language: *buttery*, *syncs*. Adjectives. Phase 9 replaces them with **behavioural assertions** — "holds 60fps through the full 240vh pin range with no frame repeats and no drift between scroll position and frame index." |

---

## PART 2 — CONTRADICTIONS I HAD TO RESOLVE

**1. Ask questions vs. run autonomously.**
Prompt 1: *"ask me any clarifying questions before building."* Prompt 2: *"completely
autonomously, do not ask me for anything until all are done."*
→ **Resolution:** ask **once**, at Phase 0, in a single message. Then never interrupt.
Surface later decisions as *statements with rationale*, not questions. Genuine blockers get
a defensible default choice plus an entry in "ASSUMPTIONS I MADE."

**2. "Not busier" vs. "improve/complexify the design."**
→ **Resolution:** complexity is permitted in **exactly one pass**. Pass 1 simplifies,
Pass 2 adds craft, Pass 3 only polishes.

**3. "Make it award-winning / go nuts" vs. "quiet, expensive, very few words."**
→ **Resolution:** ambition goes into *craft and systems* (a real motion architecture, a
documented type scale, a degradation ladder), never into *quantity of effects*.
The Technique Library exists so ambition is spent deliberately.

**4. "3D tactics / otherworldly" vs. a municipal engineering consultancy.**
→ **Resolution:** the `NICHE_PSYCHOLOGY.what_they_buy` field governs. These buyers purchase
**certainty and public defensibility**, not spectacle. Every technique must be justified
against that field or it is cut.

---

## PART 3 — WHAT I ADDED THAT WAS IN NO SOURCE PROMPT

These are the gaps that separate a good prompt from a 10.

### 1. ANTI-AI-TELL BLACKLIST
Every source prompt said "make it premium" or "don't make it look generic" — none of them
said **what generic looks like**. Agents do not avoid a thing they cannot name. So I named
it, in four categories: colour/surface, layout/components, typography, and motion. Purple
gradients, glassmorphism-by-default, the three-equal-cards row, `border-radius: 12px`,
glow shadows, Inter-as-only-font, the centred eyebrow-H1-two-buttons hero, fade-up-10px as
the sole reveal. **This is the highest-leverage single addition in v10.**

### 2. PERFORMANCE BUDGET WITH NUMBERS
"Optimise for 60fps and lazy-load heavy assets" is a wish. Budgets are a gate: LCP < 2.0s,
CLS < 0.05, INP < 200ms, Lighthouse ≥ 90 mobile, JS < 220KB gzipped, no single image >
180KB, hero sequence ≤ 60 frames and < 2.5MB. Plus the explicit rule that **photographic
content never ships as PNG** — which is precisely the defect in the current repo (45MB of
1408×768 PNGs).

### 3. PROGRESSIVE DEGRADATION LADDER
No source prompt addressed what happens when the canvas frame-sequence meets a low-end
Android on a 3G connection. It falls over — and the client sees a blank hero. v10 defines
Tier A / B / C, the detection order (`prefers-reduced-motion` first and non-overridable,
then `saveData`, `deviceMemory`, pointer type), and a **runtime FPS probe that steps the
site down if it drops below 45fps for two seconds**. With the governing rule:
**degradation removes cinema, never content.**

### 4. NO-FABRICATION RULE
Agents invent statistics constantly. For a consumer brand this is embarrassing; for an
engineering firm working with **federal funding agencies and state regulators**, invented
credentials and project counts is a legal exposure. v10 forbids it, requires visible
`{{PLACEHOLDER}}` tokens instead, and requires a **CLIENT MUST FILL** table at delivery.

### 5. VERIFICATION EVIDENCE PROTOCOL
"Do not report completion based on code correctness alone" is right but unobeyable — there
is no defined artifact. v10 requires a per-behaviour record (trigger / expected / verified
by / result), screenshots at three breakpoints, **measured** metrics rather than estimates,
a running preview URL, and an explicit list of what could *not* be verified.

### 6. TECHNIQUE LIBRARY
You asked for concrete ideas like *"apply scroll-down animation effect."* v10 gives **18
named, toggleable techniques** — `SCRUB-ORBIT`, `PIN-SWAP`, `PIN-STACK`, `LINE-MASK`,
`CHAR-TRACK`, `PARALLAX-DEPTH`, `CLIP-WIPE`, `HORIZONTAL-DRIFT`, `COUNTER-UP`,
`MARQUEE-KINETIC`, `STICKY-COLUMN`, `DRAW-PATH`, `SCRAMBLE-DECODE`, `MAGNETIC-BUTTON`,
`CURSOR-LABEL`, `GRAIN-DRIFT`, `NUMBERED-INDEX`, `SCALE-DISSOLVE` — each with *use when*
**and *do NOT use when***. Naming them is what makes the prompt reusable: you change the
niche by changing a list of technique names.

### 7. BUILD ORDER (dependency-sequenced)
Every source prompt implied building top-of-page to bottom-of-page. That is how you end up
retrofitting motion into finished markup — which produces exactly the pathology in the
current repo: one generic `<Reveal>` wrapper applied identically to every block, because it
was the only tool available by the time the markup existed. v10 builds **tokens → content →
perf detection → motion primitives → section primitives → hero → sections**.

### 8. ART DIRECTION PHASE
v1 jumped from pricing straight to code with no committed visual thesis. v10 requires a
one-page art direction document *before* coding: the thesis sentence, the full token set, a
published modular scale with real `clamp()` values, the house easing curve, and the
photography direction including what is **never** shown.

### 9. ACCESSIBILITY FLOOR
Only `prefers-reduced-motion` was implied anywhere in the corpus. v10 requires WCAG 2.2 AA:
4.5:1 / 3:1 contrast **including the accent-on-neutral pair** (the one most likely to fail),
visible `:focus-visible`, a full keyboard path, semantic landmarks, and the rule that
**scroll-pinned content must never be trapped** — anything revealed by scrubbing must be
reachable at Tier C and with JS disabled.

### 10. COPY SHAPE LIMITS
"Very few words" → ≤8-word headlines, ≤22-word leads, ≤3-sentence/≤45-word paragraphs,
≤12-word card copy, verb+object CTAs, 250–450 total homepage words, **one idea per section
nameable in five words**.

### 11. FILE ARCHITECTURE SPEC
You asked for something "architecturally sound." v10 specifies the tree and four binding
rules: content never hard-coded in JSX; motion primitives are generic and section-agnostic;
one shared RAF loop (Lenis drives, GSAP ticker syncs to it); tokens only — a hardcoded hex
in a component is a defect.

### 12. `MODE: greenfield | elevate` + PHASE 0.5 AUDIT
None of the sources could be pointed at an existing codebase. v10 can, and in elevate mode
it must audit first — motion system, actual payload, token naming debt, architecture worth
preserving, type. With the explicit instruction: **do not destroy good bones for novelty.**

### 13. NICHE_PSYCHOLOGY BLOCK
Not "target customer: you decide." Instead: named buyers, **what they fear**, and
**what they actually buy**. For DNO that resolves to *"certainty and public defensibility,
not creativity"* — a conclusion that then governs accent choice, technique selection, copy
register, and what the footer must contain (licence and registration numbers are a
conversion surface in regulated industries).

### 14. FINAL STANDARD SELF-INTERROGATION
Five questions the agent must answer honestly before declaring done — including the sharpest
one: *could you screenshot a single section, hide the logo, and have it still be
unmistakably this brand and this niche?* If any answer is no, keep going.

---

## PART 4 — WHY THIS IS NOW A 10

Scored against the six things that actually determine whether an AI-built site reads as
expensive:

| Dimension | v1 | v10 | What closed the gap |
|---|---|---|---|
| **Reusability across niches** | 4/10 | 10/10 | Config block + `MODE` switch + `NICHE_PSYCHOLOGY` + named Technique Library |
| **Specificity of instruction** | 5/10 | 10/10 | Numbers everywhere: budgets, word limits, frame caps, opacity ceilings, coverage % |
| **Anti-cheap enforcement** | 4/10 | 10/10 | The blacklist names the tells; the FINAL STANDARD re-checks them |
| **Production readiness** | 3/10 | 10/10 | Degradation ladder, perf gate, a11y floor, no-fabrication, evidence protocol |
| **Architectural soundness** | 4/10 | 10/10 | File tree, four binding rules, dependency-ordered build sequence |
| **Deliverable completeness** | 6/10 | 10/10 | Handoff guide, CLIENT MUST FILL, assumptions log, priced recommendations |

**The underlying principle of the upgrade:** v1 described a *taste*. v10 describes a
*specification*. Taste cannot be handed to an agent reliably — it produces a different site
every run. A specification with named techniques, numeric budgets, an enumerated blacklist,
and a verification protocol produces the same standard every time, in any niche.

That repeatability is the actual product.
