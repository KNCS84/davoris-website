import Link from 'next/link';
import { Hero } from '@/components/sections/Hero';
import { Statement } from '@/components/sections/Statement';
import { Capabilities } from '@/components/sections/Capabilities';
import { StatsStrip } from '@/components/sections/Proof';
import { MarqueeStrip } from '@/components/sections/MarqueeStrip';
import { Close } from '@/components/sections/Close';
import { ProjectCard } from '@/components/ProjectCard';
import { Container } from '@/components/primitives/Container';
import { Eyebrow } from '@/components/primitives/Eyebrow';
import { LineMask } from '@/components/motion/LineMask';
import { ALL_PROJECTS } from '@/content/projects';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Statement />
      <Capabilities />
      <StatsStrip />
      <MarqueeStrip />

      <section className="section section--light-alt">
        <Container>
          <div className="section-head-row">
            <div>
              <Eyebrow>Selected work</Eyebrow>
              <LineMask as="h2" className="h2 mt-stack" lines={['Representative scope.']} />
            </div>
            <Link href="/projects" className="mono-xs teaser__more" data-cursor="All work">
              All work →
            </Link>
          </div>
          <div className="proj__grid mt-block">
            {ALL_PROJECTS.slice(0, 4).map((p) => (
              <ProjectCard key={p.slug} p={p} />
            ))}
          </div>
        </Container>
      </section>

      <Close />
    </>
  );
}
