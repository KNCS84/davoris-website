/* ==========================================================================
   POSITIONING — PIN-SWAP. A locked visual; three statements swap underneath
   on scroll progress. One idea: the single thing structurally true about
   how the firm works.
   ========================================================================== */
'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from '@/lib/motion';
import { useTier, useCanPin } from '@/lib/perf';
import { Pinned } from '@/components/motion/Pinned';
import { Grain } from '@/components/motion/Grain';
import { Eyebrow } from '@/components/primitives/Eyebrow';

const BLOCKS = [
  {
    k: '01',
    t: 'The drawing is a promise.',
    d: 'Every line we put on a sheet becomes a trench, a main, a street. We design knowing someone will stand in it.',
  },
  {
    k: '02',
    t: 'Accountability does not get diluted.',
    d: 'One team carries each project end to end. The engineer who sets the alignment signs the as-built.',
  },
  {
    k: '03',
    t: 'Approval is part of the design.',
    d: 'Agency and funding constraints are engineered in from the first line — not discovered at the end.',
  },
];

export function Positioning() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const blocksRef = useRef<HTMLDivElement | null>(null);
  const tier = useTier();
  const canPin = useCanPin();

  useEffect(() => {
    const root = rootRef.current;
    const wrap = blocksRef.current;
    if (!root || !wrap) return;
    const blocks = Array.from(wrap.querySelectorAll<HTMLElement>('.pos__block'));

    if (tier === 'C' || !canPin || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(blocks, { opacity: 1, y: 0, clearProps: 'all' });
      return;
    }

    gsap.set(blocks, { opacity: 0, y: 40 });
    gsap.set(blocks[0], { opacity: 1, y: 0 });

    const tl = gsap.timeline({
      scrollTrigger: { trigger: root, start: 'top top', end: '+=180%', scrub: 0.5 },
    });

    blocks.forEach((b, i) => {
      if (i === 0) return;
      const at = (i / blocks.length) * 1; // 0.33, 0.66
      tl.to(blocks[i - 1], { opacity: 0, y: -40, ease: 'none', duration: 0.12 }, at)
        .to(b, { opacity: 1, y: 0, ease: 'none', duration: 0.12 }, at + 0.04);
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [tier, canPin]);

  return (
    <Pinned end="+=180%" className={tier === 'C' || !canPin ? 'pos--unpinned' : ''}>
      <div className="pos section--dark" ref={rootRef}>
        <Grain />
        <div className="pos__media" aria-hidden="true">
          <Image
            src="/dno/section-positioning.webp"
            alt=""
            fill
            sizes="100vw"
            className="pos__img"
            loading="lazy"
          />
        </div>

        <div className="container pos__inner">
          <Eyebrow className="pos__eyebrow">Why DNO</Eyebrow>
          <div className="pos__blocks" ref={blocksRef}>
            {BLOCKS.map((b) => (
              <article className="pos__block" key={b.k}>
                <p className="mono-xs pos__k">{b.k}</p>
                <h2 className="h2 pos__t">{b.t}</h2>
                <p className="lead pos__d">{b.d}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Pinned>
  );
}
