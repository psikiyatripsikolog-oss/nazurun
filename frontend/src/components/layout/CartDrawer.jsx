import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Minus, Plus, X, ShoppingBag, Truck } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "../ui/sheet";
import { useCart } from "../../context/CartContext";
import { formatTL } from "../../data/mock";

export function QtyStepper({ value, onChange, testid = "qty", size = "md" }) {
  const h = size === "sm" ? "h-10" : "h-[55px]";
  return (
    <div className={`inline-flex items-center ${h} rounded-full border border-rg-bd bg-white/60`} data-testid={testid}>
      <button type="button" aria-label="Azalt" onClick={() => onChange(value - 1)} className="w-10 h-full flex items-center justify-center text-rg-title hover:text-rg-link transition-colors" data-testid={`${testid}-minus`}>
        <Minus size={15} />
      </button>
      <span className="w-8 text-center font-heading text-[16px] text-rg-title" data-testid={`${testid}-value`}>{value}</span>
      <button type="button" aria-label="Artır" onClick={() => onChange(value + 1)} className="w-10 h-full flex items-center justify-center text-rg-title hover:text-rg-link transition-colors" data-testid={`${testid}-plus`}>
        <Plus size={15} />
      </button>
    </div>
  );
}

export default function CartDrawer() {
  const { items, subtotal, hasSet, setQty, remove, drawerOpen, setDrawerOpen } = useCart();
  const navigate = useNavigate();
  const go = (to) => {
    setDrawerOpen(false);
    navigate(to);
  };

  return (
    <Sheet open={drawerOpen} onOpenChange={setDrawerOpen}>
      <SheetContent side="right" className="w-full sm:max-w-[460px] bg-rg-bg border-l-0 p-0 flex flex-col" data-testid="cart-drawer">
        <SheetHeader className="px-8 pt-8 pb-6 border-b border-rg-bd text-left">
          <SheetTitle className="font-heading text-[28px] font-medium text-rg-title">Sepetim</SheetTitle>
          <SheetDescription className="text-rg-text">{items.length ? `${items.length} farklı ürün` : "Sepetiniz şu an boş"}</SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-8 py-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-5">
              <div className="w-20 h-20 rounded-full bg-rg-bg2 flex items-center justify-center text-rg-link">
                <ShoppingBag size={32} strokeWidth={1.4} />
              </div>
              <p>Sepetinizde henüz ürün yok.</p>
              <button className="rg-btn" onClick={() => go("/urunler")} data-testid="drawer-shop-button">Ürünlere Göz At</button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((i) => (
                <li key={i.id} className="flex gap-4" data-testid={`drawer-item-${i.id}`}>
                  <button onClick={() => go(`/urun/${i.product.slug}`)} className="w-[84px] h-[100px] rounded-[16px] overflow-hidden shrink-0 bg-rg-bg2">
                    <img src={i.product.image} alt={i.product.alt} className="w-full h-full object-cover" />
                  </button>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <button onClick={() => go(`/urun/${i.product.slug}`)} className="text-left font-heading text-[17px] leading-snug text-rg-title hover:text-rg-link transition-colors">
                        {i.product.name}
                      </button>
                      <button onClick={() => remove(i.id)} aria-label="Ürünü kaldır" className="text-rg-meta hover:text-rg-link transition-colors shrink-0" data-testid={`drawer-remove-${i.id}`}>
                        <X size={18} />
                      </button>
                    </div>
                    <p className="text-[14px] mt-1">{formatTL(i.product.price)}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <QtyStepper size="sm" value={i.qty} onChange={(v) => setQty(i.id, v)} testid={`drawer-qty-${i.id}`} />
                      <span className="font-heading text-rg-title">{formatTL(i.lineTotal)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="px-8 py-7 border-t border-rg-bd bg-rg-bg2">
            {hasSet && (
              <p className="flex items-center gap-2 text-[14px] text-rg-title mb-3"><Truck size={16} className="text-rg-link" /> 3'lü Set içeren siparişte kargo ücretsiz</p>
            )}
            <div className="flex justify-between items-baseline">
              <span className="font-heading text-rg-title text-[18px]">Ara toplam</span>
              <span className="font-heading text-rg-title text-[24px]" data-testid="drawer-subtotal">{formatTL(subtotal)}</span>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <button className="rg-btn outline !px-4" onClick={() => go("/sepet")} data-testid="drawer-view-cart">Sepete Git</button>
              <button className="rg-btn !px-4" onClick={() => go("/odeme")} data-testid="drawer-checkout">Ödemeye Geç</button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
