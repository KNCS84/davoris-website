/* ==========================================================================
   CharTrack — per-character opacity + letter-spacing driven by scroll.
   Used ONCE: the brand name in the hero. Anywhere else it is a tic.
   ========================================================================== */
'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, DUR } from '@/lib/motion';
import { useTier } from '@/lib/perf';

interface Props {
  text: string;
  className?: string;
  /** ScrollTrigger end relative to the trigger, e.g. '+=40%' */
  end?: string;
  scrub?: boolean;
}

export function CharTrack({ text, className = '', end = '+=45%', scrub = true }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const tier = useTier();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const chars = el.querySelectorAll<HTMLElement>('.ct-char');

    if (tier === 'C' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(chars, { opacity: 1, letterSpacing: '0em', clearProps: 'all' });
      return;
    }

    const tween = gsap.fromTo(
      chars,
      { opacity: 0, letterSpacing: '0.22em' },
      {
        opacity: 1,
        letterSpacing: '-0.02em',
        duration: DUR.glacial,
        stagger: 0.04,
        ease: 'power2.out',
        scrollTrigger: scrub
          ? { trigger: el, start: 'top 90%', end, scrub: 0.4 }
          : { trigger: el, start: 'top 88%', once: true },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [tier, end, scrub]);

  return (
    <span ref={ref} className={`chartrack ${className}`} aria-label={text}>
      {text.split('').map((c, i) => (
        <span className="ct-char" key={i} aria-hidden="true">
          {c === ' ' ? '\u00A0' : c}
        </span>
      ))}
    </span>
  );
}
