import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { ProjectsGrid } from '@/components/ProjectsGrid';
import { ClosingCta } from '@/components/ClosingCta';

export const metadata: Metadata = {
  title: 'Our Projects | Davoris Limited Civil Engineering, Nigeria',
  description:
    'Explore selected civil engineering projects delivered by Davoris Limited across municipal infrastructure, land development, building engineering, and more.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        image="/images/projects-hero.png"
        label="SELECTED WORK"
        title="Work that serves communities and lasts."
        subhead="Selected projects across municipal infrastructure, land development, building engineering, and transportation — delivered by Davoris Limited across Nigeria."
      />

      <section className="section">
        <div className="container">
          <p className="eyebrow mb-3">PLACEHOLDER ENTRIES — REPLACE WITH REAL PROJECTS</p>
          <ProjectsGrid />
        </div>
      </section>

      <ClosingCta
        h2="Have a project in mind?"
        body="Tell us what you’re building and we’ll show you how Davoris can help deliver it with precision and accountability."
        cta="Request a consultation"
      />
    </>
  );
}
