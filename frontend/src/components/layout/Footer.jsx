import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, ArrowRight, Send } from "lucide-react";
import { toast } from "sonner";
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

const LINKS = [
  { label: "Ana Sayfa", to: "/" },
  { label: "Ürünler", to: "/urunler" },
  { label: "Hakkımızda", to: "/hakkimizda" },
  { label: "Bileşenler", to: "/bilesenler" },
  { label: "Kullanım Rehberi", to: "/kullanim-rehberi" },
  { label: "Blog", to: "/blog" },
];
const HELP = [
  { label: "Kargo ve İade", to: "/kargo-ve-iade" },
  { label: "Sıkça Sorulan Sorular", to: "/sss" },
  { label: "İletişim", to: "/iletisim" },
  { label: "Sepetim", to: "/sepet" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Lütfen geçerli bir e-posta adresi girin.");
      return;
    }
    setDone(true);
    setEmail("");
    toast.success("Bültene kaydınız alındı. Teşekkürler!");
  };

  return (
    <footer className="bg-rg-dark text-rg-alttext" data-testid="site-footer">
      <div className="rg-container pt-[110px] pb-[70px] max-md:pt-[70px] max-md:pb-[50px] grid grid-cols-12 gap-y-12 gap-x-8">
        <div className="col-span-12 lg:col-span-4">
          <Link to="/" aria-label="CABELO₃ ana sayfa" className="inline-block"><Logo variant="stacked" className="h-[150px] max-md:h-[130px]" /></Link>
          <p className="mt-7 max-w-[400px] text-[16px] leading-[1.7]">
            Aşırı yağlanma ve sebum düzensizliği eğilimli saç derisi için sade, ferah ve rutin odaklı bakım ürünleri.
          </p>
          <div className="mt-7 flex gap-3">
            <a href={BRAND.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-11 h-11 rounded-full border border-rg-altbd flex items-center justify-center text-[#FFFEFE] hover:bg-rg-link hover:border-rg-link transition-colors duration-300" data-testid="footer-instagram">
              <Instagram size={17} />
            </a>
          </div>
        </div>

        <div className="col-span-12 sm:col-span-6 lg:col-span-2">
          <h3 className="font-heading text-[20px] !text-[#FFFEFE]">İletişim</h3>
          <ul className="mt-6 space-y-3 text-[16px]">
            <li><a href={BRAND.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-rg-link transition-colors">@{BRAND.instagram}</a></li>
            <li>Telefon: <span className="text-rg-meta">yakında</span></li>
            <li>E-posta: <span className="text-rg-meta">yakında</span></li>
            <li>Adres: <span className="text-rg-meta">yakında</span></li>
          </ul>
        </div>

        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
          <h3 className="font-heading text-[20px] !text-[#FFFEFE]">Bağlantılar</h3>
          <ul className="mt-6 space-y-3 text-[16px]">
            {LINKS.map((l) => (
              <li key={l.to}><Link to={l.to} className="hover-line hover:text-[#FFFEFE] transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="col-span-6 sm:col-span-3 lg:col-span-1">
          <h3 className="font-heading text-[20px] !text-[#FFFEFE]">Yardım</h3>
          <ul className="mt-6 space-y-3 text-[16px]">
            {HELP.map((l) => (
              <li key={l.to}><Link to={l.to} className="hover-line hover:text-[#FFFEFE] transition-colors whitespace-nowrap">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="col-span-12 lg:col-span-3 lg:pl-10">
          <h3 className="font-heading text-[20px] !text-[#FFFEFE]">Bülten</h3>
          <p className="mt-6 text-[16px]">Yeni ürünler, bakım ipuçları ve kampanyalardan ilk siz haberdar olun.</p>
          <form onSubmit={submit} className="mt-5 relative" data-testid="newsletter-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-posta adresiniz"
              aria-label="E-posta adresiniz"
              className="rg-input dark pr-16"
              data-testid="newsletter-email"
            />
            <button type="submit" aria-label="Abone ol" className="absolute right-1.5 top-1.5 w-[46px] h-[46px] rounded-full bg-rg-link hover:bg-rg-hover text-white flex items-center justify-center transition-colors" data-testid="newsletter-submit">
              <Send size={17} />
            </button>
          </form>
          {done && <p className="mt-3 text-[14px] text-rg-lime" data-testid="newsletter-success">Teşekkürler! Bültenimize kaydoldunuz.</p>}
        </div>
      </div>

      <div className="rg-container">
        <div className="border-t border-rg-altbd py-8 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-[15px]">
          <p>© {new Date().getFullYear()} {BRAND.name}. Tüm hakları saklıdır.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/kvkk" className="hover:text-[#FFFEFE] transition-colors">KVKK Aydınlatma Metni</Link>
            <Link to="/gizlilik-politikasi" className="hover:text-[#FFFEFE] transition-colors">Gizlilik Politikası</Link>
            <Link to="/mesafeli-satis-sozlesmesi" className="hover:text-[#FFFEFE] transition-colors inline-flex items-center gap-1">Mesafeli Satış Sözleşmesi <ArrowRight size={13} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
