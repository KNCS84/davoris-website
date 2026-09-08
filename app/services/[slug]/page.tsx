import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES } from '@/content/services';
import { PageHero } from '@/components/PageHero';
import { Container } from '@/components/primitives/Container';
import { Section } from '@/components/primitives/Section';
import { Eyebrow } from '@/components/primitives/Eyebrow';
import { LineMask } from '@/components/motion/LineMask';
import { Button } from '@/components/primitives/Button';
import { CTA } from '@/content/site';

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
  const s = SERVICES.find((x) => x.slug === params.slug);
  if (!s) notFound();

  return (
    <>
      <PageHero eyebrow={`Service ${s.number}`} titleLines={s.name.split(' ')} lead={s.lead} image={s.image.replace('.png', '.webp')} alt="" />

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

          <div className="craft__specs mt-block" style={{ borderLeft: '1px solid var(--rule-dark)' }}>
            <p className="mono-xs craft__specs-title">Typical parameters</p>
            <ul>
              {s.typical.map((t) => (
                <li className="craft__spec" key={t.label}>
                  <span className="mono-xs">{t.label}</span>
                  <span className="mono craft__spec-v">{t.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-block">
            <Button href={CTA.href}>{CTA.label}</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
