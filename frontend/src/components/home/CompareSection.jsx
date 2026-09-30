import React from "react";
import SectionTitle from "../common/SectionTitle";
import CompareSlider from "../common/CompareSlider";
import Reveal from "../common/Reveal";
import { IMG } from "../../data/mock";

export default function CompareSection() {
  return (
    <section className="rg-section bg-rg-bg2" data-testid="compare-section">
      <div className="rg-narrow">
        <SectionTitle sub="Ürün ve doku" title="Kutudan köpüğe, yakından tanıyın" />
        <Reveal delay={150} className="mt-14">
          <CompareSlider
            left={IMG.set}
            right={IMG.foamTiles}
            leftLabel="Ambalaj"
            rightLabel="Köpük dokusu"
            leftAlt="CABELO₃ ürün kutuları"
            rightAlt="Fayans üzerinde CABELO₃ şampuan köpüğü"
          />
        </Reveal>
      </div>
    </section>
  );
}
