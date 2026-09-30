import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ShoppingBag, Truck, RotateCcw, Instagram, Check, Ban } from "lucide-react";
import { toast } from "sonner";
import Seo from "../components/common/Seo";
import PageTitle from "../components/common/PageTitle";
import Reveal from "../components/common/Reveal";
import ProductCard from "../components/common/ProductCard";
import { QtyStepper } from "../components/layout/CartDrawer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { useCart } from "../context/CartContext";
import { getProduct, getProductById, PRODUCTS, formatTL, BRAND } from "../data/mock";
import NotFound from "./NotFound";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProduct(slug);
  const { add, setDrawerOpen } = useCart();
  const [qty, setQty] = useState(1);
  const [img, setImg] = useState(0);

  useEffect(() => {
    setQty(1);
    setImg(0);
  }, [slug]);

  if (!product) return <NotFound />;

  const onAdd = () => {
    add(product.id, qty);
    toast.success(`${qty} adet ${product.name} sepete eklendi`, { action: { label: "Sepeti Gör", onClick: () => setDrawerOpen(true) } });
  };
  const related = PRODUCTS.filter((p) => p.id !== product.id);
  const tabTrigger = "rounded-full px-6 py-3 font-heading text-[16px] data-[state=active]:bg-rg-title data-[state=active]:text-white data-[state=active]:shadow-none text-rg-title";

  return (
    <main data-testid="product-detail-page">
      <Seo title={`${product.name} ${product.volume.length < 10 ? product.volume : ""}`.trim()} description={product.short} image={product.image} />
      <PageTitle title={product.name} crumbs={[{ label: "Ürünler", to: "/urunler" }, { label: product.shortName }]} image={product.gallery[1]} />

      <section className="rg-section bg-rg-bg">
        <div className="rg-container grid grid-cols-12 gap-y-14 lg:gap-x-20">
          {/* Gallery */}
          <Reveal variant="from-left" className="col-span-12 lg:col-span-6">
            <div className="relative rounded-[30px] overflow-hidden bg-rg-bg2 aspect-[4/5]" data-testid="product-main-image">
              {product.gallery.map((g, i) => (
                <img
                  key={g}
                  src={g}
                  alt={i === 0 ? product.alt : `${product.name} görsel ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-[opacity,transform] duration-700 ${img === i ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
                />
              ))}
              {product.oldPrice && (
                <span className="absolute top-6 left-6 px-4 py-2 rounded-full bg-rg-link text-white font-heading text-[14px]">Set fırsatı</span>
              )}
            </div>
            <div className="mt-4 grid grid-cols-5 gap-3">
              {product.gallery.map((g, i) => (
                <button
                  key={g}
                  onClick={() => setImg(i)}
                  aria-label={`Görsel ${i + 1}`}
                  className={`aspect-square rounded-[16px] overflow-hidden border-2 transition-colors duration-300 ${img === i ? "border-rg-link" : "border-transparent hover:border-rg-bd"}`}
                  data-testid={`product-thumb-${i}`}
                >
                  <img src={g} alt="" aria-hidden="true" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </Reveal>

          {/* Summary */}
          <div className="col-span-12 lg:col-span-6 lg:pt-4">
            <Reveal><p className="rg-subtitle">{product.category} · {product.step}</p></Reveal>
            <Reveal delay={80}><h2 className="rg-h3 mt-4" data-testid="product-title">{product.name}</h2></Reveal>
            <Reveal delay={140}>
              <p className="mt-3 font-heading text-rg-meta text-[17px]">{product.volume}</p>
              <div className="mt-6 flex items-baseline gap-4">
                <span className="font-heading text-[38px] text-rg-title leading-none" data-testid="product-price">{formatTL(product.price)}</span>
                {product.oldPrice && <span className="text-[20px] line-through text-rg-meta">{formatTL(product.oldPrice)}</span>}
              </div>
              {product.oldPrice && <p className="mt-2 text-[15px]">Ayrı ayrı alındığında {formatTL(product.oldPrice)}</p>}
              <p className="mt-7 max-w-[600px]">{product.short}</p>
            </Reveal>

            {product.includes && (
              <Reveal delay={180}>
                <ul className="mt-7 space-y-3">
                  {product.includes.map((id) => {
                    const p = getProductById(id);
                    return (
                      <li key={id} className="flex items-center gap-4 p-3 pr-5 rounded-[20px] bg-rg-bg2">
                        <img src={p.image} alt={p.alt} className="w-14 h-14 rounded-[12px] object-cover" />
                        <Link to={`/urun/${p.slug}`} className="font-heading text-rg-title hover:text-rg-link transition-colors flex-1">{p.name}</Link>
                        <span className="text-[14px] text-rg-meta">{p.volume}</span>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            )}

            <Reveal delay={220}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <QtyStepper value={qty} onChange={(v) => setQty(Math.max(1, Math.min(99, v)))} testid="product-qty" />
                <button onClick={onAdd} className="rg-btn" data-testid="product-add-to-cart"><ShoppingBag size={18} /> Sepete Ekle</button>
              </div>
              <div className="mt-8 grid sm:grid-cols-2 gap-3 text-[15px]">
                <p className="flex items-center gap-3"><Truck size={18} className="text-rg-link shrink-0" /> Aynı gün kargo{product.freeShipping ? " · kargo ücretsiz" : ""}</p>
                <p className="flex items-center gap-3"><RotateCcw size={18} className="text-rg-link shrink-0" /> 14 gün cayma hakkı</p>
                <a href={BRAND.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-rg-link transition-colors"><Instagram size={18} className="text-rg-link shrink-0" /> Sorularınız için DM</a>
              </div>
              <p className="mt-8 p-5 rounded-[20px] border border-rg-bd text-[15px] text-rg-title" data-testid="product-routine-note">{product.routineNote}</p>
            </Reveal>
          </div>
        </div>

        {/* Tabs */}
        <div className="rg-container mt-[110px] max-md:mt-16">
          <Tabs defaultValue="desc" className="w-full">
            <TabsList className="h-auto flex flex-wrap justify-start gap-2 bg-transparent p-0">
              <TabsTrigger value="desc" className={tabTrigger} data-testid="tab-desc">Açıklama</TabsTrigger>
              <TabsTrigger value="ing" className={tabTrigger} data-testid="tab-ingredients">Bileşenler</TabsTrigger>
              <TabsTrigger value="use" className={tabTrigger} data-testid="tab-usage">Kullanım</TabsTrigger>
              {product.freeFrom && <TabsTrigger value="free" className={tabTrigger} data-testid="tab-free-from">İçermez</TabsTrigger>}
            </TabsList>
            <div className="mt-8 p-12 max-md:p-7 rounded-[30px] bg-rg-bg2">
              <TabsContent value="desc" className="mt-0 rg-prose max-w-[900px]">
                {product.description.map((d, i) => <p key={i}>{d}</p>)}
              </TabsContent>
              <TabsContent value="ing" className="mt-0 rg-prose max-w-[900px]">
                <ul>{product.ingredients.map((x) => <li key={x}>{x}</li>)}</ul>
                <Link to="/bilesenler" className="rg-link">Bileşenler hakkında daha fazla</Link>
              </TabsContent>
              <TabsContent value="use" className="mt-0">
                <ol className="grid md:grid-cols-3 gap-5">
                  {product.usage.map((u, i) => (
                    <li key={i} className="p-7 rounded-[24px] bg-rg-bg">
                      <span className="font-heading text-rg-link text-[20px]">0{i + 1}</span>
                      <p className="mt-3 text-rg-title">{u}</p>
                    </li>
                  ))}
                </ol>
                <p className="mt-6 text-[15px]">Ürünler tek başına da kullanılabilir. <Link to="/kullanim-rehberi" className="rg-link">Kullanım rehberi</Link></p>
              </TabsContent>
              {product.freeFrom && (
                <TabsContent value="free" className="mt-0" data-testid="free-from-list">
                  <p className="font-heading text-rg-title text-[20px]">Sebum Dengeleyici Bakım Şampuanı içermez:</p>
                  <ul className="mt-5 grid sm:grid-cols-2 gap-3">
                    {product.freeFrom.map((f) => (
                      <li key={f} className="flex items-start gap-3 p-4 rounded-[18px] bg-rg-bg text-rg-title text-[15px]">
                        <Ban size={18} className="text-rg-link shrink-0 mt-0.5" /> {f}
                      </li>
                    ))}
                  </ul>
                  {product.freeFromNote && <p className="mt-5 text-[14px] flex items-center gap-2"><Check size={15} className="text-rg-link" /> {product.freeFromNote}</p>}
                </TabsContent>
              )}
            </div>
          </Tabs>
        </div>
      </section>

      <section className="rg-section bg-rg-bg2">
        <div className="rg-container">
          <Reveal><p className="rg-subtitle">Rutini tamamlayın</p></Reveal>
          <Reveal delay={100}><h2 className="rg-h2 mt-5">Diğer ürünler</h2></Reveal>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-14">
            {related.map((p, i) => (
              <Reveal key={p.id} delay={i * 100}><ProductCard product={p} /></Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
