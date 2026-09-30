import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ post, tall = false, horizontal = true }) {
  if (!horizontal) {
    return (
      <article className="group" data-testid={`blog-card-${post.slug}`}>
        <Link to={`/blog/${post.slug}`} className="block rounded-[30px] overflow-hidden img-zoom aspect-[924/678]">
          <img src={post.image} alt={post.alt} loading="lazy" className="w-full h-full object-cover" />
        </Link>
        <div className="pt-6">
          <span className="inline-block px-3.5 py-1 rounded-full border border-rg-bd text-[13px] font-heading text-rg-title">{post.category}</span>
          <h3 className="mt-4 font-heading text-[25px] leading-[1.25]">
            <Link to={`/blog/${post.slug}`} className="hover:text-rg-link transition-colors duration-300">{post.title}</Link>
          </h3>
          <p className="mt-3 text-[16px]">{post.excerpt}</p>
          <p className="mt-4 text-[14px] text-rg-meta">{post.date} <span className="mx-1.5">•</span> {post.read}</p>
        </div>
      </article>
    );
  }
  return (
    <article className="group grid grid-cols-12 gap-6 md:gap-10 items-end" data-testid={`blog-card-${post.slug}`}>
      <Link
        to={`/blog/${post.slug}`}
        className={`col-span-12 md:col-span-6 block rounded-[30px] overflow-hidden img-zoom ${tall ? "aspect-[924/962]" : "aspect-[924/678]"}`}
      >
        <img src={post.image} alt={post.alt} loading="lazy" className="w-full h-full object-cover" />
      </Link>
      <div className="col-span-12 md:col-span-6">
        <Link to="/blog" className="inline-block px-3.5 py-1 rounded-full border border-rg-bd text-[13px] font-heading text-rg-title hover:bg-rg-link hover:text-white hover:border-rg-link transition-colors duration-300">
          {post.category}
        </Link>
        <h3 className="mt-4 font-heading text-[27px] leading-[1.22] max-md:text-[23px]">
          <Link to={`/blog/${post.slug}`} className="hover:text-rg-link transition-colors duration-300">{post.title}</Link>
        </h3>
        <p className="mt-3 text-[14px] text-rg-meta">{post.date} <span className="mx-1.5">•</span> {post.read}</p>
      </div>
    </article>
  );
}
