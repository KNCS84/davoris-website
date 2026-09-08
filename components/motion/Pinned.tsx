/* ==========================================================================
   Pinned — ScrollTrigger pin wrapper. 2–4 uses sitewide, never more.
   Pinning every section destroys scroll rhythm and the reader's sense of
   position. Skipped entirely at Tier C (content stacks, fully readable).
   ========================================================================== */
'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { gsap, ScrollTrigger } from '@/lib/motion';
import { useTier } from '@/lib/perf';

interface Props {
  children: ReactNode;
  className?: string;
  /** extra scroll distance while pinned, e.g. '+=180%' */
  end?: string;
}

export function Pinned({ children, className = '', end = '+=180%' }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const tier = useTier();

  useEffect(() => {
    const el = ref.current;
    if (!el || tier === 'C') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top top',
      // Tier B gets a shorter pin range (simplified scrub).
      end: tier === 'B' ? '+=90%' : end,
      pin: true,
      anticipatePin: 1,
    });

    return () => st.kill();
  }, [tier, end]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
