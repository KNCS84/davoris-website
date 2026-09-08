/* ==========================================================================
   CRAFT — DRAW-PATH. The deep dive at practitioner level: a plan-and-profile
   alignment that draws itself on scroll, with TYPICAL spec callouts.
   This section is the strongest anti-cheap signal available — a template
   builder cannot produce it. Values shown are industry standards labelled
   TYPICAL, never fabricated project facts.
   ========================================================================== */
'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useDrawPath } from '@/components/motion/DrawPath';
import { Container } from '@/components/primitives/Container';
import { Eyebrow } from '@/components/primitives/Eyebrow';
import { LineMask } from '@/components/motion/LineMask';

export function Craft() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  useDrawPath(svgRef);

  return (
    <section className="section section--dark craft" id="craft">
      <Container>
        <div className="grid">
          <div className="col-7">
            <Eyebrow>The work, closely</Eyebrow>
            <LineMask
              as="h2"
              className="h2 mt-stack"
              lines={['Rigour is visible', 'if you look closely.']}
            />
          </div>
          <div className="col-5 craft__intro">
            <p className="lead">
              An alignment is a sequence of decisions someone must defend. Ours are
              documented to the station.
            </p>
          </div>
        </div>

        <div className="craft__board mt-block">
          <svg
            ref={svgRef}
            className="craft__svg"
            viewBox="0 0 1200 560"
            role="img"
            aria-label="Plan and profile drawing of a water main alignment with typical design parameters"
          >
            {/* sheet frame */}
            <rect x="20" y="20" width="1160" height="520" fill="none" stroke="currentColor" strokeOpacity="0.16" />
            <rect x="34" y="34" width="1132" height="492" fill="none" stroke="currentColor" strokeOpacity="0.1" />

            {/* PLAN: main alignment */}
            <path
              data-draw
              d="M 70 200 C 280 150, 470 235, 700 205 S 1030 150, 1130 165"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2.5"
            />
            {/* road edges */}
            <path
              data-draw
              d="M 70 168 C 280 118, 470 203, 700 173 S 1030 118, 1130 133"
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.75"
              strokeWidth="1"
            />
            <path
              data-draw
              d="M 70 232 C 280 182, 470 267, 700 237 S 1030 182, 1130 197"
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.75"
              strokeWidth="1"
            />
            {/* centreline */}
            <path
              data-draw
              d="M 70 200 C 280 150, 470 235, 700 205 S 1030 150, 1130 165"
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.45"
              strokeWidth="1"
              strokeDasharray="14 8 3 8"
            />
            {/* stationing ticks */}
            {[180, 330, 480, 630, 780, 930, 1060].map((x, i) => (
              <path
                key={i}
                data-draw
                d={`M ${x} ${188 - (i % 3) * 6} L ${x} ${216 - (i % 3) * 6}`}
                stroke="currentColor"
                strokeOpacity="0.6"
                strokeWidth="1"
              />
            ))}
            {/* property / boundary lines */}
            <path data-draw d="M 250 90 L 250 300" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
            <path data-draw d="M 560 100 L 560 310" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
            <path data-draw d="M 880 80 L 880 290" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
            {/* valve vault node */}
            <path data-draw d="M 690 195 l 20 0 l 0 20 l -20 0 Z" fill="none" stroke="var(--accent)" strokeWidth="2" />

            {/* PROFILE: ground line + pipe line + grid */}
            <path
              data-draw
              d="M 70 430 L 300 424 L 560 408 L 820 398 L 1130 384"
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.8"
              strokeWidth="1.5"
            />
            <path
              data-draw
              d="M 70 470 L 300 466 L 560 452 L 820 444 L 1130 432"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2.5"
            />
            {[70, 200, 330, 460, 590, 720, 850, 980, 1110].map((x, i) => (
              <path key={`g${i}`} data-draw d={`M ${x} 380 L ${x} 500`} stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" />
            ))}
            <path data-draw d="M 70 500 L 1130 500" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />

            {/* callouts (TYPICAL) */}
            <g className="craft__labels mono-xs" fill="currentColor">
              <text x="120" y="120">W 12-IN DI CL350</text>
              <text x="620" y="120">VALVE VAULT — TYP</text>
              <text x="900" y="250">STA 12+40</text>
              <text x="120" y="530">PROFILE — MIN COVER 42-IN</text>
              <text x="820" y="530">35 PSI MIN AT PEAK HOUR</text>
            </g>
          </svg>

          <div className="craft__specs">
            <p className="mono-xs craft__specs-title">Typical design parameters</p>
            <ul>
              {[
                ['Main material', 'Ductile iron, Class 350'],
                ['Design velocity', '2.0 – 5.0 ft/s'],
                ['Min. residual pressure', '35 psi at peak hour'],
                ['Minimum cover', '42 in, traffic-rated'],
              ].map(([k, v]) => (
                <li key={k} className="craft__spec">
                  <span className="mono-xs">{k}</span>
                  <span className="mono craft__spec-v">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="craft__figure mt-block">
          <div className="craft__figure-media">
            <Image
              src="/dno/section-craft.webp"
              alt="Detail of a water main valve vault: ductile iron gate valve, pressure gauge, and survey rod"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              loading="lazy"
              className="craft__img"
            />
          </div>
          <p className="mono-xs craft__figure-cap">
            Valve vault, as built — the drawing and the thing must agree.
          </p>
        </div>
      </Container>
    </section>
  );
}
