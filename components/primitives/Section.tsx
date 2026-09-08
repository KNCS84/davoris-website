import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  id?: string;
  /** dark | dark-alt | light | light-alt */
  tone?: 'dark' | 'dark-alt' | 'light' | 'light-alt';
  className?: string;
  ruleTop?: boolean;
}

export function Section({ children, id, tone = 'dark', className = '', ruleTop = false }: Props) {
  const toneClass = {
    dark: 'section--dark',
    'dark-alt': 'section--dark-alt',
    light: 'section--light',
    'light-alt': 'section--light-alt',
  }[tone];
  const rule = ruleTop ? (tone.startsWith('light') ? 'rule-top-light' : 'rule-top-dark') : '';
  return (
    <section id={id} className={`section ${toneClass} ${rule} ${className}`}>
      {children}
    </section>
  );
}
