/* ==========================================================================
   LineMask — THE house reveal. Replaces fade-up sitewide.
   Each line is wrapped in overflow:hidden; the inner span rises y:110% -> 0.
   Lines are passed explicitly (deterministic; no measurement bugs).
   CSS arms the hidden state ONLY under html.js so no-JS shows everything.
   ========================================================================== */
'use client';

import { useEffect, useRef, type ElementType } from 'react';
import { gsap, ScrollTrigger, EASE_OUT, DUR, STAGGER } from '@/lib/motion';
import { useTier } from '@/lib/perf';

interface Props {
  lines: string[];
  as?: ElementType;
  className?: string;
  delay?: number;
  once?: boolean;
  /** Animate on mount instead of on scroll (for above-the-fold content). */
  immediate?: boolean;
}

export function LineMask({ lines, as: Tag = 'h2', className = '', delay = 0, once = true, immediate = false }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const tier = useTier();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const inners = el.querySelectorAll<HTMLElement>('.lm-inner');

    // Tier C / reduced motion: content simply visible.
    if (tier === 'C' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(inners, { yPercent: 0, clearProps: 'transform' });
      return;
    }

    gsap.set(inners, { yPercent: 110 });

    if (immediate) {
      const t = gsap.to(inners, {
        yPercent: 0,
        duration: DUR.slow * 0.9,
        ease: EASE_OUT,
        stagger: STAGGER.sibling,
        delay: delay + 0.15,
      });
      return () => t.kill();
    }

    const tween = gsap.to(inners, {
      yPercent: 0,
      duration: DUR.slow * 0.9,
      ease: EASE_OUT,
      stagger: STAGGER.sibling,
      delay,
      scrollTrigger: { trigger: el, start: 'top 86%', once },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [tier, delay, once, immediate]);

  return (
    <Tag ref={ref as never} className={className}>
      {lines.map((line, i) => (
        <span className="lm-line" key={i} aria-hidden={i > 0 ? undefined : undefined}>
          <span className="lm-inner">{line}</span>
        </span>
      ))}
    </Tag>
  );
}
