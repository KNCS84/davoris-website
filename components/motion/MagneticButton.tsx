/* ==========================================================================
   MagneticButton — the CTA eases toward the cursor within ~80px, springs
   back. Primary CTA only, desktop only.
   ========================================================================== */
'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { gsap } from '@/lib/motion';
import { useTier } from '@/lib/perf';

export function MagneticButton({ children, strength = 0.35 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const tier = useTier();

  useEffect(() => {
    const el = ref.current;
    if (!el || tier !== 'A') return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist < 80) {
        gsap.to(el, { x: dx * strength, y: dy * strength, duration: 0.4, ease: 'power3.out' });
      } else {
        gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,0.5)' });
      }
    };
    const onLeave = () => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,0.5)' });

    window.addEventListener('pointermove', onMove, { passive: true });
    el.addEventListener('pointerleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
      gsap.killTweensOf(el);
    };
  }, [tier, strength]);

  return (
    <span className="magnetic" ref={ref}>
      {children}
    </span>
  );
}
