import React from "react";
import Seo from "../components/common/Seo";
import Hero from "../components/home/Hero";
import ProductsIntro from "../components/home/ProductsIntro";
import AboutIntro from "../components/home/AboutIntro";
import RoutineSteps from "../components/home/RoutineSteps";
import MarqueeBand from "../components/home/MarqueeBand";
import SetOffer from "../components/home/SetOffer";
import FreeFromStrip from "../components/home/FreeFromStrip";
import CompareSection from "../components/home/CompareSection";
import FaqSection from "../components/home/FaqSection";
import BlogSection, { CoralBand } from "../components/home/BlogSection";

export default function Home() {
  return (
    <main data-testid="home-page">
      <Seo description="CABELO₃ Dermokozmetik: aşırı yağlanma ve sebum düzensizliği eğilimli saç derisi için sülfatsız Bakım Şampuanı, Saç Toniği ve %100 doğal Ozon Serumu. 3'lü Sette kargo ücretsiz." />
      <Hero />
      <ProductsIntro />
      <AboutIntro />
      <RoutineSteps />
      <MarqueeBand />
      <SetOffer />
      <FreeFromStrip />
      <CompareSection />
      <FaqSection />
      <CoralBand />
      <BlogSection />
    </main>
  );
}
