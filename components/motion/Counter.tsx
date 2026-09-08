/* ==========================================================================
   Counter — counts up once on enter, easeOutExpo, tabular numerals.
   If value is null (client-supplied pending) it renders a drawing
   title-block field instead of inventing a number. No layout shift.
   ========================================================================== */
'use client';

import { useEffect, useRef } from 'react';
import { useTier } from '@/lib/perf';
import { Field } from '@/components/primitives/Field';

interface Props {
  value: number | null;
  token?: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function Counter({ value, token, prefix = '', suffix = '', duration = 1600, className = '' }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const tier = useTier();
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || value == null) return;

    const reduce = tier === 'C' || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      el.textContent = `${prefix}${value}${suffix}`;
      return;
    }

    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return;
        started.current = true;
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - t0) / duration, 1);
          const eased = 1 - Math.pow(2, -10 * p); // easeOutExpo
          el.textContent = `${prefix}${Math.round(eased * value)}${p === 1 ? suffix : suffix}`;
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        io.disconnect();
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, prefix, suffix, duration, tier]);

  if (value == null) {
    return <Field token={token ?? '{{VALUE}}'} className={className} />;
  }
  return (
    <span ref={ref} className={`nums ${className}`}>
      {prefix}0{suffix}
    </span>
  );
}
