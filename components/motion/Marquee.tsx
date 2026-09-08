/* ==========================================================================
   Marquee — infinite kinetic ticker. EXACTLY ONE instance sitewide.
   The CSS keyframe owns the loop; scroll velocity adds a small independent
   skew/offset so speed "reacts" without ever jumping the loop.
   ========================================================================== */
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/motion';
import { useTier } from '@/lib/perf';

interface Props {
  items: string[];
  className?: string;
  duration?: number; // seconds per loop
}

export function Marquee({ items, className = '', duration = 38 }: Props) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const tier = useTier();

  useEffect(() => {
    const track = trackRef.current;
    if (!track || tier === 'C') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let lastY = window.scrollY;
    let vel = 0;
    const quick = gsap.quickTo(track, 'skewY', { duration: 0.5, ease: 'power3.out' });
    const onScroll = () => {
      const y = window.scrollY;
      const d = y - lastY;
      lastY = y;
      vel = vel * 0.8 + d * 0.2;
      quick(Math.max(-2.2, Math.min(2.2, vel * 0.06)));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [tier]);

  const row = (key: string) => (
    <div className="marquee__row" key={key} aria-hidden={key === 'b'}>
      {items.map((it, i) => (
        <span className="marquee__item mono-xs" key={i}>
          {it}
          <span className="marquee__sep" aria-hidden="true">
            /
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`marquee ${className}`} style={{ ['--marquee-dur' as string]: `${duration}s` }}>
      <div className="marquee__track" ref={trackRef}>
        {row('a')}
        {row('b')}
      </div>
    </div>
  );
}
