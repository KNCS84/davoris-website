'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SITE, NAV, CTA } from '@/content';
import { Button } from './Button';

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <>
      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="container nav__inner">
          <Link href="/" className="nav__logo" aria-label={`${SITE.company} home`}>
            {SITE.company}
          </Link>
          <nav className="nav__links" aria-label="Primary">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="nav__link"
                aria-current={isActive(n.href) ? 'page' : undefined}
              >
                {n.label}
              </Link>
            ))}
            <Button href={CTA.href} variant="orange" className="nav__cta">
              {CTA.label}
            </Button>
          </nav>
          <button
            className={`nav__burger ${open ? 'nav__burger--open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
      {open && (
        <div className="nav__mobile" role="dialog" aria-label="Mobile menu">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="nav__link">
              {n.label}
            </Link>
          ))}
          <Button href={CTA.href} variant="orange">
            {CTA.label}
          </Button>
        </div>
      )}
    </>
  );
}
