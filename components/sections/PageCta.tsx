/* ==========================================================================
   PageCta — the slim closing band for every standalone page, so no page
   dead-ends. One primary action, one secondary. Never three.
   ========================================================================== */
import { Grain } from '@/components/motion/Grain';
import { LineMask } from '@/components/motion/LineMask';
import { MagneticButton } from '@/components/motion/MagneticButton';
import { Button } from '@/components/primitives/Button';
import { Eyebrow } from '@/components/primitives/Eyebrow';
import { Container } from '@/components/primitives/Container';
import { CTA, CTA_SECONDARY } from '@/content/site';

export function PageCta({ lines = ['Bring us the project', "that can't fail."] }: { lines?: string[] }) {
  return (
    <section className="section section--dark pagecta">
      <Grain />
      <Container>
        <Eyebrow>Next</Eyebrow>
        <LineMask as="h2" className="h2 pagecta__title mt-stack" lines={lines} />
        <div className="pagecta__cta mt-block">
          <MagneticButton>
            <Button href={CTA.href}>{CTA.label}</Button>
          </MagneticButton>
          <Button href={CTA_SECONDARY.href} variant="ghost">
            {CTA_SECONDARY.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
