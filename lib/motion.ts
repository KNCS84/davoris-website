/* ==========================================================================
   lib/motion.ts — shared easing, durations, GSAP global configuration.
   ONE shared RAF loop is established in SmoothScroll; here we only pin the
   house curves/durations so a library default can never leak in.
   ========================================================================== */
'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let configured = false;

export const EASE_OUT = 'power4.out';            // maps to cubic-bezier(0.16,1,0.3,1) family
export const EASE_MACHINE = 'power2.inOut';      // weighted, symmetric — machinery under load

export const DUR = {
  instant: 0.12,
  fast: 0.24,
  base: 0.6,
  slow: 1.0,
  glacial: 1.6,
} as const;

export const STAGGER = { sibling: 0.06, char: 0.04 } as const;

export function configureMotion(): void {
  if (configured || typeof window === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);
  // House defaults: time-based animation uses the house curve;
  // scrubbed animation is ALWAYS linear against scroll position.
  gsap.defaults({ ease: EASE_OUT, duration: DUR.base });
  // Note: scrubbed ScrollTriggers are linear against scroll position by
  // default; there is no ScrollTrigger.defaults({ease}) option.
  configured = true;
}

export { gsap, ScrollTrigger };
