import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Lock, Truck, ShieldCheck, Info } from "lucide-react";
import { toast } from "sonner";
import Seo from "../components/common/Seo";
import PageTitle from "../components/common/PageTitle";
import LegalDoc from "../components/common/LegalDoc";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "../components/ui/dialog";
import { useCart } from "../context/CartContext";
import { formatTL, TR_CITIES, IMG, S, SHIPPING, PAYMENT } from "../data/mock";
import { preInfoForm, distanceContract, orderTotals } from "../data/legal";

const Field = ({ label, children, className = "" }) => (
  <label className={`block ${className}`}>
    <span className="block mb-2 pl-2 font-heading text-[14px] text-rg-title">{label}</span>
    {children}
  </label>
);

export default function Checkout() {
  const { items, subtotal, hasSet } = useCart();
  const [f, setF] = useState({ name: "", surname: "", phone: "", email: "", city: "", district: "", address: "", zip: "", note: "" });
  const [agree, setAgree] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [doc, setDoc] = useState(null); // "onbilgi" | "mesafeli"
  const [pending, setPending] = useState(null);
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));

  const totals = orderTotals(subtotal, hasSet);
  const ctx = useMemo(
    () => ({
      buyer: {
        name: `${f.name} ${f.surname}`.trim(),
        address: [f.address, f.district, f.city, f.zip].filter(Boolean).join(", "),
        phone: f.phone,
        email: f.email,
      },
      items: items.map((i) => ({ name: i.product.name, volume: i.product.volume, qty: i.qty, price: i.product.price, lineTotal: i.lineTotal })),
      subtotal,
      hasSet,
      date: new Date().toLocaleDateString("tr-TR"),
    }),
    [f, items, subtotal, hasSet]
  );

  const submit = (e) => {
    e.preventDefault();
    const req = ["name", "surname", "phone", "email", "city", "district", "address"];
    if (req.some((k) => !String(f[k]).trim())) return toast.error("Lütfen zorunlu teslimat alanlarının tümünü doldurun.");
    if (!/^\S+@\S+\.\S+$/.test(f.email)) return toast.error("Geçerli bir e-posta adresi girin.");
    if (!agree) return toast.error("Devam etmek için Ön Bilgilendirme Formu'nu ve Mesafeli Satış Sözleşmesi'ni onaylayın.");
    const record = {
      status: "ödeme bekleniyor",
      createdAt: new Date().toISOString(),
      customer: { ...f },
      marketingConsent: marketing,
      items: ctx.items,
      subtotal,
      shipping: totals.feeText,
      total: totals.totalText,
    };
    localStorage.setItem("cabelo3_pending_order", JSON.stringify(record));
    setPending(record);
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
      <Seo title="Ödeme" description="Teslimat bilgilerinizi girin, sipariş özetinizi ve sözleşmeleri inceleyip siparişinizi onaylayın." />
      <PageTitle title="Ödeme" crumbs={[{ label: "Sepetim", to: "/sepet" }, { label: "Ödeme" }]} image={IMG.foamTiles} />
      <section className="rg-section bg-rg-bg">
        <form onSubmit={submit} className="rg-container grid grid-cols-12 gap-y-12 lg:gap-x-14" data-testid="checkout-form" noValidate>
          <div className="col-span-12 lg:col-span-6">
            <h2 className="font-heading text-[31px]">Teslimat bilgileri</h2>
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              <Field label="Ad *"><input className="rg-input" value={f.name} onChange={set("name")} autoComplete="given-name" data-testid="checkout-name" /></Field>
              <Field label="Soyad *"><input className="rg-input" value={f.surname} onChange={set("surname")} autoComplete="family-name" data-testid="checkout-surname" /></Field>
              <Field label="Telefon *"><input className="rg-input" type="tel" value={f.phone} onChange={set("phone")} placeholder="05xx xxx xx xx" autoComplete="tel" data-testid="checkout-phone" /></Field>
              <Field label="E-posta *"><input className="rg-input" type="email" value={f.email} onChange={set("email")} autoComplete="email" data-testid="checkout-email" /></Field>
              <Field label="İl *">
                <Select value={f.city} onValueChange={(v) => setF((s) => ({ ...s, city: v }))}>
                  <SelectTrigger className="h-[56px] rounded-full border-rg-bd bg-transparent px-6 text-[16px] text-rg-title" data-testid="checkout-city"><SelectValue placeholder="İl seçin" /></SelectTrigger>
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
            <p className="mt-5 text-[15px]">Bilgilerinizi onaydan önce dilediğiniz gibi düzeltebilirsiniz. Ürün adedini değiştirmek için <Link to="/sepet" className="underline text-rg-title hover:text-rg-link">sepete dönün</Link>.</p>
          </div>

          <aside className="col-span-12 lg:col-span-6">
            <div className="rounded-[30px] bg-rg-bg2 p-10 max-md:p-6 text-[16px]" data-testid="checkout-summary">
              <h2 className="font-heading text-[28px]">Sipariş özeti</h2>
              <ul className="mt-6 divide-y divide-rg-bd">
                {items.map((i) => (
                  <li key={i.id} className="py-4 flex items-center gap-4">
                    <div className="relative shrink-0">
                      <img src={i.product.image} alt={i.product.alt} className="w-16 h-16 rounded-[14px] object-cover" />
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-rg-title text-white text-[12px] flex items-center justify-center">{i.qty}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-heading text-rg-title leading-snug">{i.product.name}</p>
                      <p className="text-[14px] text-rg-meta">{i.product.volume} · {i.qty} adet · birim {formatTL(i.product.price)}</p>
                    </div>
                    <span className="font-heading text-rg-title whitespace-nowrap">{formatTL(i.lineTotal)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 pt-5 border-t border-rg-bd space-y-3">
                <div className="flex justify-between gap-4"><span>Ara toplam (KDV dahil)</span><span className="font-heading text-rg-title">{formatTL(subtotal)}</span></div>
                <div className="flex justify-between gap-4" data-testid="checkout-shipping"><span className="flex items-center gap-2"><Truck size={15} className="text-rg-link" /> Kargo ücreti</span><span className="font-heading text-rg-title text-right">{totals.feeText}</span></div>
                <div className="pt-4 border-t border-rg-bd flex justify-between items-baseline gap-4">
                  <span className="font-heading text-rg-title text-[18px]">Genel toplam (KDV dahil)</span>
                  <span className="font-heading text-rg-title text-[26px] max-md:text-[21px] text-right" data-testid="checkout-total">{totals.totalText}</span>
                </div>
              </div>

              <div className="mt-7 space-y-3 p-5 rounded-[20px] bg-rg-bg" data-testid="checkout-legal-info">
                <p><strong className="text-rg-title">Cayma hakkı:</strong> {S.S3}</p>
                <p><strong className="text-rg-title">İstisna:</strong> {S.S1}</p>
                <p><strong className="text-rg-title">İade kargo firması:</strong> {SHIPPING.returnCarrier}</p>
                <p><strong className="text-rg-title">Gönderim bölgesi:</strong> {SHIPPING.region}</p>
                <p><strong className="text-rg-title">Kabul edilen ödeme araçları:</strong> {PAYMENT.methods}</p>
              </div>

              <div className="mt-6">
                <p className="font-heading text-rg-title text-[18px]">Ön Bilgilendirme Formu</p>
                <div className="mt-3 max-h-[260px] overflow-y-auto rounded-[18px] border border-rg-bd bg-white/70 p-5" data-testid="checkout-preinfo-inline">
                  <LegalDoc compact sections={preInfoForm(ctx)} />
                </div>
              </div>

              <label className="mt-7 flex items-start gap-3 cursor-pointer" data-testid="checkout-agree-label">
                <Checkbox checked={agree} onCheckedChange={(v) => setAgree(!!v)} className="mt-1 border-rg-meta data-[state=checked]:bg-rg-link data-[state=checked]:border-rg-link" data-testid="checkout-agree" />
                <span>
                  <button type="button" onClick={(e) => { e.preventDefault(); setDoc("onbilgi"); }} className="underline text-rg-title hover:text-rg-link" data-testid="open-preinfo">Ön Bilgilendirme Formu</button>'nu ve{" "}
                  <button type="button" onClick={(e) => { e.preventDefault(); setDoc("mesafeli"); }} className="underline text-rg-title hover:text-rg-link" data-testid="open-contract">Mesafeli Satış Sözleşmesi</button>'ni okudum, kabul ediyorum.
                </span>
              </label>
              <label className="mt-4 flex items-start gap-3 cursor-pointer">
                <Checkbox checked={marketing} onCheckedChange={(v) => setMarketing(!!v)} className="mt-1 border-rg-meta data-[state=checked]:bg-rg-link data-[state=checked]:border-rg-link" data-testid="checkout-marketing" />
                <span>Kampanya ve bilgilendirme iletileri almak istiyorum.</span>
              </label>
              <p className="mt-4 text-[15px]">Kişisel verileriniz <Link to="/kvkk" target="_blank" className="underline text-rg-title hover:text-rg-link">KVKK Aydınlatma Metni</Link> kapsamında işlenir.</p>

              <p className="mt-7 font-heading text-rg-title" data-testid="checkout-obligation">Siparişi onayladığınızda ödeme yükümlülüğü altına girersiniz.</p>
              <button type="submit" className="rg-btn w-full mt-4" disabled={!agree} data-testid="checkout-submit">
                <Lock size={16} /> Siparişi Onayla ve Öde
              </button>
              <p className="mt-4 flex items-center gap-2 text-[14px]"><ShieldCheck size={15} className="text-rg-link" /> Ödeme, PayTR güvenli ödeme sayfasında alınır; kart bilgileriniz sitemizde tutulmaz.</p>
            </div>
          </aside>
        </form>
      </section>

      <Dialog open={!!doc} onOpenChange={(o) => !o && setDoc(null)}>
        <DialogContent className="max-w-[860px] max-h-[88vh] overflow-y-auto bg-rg-bg rounded-[24px] p-8 max-md:p-5" data-testid="legal-dialog">
          <DialogTitle className="font-heading text-[26px] text-rg-title">{doc === "mesafeli" ? "Mesafeli Satış Sözleşmesi" : "Ön Bilgilendirme Formu"}</DialogTitle>
          <DialogDescription className="text-[15px] text-rg-text">Sepetiniz ve teslimat bilgilerinizle doldurulmuştur.</DialogDescription>
          {doc && <LegalDoc compact sections={doc === "mesafeli" ? distanceContract(ctx) : preInfoForm(ctx)} />}
        </DialogContent>
      </Dialog>

      <Dialog open={!!pending} onOpenChange={(o) => !o && setPending(null)}>
        <DialogContent className="max-w-[560px] bg-rg-bg rounded-[24px] p-8 max-md:p-5" data-testid="pending-dialog">
          <DialogTitle className="font-heading text-[26px] text-rg-title flex items-center gap-3"><Info className="text-rg-link" /> Ödeme adımı</DialogTitle>
          <DialogDescription className="text-[16px] text-rg-text" data-testid="pending-message">{PAYMENT.preMessage}</DialogDescription>
          {pending && (
            <div className="text-[16px]">
              <ul className="divide-y divide-rg-bd">
                {pending.items.map((i) => (
                  <li key={i.name} className="py-2 flex justify-between gap-4"><span className="text-rg-title">{i.name} × {i.qty}</span><span className="font-heading text-rg-title">{formatTL(i.lineTotal)}</span></li>
                ))}
              </ul>
              <div className="mt-2 pt-3 border-t border-rg-bd space-y-1">
                <p className="flex justify-between"><span>Kargo ücreti</span><span>{pending.shipping}</span></p>
                <p className="flex justify-between font-heading text-rg-title"><span>Genel toplam (KDV dahil)</span><span>{pending.total}</span></p>
              </div>
              <p className="mt-4 text-[15px]">Teslimat: {pending.customer.name} {pending.customer.surname}, {pending.customer.district} / {pending.customer.city}</p>
              <button onClick={() => setPending(null)} className="rg-btn w-full mt-6" data-testid="pending-close">Tamam</button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}
