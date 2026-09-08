/* ==========================================================================
   lib/perf.ts — capability detection + degradation tier resolution
   Order matters: reduced-motion wins absolutely and is never overridden.
   ========================================================================== */
'use client';

import { useSyncExternalStore, useEffect, useState } from 'react';

export type Tier = 'A' | 'B' | 'C';

const ORDER: Tier[] = ['A', 'B', 'C'];

export function detectTier(): Tier {
  if (typeof window === 'undefined') return 'A';

  // 1. Reduced motion -> Tier C, immediately, no override.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return 'C';

  // 2. Data-saver / slow connection -> Tier C
  const conn = (navigator as unknown as { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
  if (conn?.saveData) return 'C';
  if (conn?.effectiveType && ['slow-2g', '2g', '3g'].includes(conn.effectiveType)) return 'C';

  let tier: Tier = 'A';

  // 3. Low device memory -> at most B
  const mem = (navigator as unknown as { deviceMemory?: number }).deviceMemory;
  if (typeof mem === 'number' && mem < 4) tier = 'B';

  // 4. No hover / coarse pointer (touch) -> at most B
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) tier = 'B';

  return tier;
}

export function stepDown(t: Tier): Tier {
  const i = ORDER.indexOf(t);
  return ORDER[Math.min(i + 1, ORDER.length - 1)];
}

/* ---- tiny external store so any component can react to tier ---- */
let current: Tier = 'A';
const listeners = new Set<() => void>();

export function getTier(): Tier {
  return current;
}
export function setTier(t: Tier): void {
  if (t === current) return;
  current = t;
  listeners.forEach((l) => l());
}
function subscribe(cb: () => void): () => void {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

/** SSR-safe: server snapshot is always 'A'; client reconciles after hydration. */
export function useTier(): Tier {
  return useSyncExternalStore(subscribe, getTier, () => 'A');
}

/**
 * useCanPin — pinning needs vertical room. In short viewports (small laptops,
 * embedded preview panes ~480px) a 100svh pin leaves spacer gaps and stacked
 * absolute cards overlap. Below 700px height we serve the unpinned composition.
 */
export function useCanPin(): boolean {
  const tier = useTier();
  const [can, setCan] = useState(true);

  useEffect(() => {
    const compute = () =>
      setCan(
        tier !== 'C' &&
          window.innerHeight >= 700 &&
          !window.matchMedia('(prefers-reduced-motion: reduce)').matches
      );
    compute();
    window.addEventListener('resize', compute);
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    mq.addEventListener?.('change', compute);
    return () => {
      window.removeEventListener('resize', compute);
      mq.removeEventListener?.('change', compute);
    };
  }, [tier]);

  return can;
}

/* ---- runtime FPS probe: if <45fps for 2 continuous seconds, step down ---- */
export function startFpsProbe(onDowngrade: () => void): () => void {
  if (typeof window === 'undefined') return () => {};
  let raf = 0;
  let last = performance.now();
  let slowStart = 0;
  let stopped = false;

  const loop = (now: number) => {
    if (stopped) return;
    const dt = now - last;
    last = now;
    const fps = 1000 / Math.max(dt, 1);
    if (fps < 45) {
      if (!slowStart) slowStart = now;
      else if (now - slowStart > 2000) {
        onDowngrade();
        slowStart = 0; // re-arm after a downgrade
      }
    } else {
      slowStart = 0;
    }
    raf = requestAnimationFrame(loop);
  };
  raf = requestAnimationFrame(loop);
  return () => {
    stopped = true;
    cancelAnimationFrame(raf);
  };
}
