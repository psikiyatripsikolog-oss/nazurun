import React from "react";
import { Link } from "react-router-dom";

// Yasal belge görüntüleyici – tüm metinler en az 16 px
export default function LegalDoc({ sections, compact = false }) {
  return (
    <div className={`legal-doc text-[16px] leading-[1.7] text-rg-text ${compact ? "space-y-5" : "space-y-8"}`} data-testid="legal-doc">
      {sections.map((s, i) => (
        <section key={i}>
          {s.h && <h2 className={`font-heading text-rg-title ${compact ? "text-[19px]" : "text-[24px] max-md:text-[21px]"} mb-3`}>{s.h}</h2>}
          {s.p && (Array.isArray(s.p) ? s.p : [s.p]).map((t, j) => <p key={j} className="mb-3 text-[16px]">{t}</p>)}
          {s.list && (
            <ul className="space-y-2">
              {s.list.map((t, j) => (
                <li key={j} className="relative pl-5 text-[16px] before:content-[''] before:absolute before:left-0 before:top-[0.7em] before:w-[6px] before:h-[6px] before:rounded-full before:bg-rg-link">{t}</li>
              ))}
            </ul>
          )}
          {s.table && (
            <dl className="mt-1 rounded-[18px] border border-rg-bd overflow-hidden">
              {s.table.map(([k, v], j) => (
                <div key={j} className={`grid sm:grid-cols-[230px_1fr] gap-x-6 gap-y-1 px-5 py-3 text-[16px] ${j % 2 ? "bg-rg-bg" : "bg-white/60"}`}>
                  <dt className="font-heading text-rg-title">{k}</dt>
                  <dd className="break-words">{v}</dd>
                </div>
              ))}
            </dl>
          )}
          {s.link && (
            <Link to={s.link.to} className="rg-link mt-2 text-[16px]">{s.link.label}</Link>
          )}
        </section>
      ))}
    </div>
  );
}
