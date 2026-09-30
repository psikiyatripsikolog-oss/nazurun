import React from "react";
import { Instagram } from "lucide-react";
import Seo from "../components/common/Seo";
import PageTitle from "../components/common/PageTitle";
import Reveal from "../components/common/Reveal";
import FaqList from "../components/common/FaqList";
import { DecorArt } from "../components/home/AboutIntro";
import { FAQS, IMG, BRAND } from "../data/mock";

export default function FaqPage() {
  return (
    <main data-testid="faq-page">
      <Seo title="Sıkça Sorulan Sorular" description="CABELO₃ ürünlerinin kullanım sırası, içerikleri, kargo ve iade koşulları hakkında sıkça sorulan sorular." />
      <PageTitle title="Sıkça Sorulan Sorular" crumbs={[{ label: "SSS" }]} image={IMG.foamTiles} />
      <section className="rg-section bg-rg-bg2 relative overflow-hidden">
        <DecorArt className="absolute -left-10 bottom-0 w-[520px] text-[#E0D2CB] max-lg:hidden" />
        <div className="rg-narrow relative grid grid-cols-12 gap-y-12 lg:gap-x-16">
          <div className="col-span-12 lg:col-span-5">
            <Reveal><p className="rg-subtitle">Merak edilenler</p></Reveal>
            <Reveal delay={100}><h2 className="rg-h2 mt-5">Sorularınızı yanıtlıyoruz</h2></Reveal>
            <Reveal delay={200}>
              <p className="mt-7 max-w-[440px]">Aradığınız yanıtı bulamadınız mı? Bize Instagram üzerinden DM gönderebilirsiniz.</p>
              <a href={BRAND.instagramUrl} target="_blank" rel="noopener noreferrer" className="rg-btn mt-8"><Instagram size={17} /> DM Gönder</a>
            </Reveal>
          </div>
          <Reveal delay={150} className="col-span-12 lg:col-span-7">
            <FaqList items={FAQS} defaultOpen="item-0" />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
