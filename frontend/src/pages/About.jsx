import React from "react";
import { Link } from "react-router-dom";
import { Package, Droplets, RotateCcw } from "lucide-react";
import Seo from "../components/common/Seo";
import PageTitle from "../components/common/PageTitle";
import Reveal from "../components/common/Reveal";
import Counter from "../components/common/Counter";
import SectionTitle from "../components/common/SectionTitle";
import MarqueeBand from "../components/home/MarqueeBand";
import { DecorArt } from "../components/home/AboutIntro";
import { IMG, BRAND } from "../data/mock";

const STATS = [
  { icon: Package, value: 3, suffix: "", label: "ürünlük bakım serisi" },
  { icon: Droplets, value: 250, suffix: " ml", label: "şampuan · 100 ml tonik · 30 ml Ozon Serumu" },
  { icon: RotateCcw, value: 14, suffix: " gün", label: "cayma hakkı (teslimden itibaren)" },
];

const VALUES = [
  { no: "01", title: "Odaklı bir seri", text: "CABELO₃, aşırı yağlanma ve sebum düzensizliği eğilimli saç derisine odaklanan üç ürünlük bir bakım serisidir." },
  { no: "02", title: "Sade bir rutin", text: "Haftalık ön bakım, arındırma ve dengeleme: üç adım birbirini tamamlar; her ürün tek başına da kullanılabilir." },
  { no: "03", title: "Şeffaf iletişim", text: "İçerikleri, kullanım sırasını ve iade koşullarını açıkça paylaşırız. Sorularınız için Instagram’dan bize ulaşabilirsiniz." },
];

export default function About() {
  return (
    <main data-testid="about-page">
      <Seo title="Hakkımızda" description="CABELO₃ Dermokozmetik: aşırı yağlanma ve sebum düzensizliği eğilimli saç derisi için üç ürünlük bakım serisi. Marka sahibi Nazife Soyubol." />
      <PageTitle title="Hakkımızda" crumbs={[{ label: "Hakkımızda" }]} image={IMG.set} />

      <section className="rg-section bg-rg-bg overflow-hidden">
        <div className="rg-container grid grid-cols-12 gap-y-14 lg:gap-x-16 items-center">
          <Reveal variant="from-left" className="col-span-12 lg:col-span-6">
            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-[30px] overflow-hidden aspect-[3/4] img-zoom"><img src={IMG.model} alt="CABELO₃ şampuanını tutan gülümseyen model" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="rounded-[30px] overflow-hidden aspect-[3/4] mt-16 img-zoom"><img src={IMG.bath} alt="Banyoda saç derisi masajı" className="w-full h-full object-cover" loading="lazy" /></div>
            </div>
          </Reveal>
          <div className="col-span-12 lg:col-span-6 lg:pl-[6%]">
            <DecorArt className="w-[130px] text-rg-link/70 mb-8" />
            <Reveal><p className="rg-subtitle">Marka hikayesi</p></Reveal>
            <Reveal delay={100}><h2 className="rg-h2 mt-5">Yağlanmaya eğilimli saç derisi için sade bir bakım</h2></Reveal>
            <Reveal delay={200}>
              <p className="mt-7">CABELO₃ Dermokozmetik, aşırı yağlanma ve sebum düzensizliği eğilimli saç derisi için geliştirilen bir saç ve saç derisi bakım markasıdır. Seride Sebum Dengeleyici Bakım Şampuanı, Sebum Dengeleyici Saç Toniği ve Ozon Serumu yer alır.</p>
              <p className="mt-5">Amacımız, günlük bakımı karmaşıklaştırmadan; arındıran, ferahlık veren ve sebum dengesini korumaya yardımcı olan bir rutin sunmak.</p>
              <div className="mt-9 p-6 rounded-[24px] bg-rg-bg2">
                <p className="font-heading text-rg-title text-[19px]">{BRAND.owner}</p>
                <p className="text-[15px] mt-1">Marka sahibi</p>
                <p className="text-[15px] mt-4">Satıcı: <span className="text-rg-title">{BRAND.seller}</span>. Ürünlerimiz {BRAND.website} üzerinden online olarak satılır.</p>
                <Link to="/iletisim" className="rg-link mt-3 text-[15px]" data-testid="about-contact-link">Satıcı künyesi ve iletişim bilgileri</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-rg-dark py-[100px] max-md:py-[70px]" data-testid="about-stats">
        <div className="rg-container grid grid-cols-1 sm:grid-cols-3 gap-10">
          {STATS.map((s, i) => (
            <Reveal key={i} delay={i * 100} className="lg:border-l lg:border-rg-altbd lg:pl-10 first:border-l-0 first:pl-0">
              <s.icon className="text-rg-link" size={30} strokeWidth={1.4} />
              <p className="mt-6 font-heading text-rg-lime leading-none" style={{ fontSize: "clamp(48px, 4.4vw, 72px)" }}>
                {s.text ? s.text : <Counter to={s.value} suffix={s.suffix} />}
              </p>
              <p className="mt-4 text-rg-alttext text-[16px]">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="rg-section bg-rg-bg">
        <div className="rg-narrow">
          <SectionTitle sub="Yaklaşımımız" title="Neye önem veriyoruz?" />
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <Reveal key={v.no} delay={i * 120}>
                <div className="h-full rounded-[30px] bg-rg-bg2 p-10 transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(34,27,23,0.25)]">
                  <span className="font-heading text-rg-link text-[23px]">{v.no}</span>
                  <h3 className="mt-6 font-heading text-[27px]">{v.title}</h3>
                  <p className="mt-4 text-[16px]">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 text-center">
            <Link to="/urunler" className="rg-btn">Ürünleri İncele</Link>
          </Reveal>
        </div>
      </section>
      <MarqueeBand className="!bg-rg-bg2" />
    </main>
  );
}
