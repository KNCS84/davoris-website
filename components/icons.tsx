import React from 'react';

type IconProps = { width?: number; height?: number; className?: string; strokeWidth?: number };

/* All directional glyphs are inline SVG — never Unicode arrows. */
export function ArrowRight({ width = 18, height = width, className, strokeWidth = 1.75 }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight({ width = 18, height = width, className, strokeWidth = 1.75 }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M17 7v6" />
      <path d="M17 7h-6" />
    </svg>
  );
}

export function ChevronLeft({ width = 20, height = width, className, strokeWidth = 1.75 }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 5l-7 7 7 7" />
    </svg>
  );
}

export function ChevronRight({ width = 20, height = width, className, strokeWidth = 1.75 }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

/* Line-drawn pillar icons (stroke-based, draw-on animation) */
export function IconCompass({ width = 56, height = width, className, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 48 48" fill="none"
      stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="24" cy="24" r="19" />
      <path d="M24 24l9-5" />
      <path d="M24 24l-9 5" />
      <circle cx="24" cy="24" r="2" />
    </svg>
  );
}

export function IconInterlock({ width = 56, height = width, className, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 48 48" fill="none"
      stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="19" cy="24" r="13" />
      <circle cx="29" cy="24" r="13" />
    </svg>
  );
}

export function IconShield({ width = 56, height = width, className, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 48 48" fill="none"
      stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M24 5l15 5v11c0 9-6 15-15 17-9-2-15-8-15-17V10z" />
      <path d="M17 23l5 5 9-10" />
    </svg>
  );
}

export function IconTick({ width = 22, height = width, className, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12l5 5 9-11" />
    </svg>
  );
}

export const PILLAR_ICONS = {
  compass: IconCompass,
  interlock: IconInterlock,
  shield: IconShield,
} as const;
