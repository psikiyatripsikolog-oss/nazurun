import React from "react";
import { MARQUEE_WORDS } from "../../data/mock";
import BrandLogo from "../brand/BrandLogo";

function Mark() {
  return (
    <span className="inline-flex items-center justify-center shrink-0 w-[0.95em] h-[0.95em] rounded-full bg-rg-dark mx-[0.35em]" aria-hidden="true">
      <span className="block h-[78%]"><BrandLogo variant="emblem" tone="light" shine={false} title="" className="h-full" /></span>
    </span>
  );
}

export default function MarqueeBand({ words = MARQUEE_WORDS, className = "" }) {
  const row = (
    <div className="flex items-center shrink-0">
      {words.map((w, i) => (
        <React.Fragment key={i}>
          <span className="whitespace-nowrap">{w}</span>
          <Mark />
        </React.Fragment>
      ))}
    </div>
  );
  return (
    <section className={`bg-rg-bg py-[70px] max-md:py-[45px] overflow-hidden marquee-wrap ${className}`} aria-label="Bileşenler şeridi" data-testid="marquee-band">
      <div className="marquee-track pausable font-heading font-semibold text-rg-link" style={{ fontSize: "clamp(64px, 9vw, 170px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
        {row}
        {row}
      </div>
    </section>
  );
}
