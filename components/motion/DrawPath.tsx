/* ==========================================================================
   useDrawPath — animates stroke-dashoffset of every <path data-draw> inside
   a container, scrubbed to scroll. For networks, alignments, plans.
   ========================================================================== */
'use client';

import { useEffect, type RefObject } from 'react';
import { gsap, ScrollTrigger, EASE_MACHINE, DUR } from '@/lib/motion';
import { useTier } from '@/lib/perf';

export function useDrawPath(ref: RefObject<SVGSVGElement | null>, duration = DUR.glacial * 1.4) {
  const tier = useTier();

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    const paths = Array.from(svg.querySelectorAll<SVGPathElement>('[data-draw]'));
    if (!paths.length) return;

    const reduce = tier === 'C' || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      paths.forEach((p) => {
        p.style.strokeDasharray = 'none';
        p.style.strokeDashoffset = '0';
      });
      return;
    }

    paths.forEach((p) => {
      const len = p.getTotalLength();
      p.style.strokeDasharray = `${len}`;
      p.style.strokeDashoffset = `${len}`;
    });

    const tween = gsap.to(paths, {
      strokeDashoffset: 0,
      duration,
      ease: EASE_MACHINE,
      stagger: 0.12,
      scrollTrigger: { trigger: svg, start: 'top 78%', end: 'bottom 40%', scrub: 0.5 },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [ref, tier, duration]);
}
