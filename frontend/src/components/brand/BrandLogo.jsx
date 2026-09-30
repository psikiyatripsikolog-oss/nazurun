import React, { useId } from "react";
import { LOGO } from "./logoPaths";

/*
  CABELO₃ – yeni logo (amblem + yazı), inline SVG.
  variant: "horizontal" | "stacked" | "emblem"
  tone:    "light" (koyu zemin için, şampanya altın) | "dark" (açık zemin için, koyu altın) | "mono" (mercan/renkli zemin için, krem)
  intro:   açılış çizim animasyonu
  shine:   üzerine gelince metalik parlama
*/

const GOLD = {
  light: [[0, "#FBEFCF"], [0.32, "#E6C684"], [0.58, "#BC9048"], [0.8, "#EBD193"], [1, "#C69D55"]],
  dark: [[0, "#D2AD66"], [0.38, "#A57B39"], [0.62, "#7C5823"], [0.84, "#B48C46"], [1, "#8C682D"]],
  mono: [[0, "#FFFEFE"], [1, "#FFF3EC"]],
};
const SUBCOL = { light: "#EAD9B2", dark: "#7C5A26", mono: "#FFF3EC" };
const CORAL = { light: [[0, "#FF9D80"], [1, "#F2593B"]], dark: [[0, "#FF9D80"], [1, "#F2593B"]], mono: [[0, "#FFFFFF"], [1, "#FFE6DC"]] };

const Stops = ({ stops }) => stops.map(([o, c]) => <stop key={o} offset={o} stopColor={c} />);

function Emblem({ g, c, hl = "#FFFFFF", mask = false, ox = 0, oy = 0 }) {
  const stroke = mask ? "#fff" : `url(#${g})`;
  const fill = mask ? "#fff" : `url(#${g})`;
  const drop = mask ? "#fff" : `url(#${c})`;
  return (
    <g transform={`translate(${ox} ${oy})`}>
      <circle className="lg-ring" pathLength="1" cx="50" cy="50" r="47" fill="none" stroke={stroke} strokeWidth="1.3" />
      <circle className="lg-dots" cx="50" cy="50" r="42.6" fill="none" stroke={stroke} strokeWidth="0.5" strokeDasharray="0.6 2.2" opacity="0.8" />
      <path className="lg-arc" pathLength="1" d="M73.75 30.07 A31 31 0 1 0 73.75 69.93" fill="none" stroke={stroke} strokeWidth="6.6" strokeLinecap="round" />
      <g className="lg-drop">
        <path d="M47 33.5 C47 33.5 35.6 46.6 35.6 54.4 A11.4 11.4 0 0 0 58.4 54.4 C58.4 46.6 47 33.5 47 33.5 Z" fill={drop} />
        {!mask && <path d="M41.2 54.6 A6.2 6.2 0 0 0 44.8 60.6" fill="none" stroke={hl} strokeOpacity="0.75" strokeWidth="1.5" strokeLinecap="round" />}
      </g>
      <g className="lg-atoms">
        <path d="M84 50 L77.5 40.5 M84 50 L77.5 59.5" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" />
        <circle className="lg-atom a1" cx="77.5" cy="40.5" r="3.3" fill={fill} />
        <circle className="lg-atom a2" cx="84" cy="50" r="4.3" fill={fill} />
        <circle className="lg-atom a3" cx="77.5" cy="59.5" r="3.3" fill={fill} />
      </g>
    </g>
  );
}

function Wordmark({ x, base, g, c, sub, mask = false }) {
  const total = LOGO.wordW + 3 + LOGO.threeW;
  const subX = x + (total - LOGO.subW) / 2;
  const lineY = base + 19.3;
  const f = (v) => (mask ? "#fff" : v);
  return (
    <g className="lg-text">
      <g className="lg-word"><path transform={`translate(${x} ${base}) scale(${LOGO.WS})`} d={LOGO.word} fill={f(`url(#${g})`)} /></g>
      <g className="lg-three"><path transform={`translate(${x + LOGO.wordW + 3} ${base + 8}) scale(${LOGO.TS})`} d={LOGO.three} fill={f(`url(#${c})`)} /></g>
      <g className="lg-sub">
        <path transform={`translate(${subX} ${base + 28}) scale(${LOGO.SS})`} d={LOGO.sub} fill={f(sub)} />
        <path d={`M${x} ${lineY} H${subX - 7} M${subX + LOGO.subW + 7} ${lineY} H${x + total}`} stroke={f(sub)} strokeWidth="0.8" opacity="0.7" />
      </g>
    </g>
  );
}

export default function BrandLogo({ variant = "horizontal", tone = "light", intro = false, shine = true, className = "", title = "CABELO₃ Dermokozmetik" }) {
  const uid = useId().replace(/:/g, "");
  const g = `lg-g-${uid}`;
  const c = `lg-c-${uid}`;
  const m = `lg-m-${uid}`;
  const sh = `lg-s-${uid}`;
  const total = LOGO.wordW + 3 + LOGO.threeW;

  let W, H, content;
  if (variant === "emblem") {
    W = 100; H = 100;
    content = (mask) => <Emblem g={g} c={c} mask={mask} />;
  } else if (variant === "stacked") {
    W = total + 8; H = 212;
    content = (mask) => (
      <>
        <Emblem g={g} c={c} mask={mask} ox={(W - 100) / 2} />
        <Wordmark x={4} base={172} g={g} c={c} sub={SUBCOL[tone]} mask={mask} />
      </>
    );
  } else {
    W = 122 + total + 2; H = 100;
    content = (mask) => (
      <>
        <Emblem g={g} c={c} mask={mask} />
        <Wordmark x={122} base={60} g={g} c={c} sub={SUBCOL[tone]} mask={mask} />
      </>
    );
  }

  return (
    <svg
      viewBox={`0 0 ${W.toFixed(1)} ${H}`}
      className={`brand-logo ${intro ? "logo-intro" : ""} ${shine ? "logo-shine" : ""} ${className}`}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <defs>
        <linearGradient id={g} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={W} y2={H}><Stops stops={GOLD[tone]} /></linearGradient>
        <linearGradient id={c} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={Math.max(100, W / 3)} y2={H}><Stops stops={CORAL[tone]} /></linearGradient>
        <linearGradient id={sh} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#fff" stopOpacity={tone === "dark" ? 0.55 : 0.75} />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        {shine && <mask id={m} maskUnits="userSpaceOnUse" x="0" y="0" width={W} height={H}>{content(true)}</mask>}
      </defs>
      {content(false)}
      {shine && (
        <g mask={`url(#${m})`} style={{ pointerEvents: "none" }}>
          <g transform="skewX(-20)">
            <rect className="lg-shine" x={-W * 0.2} y="-20" width={W * 0.28} height={H + 40} fill={`url(#${sh})`} style={{ "--lg-travel": `${W * 1.55}px` }} />
          </g>
        </g>
      )}
    </svg>
  );
}
