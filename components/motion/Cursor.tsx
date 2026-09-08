/* ==========================================================================
   Cursor — custom cursor + contextual label. Desktop hover-only.
   Mounted only at Tier A on (hover:hover) and (pointer:fine).
   ========================================================================== */
'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/motion';
import { useTier } from '@/lib/perf';

export function Cursor() {
  const tier = useTier();
  const dotRef = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLSpanElement | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(
      tier === 'A' && window.matchMedia('(hover: hover) and (pointer: fine)').matches
    );
  }, [tier]);

  useEffect(() => {
    if (!enabled) return;
    const dot = dotRef.current;
    if (!dot) return;

    const x = gsap.quickTo(dot, 'x', { duration: 0.16, ease: 'power3.out' });
    const y = gsap.quickTo(dot, 'y', { duration: 0.16, ease: 'power3.out' });

    const move = (e: PointerEvent) => {
      x(e.clientX);
      y(e.clientY);
    };

    const over = (e: Event) => {
      const t = (e.target as HTMLElement).closest('[data-cursor]') as HTMLElement | null;
      if (t) {
        dot.classList.add('cursor--active');
        if (labelRef.current) labelRef.current.textContent = t.getAttribute('data-cursor') || '';
      } else {
        dot.classList.remove('cursor--active');
        if (labelRef.current) labelRef.current.textContent = '';
      }
    };

    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerover', over);
    return () => {
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerover', over);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div className="cursor" ref={dotRef} aria-hidden="true">
      <span className="cursor__label mono-xs" ref={labelRef} />
    </div>
  );
}
