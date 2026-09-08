/* ==========================================================================
   Button — label is ALWAYS --on-accent on the accent fill (6.82:1).
   White-on-accent is non-compliant (2.87:1) and is never used.
   ========================================================================== */
import Link from 'next/link';
import type { ReactNode } from 'react';

interface Props {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'ghost';
  children: ReactNode;
  className?: string;
  type?: 'button' | 'submit';
}

export function Button({ href, onClick, variant = 'primary', children, className = '', type = 'button' }: Props) {
  const cls = `btn btn--${variant} mono-xs ${className}`;
  const inner = (
    <>
      <span className="btn__label">{children}</span>
      <span className="btn__arrow" aria-hidden="true">
        →
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cls} onClick={onClick}>
        {inner}
      </Link>
    );
  }
  return (
    <button type={type} className={cls} onClick={onClick}>
      {inner}
    </button>
  );
}
