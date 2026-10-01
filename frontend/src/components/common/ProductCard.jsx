import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Truck } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "../../context/CartContext";
import { formatTL } from "../../data/mock";

export default function ProductCard({ product, index = 0 }) {
  const { add, setDrawerOpen } = useCart();
  const onAdd = (e) => {
    e.preventDefault();
    add(product.id, 1);
    toast.success(`${product.name} sepete eklendi`, {
      action: { label: "Sepeti Gör", onClick: () => setDrawerOpen(true) },
    });
  };

  return (
    <article className="group" data-testid={`product-card-${product.id}`}>
      <Link to={`/urun/${product.slug}`} className="block relative rounded-[30px] overflow-hidden bg-rg-bg2 aspect-[4/5]">
        <img src={product.image} alt={product.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-[opacity,transform] duration-[900ms] group-hover:scale-105 group-hover:opacity-0" />
        <img src={product.hoverImage} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-0 scale-110 transition-[opacity,transform] duration-[900ms] group-hover:opacity-100 group-hover:scale-100" />
        <div className="absolute top-5 left-5 flex flex-wrap gap-2">
          <span className="px-3.5 py-1.5 rounded-full bg-rg-bg/90 backdrop-blur text-[13px] font-heading text-rg-title">{product.volume.length > 12 ? "3 ürün" : product.volume}</span>
          {product.separateTotal && (
            <span className="px-3.5 py-1.5 rounded-full bg-rg-link text-[13px] font-heading text-white">3 ürün bir arada</span>
          )}
        </div>
        <div className="absolute left-5 right-5 bottom-5 translate-y-[140%] group-hover:translate-y-0 transition-transform duration-500 max-lg:translate-y-0">
          <button onClick={onAdd} className="rg-btn w-full" data-testid={`add-to-cart-${product.id}`}>
            <ShoppingBag size={17} /> Sepete Ekle
          </button>
        </div>
      </Link>
      <div className="pt-6 px-1">
        <p className="text-[13px] uppercase tracking-[0.1em] font-heading text-rg-meta">{product.category}</p>
        <h3 className="mt-2 font-heading text-[23px] leading-[1.25] max-md:text-[20px]">
          <Link to={`/urun/${product.slug}`} className="hover:text-rg-link transition-colors duration-300">{product.name}</Link>
        </h3>
        <div className="mt-3 flex items-baseline gap-3">
          <span className="font-heading text-[20px] text-rg-title" data-testid={`product-price-${product.id}`}>{formatTL(product.price)}</span>
          <span className="text-[13px] text-rg-meta">KDV dahil</span>
        </div>
        {product.freeShipping && (
          <p className="mt-2 flex items-center gap-2 text-[14px] text-rg-link"><Truck size={15} /> Kargo ücretsiz</p>
        )}
      </div>
    </article>
  );
}
