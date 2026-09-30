import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../common/Reveal";
import FaqList from "../common/FaqList";
import { DecorArt } from "./AboutIntro";
import { FAQS } from "../../data/mock";

export default function FaqSection({ items = FAQS.slice(0, 5) }) {
  return (
    <section className="rg-section bg-rg-bg2 relative overflow-hidden pt-0" data-testid="faq-section">
      <DecorArt className="absolute -left-10 bottom-0 w-[520px] text-[#E0D2CB] max-lg:hidden" />
      <div className="rg-narrow relative grid grid-cols-12 gap-y-12 lg:gap-x-16">
        <div className="col-span-12 lg:col-span-6">
          <Reveal><p className="rg-subtitle">Merak edilenler</p></Reveal>
          <Reveal delay={100}><h2 className="rg-h2 mt-5">Sıkça sorulan sorular</h2></Reveal>
          <Reveal delay={200}>
            <p className="mt-7 max-w-[480px]">Kullanım sırası, içerikler, kargo ve iade hakkında en çok sorulan soruları sizin için derledik.</p>
          </Reveal>
          <Reveal delay={300}>
            <Link to="/sss" className="rg-link mt-8" data-testid="faq-all-link">Tüm sorular</Link>
          </Reveal>
        </div>
        <Reveal delay={150} className="col-span-12 lg:col-span-6">
          <FaqList items={items} />
        </Reveal>
      </div>
    </section>
  );
}
