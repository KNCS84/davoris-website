import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Container } from '@/components/primitives/Container';
import { Section } from '@/components/primitives/Section';
import { Eyebrow } from '@/components/primitives/Eyebrow';
import { LineMask } from '@/components/motion/LineMask';
import { Field } from '@/components/primitives/Field';
import { ContactForm } from '@/components/ContactForm';
import { Faq } from '@/components/sections/Faq';
import { FAQS_CONTACT } from '@/content/faqs';
import { SITE } from '@/content/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a project with DNO Engineering Consultants. Same-week response to qualified inquiries.',
};

const NEXT = [
  { n: '01', t: 'Response within the week.', d: 'A qualified inquiry gets a reply, usually a scoping call.' },
  { n: '02', t: 'Scope, fee, schedule in writing.', d: 'Or an honest referral if we are not the right firm.' },
  { n: '03', t: 'One team from there.', d: 'The people who scope it are the people who deliver it.' },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        titleLines={['Start the', 'conversation.']}
        lead="Tell us the problem. We will tell you whether we are the right firm for it."
        image="/dno/section-close.webp"
        alt=""
      />

      <Section tone="dark">
        <Container>
          <div className="grid">
            <div className="col-7">
              <Eyebrow>Project inquiry</Eyebrow>
              <div className="mt-block">
                <ContactForm />
              </div>
            </div>
            <div className="col-5">
              <Eyebrow>Direct</Eyebrow>
              <ul className="footer__list mono mt-stack">
                <li>{SITE.email ? <a href={`mailto:${SITE.email}`}>{SITE.email}</a> : <Field token="{{EMAIL}}" />}</li>
                <li>{SITE.phone ? <a href={SITE.phoneHref ?? '#'}>{SITE.phone}</a> : <Field token="{{PHONE}}" />}</li>
                <li>{SITE.addressLine1 ?? <Field token="{{ADDRESS_1}}" />}</li>
                <li>{SITE.addressLine2 ?? <Field token="{{ADDRESS_2}}" />}</li>
              </ul>
              <p className="mono-xs mt-block" style={{ color: 'var(--accent)' }}>
                Same-week response to qualified inquiries
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="light" ruleTop>
        <Container>
          <div className="grid">
            <div className="col-5">
              <Eyebrow>What happens next</Eyebrow>
              <LineMask as="h2" className="h2 mt-stack" lines={['No ambiguity,', 'by design.']} />
              <ul className="statement__list mt-block">
                {NEXT.map((s) => (
                  <li className="statement__row" key={s.n}>
                    <span className="statement__n mono-xs">{s.n}</span>
                    <h3 className="h4 statement__t">{s.t}</h3>
                    <p className="body statement__d">{s.d}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-7">
              <Eyebrow>Before you write</Eyebrow>
              <div className="mt-block">
                <Faq items={FAQS_CONTACT} />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
