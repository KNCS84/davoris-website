'use client';
import React, { useEffect, useRef, useState } from 'react';

/** Wraps a line-drawn SVG and triggers the stroke draw-on animation on scroll-in. */
export function IconDraw({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setDrawn(true);
            ob.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, []);

  return (
    <span ref={ref} className={`draw-icon ${drawn ? 'is-drawn' : ''} ${className}`.trim()} aria-hidden="true">
      {children}
    </span>
  );
}
