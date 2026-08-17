import Link from 'next/link';
import { SITE, FOOTER_SERVICES, NAV } from '@/content';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__logo">{SITE.company}</div>
            <p className="footer__tag">{SITE.tagline}</p>
            <p className="footer__tag mt-3">
              {SITE.address.line1}
              <br />
              {SITE.address.line2}
            </p>
            <p className="footer__tag mt-3">
              Email: {SITE.email}
              <br />
              Phone: {SITE.phone}
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul style={{ display: 'grid', gap: '0.6rem' }}>
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul style={{ display: 'grid', gap: '0.6rem' }}>
              {FOOTER_SERVICES.map((s) => (
                <li key={s.href}>
                  <Link href={s.href}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          © 2026 {SITE.company}. All rights reserved. Designed and Powered by {SITE.credits.replace('Designed and Powered by ', '')}
        </div>
      </div>
    </footer>
  );
}
