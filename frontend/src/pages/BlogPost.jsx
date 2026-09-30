import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Instagram } from "lucide-react";
import Seo from "../components/common/Seo";
import PageTitle from "../components/common/PageTitle";
import Reveal from "../components/common/Reveal";
import ProductCard from "../components/common/ProductCard";
import { POSTS, getPost } from "../data/blog";
import { getProductById, BRAND } from "../data/mock";
import NotFound from "./NotFound";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);
  if (!post) return <NotFound />;
  const idx = POSTS.findIndex((p) => p.slug === slug);
  const prev = POSTS[idx - 1];
  const next = POSTS[idx + 1];
  const recent = POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main data-testid="blog-post-page">
      <Seo title={post.title} description={post.excerpt} image={post.image} />
      <PageTitle title={post.title} crumbs={[{ label: "Blog", to: "/blog" }, { label: post.category }]} image={post.image} />
      <section className="rg-section bg-rg-bg">
        <div className="rg-container grid grid-cols-12 gap-y-16 lg:gap-x-16">
          <article className="col-span-12 lg:col-span-8">
            <Reveal>
              <div className="rounded-[30px] overflow-hidden aspect-[16/9]">
                <img src={post.image} alt={post.alt} className="w-full h-full object-cover" />
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-3 text-[14px] text-rg-meta">
                <span className="px-3.5 py-1 rounded-full border border-rg-bd font-heading text-rg-title">{post.category}</span>
                <span>{post.date}</span>•<span>{post.read}</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rg-prose mt-8 text-[18px] max-md:text-[16px]" data-testid="blog-post-body">
                <p className="text-rg-title text-[21px] leading-[1.55] max-md:text-[18px]">{post.excerpt}</p>
                {post.body.map((b, i) => (
                  <React.Fragment key={i}>
                    <h2>{b.h}</h2>
                    <p>{b.p}</p>
                  </React.Fragment>
                ))}
              </div>
            </Reveal>
            <div className="mt-14 pt-8 border-t border-rg-bd grid sm:grid-cols-2 gap-6">
              {prev ? (
                <Link to={`/blog/${prev.slug}`} className="group">
                  <span className="flex items-center gap-2 text-[14px] text-rg-meta"><ArrowLeft size={15} /> Önceki yazı</span>
                  <span className="mt-2 block font-heading text-[19px] text-rg-title group-hover:text-rg-link transition-colors">{prev.title}</span>
                </Link>
              ) : <span />}
              {next && (
                <Link to={`/blog/${next.slug}`} className="group sm:text-right">
                  <span className="flex sm:justify-end items-center gap-2 text-[14px] text-rg-meta">Sonraki yazı <ArrowRight size={15} /></span>
                  <span className="mt-2 block font-heading text-[19px] text-rg-title group-hover:text-rg-link transition-colors">{next.title}</span>
                </Link>
              )}
            </div>
          </article>

          <aside className="col-span-12 lg:col-span-4 space-y-10">
            <div className="rounded-[30px] bg-rg-bg2 p-9">
              <h3 className="font-heading text-[23px]">Son yazılar</h3>
              <ul className="mt-6 space-y-5">
                {recent.map((r) => (
                  <li key={r.slug}>
                    <Link to={`/blog/${r.slug}`} className="group flex gap-4 items-center">
                      <img src={r.image} alt={r.alt} className="w-20 h-20 rounded-[16px] object-cover shrink-0" />
                      <span>
                        <span className="block font-heading text-[16px] leading-snug text-rg-title group-hover:text-rg-link transition-colors">{r.title}</span>
                        <span className="block text-[13px] text-rg-meta mt-1">{r.date}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[30px] bg-rg-dark p-9 text-rg-alttext">
              <h3 className="font-heading text-[23px] !text-[#FFFEFE]">Sorunuz mu var?</h3>
              <p className="mt-3 text-[15px]">Sipariş ve bilgi için Instagram’dan DM gönderin.</p>
              <a href={BRAND.instagramUrl} target="_blank" rel="noopener noreferrer" className="rg-btn sm mt-6"><Instagram size={15} /> @{BRAND.instagram}</a>
            </div>
            <ProductCard product={getProductById("set")} />
          </aside>
        </div>
      </section>
    </main>
  );
}
