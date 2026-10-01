import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Phone, Mail, MapPin, Building2, ExternalLink } from "lucide-react";
import Seo from "../components/common/Seo";
import PageTitle from "../components/common/PageTitle";
import Reveal from "../components/common/Reveal";
import LegalDoc from "../components/common/LegalDoc";
import { BRAND, IMG } from "../data/mock";
import { SELLER_ROWS } from "../data/legal";

const INFO = [
  { icon: Mail, label: "E-posta", value: BRAND.email },
  { icon: Phone, label: "Telefon", value: BRAND.phone },
  { icon: MapPin, label: "Merkez adresi", value: BRAND.address },
  { icon: Instagram, label: "Instagram", value: `@${BRAND.instagram}`, href: BRAND.instagramUrl },
];

export default function Contact() {
  return (
    <main data-testid="contact-page">
      <Seo title="İletişim" description={`${BRAND.seller} – CABELO₃ Dermokozmetik iletişim ve künye bilgileri, şikâyet ve cayma bildirimi için başvuru yolları.`} />
      <PageTitle title="İletişim" crumbs={[{ label: "İletişim" }]} image={IMG.reelPlant} />
      <section className="rg-section bg-rg-bg">
        <div className="rg-container grid grid-cols-12 gap-y-14 lg:gap-x-16">
          <div className="col-span-12 lg:col-span-5">
            <Reveal><p className="rg-subtitle">Bize ulaşın</p></Reveal>
            <Reveal delay={100}><h2 className="rg-h2 mt-5">Sipariş ve bilgi için yanınızdayız</h2></Reveal>
            <ul className="mt-10 space-y-4">
              {INFO.map((c, i) => (
                <Reveal as="li" key={c.label} delay={i * 90}>
                  <div className="flex items-center gap-5 p-5 rounded-[24px] bg-rg-bg2" data-testid={`contact-info-${i}`}>
                    <span className="w-14 h-14 rounded-full bg-rg-link text-white flex items-center justify-center shrink-0"><c.icon size={22} strokeWidth={1.5} /></span>
                    <div className="min-w-0">
                      <p className="text-[14px] text-rg-meta">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} target="_blank" rel="noopener noreferrer" className="font-heading text-[18px] text-rg-title hover:text-rg-link transition-colors break-words">{c.value}</a>
                      ) : (
                        <p className="font-heading text-[18px] text-rg-title break-words">{c.value}</p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={150} className="col-span-12 lg:col-span-7">
            <div className="rounded-[30px] bg-rg-bg2 p-12 max-md:p-6">
              <h2 className="font-heading text-[29px] flex items-center gap-3"><Building2 className="text-rg-link" /> Satıcı künyesi</h2>
              <div className="mt-7" data-testid="seller-imprint">
                <LegalDoc compact sections={[
                  { table: [...SELLER_ROWS, ["Tescilli marka", BRAND.trademark], ["Bağlı olduğu meslek kuruluşu", BRAND.chamber]].filter(([, v]) => v) },
                  { h: "Meslek davranış kuralları", p: `Bağlı olunan meslek kuruluşunun davranış kurallarına ${BRAND.chamberUrl} adresinden ulaşabilirsiniz.` },
                  { h: "Şikâyet ve cayma bildirimi", p: `Şikâyetlerinizi ve cayma bildirimlerinizi ${BRAND.email} e-posta adresine, ${BRAND.kep ? `${BRAND.kep} KEP adresine, ` : ""}${BRAND.phone} numaralı telefona veya ${BRAND.address} adresine yazılı olarak iletebilirsiniz. Cayma için yazdırılabilir Cayma Formu'nu kullanabilirsiniz.` },
                ]} />
              </div>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-[16px]">
                <Link to="/cayma-formu" className="rg-link">Cayma Formu <ExternalLink size={14} /></Link>
                <Link to="/kargo-ve-iade" className="rg-link">Teslimat ve İade Şartları</Link>
                <Link to="/kvkk" className="rg-link">KVKK Aydınlatma Metni</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
