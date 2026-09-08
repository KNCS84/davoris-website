import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Container } from '@/components/primitives/Container';
import { Section } from '@/components/primitives/Section';
import { Eyebrow } from '@/components/primitives/Eyebrow';
import { LineMask } from '@/components/motion/LineMask';
import { WorkFilter } from '@/components/WorkFilter';
import { PageCta } from '@/components/sections/PageCta';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Representative scope across water, streets, drainage, master planning, design-build, and funding support. Client-attributed records release on approval.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        titleLines={['Systems that', "can't afford to fail."]}
        lead="Eight representative records across the practice. Filter by service line."
        image="/dno/section-proof.webp"
        alt=""
      />

      <Section tone="dark">
        <Container>
          <Eyebrow>Archive</Eyebrow>
          <LineMask as="h2" className="h2 mt-stack" lines={['The work,', 'by line.']} />
          <div className="mt-block">
            <WorkFilter />
          </div>
        </Container>
      </Section>

      <PageCta lines={['Your project could', 'be the next record.']} />
    </>
  );
}
