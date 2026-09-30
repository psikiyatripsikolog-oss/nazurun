import React from "react";
import SectionTitle from "../common/SectionTitle";
import Reveal from "../common/Reveal";
import BlogCard from "../common/BlogCard";
import { POSTS } from "../../data/blog";

export function CoralBand({ text = "Sebum dengesi için sade, ferah ve sürdürülebilir bir bakım rutini" }) {
  return (
    <section className="bg-rg-link py-[46px] max-md:py-[34px]" data-testid="coral-band">
      <div className="rg-container">
        <Reveal>
          <p className="text-center font-heading text-white" style={{ fontSize: "clamp(22px, 2.2vw, 35px)", lineHeight: 1.25 }}>{text}</p>
        </Reveal>
      </div>
    </section>
  );
}

export default function BlogSection() {
  const posts = POSTS.slice(0, 4);
  return (
    <section className="rg-section bg-rg-bg" data-testid="blog-section">
      <div className="rg-container">
        <SectionTitle sub="Saç derisi bakımı notları" title="Blogdan son yazılar ve ipuçları" />
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-x-[30px] gap-y-16">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 150}>
              <BlogCard post={p} tall={i === 1 || i === 2} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
