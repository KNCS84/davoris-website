import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SERVICES } from '@/content/services';
import { PageHero } from '@/components/PageHero';
import { Container } from '@/components/primitives/Container';
import { Section } from '@/components/primitives/Section';
import { Eyebrow } from '@/components/primitives/Eyebrow';
import { LineMask } from '@/components/motion/LineMask';
import { PageCta } from '@/components/sections/PageCta';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const s = SERVICES.find((x) => x.slug === params.slug);
  if (!s) return { title: 'Service not found' };
  return { title: s.name, description: s.lead };
}

export default function ServiceDetailPage({ params }: Props) {
  const idx = SERVICES.findIndex((x) => x.slug === params.slug);
  if (idx === -1) notFound();
  const s = SERVICES[idx];
  const related = [SERVICES[(idx + 1) % SERVICES.length], SERVICES[(idx + 2) % SERVICES.length]];

  return (
    <>
      <PageHero
        eyebrow={`Service ${s.number}`}
        titleLines={s.name.split(' ')}
        lead={s.lead}
        image={s.image}
        alt=""
      />

      <Section tone="light">
        <Container>
          <div className="svc__meta">
            <div>
              <Eyebrow>Overview</Eyebrow>
              {s.overview.map((p, i) => (
                <p className="body mt-stack" key={i}>
                  {p}
                </p>
              ))}
            </div>
            <div>
              <Eyebrow>Deliverables</Eyebrow>
              <ul className="svc__list mt-stack">
                {s.deliverables.map((d) => (
                  <li className="mono" key={d}>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="dark" ruleTop>
        <Container>
          <Eyebrow>Process</Eyebrow>
          <div className="svc__process mt-block">
            {s.process.map((p) => (
              <div key={p.num}>
                <p className="svc__process-n mono-xs">{p.num}</p>
                <p className="h4 mt-inline">{p.title}</p>
              </div>
            ))}
          </div>

          <div className="craft__specs mt-block">
            <p className="mono-xs craft__specs-title">Typical parameters</p>
            <ul>
              {s.typical.map((t) => (
                <li className="craft__spec" key={t.label}>
                  <span className="mono-xs">{t.label}</span>
                  <span className="mono craft__spec-v">{t.value}</span>
                </li>
              ))}
            </ul>
            <p className="mono-xs mt-stack" style={{ color: 'var(--muted-on-dark)' }}>
              Values are industry-typical design parameters, not project-specific claims.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="light-alt" ruleTop>
        <Container>
          <Eyebrow>Related lines</Eyebrow>
          <ul className="related mt-stack">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/services/${r.slug}`} className="related__link" data-cursor="Open service">
                  <span className="mono-xs related__num">{r.number}</span>
                  <span className="h4 related__name">{r.name}</span>
                  <span className="mono related__card">{r.card}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <PageCta lines={['Scope this line', 'with us.']} />
    </>
  );
}
