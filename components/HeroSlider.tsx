'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { HERO_SLIDES } from '@/content';
import { Button } from './Button';
import { ChevronLeft, ChevronRight } from './icons';

const AUTOPLAY = 6000;
const TOTAL = HERO_SLIDES.length;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const bgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const reduce = useRef(false);

  useEffect(() => {
    reduce.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const go = useCallback((i: number) => setIndex(((i % TOTAL) + TOTAL) % TOTAL), []);
  const next = useCallback(() => setIndex((p) => (p + 1) % TOTAL), []);
  const prev = useCallback(() => setIndex((p) => (p - 1 + TOTAL) % TOTAL), []);

  // Autoplay (resets each slide / manual navigation)
  useEffect(() => {
    if (paused || reduce.current) return;
    const t = setInterval(() => setIndex((p) => (p + 1) % TOTAL), AUTOPLAY);
    return () => clearInterval(t);
  }, [paused, index]);

  // Scroll parallax — background moves slower than foreground
  useEffect(() => {
    if (reduce.current) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        bgRefs.current.forEach((el) => {
          if (el) el.style.transform = `translate3d(0, ${y * 0.25}px, -60px) scale(1.12)`;
        });
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const onMove = (e: React.MouseEvent) => {
    if (reduce.current || !stageRef.current) return;
    const r = stageRef.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    stageRef.current.style.transform = `rotateY(${px * 4}deg) rotateX(${-py * 4}deg)`;
  };
  const onLeave = () => {
    if (stageRef.current) stageRef.current.style.transform = '';
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prev();
    else if (e.key === 'ArrowRight') next();
  };

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label="Davoris capabilities"
      tabIndex={0}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        setPaused(false);
        onLeave();
      }}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onMouseMove={onMove}
      onKeyDown={onKey}
    >
      <div className="hero__stage" ref={stageRef}>
        {HERO_SLIDES.map((s, i) => (
          <div
            className={`hero__slide ${i === index ? 'hero__slide--active' : ''}`}
            key={i}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${TOTAL}`}
            aria-hidden={i !== index}
          >
            <div className="hero__base" />
            <div
              className="hero__bg"
              ref={(el) => {
                bgRefs.current[i] = el;
              }}
              style={{ backgroundImage: `url(${s.image})` }}
            />
            <div className="hero__overlay" />
          </div>
        ))}
      </div>

      <div className="container hero__content">
        {HERO_SLIDES.map((s, i) => (
          <div key={i} aria-hidden={i !== index} style={{ display: i === index ? 'block' : 'none' }}>
            <p className="eyebrow hero__eyebrow">{s.eyebrow}</p>
            <h2 className="display hero__headline">{s.headline}</h2>
            <p className="lead hero__subhead">{s.subhead}</p>
            <div className="hero__actions">
              <Button href="/services" variant="ghost">
                See our services
              </Button>
              <Button href="/contact" variant="orange">
                Request a consultation
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="container hero__controls">
        <div className="hero__dots" role="tablist" aria-label="Slides">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              className={`hero__dot ${i === index ? 'hero__dot--active' : ''}`}
              aria-label={`Go to slide ${i + 1}`}
              aria-selected={i === index}
              role="tab"
              onClick={() => go(i)}
            />
          ))}
        </div>
        <div className="hero__arrows">
          <button className="hero__arrow" aria-label="Previous slide" onClick={prev}>
            <ChevronLeft width={20} />
          </button>
          <button className="hero__arrow" aria-label="Next slide" onClick={next}>
            <ChevronRight width={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
