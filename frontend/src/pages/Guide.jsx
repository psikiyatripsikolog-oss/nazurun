import React from "react";
import { Link } from "react-router-dom";
import { Clock, Droplet, Waves, Sparkles, ArrowRight } from "lucide-react";
import Seo from "../components/common/Seo";
import PageTitle from "../components/common/PageTitle";
import Reveal from "../components/common/Reveal";
import SectionTitle from "../components/common/SectionTitle";
import { IMG } from "../data/mock";

const EVERY = [
  { icon: Waves, title: "Sebum Dengeleyici Bakım Şampuanı", slug: "sebum-dengeleyici-bakim-sampuani", text: "Islak saç derisinde masajla köpürtün, 2–3 dk bekletin ve durulayın." },
  { icon: Sparkles, title: "Sebum Dengeleyici Saç Toniği", slug: "sebum-dengeleyici-sac-tonigi", text: "Temiz, hafif nemli saç derisine 1–2 dk masajla uygulayın. Durulamayın; günde 1–2 kez kullanılabilir." },
];
const WEEKLY = [
  { icon: Droplet, title: "Ozon Serumu", slug: "ozon-serumu", text: "Birkaç damlayı saç derisine masajla uygulayın." },
  { icon: Clock, title: "30–45 dk bekleme", text: "Serumu saç derisinde bekletin." },
  { icon: Waves, title: "Şampuan", slug: "sebum-dengeleyici-bakim-sampuani", text: "Sebum Dengeleyici Bakım Şampuanı ile yıkayın." },
  { icon: Sparkles, title: "Tonik", slug: "sebum-dengeleyici-sac-tonigi", text: "Temiz saç derisine tonikle rutini tamamlayın." },
];

function Flow({ steps, testid }) {
  return (
    <ol className={`grid gap-5 ${steps.length > 2 ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2"}`} data-testid={testid}>
      {steps.map((s, i) => (
        <Reveal as="li" key={i} delay={i * 110} className="relative">
          <div className="h-full rounded-[30px] bg-rg-bg p-9 border border-rg-bd transition-[border-color,transform] duration-500 hover:border-rg-link hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <span className="w-14 h-14 rounded-full bg-rg-link/10 text-rg-link flex items-center justify-center"><s.icon size={24} strokeWidth={1.5} /></span>
              <span className="font-heading text-[40px] text-rg-bd leading-none">0{i + 1}</span>
            </div>
            <h3 className="mt-7 font-heading text-[23px] leading-snug">
              {s.slug ? <Link to={`/urun/${s.slug}`} className="hover:text-rg-link transition-colors">{s.title}</Link> : s.title}
            </h3>
            <p className="mt-3 text-[16px]">{s.text}</p>
          </div>
          {i < steps.length - 1 && (
            <ArrowRight className="hidden lg:block absolute -right-[18px] top-1/2 -translate-y-1/2 z-10 text-rg-link bg-rg-bg2 rounded-full p-1" size={28} />
          )}
        </Reveal>
      ))}
    </ol>
  );
}

export default function Guide() {
  return (
    <main data-testid="guide-page">
      <Seo title="Kullanım Rehberi" description="CABELO₃ kullanım sırası: her yıkamada Şampuan → Tonik. Haftalık: Ozon Serumu → 30–45 dk bekleme → Şampuan → Tonik." />
      <PageTitle title="Kullanım Rehberi" crumbs={[{ label: "Kullanım Rehberi" }]} image={IMG.bath} />

      <section className="rg-section bg-rg-bg2">
        <div className="rg-narrow">
          <SectionTitle sub="Her yıkamada" title="Şampuan → Tonik" text="Saçınızı yıkadığınız her seferde önce şampuan, ardından tonik." />
          <div className="mt-14"><Flow steps={EVERY} testid="guide-every-wash" /></div>
        </div>
      </section>

      <section className="rg-section bg-rg-bg2 pt-0">
        <div className="rg-narrow">
          <SectionTitle sub="Haftada bir" title="Ozon Serumu → 30–45 dk → Şampuan → Tonik" text="Ozon Serumu her zaman şampuandan ÖNCE uygulanır. Serumu bekletin, ardından şampuan ve tonikle devam edin." maxW="max-w-[900px]" />
          <div className="mt-14"><Flow steps={WEEKLY} testid="guide-weekly" /></div>
        </div>
      </section>

      <section className="rg-section bg-rg-bg">
        <div className="rg-container grid grid-cols-12 gap-y-12 lg:gap-x-16 items-center">
          <Reveal variant="from-left" className="col-span-12 lg:col-span-5">
            <div className="rounded-[30px] overflow-hidden aspect-[4/5] img-zoom"><img src={IMG.series} alt="CABELO₃ ürün serisi" className="w-full h-full object-cover" loading="lazy" /></div>
          </Reveal>
          <div className="col-span-12 lg:col-span-7 lg:pl-10">
            <Reveal><p className="rg-subtitle">İpuçları</p></Reveal>
            <Reveal delay={100}><h2 className="rg-h2 mt-5">Rutininizi kolaylaştırın</h2></Reveal>
            <Reveal delay={200}>
              <ul className="rg-prose mt-8">
                <li>Ürünler birlikte bir rutin oluşturur; her biri tek başına da kullanılabilir.</li>
                <li>Haftanın belirli bir gününü Ozon Serumu ön bakımına ayırmak rutini sürdürmeyi kolaylaştırır.</li>
                <li>Masajı tırnaklarla değil, parmak uçlarıyla ve nazik dairesel hareketlerle yapın.</li>
                <li>Tonik durulanmaz; hafif nemli saç derisine uygulanması dağılımı kolaylaştırır.</li>
              </ul>
              <Link to="/urun/3lu-set" className="rg-btn mt-4">3'lü Seti İncele</Link>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
