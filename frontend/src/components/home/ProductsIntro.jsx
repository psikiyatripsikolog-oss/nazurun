import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../common/SectionTitle";
import Reveal from "../common/Reveal";
import { getProductById } from "../../data/mock";

const CARDS = [
  { id: "sampuan", title: "Bakım Şampuanı", text: "Saç derisini kurutmadan arındırır" },
  { id: "tonik", title: "Saç Toniği", text: "Durulanmayan, hafif dokulu bakım" },
  { id: "ozon", title: "Ozon Serumu", text: "Haftalık yoğun saç derisi bakımı" },
];

export default function ProductsIntro() {
  return (
    <section className="rg-section bg-rg-bg2" data-testid="products-intro-section">
      <div className="rg-narrow">
        <SectionTitle sub="Sebum dengeleyici bakım serisi" title="Üç ürün, tek bir sade rutin" />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-[30px]">
          {CARDS.map((c, i) => {
            const p = getProductById(c.id);
            return (
              <Reveal key={c.id} delay={i * 120}>
                <Link
                  to={`/urun/${p.slug}`}
                  className="group block bg-rg-bg rounded-[30px] px-10 pt-11 pb-10 text-center transition-[box-shadow,transform] duration-500 hover:shadow-[0_30px_60px_-30px_rgba(34,27,23,0.25)] hover:-translate-y-1.5"
                  data-testid={`intro-card-${c.id}`}
                >
                  <h3 className="font-heading text-[25px] leading-tight">{c.title}</h3>
                  <p className="mt-2 text-[15px]">{c.text}</p>
                  <div className="mt-8 mx-auto w-full max-w-[270px] aspect-[270/330] rounded-[20px] overflow-hidden img-zoom">
                    <img src={p.image} alt={p.alt} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <span className="rg-link mt-8 justify-center">İncele</span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
