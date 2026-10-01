import React from "react";
import { Printer } from "lucide-react";
import Seo from "../components/common/Seo";
import PageTitle from "../components/common/PageTitle";
import { BRAND, S } from "../data/mock";

const FIELDS = [
  "Alıcının adı soyadı",
  "Sipariş numarası",
  "Sipariş tarihi",
  "Teslim tarihi",
  "İade edilen ürün(ler) ve adedi",
  "Alıcının adresi",
  "Tarih",
  "İmza (yalnızca kağıt üzerinde gönderiliyorsa)",
];

export default function WithdrawalForm() {
  return (
    <main data-testid="withdrawal-form-page">
      <Seo title="Cayma Formu" description="Mesafeli satışlarda cayma hakkını kullanmak için yazdırılabilir örnek cayma formu." />
      <div className="print:hidden"><PageTitle title="Cayma Formu" crumbs={[{ label: "Cayma Formu" }]} /></div>
      <section className="rg-section bg-rg-bg print:p-0">
        <div className="rg-narrow max-w-[900px]">
          <div className="print:hidden mb-8 flex flex-wrap items-center justify-between gap-4">
            <p className="text-[16px] max-w-[560px]">Bu formu yazdırıp doldurarak aşağıdaki adrese gönderebilir ya da doldurduğunuz formun fotoğrafını e-posta veya KEP ile iletebilirsiniz.</p>
            <button onClick={() => window.print()} className="rg-btn" data-testid="withdrawal-print"><Printer size={17} /> Formu Yazdır</button>
          </div>
          <div className="rounded-[30px] bg-white border border-rg-bd p-10 max-md:p-6 text-[16px] text-rg-title print:border-0 print:p-0">
            <h2 className="font-heading text-[26px] text-center">CAYMA FORMU</h2>
            <p className="mt-2 text-center text-[16px] text-rg-text">(Bu form, yalnızca sözleşmeden cayma hakkı kullanılmak istenildiğinde doldurup gönderilecektir.)</p>
            <div className="mt-8 p-5 rounded-[18px] bg-rg-bg2">
              <p className="font-heading">Kime:</p>
              <p className="mt-1">{BRAND.seller}</p>
              <p>Adres: {BRAND.address}</p>
              <p>E-posta: {BRAND.email} · KEP: {BRAND.kep}</p>
            </div>
            <p className="mt-8">Bu formla bildirdiğim üzere aşağıdaki ürünlerin satışına ilişkin sözleşmeden caydığımı beyan ederim.</p>
            <dl className="mt-6 space-y-5">
              {FIELDS.map((f) => (
                <div key={f} className="grid sm:grid-cols-[260px_1fr] gap-2 items-end">
                  <dt className="font-heading">{f}:</dt>
                  <dd className="border-b border-dashed border-rg-meta h-8" />
                </div>
              ))}
            </dl>
            <div className="mt-10 pt-6 border-t border-rg-bd text-[16px] text-rg-text space-y-3">
              <p><strong className="text-rg-title">Cayma hakkı:</strong> {S.S3}</p>
              <p><strong className="text-rg-title">İstisna:</strong> {S.S1}</p>
              <p><strong className="text-rg-title">İade kargosu:</strong> {S.S4}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
