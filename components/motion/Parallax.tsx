/* ==========================================================================
   Parallax — applies scrubbed yPercent to any child carrying data-speed.
   transform-only. Disabled at Tier C.
   ========================================================================== */
'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { gsap, ScrollTrigger } from '@/lib/motion';
import { useTier } from '@/lib/perf';

export function Parallax({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const tier = useTier();

  useEffect(() => {
    const root = ref.current;
    if (!root || tier === 'C') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const nodes = Array.from(root.querySelectorAll<HTMLElement>('[data-speed]'));
    const tweens = nodes.map((node) => {
      const speed = parseFloat(node.getAttribute('data-speed') || '0.2');
      return gsap.fromTo(
        node,
        { yPercent: -speed * 100 },
        {
          yPercent: speed * 100,
          ease: 'none',
          scrollTrigger: { trigger: root, start: 'top bottom', end: 'bottom top', scrub: true },
        }
      );
    });

    return () => {
      tweens.forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill();
      });
    };
  }, [tier]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
