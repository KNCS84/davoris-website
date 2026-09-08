/* ==========================================================================
   Footer — a TRUST surface. For regulated public-sector work the licence and
   registration block does real conversion work; it is not decoration.
   Values are client-supplied; absent values render as title-block fields.
   ========================================================================== */
import Link from 'next/link';
import { NAV, SITE, CTA_SECONDARY } from '@/content/site';
import { Field } from '@/components/primitives/Field';
import { Container } from '@/components/primitives/Container';

export function Footer() {
  return (
    <footer className="footer section--dark-alt">
      <Container>
        <div className="footer__grid">
          <div className="footer__col footer__col--brand">
            <p className="display footer__wordmark">{SITE.wordmark}</p>
            <p className="mono footer__sector">{SITE.sector}</p>
            <p className="body footer__positioning">{SITE.positioning}</p>
          </div>

          <div className="footer__col">
            <p className="eyebrow">Navigate</p>
            <ul className="footer__list">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="footer__link mono">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={CTA_SECONDARY.href} className="footer__link mono">
                  {CTA_SECONDARY.label}
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <p className="eyebrow">Contact</p>
            <ul className="footer__list mono">
              <li>{SITE.email ? <a href={`mailto:${SITE.email}`}>{SITE.email}</a> : <Field token="{{EMAIL}}" />}</li>
              <li>{SITE.phone ? <a href={SITE.phoneHref ?? '#'}>{SITE.phone}</a> : <Field token="{{PHONE}}" />}</li>
              <li>{SITE.addressLine1 ?? <Field token="{{ADDRESS_1}}" />}</li>
              <li>{SITE.addressLine2 ?? <Field token="{{ADDRESS_2}}" />}</li>
            </ul>
          </div>

          <div className="footer__col">
            <p className="eyebrow">Credentials</p>
            <ul className="footer__list mono">
              <li>{SITE.registration ?? <Field token="{{PE_FIRM_REG}}" />}</li>
              <li>{SITE.founded ? `Established ${SITE.founded}` : <Field token="{{FOUNDED}}" />}</li>
              <li>
                <Field token="{{DBE_WBE_CERTS}}" />
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__base">
          <p className="mono-xs">© {new Date().getFullYear()} {SITE.name}</p>
          <p className="mono-xs footer__rule">Drawn. Checked. Approved.</p>
        </div>
      </Container>
    </footer>
  );
}
