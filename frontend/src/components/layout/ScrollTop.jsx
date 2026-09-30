import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollTop() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? window.scrollY / h : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const visible = p > 0.05;
  const C = 2 * Math.PI * 22;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Yukarı çık"
      data-testid="scroll-top-button"
      className={`fixed right-[25px] bottom-[25px] z-40 w-[48px] h-[48px] rounded-full bg-rg-dark text-white flex items-center justify-center shadow-lg hover:bg-rg-link transition-[opacity,transform,background-color] duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <svg className="absolute inset-0 -rotate-90" viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="22" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
        <circle cx="24" cy="24" r="22" fill="none" stroke="#FF7B5F" strokeWidth="2" strokeDasharray={C} strokeDashoffset={C * (1 - p)} strokeLinecap="round" />
      </svg>
      <ChevronUp size={18} className="relative" />
    </button>
  );
}
