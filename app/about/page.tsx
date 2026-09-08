import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Container } from '@/components/primitives/Container';
import { Section } from '@/components/primitives/Section';
import { Eyebrow } from '@/components/primitives/Eyebrow';
import { LineMask } from '@/components/motion/LineMask';
import { Field } from '@/components/primitives/Field';
import { Positioning } from '@/components/sections/Positioning';
import { Craft } from '@/components/sections/Craft';
import { Commitments } from '@/components/sections/Proof';
import { Engagement } from '@/components/sections/Engagement';
import { PageCta } from '@/components/sections/PageCta';
import { FRAMEWORKS } from '@/content/proof';
import { SITE } from '@/content/site';

export const metadata: Metadata = {
  title: 'Approach',
  description:
    'How DNO works: one accountable team, approval engineered in from the first line, rigour visible in the drawing set, and documentation that survives audit.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Approach"
        titleLines={['Drawn. Checked.', 'Approved.']}
        lead="A practice built on the discipline of the drawing set — and on standing behind it."
        image="/dno/section-craft.webp"
        alt=""
      />

      <Positioning />
      <Craft />
      <Commitments />
      <Engagement />

      <Section tone="dark" ruleTop>
        <Container>
          <div className="grid">
            <div className="col-5">
              <Eyebrow>Credentials</Eyebrow>
              <LineMask as="h2" className="h2 mt-stack" lines={['On the record,', 'in full.']} />
              <p className="lead mt-stack">
                Registrations, certifications, and insurance are stated plainly — or left as open fields
                until the client supplies them. Nothing is implied.
              </p>
            </div>
            <div className="col-7">
              <ul className="cred__list mt-stack">
                <li className="cred__row">
                  <span className="mono-xs cred__k">Firm registration</span>
                  <span className="mono">{SITE.registration ?? <Field token="{{PE_FIRM_REG}}" />}</span>
                </li>
                <li className="cred__row">
                  <span className="mono-xs cred__k">Established</span>
                  <span className="mono">{SITE.founded ?? <Field token="{{FOUNDED}}" />}</span>
                </li>
                <li className="cred__row">
                  <span className="mono-xs cred__k">Certifications</span>
                  <span className="mono">{<Field token="{{DBE_WBE_CERTS}}" />}</span>
                </li>
                <li className="cred__row">
                  <span className="mono-xs cred__k">Insurance</span>
                  <span className="mono">{<Field token="{{EPL_PEO_COI}}" />}</span>
                </li>
                <li className="cred__row">
                  <span className="mono-xs cred__k">Frameworks navigated</span>
                  <span className="mono">{FRAMEWORKS.join(' · ')}</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <PageCta lines={['Meet the team', 'behind the sheet.']} />
    </>
  );
}
