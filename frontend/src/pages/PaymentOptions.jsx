import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, CreditCard, Lock } from "lucide-react";
import Seo from "../components/common/Seo";
import PageTitle from "../components/common/PageTitle";
import Reveal from "../components/common/Reveal";
import { PAYMENT, BRAND } from "../data/mock";

export default function PaymentOptions() {
  const cards = [
    { icon: CreditCard, title: "Kabul edilen ödeme araçları", text: PAYMENT.methods },
    { icon: ShieldCheck, title: "PayTR güvenli ödeme", text: "Ödemeler, lisanslı ödeme kuruluşu PayTR'nin güvenli ödeme sayfası üzerinden alınır." },
    { icon: Lock, title: "Kart bilgileriniz", text: "Kart bilgileriniz sitemizde girilmez ve saklanmaz; doğrudan ödeme kuruluşuna iletilir." },
  ];
  return (
    <main data-testid="payment-options-page">
      <Seo title="Ödeme Seçenekleri" description="CABELO₃ online mağazasında kabul edilen ödeme araçları ve PayTR güvenli ödeme bilgisi." />
      <PageTitle title="Ödeme Seçenekleri" crumbs={[{ label: "Ödeme Seçenekleri" }]} />
      <section className="rg-section bg-rg-bg">
        <div className="rg-narrow">
          <div className="grid md:grid-cols-3 gap-6">
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <div className="h-full rounded-[30px] bg-rg-bg2 p-10 max-md:p-7">
                  <span className="w-16 h-16 rounded-full bg-rg-link text-white flex items-center justify-center"><c.icon size={26} strokeWidth={1.5} /></span>
                  <h2 className="mt-7 font-heading text-[24px]">{c.title}</h2>
                  <p className="mt-3 text-[16px]">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-[16px] space-y-3 max-w-[820px]">
            <p>Fiyatlarımız Türk lirası cinsindendir ve KDV dahildir. Kargo ücreti sipariş özetinde ayrı satırda gösterilir.</p>
            <p>Siparişi onayladığınızda ödeme yükümlülüğü altına girersiniz. Sorularınız için {BRAND.email} · {BRAND.phone}</p>
            <p className="flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/mesafeli-satis-sozlesmesi" className="rg-link">Mesafeli Satış Sözleşmesi</Link>
              <Link to="/kargo-ve-iade" className="rg-link">Teslimat ve İade Şartları</Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
