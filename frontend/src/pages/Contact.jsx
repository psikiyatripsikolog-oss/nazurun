import React, { useState } from "react";
import { Instagram, Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import Seo from "../components/common/Seo";
import PageTitle from "../components/common/PageTitle";
import Reveal from "../components/common/Reveal";
import { BRAND, IMG } from "../data/mock";

const INFO = [
  { icon: Instagram, label: "Instagram", value: `@${BRAND.instagram}`, href: BRAND.instagramUrl },
  { icon: Phone, label: "Telefon", value: "yakında" },
  { icon: Mail, label: "E-posta", value: "yakında" },
  { icon: MapPin, label: "Adres", value: "yakında" },
];

export default function Contact() {
  const [f, setF] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!f.name.trim() || !f.email.trim() || !f.message.trim()) return toast.error("Lütfen ad, e-posta ve mesaj alanlarını doldurun.");
    if (!/^\S+@\S+\.\S+$/.test(f.email)) return toast.error("Geçerli bir e-posta adresi girin.");
    setSent(true);
    setF({ name: "", email: "", subject: "", message: "" });
    toast.success("Mesajınız alındı. En kısa sürede dönüş yapacağız.");
  };

  return (
    <main data-testid="contact-page">
      <Seo title="İletişim" description="CABELO₃ Dermokozmetik ile iletişime geçin. Sipariş ve bilgi için Instagram @cabelo3haircosmetic üzerinden DM gönderebilirsiniz." />
      <PageTitle title="İletişim" crumbs={[{ label: "İletişim" }]} image={IMG.reelPlant} />
      <section className="rg-section bg-rg-bg">
        <div className="rg-container grid grid-cols-12 gap-y-14 lg:gap-x-16">
          <div className="col-span-12 lg:col-span-5">
            <Reveal><p className="rg-subtitle">Bize ulaşın</p></Reveal>
            <Reveal delay={100}><h2 className="rg-h2 mt-5">Sipariş ve bilgi için yanınızdayız</h2></Reveal>
            <Reveal delay={200}><p className="mt-7 max-w-[460px]">En hızlı yanıt için Instagram hesabımıza DM gönderebilir ya da formu doldurabilirsiniz.</p></Reveal>
            <ul className="mt-10 space-y-4">
              {INFO.map((c, i) => (
                <Reveal as="li" key={c.label} delay={i * 90}>
                  <div className="flex items-center gap-5 p-5 rounded-[24px] bg-rg-bg2" data-testid={`contact-info-${i}`}>
                    <span className="w-14 h-14 rounded-full bg-rg-link text-white flex items-center justify-center shrink-0"><c.icon size={22} strokeWidth={1.5} /></span>
                    <div>
                      <p className="text-[14px] text-rg-meta">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} target="_blank" rel="noopener noreferrer" className="font-heading text-[19px] text-rg-title hover:text-rg-link transition-colors">{c.value}</a>
                      ) : (
                        <p className="font-heading text-[19px] text-rg-meta italic">{c.value}</p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={150} className="col-span-12 lg:col-span-7">
            <form onSubmit={submit} className="rounded-[30px] bg-rg-bg2 p-12 max-md:p-7" data-testid="contact-form" noValidate>
              <h3 className="font-heading text-[31px]">Mesaj gönderin</h3>
              <div className="mt-8 grid sm:grid-cols-2 gap-5">
                <input className="rg-input" placeholder="Adınız *" aria-label="Adınız" value={f.name} onChange={set("name")} data-testid="contact-name" />
                <input className="rg-input" type="email" placeholder="E-posta *" aria-label="E-posta" value={f.email} onChange={set("email")} data-testid="contact-email" />
                <input className="rg-input sm:col-span-2" placeholder="Konu" aria-label="Konu" value={f.subject} onChange={set("subject")} data-testid="contact-subject" />
                <textarea className="rg-input sm:col-span-2" placeholder="Mesajınız *" aria-label="Mesajınız" value={f.message} onChange={set("message")} data-testid="contact-message" />
              </div>
              <button type="submit" className="rg-btn mt-7" data-testid="contact-submit"><Send size={16} /> Gönder</button>
              {sent && <p className="mt-5 text-[15px] text-rg-link" data-testid="contact-success">Teşekkürler! Mesajınız alındı.</p>}
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
