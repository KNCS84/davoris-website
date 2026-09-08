/* ==========================================================================
   ScrambleDecode — text resolves from a technical glyph pool. Used ONCE.
   ========================================================================== */
'use client';

import { useEffect, useRef } from 'react';
import { useTier } from '@/lib/perf';

const POOL = '01/\\<>+*#—=·:';

export function ScrambleDecode({ text, className = '' }: { text: string; className?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const tier = useTier();
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = tier === 'C' || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      el.textContent = text;
      return;
    }

    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || done.current) return;
        done.current = true;
        const frames = 34;
        let f = 0;
        const tick = () => {
          f += 1;
          const progress = f / frames;
          el.textContent = text
            .split('')
            .map((ch, i) => {
              if (ch === ' ') return ' ';
              if (i / text.length < progress) return ch;
              return POOL[Math.floor(Math.random() * POOL.length)];
            })
            .join('');
          if (f < frames) raf = requestAnimationFrame(tick);
          else el.textContent = text;
        };
        raf = requestAnimationFrame(tick);
        io.disconnect();
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [text, tier]);

  return (
    <span ref={ref} className={`nums ${className}`}>
      {text}
    </span>
  );
}
