import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Header";
import { BRAND, INSTAGRAM_POSTS, igUrl } from "../../data/mock";
import Reveal from "../common/Reveal";

export function InstagramStrip() {
  return (
    <section className="bg-rg-bg2 pt-[110px] pb-0 max-md:pt-[70px]" data-testid="instagram-section">
      <div className="rg-container flex flex-wrap items-end justify-between gap-6 mb-12">
        <Reveal>
          <p className="rg-subtitle">Instagram · @{BRAND.instagram}</p>
          <h2 className="rg-h3 mt-4 max-w-[640px]">Sipariş ve bilgi için bize DM’den yazın</h2>
        </Reveal>
        <Reveal delay={150}>
          <a href={BRAND.instagramUrl} target="_blank" rel="noopener noreferrer" className="rg-btn" data-testid="instagram-dm-button">
            <Instagram size={18} /> DM Gönder
          </a>
        </Reveal>
      </div>
      <div className="grid grid-cols-4 lg:grid-cols-8">
        {INSTAGRAM_POSTS.map((p, i) => (
          <a
            key={p.id}
            href={igUrl(p)}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden"
            aria-label={`Instagram gönderisi: ${p.alt}`}
            data-testid={`instagram-post-${i}`}
          >
            <img src={p.image} alt={p.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
            <span className="absolute inset-0 bg-rg-dark/55 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <Instagram className="text-white scale-50 group-hover:scale-100 transition-transform duration-500" size={34} strokeWidth={1.4} />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

// PayTR incelemesinde aranan ilk beş bağlantı birebir bu adlarla yazılır
export const LEGAL_LINKS = [
  { label: "Gizlilik Politikası", to: "/gizlilik-politikasi" },
  { label: "Mesafeli Satış Sözleşmesi", to: "/mesafeli-satis-sozlesmesi" },
  { label: "Teslimat ve İade Şartları", to: "/kargo-ve-iade" },
  { label: "Hakkımızda", to: "/hakkimizda" },
  { label: "İletişim", to: "/iletisim" },
  { label: "KVKK Aydınlatma Metni", to: "/kvkk" },
  { label: "Çerez Politikası", to: "/cerez-politikasi" },
  { label: "Ön Bilgilendirme Formu", to: "/on-bilgilendirme-formu" },
  { label: "Cayma Formu", to: "/cayma-formu" },
  { label: "Ödeme Seçenekleri", to: "/odeme-secenekleri" },
  { label: "SSS", to: "/sss" },
];

const SITE_LINKS = [
  { label: "Ana Sayfa", to: "/" },
  { label: "Ürünler", to: "/urunler" },
  { label: "Bileşenler", to: "/bilesenler" },
  { label: "Kullanım Rehberi", to: "/kullanim-rehberi" },
  { label: "Blog", to: "/blog" },
  { label: "Sepetim", to: "/sepet" },
];

const FLink = ({ to, children, testid }) => (
  <li><Link to={to} data-testid={testid} className="hover-line hover:text-[#FFFEFE] transition-colors">{children}</Link></li>
);

export default function Footer() {
  return (
    <footer className="bg-rg-dark text-rg-alttext" data-testid="site-footer">
      <div className="rg-container pt-[110px] pb-[70px] max-md:pt-[70px] max-md:pb-[50px] grid grid-cols-12 gap-y-12 gap-x-8">
        <div className="col-span-12 lg:col-span-3">
          <Link to="/" aria-label="CABELO₃ ana sayfa" className="inline-block"><Logo variant="stacked" className="h-[150px] max-md:h-[130px]" /></Link>
          <p className="mt-7 max-w-[340px] text-[16px] leading-[1.7]">
            Aşırı yağlanma ve sebum düzensizliği eğilimli saç derisi için sade, ferah ve rutin odaklı bakım ürünleri.
          </p>
          <div className="mt-7 flex gap-3">
            <a href={BRAND.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-11 h-11 rounded-full border border-rg-altbd flex items-center justify-center text-[#FFFEFE] hover:bg-rg-link hover:border-rg-link transition-colors duration-300" data-testid="footer-instagram">
              <Instagram size={17} />
            </a>
          </div>
        </div>

        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
          <h3 className="font-heading text-[20px] !text-[#FFFEFE]">İletişim</h3>
          <ul className="mt-6 space-y-4 text-[16px]" data-testid="footer-contact">
            <li className="flex gap-3"><Mail size={17} className="text-rg-link shrink-0 mt-1" /> <span className="break-words">{BRAND.email}</span></li>
            <li className="flex gap-3"><Phone size={17} className="text-rg-link shrink-0 mt-1" /> <span>{BRAND.phone}</span></li>
            <li className="flex gap-3"><MapPin size={17} className="text-rg-link shrink-0 mt-1" /> <span>{BRAND.address}</span></li>
            <li className="flex gap-3"><Instagram size={17} className="text-rg-link shrink-0 mt-1" /> <a href={BRAND.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-rg-link transition-colors">@{BRAND.instagram}</a></li>
          </ul>
          <p className="mt-6 text-[14px] leading-relaxed text-rg-meta">{BRAND.seller}{BRAND.mersis && <><br />MERSİS: {BRAND.mersis}</>}</p>
        </div>

        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <h3 className="font-heading text-[20px] !text-[#FFFEFE]">Yasal Bilgiler</h3>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 sm:grid-flow-col sm:grid-rows-6 gap-x-6 gap-y-3 text-[16px]" data-testid="footer-legal-links">
            {LEGAL_LINKS.map((l) => <FLink key={l.to + l.label} to={l.to} testid={`footer-link-${l.to.replace("/", "")}`}>{l.label}</FLink>)}
          </ul>
        </div>

        <div className="col-span-12 sm:col-span-6 lg:col-span-2">
          <h3 className="font-heading text-[20px] !text-[#FFFEFE]">Bağlantılar</h3>
          <ul className="mt-6 space-y-3 text-[16px]">
            {SITE_LINKS.map((l) => <FLink key={l.to} to={l.to}>{l.label}</FLink>)}
          </ul>
        </div>
      </div>

      <div className="rg-container">
        <div className="border-t border-rg-altbd py-8 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-[15px]">
          <p>© {new Date().getFullYear()} {BRAND.name} · {BRAND.seller} Tüm hakları saklıdır.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/kvkk" className="hover:text-[#FFFEFE] transition-colors">KVKK</Link>
            <Link to="/cerez-politikasi" className="hover:text-[#FFFEFE] transition-colors">Çerez Politikası</Link>
            <Link to="/odeme-secenekleri" className="hover:text-[#FFFEFE] transition-colors">Ödeme Seçenekleri</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
