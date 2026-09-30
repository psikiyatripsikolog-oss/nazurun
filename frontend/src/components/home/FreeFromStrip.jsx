import React from "react";
import { Link } from "react-router-dom";
import { Ban, ArrowUpRight } from "lucide-react";
import Reveal from "../common/Reveal";

const BADGES = ["SLS / SLES", "Paraben", "Silikon", "Ftalat", "Formaldehit"];

export default function FreeFromStrip() {
  return (
    <section className="bg-rg-bg py-[110px] max-md:py-[70px]" data-testid="free-from-section">
      <div className="rg-narrow grid grid-cols-12 gap-y-10 items-center">
        <Reveal className="col-span-12 lg:col-span-3">
          <p className="font-heading text-[23px] leading-[1.3] text-rg-title">Şampuanımızda yok</p>
          <Link to="/urun/sebum-dengeleyici-bakim-sampuani" className="rg-link mt-3 text-[15px]" data-testid="free-from-shampoo-link">
            Sebum Dengeleyici Bakım Şampuanı <ArrowUpRight size={15} />
          </Link>
        </Reveal>
        <div className="col-span-12 lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:pl-10">
          {BADGES.map((b, i) => (
            <Reveal key={b} delay={i * 90}>
              <div className="group h-[92px] rounded-full border border-rg-bd flex items-center justify-center gap-2.5 text-rg-meta hover:text-rg-title hover:border-rg-link transition-colors duration-500" data-testid={`free-from-badge-${i}`}>
                <Ban size={22} strokeWidth={1.6} className="transition-transform duration-500 group-hover:rotate-90 group-hover:text-rg-link" />
                <span className="font-heading text-[19px] font-semibold tracking-tight">{b}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
