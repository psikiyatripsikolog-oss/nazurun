import React from "react";
import { Link } from "react-router-dom";
import { Truck, Gift, RotateCcw, PackageX, ShieldCheck, MapPin } from "lucide-react";
import Seo from "../components/common/Seo";
import PageTitle from "../components/common/PageTitle";
import Reveal from "../components/common/Reveal";
import { IMG, BRAND, S, SHIPPING, NEUTRAL, SINGLE_FEE_TEXT } from "../data/mock";

export default function Shipping() {
  const cards = [
    { icon: Truck, title: "Teslim", text: S.S2 },
    { icon: Gift, title: "Kargo ücreti", text: `3'lü Set içeren siparişlerde kargo ücretsizdir. ${SINGLE_FEE_TEXT}` },
    { icon: MapPin, title: "Gönderim bölgesi", text: `${SHIPPING.region}. Teslim her hâlde en geç 30 gündür.` },
  ];
  const steps = [
    `Cayma bildiriminizi ${BRAND.email} / ${BRAND.phone} üzerinden ya da Cayma Formu'nu doldurarak bize iletin.`,
    SHIPPING.returnCarrier ? `Ürünü, faturasıyla birlikte ${SHIPPING.returnCarrier} ile ${BRAND.address} adresine gönderin.` : `${NEUTRAL.carrier} Ürünü faturasıyla birlikte ${BRAND.address} adresine gönderin.`,
    "Ürün bize ulaştıktan sonra para iadesi aşağıdaki süre ve koşullarla yapılır.",
  ];
  return (
    <main data-testid="shipping-page">
      <Seo title="Teslimat ve İade Şartları" description="CABELO₃ teslimat süresi, kargo ücreti, gönderim bölgesi, 14 günlük cayma hakkı ve iade adımları." />
      <PageTitle title="Teslimat ve İade Şartları" crumbs={[{ label: "Teslimat ve İade Şartları" }]} image={IMG.woodSet} />

      <section className="rg-section bg-rg-bg">
        <div className="rg-narrow">
          <div className="grid md:grid-cols-3 gap-6">
            {cards.map((c, i) => (
              <Reveal key={i} delay={i * 110}>
                <div className="h-full rounded-[30px] bg-rg-bg2 p-10 max-md:p-7">
                  <span className="w-16 h-16 rounded-full bg-rg-link text-white flex items-center justify-center"><c.icon size={26} strokeWidth={1.5} /></span>
                  <h2 className="mt-7 font-heading text-[25px]">{c.title}</h2>
                  <p className="mt-3 text-[16px]">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-12 gap-y-12 lg:gap-x-16 text-[16px]">
            <Reveal className="col-span-12 lg:col-span-6">
              <div className="flex items-center gap-4"><RotateCcw className="text-rg-link" size={30} strokeWidth={1.5} /><h2 className="rg-h4">Cayma hakkı</h2></div>
              <p className="mt-6" data-testid="shipping-s3">{S.S3}</p>
              <div className="flex items-center gap-4 mt-12"><ShieldCheck className="text-rg-link" size={30} strokeWidth={1.5} /><h2 className="rg-h4">İade edilemeyen ürünler</h2></div>
              <p className="mt-6" data-testid="shipping-s1">{S.S1}</p>
            </Reveal>
            <Reveal delay={120} className="col-span-12 lg:col-span-6">
              <h2 className="rg-h4">İade 3 adımda</h2>
              <ol className="mt-6 space-y-4">
                {steps.map((t, i) => (
                  <li key={i} className="flex gap-4 p-5 rounded-[20px] bg-rg-bg2">
                    <span className="font-heading text-rg-link text-[20px] shrink-0">0{i + 1}</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-6">{S.S4}</p>
              <p className="mt-4">{S.S5}</p>
              <Link to="/cayma-formu" className="rg-btn mt-7">Cayma Formu</Link>
            </Reveal>
          </div>

          <Reveal className="mt-16 p-8 rounded-[24px] border border-rg-bd text-[16px]">
            <div className="flex items-center gap-3 mb-3"><PackageX className="text-rg-link" size={24} strokeWidth={1.5} /><h2 className="font-heading text-[22px]">Hasarlı, eksik ya da hatalı ürün</h2></div>
            <p data-testid="shipping-s6">{S.S6}</p>
            <p className="mt-4">Ayrıntılı bilgi: <Link to="/mesafeli-satis-sozlesmesi" className="underline text-rg-title hover:text-rg-link">Mesafeli Satış Sözleşmesi</Link> · <Link to="/on-bilgilendirme-formu" className="underline text-rg-title hover:text-rg-link">Ön Bilgilendirme Formu</Link></p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
