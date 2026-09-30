import React from "react";
import { Play } from "lucide-react";

// Circular rotating text badge with center play button
export default function RotatingBadge({ text = "CABELO₃ · SEBUM DENGESİ · TANITIMI İZLE · ", onClick, size = 210, light = true }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Tanıtım videosunu izle"
      className="group relative shrink-0 rounded-full"
      style={{ width: size, height: size }}
      data-testid="rotating-badge"
    >
      <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full spin-slow" aria-hidden="true">
        <circle cx="100" cy="100" r="98" fill="none" stroke={light ? "rgba(255,254,254,0.35)" : "rgba(34,27,23,0.2)"} strokeWidth="1" />
        <defs>
          <path id="badgeCircle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text fill={light ? "#FFFEFE" : "#221B17"} fontFamily="Onest" fontSize="12.5" letterSpacing="2" fontWeight="500">
          <textPath href="#badgeCircle" textLength="486" lengthAdjust="spacing">{text}</textPath>
        </text>
      </svg>
      <span className="absolute inset-[34%] rounded-full flex items-center justify-center text-white transition-[background-color,transform] duration-500 group-hover:bg-rg-link group-hover:scale-110">
        <Play size={22} fill="currentColor" />
      </span>
    </button>
  );
}
