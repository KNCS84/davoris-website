import type { Metadata } from 'next';
import { PROJECTS } from '@/content/projects';
import { PageHero } from '@/components/PageHero';
import { Container } from '@/components/primitives/Container';
import { Section } from '@/components/primitives/Section';
import { Field } from '@/components/primitives/Field';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Representative scope across water, streets, master planning, and design-build delivery. Client-attributed records are released on approval.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        titleLines={['Systems that', "can't afford to fail."]}
        lead="Representative scope. Client-attributed records release on approval."
        image="/dno/section-proof.webp"
        alt=""
      />

      <Section tone="dark">
        <Container>
          <div className="proj__grid">
            {PROJECTS.map((p) => (
              <Link className="proj__card" href={`/services/${p.serviceSlug}`} key={p.slug} data-cursor="View service">
                <div className="proj__media">
                  <Image src={p.image.replace('.png', '.webp')} alt={p.title} fill sizes="(max-width:900px) 100vw, 50vw" loading="lazy" />
                  {p.kind === 'representative' && (
                    <span className="proj__tag mono-xs">Representative scope — not a client record</span>
                  )}
                </div>
                <h2 className="h3 mt-stack">{p.title}</h2>
                <p className="mono mt-inline" style={{ color: 'var(--muted-on-dark)' }}>
                  {p.scope}
                </p>
                <div className="proj__params">
                  {p.parameters.map((par) => (
                    <div className="proj__param mono-xs" key={par.label}>
                      <span className="proj__param-k">{par.label}</span>
                      <span>{par.value}</span>
                    </div>
                  ))}
                  <div className="proj__param mono-xs">
                    <span className="proj__param-k">Client / location</span>
                    {p.client ? <span>{p.client}</span> : <Field token="{{ON APPROVAL}}" />}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
