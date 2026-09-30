import React from "react";
import { Link } from "react-router-dom";
import Seo from "../components/common/Seo";

export default function NotFound() {
  return (
    <main className="bg-rg-dark min-h-[80vh] flex items-center pt-[120px] pb-[90px]" data-testid="not-found-page">
      <Seo title="Sayfa bulunamadı" />
      <div className="rg-container text-center">
        <p className="font-heading text-rg-lime leading-none" style={{ fontSize: "clamp(120px, 18vw, 260px)" }}>404</p>
        <h1 className="rg-h3 !text-[#FFFEFE] mt-4">Aradığınız sayfa bulunamadı</h1>
        <p className="mt-4 text-rg-alttext">Sayfa taşınmış ya da kaldırılmış olabilir.</p>
        <Link to="/" className="rg-btn mt-10">Ana Sayfaya Dön</Link>
      </div>
    </main>
  );
}
