import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { WordsUp } from "../common/Reveal";
import RotatingBadge from "../common/RotatingBadge";
import Counter from "../common/Counter";
import { IMG } from "../../data/mock";

const REEL_ID = "DdygxWYNI5Q";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-rg-dark overflow-hidden flex flex-col" data-testid="hero-section">
      <div className="absolute inset-0">
        <img
          src={IMG.hero}
          alt="CABELO₃ Sebum Dengeleyici Bakım Şampuanı ile gülümseyen model"
          className="w-full h-full object-cover object-[70%_30%] max-md:object-[56%_12%] kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/85 via-[#0A0A0A]/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]/50" />
      </div>

      <div className="rg-container relative flex-1 flex flex-col justify-between pt-[150px] pb-[70px] max-md:pt-[110px] max-md:pb-[50px]">
        <h1
          className="!text-[#FFFEFE] font-medium max-w-[1000px]"
          style={{ fontSize: "clamp(46px, 6.6vw, 118px)", lineHeight: 0.98, letterSpacing: "-0.02em" }}
          data-testid="hero-title"
        >
          <WordsUp text="Saç derisinde" start={150} />
          <br />
          <WordsUp text="sebum dengesi," start={330} className="text-rg-lime" />
          <br />
          <WordsUp text="ferah bir his" start={510} />
        </h1>

        <div className="mt-14 grid grid-cols-12 gap-y-10 gap-x-8 items-end">
          <div className="col-span-12 lg:col-span-7 flex flex-wrap items-center gap-x-14 gap-y-10 fade-in" style={{ animationDelay: "900ms" }}>
            <RotatingBadge onClick={() => window.open(`https://www.instagram.com/reel/${REEL_ID}/`, "_blank", "noopener,noreferrer")} size={200} />
            <div className="flex items-center gap-6">
              <span className="font-heading text-rg-lime leading-none" style={{ fontSize: "clamp(90px, 9vw, 150px)", letterSpacing: "-0.04em" }}>
                <Counter to={3} duration={1200} />
              </span>
              <span className="font-heading text-[#FFFEFE] text-[27px] leading-[1.2] max-md:text-[22px]">
                ürünlük sebum<br />dengeleyici seri
              </span>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:pl-16 fade-in" style={{ animationDelay: "1100ms" }}>
            <p className="text-[#FFFEFE]/90 text-[18px] leading-[1.6] max-w-[440px]">
              Aşırı yağlanma ve sebum düzensizliği eğilimli saç derisi için şampuan, tonik ve Ozon Serumu’ndan oluşan bakım rutini.
            </p>
            <ul className="mt-6 space-y-2 text-[15px] text-rg-alttext">
              <li className="flex gap-3"><span className="text-rg-lime">—</span> Şampuanımızda yok: sülfat · paraben · silikon</li>
              <li className="flex gap-3"><span className="text-rg-lime">—</span> %100 doğal Ozon Serumu</li>
            </ul>
            <Link to="/urunler" className="rg-btn mt-8" data-testid="hero-shop-button">
              Ürünleri Keşfet <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
