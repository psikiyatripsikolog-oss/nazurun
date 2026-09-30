import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import Reveal from "../common/Reveal";
import { ROUTINE_STEPS } from "../../data/mock";

export default function RoutineSteps() {
  const [active, setActive] = useState(0);
  return (
    <section className="rg-section bg-rg-bg pt-0" data-testid="routine-steps-section">
      <div className="rg-narrow">
        <SectionTitle sub="Kullanım sırası" title="Rutininiz üç adımda" text="Haftalık ön bakımla başlayın, arındırın ve dengeleyin. Ürünler tek başına da kullanılabilir." />
        <div className="mt-16 border-t border-rg-bd">
          {ROUTINE_STEPS.map((s, i) => {
            const isOpen = active === i;
            return (
              <Reveal key={s.no} delay={i * 100}>
                <div
                  className="grid grid-cols-12 border-b border-rg-bd cursor-pointer"
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  data-testid={`routine-step-${s.no}`}
                >
                  <div className="col-span-3 md:col-span-3 py-8 md:py-10">
                    <span className={`font-heading text-[23px] transition-colors duration-300 ${isOpen ? "text-rg-link" : "text-rg-title"}`}>{s.no}</span>
                  </div>
                  <div className="col-span-9 md:col-span-9 md:pl-12 md:border-l border-rg-bd py-8 md:py-10">
                    <h3 className={`font-heading transition-colors duration-300 ${isOpen ? "text-rg-title" : "text-rg-title/80"}`} style={{ fontSize: "clamp(28px, 3.2vw, 47px)", lineHeight: 1.12 }}>
                      {s.title}
                    </h3>
                    <div className={`grid transition-[grid-template-rows,opacity] duration-700 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                      <div className="overflow-hidden">
                        <p className="pt-6 max-w-[760px]">{s.text}</p>
                        <Link to={`/urun/${s.slug}`} className="rg-link mt-5 mb-1">
                          {s.product} <ArrowUpRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
