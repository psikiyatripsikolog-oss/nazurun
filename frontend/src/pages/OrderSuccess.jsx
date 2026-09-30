import React from "react";
import { Link, useParams } from "react-router-dom";
import { CheckCircle2, Instagram, Copy } from "lucide-react";
import { toast } from "sonner";
import Seo from "../components/common/Seo";
import Reveal from "../components/common/Reveal";
import { formatTL, BRAND } from "../data/mock";

export default function OrderSuccess() {
  const { orderNo } = useParams();
  const orders = JSON.parse(localStorage.getItem("cabelo3_orders") || "[]");
  const order = orders.find((o) => o.orderNo === orderNo);

  const copy = () => {
    navigator.clipboard?.writeText(orderNo);
    toast.success("Sipariş numarası kopyalandı");
  };

  return (
    <main className="bg-rg-bg pt-[180px] pb-[140px] max-md:pt-[130px] max-md:pb-[90px]" data-testid="order-success-page">
      <Seo title="Siparişiniz alındı" />
      <div className="rg-narrow max-w-[820px] text-center">
        <Reveal variant="zoom">
          <div className="w-24 h-24 mx-auto rounded-full bg-rg-link/10 flex items-center justify-center text-rg-link">
            <CheckCircle2 size={48} strokeWidth={1.4} />
          </div>
        </Reveal>
        <Reveal delay={100}><h1 className="rg-h1 mt-8" data-testid="order-success-title">Siparişiniz alındı</h1></Reveal>
        <Reveal delay={200}>
          <p className="mt-5">Teşekkür ederiz! Siparişiniz aynı gün kargoya verilecektir.</p>
          <button onClick={copy} className="mt-8 inline-flex items-center gap-3 px-7 py-4 rounded-full bg-rg-bg2 border border-rg-bd font-heading text-[20px] text-rg-title hover:border-rg-link transition-colors" data-testid="order-number">
            Sipariş No: <span className="text-rg-link">{orderNo}</span> <Copy size={17} className="text-rg-meta" />
          </button>
          <p className="mt-4 text-[14px] text-rg-meta">Bu bir TEST (MOCK) siparişidir; herhangi bir tahsilat yapılmamıştır.</p>
        </Reveal>

        {order && (
          <Reveal delay={300}>
            <div className="mt-12 text-left rounded-[30px] bg-rg-bg2 p-9 max-md:p-6">
              <h2 className="font-heading text-[24px]">Sipariş özeti</h2>
              <ul className="mt-5 divide-y divide-rg-bd">
                {order.items.map((i) => (
                  <li key={i.id} className="py-3 flex justify-between gap-4">
                    <span className="text-rg-title">{i.name} × {i.qty}</span>
                    <span className="font-heading text-rg-title">{formatTL(i.lineTotal)}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 mt-2 border-t border-rg-bd flex justify-between">
                <span className="font-heading text-rg-title">Toplam</span>
                <span className="font-heading text-rg-title text-[22px]">{formatTL(order.total)}</span>
              </div>
              {order.freeShipping && <p className="mt-2 text-[14px] text-rg-link">Kargo ücretsiz (3'lü Set)</p>}
              <p className="mt-5 text-[15px]">Teslimat: {order.customer.name} {order.customer.surname}, {order.customer.district} / {order.customer.city}</p>
            </div>
          </Reveal>
        )}

        <Reveal delay={400}>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link to="/urunler" className="rg-btn" data-testid="order-continue">Alışverişe Devam Et</Link>
            <a href={BRAND.instagramUrl} target="_blank" rel="noopener noreferrer" className="rg-btn outline"><Instagram size={17} /> Instagram</a>
            <Link to="/iletisim" className="rg-btn outline">İletişim</Link>
          </div>
          <p className="mt-8 text-[14px]">Hasarlı, eksik ya da yanlış ürün teslimatında, teslimattan sonraki 3 gün içinde sipariş numaranızla bize bildirin.</p>
        </Reveal>
      </div>
    </main>
  );
}
