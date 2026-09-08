/* ==========================================================================
   PROOF — COUNTER-UP over PIN-STACK.
   Headline stats are client-supplied; absent numbers render as drawing
   title-block fields. The pinned stack carries the three commitments.
   ========================================================================== */
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/motion';
import { useTier } from '@/lib/perf';
import { STATS, PROOF_SECONDARY } from '@/content/proof';
import { Counter } from '@/components/motion/Counter';
import { Pinned } from '@/components/motion/Pinned';
import { Grain } from '@/components/motion/Grain';
import { Container } from '@/components/primitives/Container';
import { Eyebrow } from '@/components/primitives/Eyebrow';
import { LineMask } from '@/components/motion/LineMask';

const COMMITMENTS = [
  {
    k: 'I',
    t: 'On time is a design constraint.',
    d: 'Schedules are engineered, not promised. We sequence design and approvals so the calendar holds.',
  },
  {
    k: 'II',
    t: 'On budget is a deliverable.',
    d: 'Cost opinions trace to unit basis and are updated every cycle, so a budget hearing has no surprises.',
  },
  {
    k: 'III',
    t: 'On record is a responsibility.',
    d: 'Documentation is audit-traceable from first survey to closeout, because public work is public record.',
  },
];

export function Proof() {
  const stackRef = useRef<HTMLDivElement | null>(null);
  const tier = useTier();

  useEffect(() => {
    const stack = stackRef.current;
    if (!stack) return;
    const cards = Array.from(stack.querySelectorAll<HTMLElement>('.proof__card'));

    if (tier === 'C' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(cards, { yPercent: 0, scale: 1, opacity: 1, clearProps: 'all' });
      return;
    }

    gsap.set(cards, { yPercent: 0, scale: 1, opacity: 1 });
    const tl = gsap.timeline({
      scrollTrigger: { trigger: stack, start: 'top top', end: '+=160%', scrub: 0.5 },
    });
    cards.forEach((card, i) => {
      if (i === 0) return;
      tl.fromTo(card, { yPercent: 105 }, { yPercent: 0, ease: 'none', duration: 0.3 }, (i - 1) * 0.33)
        .to(cards[i - 1], { scale: 0.95, opacity: 0.55, yPercent: -5, ease: 'none', duration: 0.3 }, (i - 1) * 0.33);
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [tier]);

  return (
    <section className="section section--dark-alt proof" id="proof">
      <Grain />
      <Container>
        <Eyebrow>The record</Eyebrow>
        <LineMask as="h2" className="h2 mt-stack" lines={['Long enough that', 'the risk is not yours.']} />

        <div className="proof__grid mt-block">
          {STATS.map((s) => (
            <div className="proof__stat" key={s.key}>
              <p className="proof__value display">
                <Counter value={s.value} token={s.token} suffix={s.suffix} prefix={s.prefix} />
              </p>
              <p className="mono-xs proof__label">
                {s.labelLine1}
                <br />
                {s.labelLine2}
              </p>
            </div>
          ))}
        </div>

        <div className="proof__secondary mt-stack">
          {PROOF_SECONDARY.map((s) => (
            <div className="proof__sec" key={s.key}>
              <span className="mono proof__sec-v">
                <Counter value={s.value} token={s.token} suffix={s.suffix} prefix={s.prefix} />
              </span>
              <span className="mono-xs proof__sec-l">
                {s.labelLine1} {s.labelLine2}
              </span>
            </div>
          ))}
        </div>
      </Container>

      {/* Pinned stack of commitments */}
      <Pinned end="+=160%" className={tier === 'C' ? 'proof__stack--unpinned' : ''}>
        <div className="proof__stack" ref={stackRef}>
          <Container>
            <div className="proof__stack-inner">
              {COMMITMENTS.map((c) => (
                <article className="proof__card" key={c.k}>
                  <p className="mono-xs proof__card-k">{c.k}</p>
                  <h3 className="h3 proof__card-t">{c.t}</h3>
                  <p className="lead proof__card-d">{c.d}</p>
                </article>
              ))}
            </div>
          </Container>
        </div>
      </Pinned>
    </section>
  );
}
