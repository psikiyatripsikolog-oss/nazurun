import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Truck, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import Reveal from "../common/Reveal";
import { useCart } from "../../context/CartContext";
import { IMG, formatTL, getProductById } from "../../data/mock";

export default function SetOffer() {
  const set = getProductById("set");
  const { add, setDrawerOpen } = useCart();
  const ref = useRef(null);
  const [y, setY] = useState(0);

  useEffect(() => {
    const on = () => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      setY((r.top - window.innerHeight / 2) * -0.18);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const onAdd = () => {
    add("set", 1);
    toast.success("3'lü Set sepete eklendi", { action: { label: "Sepeti Gör", onClick: () => setDrawerOpen(true) } });
  };

  return (
    <section ref={ref} className="relative overflow-hidden min-h-[760px] max-md:min-h-0 flex items-center" data-testid="set-offer-section">
      <div className="absolute inset-0 -top-[140px] -bottom-[140px]" style={{ transform: `translate3d(0, ${y}px, 0)` }}>
        <img src={IMG.set} alt="CABELO₃ 3'lü Set: şampuan, tonik ve Ozon Serumu kutuları güller ve heykel önünde" loading="lazy" className="w-full h-full object-cover object-[30%_60%]" />
        <div className="absolute inset-0 bg-gradient-to-l from-[#0A0A0A]/40 to-transparent" />
      </div>
      <div className="rg-container relative w-full py-[70px] max-md:pt-[320px] max-md:pb-[20px] flex justify-end">
        <Reveal variant="from-right" className="w-full max-w-[430px] max-md:max-w-none bg-rg-bg rounded-[30px] p-10 max-md:p-8">
          <p className="rg-subtitle">3'lü Set fırsatı</p>
          <h2 className="rg-h4 mt-5" style={{ fontSize: "clamp(30px, 2.8vw, 44px)" }}>Şampuan + Tonik + Ozon Serumu</h2>
          <p className="mt-5 text-[16px]">Rutinin üç adımı tek kutuda. Her ürün tek başına da kullanılabilir.</p>
          <div className="mt-7 flex items-baseline gap-4">
            <span className="font-heading text-[40px] text-rg-title leading-none" data-testid="set-offer-price">{formatTL(set.price)}</span>
            <span className="text-[18px] line-through text-rg-meta">{formatTL(set.oldPrice)}</span>
          </div>
          <p className="mt-2 text-[14px]">Ayrı ayrı {formatTL(set.oldPrice)}</p>
          <p className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rg-bg2 text-[14px] text-rg-title">
            <Truck size={16} className="text-rg-link" /> Kargo ücretsiz
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={onAdd} className="rg-btn" data-testid="set-offer-add"><ShoppingBag size={17} /> Sepete Ekle</button>
            <Link to={`/urun/${set.slug}`} className="rg-link self-center ml-2" data-testid="set-offer-detail">Seti İncele</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
