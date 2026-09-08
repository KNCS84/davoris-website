/* ==========================================================================
   HERO — "LINE TO LAND"
   A scroll-scrubbed state transition along one fixed camera path:
   SHEET (drafting) -> LIFT (wireframe extrusion) -> BUILT (the real street).
   The hero performs the value proposition instead of illustrating it.

   Tier A: pinned 300vh scrub crossfade.
   Tier B: unpinned; BUILT frame with a ClipWipe reveal + parallax.
   Tier C: static BUILT frame + SHEET overlay at low opacity.
   ========================================================================== */
'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap, ScrollTrigger } from '@/lib/motion';
import { useTier } from '@/lib/perf';
import { CharTrack } from '@/components/motion/CharTrack';
import { LineMask } from '@/components/motion/LineMask';
import { SITE } from '@/content/site';

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const sheetRef = useRef<HTMLDivElement | null>(null);
  const liftRef = useRef<HTMLDivElement | null>(null);
  const builtRef = useRef<HTMLDivElement | null>(null);
  const cueRef = useRef<HTMLDivElement | null>(null);
  const tier = useTier();

  useEffect(() => {
    const section = sectionRef.current;
    const sheet = sheetRef.current;
    const lift = liftRef.current;
    const built = builtRef.current;
    if (!section || !sheet || !lift || !built) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---- TIER C: static, complete, dignified ---- */
    if (tier === 'C' || reduce) {
      gsap.set([sheet], { opacity: 0.3, scale: 1 });
      gsap.set([lift], { opacity: 0, scale: 1 });
      gsap.set([built], { opacity: 1, scale: 1 });
      return;
    }

    /* ---- TIER B: unpinned clip-wipe + parallax on the BUILT frame ---- */
    if (tier === 'B') {
      gsap.set([sheet, lift], { opacity: 0 });
      gsap.set(built, { opacity: 1 });
      const wipe = gsap.fromTo(
        built,
        { clipPath: 'inset(0 0 100% 0)' },
        {
          clipPath: 'inset(0 0 0% 0)',
          ease: 'none',
          scrollTrigger: { trigger: section, start: 'top 80%', end: 'bottom 40%', scrub: true },
        }
      );
      const drift = gsap.fromTo(
        built,
        { scale: 1.12 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true },
        }
      );
      return () => {
        [wipe, drift].forEach((t) => {
          t.scrollTrigger?.kill();
          t.kill();
        });
      };
    }

    /* ---- TIER A: pinned scrub crossfade (the money shot) ---- */
    gsap.set(sheet, { opacity: 1, scale: 1 });
    gsap.set(lift, { opacity: 0, scale: 1.02 });
    gsap.set(built, { opacity: 0, scale: 1.1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=200%', // 300vh total pin range
        pin: true,
        scrub: 0.5,
        anticipatePin: 1,
      },
    });

    tl.to(sheet, { opacity: 0, scale: 1.06, ease: 'none', duration: 0.4 }, 0)
      .fromTo(lift, { opacity: 0 }, { opacity: 1, ease: 'none', duration: 0.28 }, 0.06)
      .to(lift, { opacity: 0, scale: 1.05, ease: 'none', duration: 0.3 }, 0.5)
      .fromTo(built, { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, ease: 'none', duration: 0.45 }, 0.48)
      .to(cueRef.current, { opacity: 0, ease: 'none', duration: 0.15 }, 0);

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === section) st.kill();
      });
    };
  }, [tier]);

  return (
    <section className="hero section--dark" ref={sectionRef} aria-label="DNO Engineering Consultants">
      <div className="hero__stage">
        <div className="hero__layer" ref={sheetRef}>
          <Image src="/dno/hero-sheet.webp" alt="" fill priority sizes="100vw" className="hero__img" />
        </div>
        <div className="hero__layer" ref={liftRef} aria-hidden="true">
          <Image src="/dno/hero-lift.webp" alt="" fill sizes="100vw" className="hero__img" loading="lazy" />
        </div>
        <div className="hero__layer" ref={builtRef}>
          <Image
            src="/dno/hero-built.webp"
            alt="A newly reconstructed municipal street at dawn, kerb and water main alignment complete"
            fill
            sizes="100vw"
            className="hero__img"
            loading="lazy"
          />
        </div>

        <div className="hero__scrim" aria-hidden="true" />

        <div className="container hero__content">
          <p className="eyebrow hero__eyebrow">Municipal · Water · Transportation · Federal</p>

          <h1 className="hero__title display">
            <CharTrack text="DNO" />
          </h1>

          <p className="hero__sub display">
            <LineMask as="span" lines={['ENGINEERING', 'CONSULTANTS']} className="hero__submask" />
          </p>

          <p className="lead hero__lead">{SITE.positioning}</p>

          <div className="hero__cue" ref={cueRef}>
            <span className="mono-xs">Scroll — sheet to street</span>
            <span className="hero__cue-line" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
