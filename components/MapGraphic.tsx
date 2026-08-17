import React from 'react';

/** Brand-palette illustrated map marker for Asaba, Delta State (no external tiles). */
export function MapGraphic() {
  return (
    <svg
      className="map-graphic"
      viewBox="0 0 400 250"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Map showing Davoris Limited's location in Asaba, Delta State, Nigeria"
    >
      <rect x="0" y="0" width="400" height="250" fill="#1D1E23" />
      {/* grid */}
      <g stroke="#2A2B30" strokeWidth="1">
        {[40, 80, 120, 160, 200, 240].map((y) => (
          <line key={`h${y}`} x1="0" y1={y} x2="400" y2={y} />
        ))}
        {[50, 100, 150, 200, 250, 300, 350].map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="250" />
        ))}
      </g>
      {/* abstract landmass */}
      <path
        d="M70 60 L150 45 L250 55 L330 90 L320 150 L270 175 L250 215 L190 220 L150 185 L110 190 L70 150 L60 100 Z"
        fill="#23252b"
        stroke="#2A2B30"
        strokeWidth="1.5"
      />
      {/* river hint */}
      <path d="M250 55 L240 110 L270 175 L250 215" fill="none" stroke="#2A2B30" strokeWidth="1.2" />
      {/* marker (Asaba, lower-central) */}
      <circle cx="232" cy="150" r="16" fill="none" stroke="#D4FF4F" strokeWidth="1.5" opacity="0.5">
        <animate attributeName="r" values="10;18;10" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="232" cy="150" r="6" fill="#D4FF4F" />
      <text x="246" y="146" fill="#EFEAE0" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="0.5">
        Asaba
      </text>
      <text x="246" y="160" fill="#EFEAE0" fontFamily="var(--font-mono)" fontSize="9" opacity="0.7">
        Delta State
      </text>
    </svg>
  );
}
