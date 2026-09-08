/* ==========================================================================
   CAPABILITIES — NUMBERED-INDEX + LINE-MASK, on a light ground.
   Six service lines as an index. Hover expands a row and floats a preview
   image at the cursor (Tier A desktop only). No icon-per-card grid.
   ========================================================================== */
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from '@/lib/motion';
import { useTier } from '@/lib/perf';
import { SERVICES } from '@/content/services';
import { Container } from '@/components/primitives/Container';
import { Eyebrow } from '@/components/primitives/Eyebrow';
import { LineMask } from '@/components/motion/LineMask';

export function Capabilities() {
  const previewRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState<number | null>(null);
  const tier = useTier();
  const hoverable = tier === 'A';

  useEffect(() => {
    const el = previewRef.current;
    if (!el || !hoverable) return;
    const x = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' });
    const y = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' });
    const move = (e: PointerEvent) => {
      x(e.clientX);
      y(e.clientY);
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, [hoverable]);

  return (
    <section className="section section--light cap" id="services">
      <Container>
        <Eyebrow>What we do</Eyebrow>
        <LineMask as="h2" className="h2 cap__title mt-stack" lines={['Six lines.', 'One accountable team.']} />

        <ul className="cap__list mt-block">
          {SERVICES.map((s, i) => (
            <li
              key={s.slug}
              className="cap__row"
              onPointerEnter={() => hoverable && setActive(i)}
              onPointerLeave={() => hoverable && setActive(null)}
            >
              <Link href={`/services/${s.slug}`} className="cap__link" data-cursor="View service">
                <span className="cap__num mono-xs">{s.number}</span>
                <span className="cap__name h3">{s.name}</span>
                <span className="cap__card mono">{s.card}</span>
                <span className="cap__arrow mono-xs" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>

      {/* Floating preview (desktop hover only) */}
      {hoverable && (
        <div className="cap__preview" ref={previewRef} aria-hidden="true" data-active={active !== null}>
          {SERVICES.map((s, i) => (
            <div className="cap__preview-img" key={s.slug} data-on={active === i}>
              <Image src={s.image.replace('.png', '.webp')} alt="" fill sizes="360px" />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
