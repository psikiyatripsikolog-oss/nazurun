import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { WordsUp } from "./Reveal";

// Inner page hero – dark band with large title & breadcrumbs
export default function PageTitle({ title, crumbs = [], image }) {
  return (
    <section className="relative bg-rg-dark overflow-hidden" data-testid="page-title">
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-35 kenburns" />
          <div className="absolute inset-0 bg-gradient-to-r from-rg-dark via-rg-dark/70 to-rg-dark/20" />
        </div>
      )}
      <div className="rg-container relative pt-[190px] pb-[110px] max-md:pt-[140px] max-md:pb-[70px]">
        <h1 className="rg-h1 !text-[#FFFEFE] max-w-[900px]" style={{ fontSize: "clamp(40px, 5.2vw, 80px)" }}>
          <WordsUp text={title} />
        </h1>
        <nav aria-label="breadcrumb" className="mt-8 flex flex-wrap items-center gap-2 text-[15px] text-rg-alttext fade-in" style={{ animationDelay: "400ms" }}>
          <Link to="/" className="hover:text-rg-link transition-colors duration-300">Ana Sayfa</Link>
          {crumbs.map((c, i) => (
            <React.Fragment key={i}>
              <ChevronRight size={14} className="opacity-60" />
              {c.to ? (
                <Link to={c.to} className="hover:text-rg-link transition-colors duration-300">{c.label}</Link>
              ) : (
                <span className="text-[#FFFEFE]">{c.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </section>
  );
}
