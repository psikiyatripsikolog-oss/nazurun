import React from "react";
import Reveal from "./Reveal";

export default function SectionTitle({ sub, title, text, align = "center", light = false, as = "h2", className = "", maxW = "max-w-[760px]" }) {
  const H = as;
  const center = align === "center";
  return (
    <div className={`${center ? "text-center mx-auto" : ""} ${maxW} ${className}`}>
      {sub && (
        <Reveal>
          <p className={`rg-subtitle ${light ? "light" : ""}`} data-testid="section-subtitle">{sub}</p>
        </Reveal>
      )}
      {title && (
        <Reveal delay={100}>
          <H className={`rg-h2 mt-5 ${light ? "!text-[#FFFEFE]" : ""}`}>{title}</H>
        </Reveal>
      )}
      {text && (
        <Reveal delay={200}>
          <p className={`mt-6 ${light ? "text-rg-alttext" : ""}`}>{text}</p>
        </Reveal>
      )}
    </div>
  );
}
