import React from "react";
import { Link } from "react-router-dom";
import Seo from "../components/common/Seo";
import PageTitle from "../components/common/PageTitle";
import Reveal from "../components/common/Reveal";
import SectionTitle from "../components/common/SectionTitle";
import { INGREDIENTS, IMG } from "../data/mock";
import { CoralBand } from "../components/home/BlogSection";

export default function Ingredients() {
  return (
    <main data-testid="ingredients-page">
      <Seo title="Bileşenler" description="Çörek otu, biberiye, ıtır ve ozon yağları, ozonlanmış zeytinyağı, çinko sülfat, buğday proteini ve ginseng: CABELO₃ ürünlerindeki bileşenler." />
      <PageTitle title="Bileşenler" crumbs={[{ label: "Bileşenler" }]} image={IMG.rosemaryField} />
      <section className="rg-section bg-rg-bg">
        <div className="rg-container">
          <SectionTitle sub="Formüllerin içinde" title="Her üründe neler var?" text="Şampuanda çörek otu, biberiye, ıtır ve ozon yağları ile çinko sülfat ve buğday proteini; tonikte biberiye ve ginseng; Ozon Serumu’nda ise tek bileşen olarak ozonlanmış zeytinyağı bulunur." />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[30px] gap-y-14">
            {INGREDIENTS.map((ing, i) => (
              <Reveal key={ing.id} delay={(i % 4) * 100}>
                <article className="group" data-testid={`ingredient-${ing.id}`}>
                  <div className="rounded-[30px] overflow-hidden aspect-[4/5] img-zoom relative">
                    <img src={ing.image} alt={`${ing.name} görseli`} loading="lazy" className="w-full h-full object-cover" />
                    <span className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-rg-bg/90 backdrop-blur text-[13px] font-heading text-rg-title">{ing.product}</span>
                  </div>
                  <h3 className="mt-6 font-heading text-[25px]">{ing.name}</h3>
                  <p className="mt-3 text-[16px]">{ing.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16 text-center">
            <Link to="/urunler" className="rg-btn">Ürünlere Göz At</Link>
          </Reveal>
        </div>
      </section>
      <CoralBand text="Ozon Serumu’nun tek bileşeni ozonlanmış zeytinyağıdır · %100 doğal olarak üretilmiştir" />
    </main>
  );
}
