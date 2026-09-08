import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ALL_PROJECTS } from '@/content/projects';
import { SERVICES } from '@/content/services';
import { PageHero } from '@/components/PageHero';
import { Container } from '@/components/primitives/Container';
import { Section } from '@/components/primitives/Section';
import { Eyebrow } from '@/components/primitives/Eyebrow';
import { Field } from '@/components/primitives/Field';
import { ProjectCard } from '@/components/ProjectCard';
import { PageCta } from '@/components/sections/PageCta';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return ALL_PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const p = ALL_PROJECTS.find((x) => x.slug === params.slug);
  if (!p) return { title: 'Record not found' };
  return { title: p.title, description: p.scope };
}

export default function ProjectDetailPage({ params }: Props) {
  const idx = ALL_PROJECTS.findIndex((x) => x.slug === params.slug);
  if (idx === -1) notFound();
  const p = ALL_PROJECTS[idx];
  const service = SERVICES.find((s) => s.slug === p.serviceSlug);
  const related = [ALL_PROJECTS[(idx + 1) % ALL_PROJECTS.length], ALL_PROJECTS[(idx + 2) % ALL_PROJECTS.length]];

  return (
    <>
      <PageHero eyebrow="Project record" titleLines={p.title.split(' ').slice(0, 3)} lead={p.scope} image={p.image} alt="" />

      <Section tone="light">
        <Container>
          <div className="svc__meta">
            <div>
              <Eyebrow>Scope</Eyebrow>
              <p className="body mt-stack">
                {p.kind === 'representative'
                  ? 'A representative record showing the shape of this work: typical scope, typical parameters, typical delivery. It is not a client-attributed project.'
                  : 'A client-attributed record released with approval.'}
              </p>
              <p className="body mt-stack">
                {service ? `Delivered under our ${service.name} line, using that line's process and documentation standards.` : ''}
              </p>
              {service && (
                <p className="mt-stack">
                  <Link href={`/services/${service.slug}`} className="mono-xs" style={{ color: 'var(--accent-ink)' }}>
                    View {service.name} →
                  </Link>
                </p>
              )}
            </div>
            <div>
              <Eyebrow>Record fields</Eyebrow>
              <ul className="footer__list mono mt-stack">
                <li>Client — {p.client ?? <Field token="{{ON APPROVAL}}" />}</li>
                <li>Location — {p.location ?? <Field token="{{ON APPROVAL}}" />}</li>
                <li>Value — {p.value ?? <Field token="{{ON APPROVAL}}" />}</li>
                <li>Year — {p.year ?? <Field token="{{ON APPROVAL}}" />}</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="dark" ruleTop>
        <Container>
          <Eyebrow>Typical parameters</Eyebrow>
          <ul className="craft__specs mt-stack" style={{ borderLeft: 'none', paddingLeft: 0 }}>
            {p.parameters.map((par) => (
              <li className="craft__spec" key={par.label}>
                <span className="mono-xs">{par.label}</span>
                <span className="mono craft__spec-v">{par.value}</span>
              </li>
            ))}
          </ul>
          <p className="mono-xs mt-stack" style={{ color: 'var(--muted-on-dark)' }}>
            Parameters are industry-typical for this scope, presented so the work can be judged on method
            rather than on credentials we have not been authorised to cite.
          </p>
        </Container>
      </Section>

      <Section tone="light-alt" ruleTop>
        <Container>
          <Eyebrow>More records</Eyebrow>
          <div className="proj__grid mt-block">
            {related.map((r) => (
              <ProjectCard key={r.slug} p={r} />
            ))}
          </div>
        </Container>
      </Section>

      <PageCta lines={['Discuss a project', 'like this one.']} />
    </>
  );
}
