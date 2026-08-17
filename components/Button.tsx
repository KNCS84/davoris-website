import Link from 'next/link';
import React from 'react';
import { ArrowRight } from './icons';

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: 'orange' | 'ghost';
  arrow?: boolean;
  className?: string;
};

/** Orange filled CTA or ghost link with an inline-SVG arrow. Never Unicode arrows. */
export function Button({ href, children, variant = 'orange', arrow = true, className = '' }: Props) {
  const isInternal = href.startsWith('/');
  const cls = variant === 'orange' ? `btn btn--orange ${className}`.trim() : `link-ghost ${className}`.trim();

  const content = (
    <>
      <span>{children}</span>
      {arrow && variant === 'orange' && <ArrowRight width={16} />}
      {arrow && variant === 'ghost' && (
        <span className="arrow" aria-hidden="true">
          <ArrowRight width={14} />
        </span>
      )}
    </>
  );

  if (isInternal) {
    return (
      <Link href={href} className={cls}>
        {content}
      </Link>
    );
  }
  return (
    <a href={href} className={cls}>
      {content}
    </a>
  );
}
