/* ==========================================================================
   CLOSE — one call to action. Offering three choices here loses all three.
   ========================================================================== */
import Image from 'next/image';
import { Parallax } from '@/components/motion/Parallax';
import { Grain } from '@/components/motion/Grain';
import { LineMask } from '@/components/motion/LineMask';
import { ScrambleDecode } from '@/components/motion/ScrambleDecode';
import { MagneticButton } from '@/components/motion/MagneticButton';
import { Button } from '@/components/primitives/Button';
import { Eyebrow } from '@/components/primitives/Eyebrow';
import { Container } from '@/components/primitives/Container';
import { CTA, CTA_SECONDARY } from '@/content/site';

export function Close() {
  return (
    <section className="section section--dark close" id="contact-cta">
      <Parallax className="close__media" >
        <div data-speed="0.12" className="close__media-inner">
          <Image
            src="/dno/section-close.webp"
            alt=""
            fill
            sizes="100vw"
            loading="lazy"
            className="close__img"
          />
        </div>
      </Parallax>
      <div className="close__scrim" aria-hidden="true" />
      <Grain />

      <Container className="close__inner">
        <Eyebrow>Next</Eyebrow>
        <LineMask as="h2" className="display close__title mt-stack" lines={["Bring us the project", "that can't fail."]} />
        <p className="lead mt-stack">
          If it is technically demanding, schedule-critical, or mission-critical — that is where we are most useful.
        </p>

        <div className="close__cta mt-block">
          <MagneticButton>
            <Button href={CTA.href}>{CTA.label}</Button>
          </MagneticButton>
          <Button href={CTA_SECONDARY.href} variant="ghost">
            {CTA_SECONDARY.label}
          </Button>
        </div>

        <p className="mono-xs close__promise mt-block">
          <ScrambleDecode text="SAME-WEEK RESPONSE TO QUALIFIED INQUIRIES" />
        </p>
      </Container>
    </section>
  );
}
