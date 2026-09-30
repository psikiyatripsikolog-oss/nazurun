import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Lock, CreditCard, AlertTriangle, Truck } from "lucide-react";
import { toast } from "sonner";
import Seo from "../components/common/Seo";
import PageTitle from "../components/common/PageTitle";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";
import { useCart } from "../context/CartContext";
import { formatTL, TR_CITIES, IMG } from "../data/mock";

const Field = ({ label, children, className = "" }) => (
  <label className={`block ${className}`}>
    <span className="block mb-2 pl-2 font-heading text-[14px] text-rg-title">{label}</span>
    {children}
  </label>
);

const genOrderNo = () => {
  const d = new Date();
  const ymd = `${String(d.getFullYear()).slice(2)}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
  return `CB3-${ymd}-${Math.floor(1000 + Math.random() * 9000)}`;
};

export default function Checkout() {
  const { items, subtotal, hasSet, clear } = useCart();
  const navigate = useNavigate();
  const [f, setF] = useState({ name: "", surname: "", phone: "", email: "", city: "", district: "", address: "", zip: "", note: "", cardName: "", cardNo: "", exp: "", cvc: "" });
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));

  const fmtCard = (v) => v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
  const fmtExp = (v) => v.replace(/\D/g, "").slice(0, 4).replace(/^(\d{2})(\d)/, "$1/$2");

  const submit = (e) => {
    e.preventDefault();
    const req = ["name", "surname", "phone", "email", "city", "district", "address", "cardName", "cardNo", "exp", "cvc"];
    const missing = req.filter((k) => !String(f[k]).trim());
    if (missing.length) return toast.error("Lütfen zorunlu alanların tümünü doldurun.");
    if (!/^\S+@\S+\.\S+$/.test(f.email)) return toast.error("Geçerli bir e-posta adresi girin.");
    if (f.cardNo.replace(/\s/g, "").length < 16) return toast.error("Kart numarası 16 haneli olmalıdır (test).");
    if (!agree) return toast.error("Devam etmek için sözleşmeleri onaylayın.");
    setLoading(true);
    setTimeout(() => {
      const orderNo = genOrderNo();
      const order = {
        orderNo,
        date: new Date().toISOString(),
        customer: { name: f.name, surname: f.surname, phone: f.phone, email: f.email, city: f.city, district: f.district, address: f.address, zip: f.zip, note: f.note },
        items: items.map((i) => ({ id: i.id, name: i.product.name, qty: i.qty, price: i.product.price, lineTotal: i.lineTotal })),
        total: subtotal,
        freeShipping: hasSet,
        payment: "TEST (MOCK)",
      };
      const prev = JSON.parse(localStorage.getItem("cabelo3_orders") || "[]");
      localStorage.setItem("cabelo3_orders", JSON.stringify([order, ...prev]));
      clear();
      navigate(`/siparis-alindi/${orderNo}`);
    }, 1400);
  };

  if (items.length === 0) {
    return (
      <main data-testid="checkout-page">
        <Seo title="Ödeme" />
        <PageTitle title="Ödeme" crumbs={[{ label: "Sepetim", to: "/sepet" }, { label: "Ödeme" }]} image={IMG.foamTiles} />
        <section className="rg-section bg-rg-bg text-center">
          <h2 className="rg-h4">Sepetinizde ürün bulunmuyor</h2>
          <Link to="/urunler" className="rg-btn mt-8">Ürünlere Göz At</Link>
        </section>
      </main>
    );
  }

  return (
    <main data-testid="checkout-page">
      <Seo title="Ödeme" description="Teslimat bilgilerinizi girin ve siparişinizi tamamlayın." />
      <PageTitle title="Ödeme" crumbs={[{ label: "Sepetim", to: "/sepet" }, { label: "Ödeme" }]} image={IMG.foamTiles} />
      <section className="rg-section bg-rg-bg">
        <form onSubmit={submit} className="rg-container grid grid-cols-12 gap-y-12 lg:gap-x-16" data-testid="checkout-form" noValidate>
          <div className="col-span-12 lg:col-span-7">
            <h2 className="font-heading text-[31px]">Teslimat bilgileri</h2>
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              <Field label="Ad *"><input className="rg-input" value={f.name} onChange={set("name")} autoComplete="given-name" data-testid="checkout-name" /></Field>
              <Field label="Soyad *"><input className="rg-input" value={f.surname} onChange={set("surname")} autoComplete="family-name" data-testid="checkout-surname" /></Field>
              <Field label="Telefon *"><input className="rg-input" type="tel" value={f.phone} onChange={set("phone")} placeholder="05xx xxx xx xx" autoComplete="tel" data-testid="checkout-phone" /></Field>
              <Field label="E-posta *"><input className="rg-input" type="email" value={f.email} onChange={set("email")} autoComplete="email" data-testid="checkout-email" /></Field>
              <Field label="İl *">
                <Select value={f.city} onValueChange={(v) => setF((s) => ({ ...s, city: v }))}>
                  <SelectTrigger className="h-[56px] rounded-full border-rg-bd bg-transparent px-6 text-[16px] text-rg-title" data-testid="checkout-city">
                    <SelectValue placeholder="İl seçin" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px] bg-rg-bg border-rg-bd rounded-2xl">
                    {TR_CITIES.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                  </SelectContent>
                </Select>
              </Field>
              <Field label="İlçe *"><input className="rg-input" value={f.district} onChange={set("district")} data-testid="checkout-district" /></Field>
              <Field label="Açık adres *" className="sm:col-span-2"><input className="rg-input" value={f.address} onChange={set("address")} autoComplete="street-address" data-testid="checkout-address" /></Field>
              <Field label="Posta kodu"><input className="rg-input" value={f.zip} onChange={set("zip")} autoComplete="postal-code" data-testid="checkout-zip" /></Field>
              <Field label="Sipariş notu" className="sm:col-span-2"><textarea className="rg-input !min-h-[110px]" value={f.note} onChange={set("note")} data-testid="checkout-note" /></Field>
            </div>

            <h2 className="font-heading text-[31px] mt-14 flex items-center gap-3"><CreditCard className="text-rg-link" /> Ödeme</h2>
            <div className="mt-5 p-5 rounded-[20px] bg-[#FFF1D6] border border-[#F5D48A] flex gap-3 text-[15px] text-[#6B4E12]" data-testid="mock-payment-banner">
              <AlertTriangle size={20} className="shrink-0 mt-0.5" />
              <p><strong>TEST (MOCK) ÖDEME:</strong> Gerçek ödeme altyapısı henüz bağlı değildir. Kart bilgileri kaydedilmez ve hiçbir tahsilat yapılmaz. Test için 16 haneli herhangi bir numara girebilirsiniz.</p>
            </div>
            <div className="mt-6 grid sm:grid-cols-2 gap-5">
              <Field label="Kart üzerindeki isim *" className="sm:col-span-2"><input className="rg-input" value={f.cardName} onChange={set("cardName")} data-testid="checkout-card-name" /></Field>
              <Field label="Kart numarası *" className="sm:col-span-2"><input className="rg-input tracking-wider" inputMode="numeric" value={f.cardNo} onChange={(e) => setF((s) => ({ ...s, cardNo: fmtCard(e.target.value) }))} placeholder="4242 4242 4242 4242" data-testid="checkout-card-number" /></Field>
              <Field label="Son kullanma (AA/YY) *"><input className="rg-input" inputMode="numeric" value={f.exp} onChange={(e) => setF((s) => ({ ...s, exp: fmtExp(e.target.value) }))} placeholder="12/28" data-testid="checkout-card-exp" /></Field>
              <Field label="CVC *"><input className="rg-input" inputMode="numeric" value={f.cvc} onChange={(e) => setF((s) => ({ ...s, cvc: e.target.value.replace(/\D/g, "").slice(0, 3) }))} placeholder="123" data-testid="checkout-card-cvc" /></Field>
            </div>
          </div>

          <aside className="col-span-12 lg:col-span-5">
            <div className="rounded-[30px] bg-rg-bg2 p-10 max-md:p-7 lg:sticky lg:top-[100px]" data-testid="checkout-summary">
              <h2 className="font-heading text-[28px]">Siparişiniz</h2>
              <ul className="mt-6 divide-y divide-rg-bd">
                {items.map((i) => (
                  <li key={i.id} className="py-4 flex items-center gap-4">
                    <div className="relative">
                      <img src={i.product.image} alt={i.product.alt} className="w-16 h-16 rounded-[14px] object-cover" />
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-rg-title text-white text-[12px] flex items-center justify-center">{i.qty}</span>
                    </div>
                    <span className="flex-1 font-heading text-[16px] text-rg-title leading-snug">{i.product.name}</span>
                    <span className="font-heading text-rg-title">{formatTL(i.lineTotal)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-5 border-t border-rg-bd space-y-3">
                <div className="flex justify-between"><span>Ara toplam</span><span className="font-heading text-rg-title">{formatTL(subtotal)}</span></div>
                {hasSet && <div className="flex justify-between"><span className="flex items-center gap-2"><Truck size={15} className="text-rg-link" /> Kargo</span><span className="font-heading text-rg-link">Ücretsiz</span></div>}
                <div className="pt-4 border-t border-rg-bd flex justify-between items-baseline">
                  <span className="font-heading text-rg-title text-[18px]">Toplam</span>
                  <span className="font-heading text-rg-title text-[30px]" data-testid="checkout-total">{formatTL(subtotal)}</span>
                </div>
              </div>
              <label className="mt-7 flex items-start gap-3 text-[14px] leading-relaxed cursor-pointer">
                <Checkbox checked={agree} onCheckedChange={(v) => setAgree(!!v)} className="mt-1 border-rg-meta data-[state=checked]:bg-rg-link data-[state=checked]:border-rg-link" data-testid="checkout-agree" />
                <span>
                  <Link to="/mesafeli-satis-sozlesmesi" target="_blank" className="underline text-rg-title hover:text-rg-link">Mesafeli Satış Sözleşmesi</Link>’ni ve{" "}
                  <Link to="/kvkk" target="_blank" className="underline text-rg-title hover:text-rg-link">KVKK Aydınlatma Metni</Link>’ni okudum, onaylıyorum.
                </span>
              </label>
              <button type="submit" className="rg-btn w-full mt-7" disabled={loading} data-testid="checkout-submit">
                <Lock size={16} /> {loading ? "Sipariş oluşturuluyor…" : "Siparişi Tamamla (Test)"}
              </button>
            </div>
          </aside>
        </form>
      </section>
    </main>
  );
}
