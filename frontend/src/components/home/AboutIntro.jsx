import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../common/Reveal";
import { IMG } from "../../data/mock";

export function DecorArt({ className = "" }) {
  // Original decorative line-art: a flowing leaf / droplet motif
  return (
    <svg viewBox="0 0 240 240" className={className} fill="none" aria-hidden="true">
      <path d="M40 200 C 60 120, 120 60, 210 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M70 205 C 95 140, 150 95, 220 85" stroke="currentColor" strokeWidth="12" strokeLinecap="round" opacity=".55" />
      <path d="M120 150 C 105 125, 110 100, 135 85 C 150 110, 145 135, 120 150 Z" stroke="currentColor" strokeWidth="3" />
      <circle cx="52" cy="170" r="12" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

export default function AboutIntro() {
  const imgRef = useRef(null);
  const [shift, setShift] = useState(0);
  useEffect(() => {
    const on = () => {
      if (!imgRef.current) return;
      const r = imgRef.current.getBoundingClientRect();
      const center = r.top + r.height / 2 - window.innerHeight / 2;
      setShift(Math.max(-60, Math.min(60, center * -0.08)));
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <section className="rg-section bg-rg-bg overflow-hidden" data-testid="about-intro-section">
      <div className="rg-container grid grid-cols-12 gap-y-14 lg:gap-x-16 items-center">
        <Reveal variant="from-left" className="col-span-12 lg:col-span-6">
          <div ref={imgRef} className="relative rounded-[30px] overflow-hidden aspect-[714/640]">
            <img
              src={IMG.series}
              alt="Ellerde CABELO₃ şampuan, tonik ve Ozon Serumu şişeleri, biberiye dalları ve ahşap taraklar"
              loading="lazy"
              className="absolute inset-x-0 -top-[60px] w-full h-[calc(100%+120px)] object-cover"
              style={{ transform: `translate3d(0, ${shift}px, 0)` }}
            />
          </div>
        </Reveal>
        <div className="col-span-12 lg:col-span-6 lg:pl-[8%] relative">
          <DecorArt className="w-[150px] text-rg-link/70 mb-8 max-md:w-[110px]" />
          <Reveal><p className="rg-subtitle">CABELO₃ Dermokozmetik</p></Reveal>
          <Reveal delay={100}><h2 className="rg-h2 mt-5 max-w-[620px]">Yağlanmaya eğilimli saç derisi için odaklı bakım</h2></Reveal>
          <Reveal delay={200}>
            <p className="mt-7 max-w-[560px]">
              CABELO₃, aşırı yağlanma ve sebum düzensizliği eğilimli saç derisi için üç ürünlük bir bakım serisi sunar. Her adım sade bir rutinin parçasıdır ve her ürün tek başına da kullanılabilir.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <Link to="/hakkimizda" className="rg-btn mt-10" data-testid="about-intro-button">Hakkımızda</Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
