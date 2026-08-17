import React from 'react';

export function Media({
  src,
  className = '',
  style,
  children,
  gradient = false,
  imagePosition = 'center',
}: {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  gradient?: boolean;
  imagePosition?: string;
}) {
  return (
    <div className={`media-root ${className}`} style={style}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(120% 120% at 70% 20%, #23252b 0%, #15161A 55%, #0c0d10 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover',
          backgroundPosition: imagePosition,
        }}
        role="img"
        aria-hidden="true"
      />
      {children && <div style={{ position: 'relative' }}>{children}</div>}
    </div>
  );
}