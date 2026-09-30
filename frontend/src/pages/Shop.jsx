import React, { useMemo, useState } from "react";
import Seo from "../components/common/Seo";
import PageTitle from "../components/common/PageTitle";
import ProductCard from "../components/common/ProductCard";
import Reveal from "../components/common/Reveal";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { PRODUCTS, IMG } from "../data/mock";
import { CoralBand } from "../components/home/BlogSection";

const CATS = ["Tümü", "Şampuan", "Tonik", "Serum", "Set"];

export default function Shop() {
  const [cat, setCat] = useState("Tümü");
  const [sort, setSort] = useState("default");

  const list = useMemo(() => {
    let l = cat === "Tümü" ? [...PRODUCTS] : PRODUCTS.filter((p) => p.category === cat);
    if (sort === "asc") l.sort((a, b) => a.price - b.price);
    if (sort === "desc") l.sort((a, b) => b.price - a.price);
    return l;
  }, [cat, sort]);

  return (
    <main data-testid="shop-page">
      <Seo title="Ürünler" description="Sebum Dengeleyici Bakım Şampuanı (250 ml), Sebum Dengeleyici Saç Toniği (100 ml), Ozon Serumu (30 ml) ve 3'lü Set. CABELO₃ online mağaza." />
      <PageTitle title="Ürünler" crumbs={[{ label: "Ürünler" }]} image={IMG.series} />
      <section className="rg-section bg-rg-bg">
        <div className="rg-container">
          <div className="flex flex-wrap items-center justify-between gap-5 mb-14">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Kategori filtresi">
              {CATS.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-5 py-2.5 rounded-full font-heading text-[15px] transition-colors duration-300 ${
                    cat === c ? "bg-rg-title text-white" : "border border-rg-bd text-rg-title hover:border-rg-link hover:text-rg-link"
                  }`}
                  data-testid={`shop-filter-${c}`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <p className="text-[15px]" data-testid="shop-result-count">{list.length} ürün gösteriliyor</p>
              <Select value={sort} onValueChange={setSort}>
                <SelectTrigger className="w-[210px] h-12 rounded-full border-rg-bd bg-transparent px-5 font-heading text-rg-title" data-testid="shop-sort">
                  <SelectValue placeholder="Sırala" />
                </SelectTrigger>
                <SelectContent className="bg-rg-bg border-rg-bd rounded-2xl">
                  <SelectItem value="default">Varsayılan sıralama</SelectItem>
                  <SelectItem value="asc">Fiyat: düşükten yükseğe</SelectItem>
                  <SelectItem value="desc">Fiyat: yüksekten düşüğe</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-[30px] gap-y-14">
            {list.map((p, i) => (
              <Reveal key={p.id} delay={i * 100}>
                <ProductCard product={p} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CoralBand text="Aynı gün kargo · 3'lü Sette kargo ücretsiz · 14 gün cayma hakkı" />
    </main>
  );
}
