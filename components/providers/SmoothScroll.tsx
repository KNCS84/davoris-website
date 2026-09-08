/* ==========================================================================
   SmoothScroll — Lenis, one instance, synced to the GSAP ticker.
   ONE shared RAF loop. Two competing scroll loops is the most common cause
   of scroll jank and is invisible in code review.
   ========================================================================== */
'use client';

import { useEffect, type ReactNode } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger, configureMotion } from '@/lib/motion';
import { detectTier, setTier, stepDown, getTier, startFpsProbe } from '@/lib/perf';

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    configureMotion();

    // Resolve the real capability tier now that we're on the client.
    setTier(detectTier());

    let lenis: Lenis | null = null;
    let stopProbe: (() => void) | null = null;
    let tickerFn: ((t: number) => void) | null = null;

    const setup = () => {
      const tier = getTier();
      if (tier === 'C') return; // native scroll; ScrollTrigger still works

      lenis = new Lenis({
        lerp: 0.09,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.6,
        smoothWheel: true,
      });

      // Lenis drives; GSAP's ticker is synced to it. One RAF loop.
      tickerFn = (time: number) => lenis?.raf(time * 1000);
      gsap.ticker.add(tickerFn);
      gsap.ticker.lagSmoothing(0);

      lenis.on('scroll', ScrollTrigger.update);
    };

    const teardown = () => {
      if (tickerFn) gsap.ticker.remove(tickerFn);
      lenis?.destroy();
      lenis = null;
      tickerFn = null;
    };

    setup();

    // Runtime FPS probe: rescue the site if it can't hold the frame rate.
    stopProbe = startFpsProbe(() => {
      const next = stepDown(getTier());
      setTier(next);
      teardown();
      setup();
      ScrollTrigger.refresh();
    });

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      stopProbe?.();
      teardown();
    };
  }, []);

  return <>{children}</>;
}
