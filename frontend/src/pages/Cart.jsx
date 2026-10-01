import React from "react";
import { Link } from "react-router-dom";
import { X, Truck, ShoppingBag, ArrowRight } from "lucide-react";
import Seo from "../components/common/Seo";
import PageTitle from "../components/common/PageTitle";
import { QtyStepper } from "../components/layout/CartDrawer";
import { useCart } from "../context/CartContext";
import { formatTL, IMG, S } from "../data/mock";

export default function Cart() {
  const { items, subtotal, hasSet, setQty, remove, clear } = useCart();

  return (
    <main data-testid="cart-page">
      <Seo title="Sepetim" description="CABELO₃ alışveriş sepetiniz." />
      <PageTitle title="Sepetim" crumbs={[{ label: "Sepetim" }]} image={IMG.foamTiles} />
      <section className="rg-section bg-rg-bg">
        <div className="rg-container">
          {items.length === 0 ? (
            <div className="text-center max-w-[520px] mx-auto py-10" data-testid="cart-empty">
              <div className="w-24 h-24 mx-auto rounded-full bg-rg-bg2 flex items-center justify-center text-rg-link"><ShoppingBag size={38} strokeWidth={1.3} /></div>
              <h2 className="rg-h4 mt-8">Sepetiniz şu an boş</h2>
              <p className="mt-4">Sebum dengesi rutininize başlamak için ürünlerimize göz atın.</p>
              <Link to="/urunler" className="rg-btn mt-8" data-testid="cart-empty-shop">Alışverişe Başla</Link>
            </div>
          ) : (
            <div className="grid grid-cols-12 gap-y-12 lg:gap-x-16">
              <div className="col-span-12 lg:col-span-8">
                <div className="hidden md:grid grid-cols-12 pb-5 border-b border-rg-bd font-heading text-[15px] text-rg-title">
                  <span className="col-span-6">Ürün</span>
                  <span className="col-span-2">Fiyat</span>
                  <span className="col-span-2">Adet</span>
                  <span className="col-span-2 text-right">Toplam</span>
                </div>
                <ul>
                  {items.map((i) => (
                    <li key={i.id} className="grid grid-cols-12 gap-y-4 items-center py-7 border-b border-rg-bd" data-testid={`cart-row-${i.id}`}>
                      <div className="col-span-12 md:col-span-6 flex items-center gap-5">
                        <button onClick={() => remove(i.id)} aria-label="Kaldır" className="w-9 h-9 rounded-full border border-rg-bd flex items-center justify-center text-rg-meta hover:text-white hover:bg-rg-link hover:border-rg-link transition-colors shrink-0" data-testid={`cart-remove-${i.id}`}>
                          <X size={15} />
                        </button>
                        <Link to={`/urun/${i.product.slug}`} className="w-[90px] h-[110px] rounded-[18px] overflow-hidden bg-rg-bg2 shrink-0">
                          <img src={i.product.image} alt={i.product.alt} className="w-full h-full object-cover" />
                        </Link>
                        <div>
                          <Link to={`/urun/${i.product.slug}`} className="font-heading text-[19px] leading-snug text-rg-title hover:text-rg-link transition-colors">{i.product.name}</Link>
                          <p className="text-[14px] text-rg-meta mt-1">{i.product.volume}</p>
                          {i.product.freeShipping && <p className="text-[13px] text-rg-link mt-1 flex items-center gap-1.5"><Truck size={13} /> Kargo ücretsiz</p>}
                        </div>
                      </div>
                      <span className="col-span-4 md:col-span-2 font-heading text-rg-title">{formatTL(i.product.price)}<span className="block text-[12px] font-body text-rg-meta">KDV dahil</span></span>
                      <div className="col-span-4 md:col-span-2"><QtyStepper size="sm" value={i.qty} onChange={(v) => setQty(i.id, v)} testid={`cart-qty-${i.id}`} /></div>
                      <span className="col-span-4 md:col-span-2 text-right font-heading text-[18px] text-rg-title" data-testid={`cart-line-total-${i.id}`}>{formatTL(i.lineTotal)}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-4 justify-between">
                  <Link to="/urunler" className="rg-btn outline">Alışverişe Devam Et</Link>
                  <button onClick={clear} className="rg-link" data-testid="cart-clear">Sepeti Temizle</button>
                </div>
              </div>

              <aside className="col-span-12 lg:col-span-4">
                <div className="rounded-[30px] bg-rg-bg2 p-10 max-md:p-7 lg:sticky lg:top-[100px]" data-testid="cart-summary">
                  <h2 className="font-heading text-[28px]">Sepet özeti</h2>
                  <div className="mt-7 space-y-4 text-[16px]">
                    <div className="flex justify-between"><span>Ara toplam (KDV dahil)</span><span className="font-heading text-rg-title">{formatTL(subtotal)}</span></div>
                    {hasSet && (
                      <div className="flex justify-between" data-testid="cart-free-shipping"><span>Kargo</span><span className="font-heading text-rg-link">Ücretsiz (3'lü Set)</span></div>
                    )}
                    <div className="pt-5 border-t border-rg-bd flex justify-between items-baseline">
                      <span className="font-heading text-rg-title text-[18px]">Ürün toplamı (KDV dahil)</span>
                      <span className="font-heading text-rg-title text-[30px]" data-testid="cart-total">{formatTL(subtotal)}</span>
                    </div>
                  </div>
                  <Link to="/odeme" className="rg-btn w-full mt-8" data-testid="cart-checkout-button">Ödemeye Geç <ArrowRight size={17} /></Link>
                  <p className="mt-5 text-[14px] leading-relaxed">{S.S2} Kargo ücreti ödeme adımındaki sipariş özetinde ayrı satırda gösterilir. <Link to="/kargo-ve-iade" className="underline hover:text-rg-link">Teslimat ve İade Şartları</Link></p>
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
