import React, { useRef, useState } from "react";
import { ChevronsLeftRight } from "lucide-react";

// Before/after style comparison slider (used for product vs. texture – no result claims)
export default function CompareSlider({ left, right, leftLabel, rightLabel, leftAlt, rightAlt }) {
  const [pos, setPos] = useState(50);
  const ref = useRef(null);
  const dragging = useRef(false);

  const update = (clientX) => {
    const r = ref.current.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(3, Math.min(97, p)));
  };

  return (
    <div
      ref={ref}
      className="relative w-full aspect-[16/8] max-md:aspect-[4/5] rounded-[30px] overflow-hidden select-none cursor-ew-resize touch-pan-y"
      onPointerDown={(e) => { dragging.current = true; update(e.clientX); }}
      onPointerMove={(e) => dragging.current && update(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerLeave={() => (dragging.current = false)}
      data-testid="compare-slider"
    >
      <img src={right} alt={rightAlt} className="absolute inset-0 w-full h-full object-cover pointer-events-none" draggable="false" />
      <div className="absolute inset-0 pointer-events-none" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={left} alt={leftAlt} className="absolute inset-0 w-full h-full object-cover" draggable="false" />
      </div>
      <div className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none" style={{ left: `${pos}%`, transform: "translateX(-1px)" }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[64px] h-[64px] rounded-full bg-white text-rg-title flex items-center justify-center shadow-xl">
          <ChevronsLeftRight size={24} />
        </div>
      </div>
      <span className="absolute left-6 bottom-6 px-5 py-2 rounded-full bg-rg-dark/70 backdrop-blur text-white font-heading text-[15px] pointer-events-none">{leftLabel}</span>
      <span className="absolute right-6 bottom-6 px-5 py-2 rounded-full bg-rg-dark/70 backdrop-blur text-white font-heading text-[15px] pointer-events-none">{rightLabel}</span>
      <input
        type="range"
        min="3"
        max="97"
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Karşılaştırma kaydırıcısı"
        className="compare-range absolute inset-0 w-full h-full opacity-0"
        data-testid="compare-range"
      />
    </div>
  );
}
