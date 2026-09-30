import React, { useState } from "react";
import Seo from "../components/common/Seo";
import PageTitle from "../components/common/PageTitle";
import Reveal from "../components/common/Reveal";
import BlogCard from "../components/common/BlogCard";
import { POSTS } from "../data/blog";
import { IMG } from "../data/mock";

export default function Blog() {
  const cats = ["Tümü", ...Array.from(new Set(POSTS.map((p) => p.category)))];
  const [cat, setCat] = useState("Tümü");
  const list = cat === "Tümü" ? POSTS : POSTS.filter((p) => p.category === cat);
  return (
    <main data-testid="blog-page">
      <Seo title="Blog" description="Yağlanmaya eğilimli saç derisi için bakım rutini, ürün kullanımı ve bileşenler hakkında CABELO₃ blog yazıları." />
      <PageTitle title="Blog" crumbs={[{ label: "Blog" }]} image={IMG.rosemary} />
      <section className="rg-section bg-rg-bg">
        <div className="rg-container">
          <div className="flex flex-wrap gap-2 mb-14">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-5 py-2.5 rounded-full font-heading text-[15px] transition-colors duration-300 ${cat === c ? "bg-rg-title text-white" : "border border-rg-bd text-rg-title hover:border-rg-link hover:text-rg-link"}`}
                data-testid={`blog-filter-${c}`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[30px] gap-y-16">
            {list.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 110}>
                <BlogCard post={p} horizontal={false} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
