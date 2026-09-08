'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV, SITE, CTA } from '@/content/site';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="container nav__inner">
          <Link href="/" className="nav__brand display" aria-label={`${SITE.name} — home`}>
            {SITE.wordmark}
            <span className="nav__brand-suffix mono-xs">ENG</span>
          </Link>

          <nav className="nav__links" aria-label="Primary">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className={`nav__link mono-xs ${pathname === n.href ? 'is-active' : ''}`}>
                {n.label}
              </Link>
            ))}
          </nav>

          <Link href={CTA.href} className="nav__cta mono-xs">
            {CTA.label}
          </Link>

          <button
            className="nav__burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`nav-overlay ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <nav className="nav-overlay__list" aria-label="Mobile">
          {NAV.map((n, i) => (
            <Link key={n.href} href={n.href} className="nav-overlay__link h2" style={{ transitionDelay: `${i * 60}ms` }}>
              {n.label}
            </Link>
          ))}
          <Link href={CTA.href} className="nav-overlay__link h2 nav-overlay__cta" style={{ transitionDelay: `${NAV.length * 60}ms` }}>
            {CTA.label}
          </Link>
        </nav>
      </div>
    </>
  );
}
