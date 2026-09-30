import React from "react";
import { Truck, Gift, RotateCcw, PackageX, ShieldCheck, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/common/Seo";
import PageTitle from "../components/common/PageTitle";
import Reveal from "../components/common/Reveal";
import { IMG, BRAND } from "../data/mock";

const CARDS = [
  { icon: Truck, title: "Aynı gün kargo", text: "Siparişleriniz aynı gün kargoya verilir." },
  { icon: Gift, title: "3'lü Sette kargo ücretsiz", text: "Şampuan + Tonik + Ozon Serumu setini içeren siparişlerde kargo ücretsizdir." },
  { icon: RotateCcw, title: "14 gün cayma hakkı", text: "Cayma süresi ürünün teslim edildiği tarihten itibaren başlar." },
];

export default function Shipping() {
  return (
    <main data-testid="shipping-page">
      <Seo title="Kargo ve İade" description="Aynı gün kargo, 3'lü Sette ücretsiz kargo, teslimden itibaren 14 gün cayma hakkı ve hasarlı ürün bildirimi hakkında bilgiler." />
      <PageTitle title="Kargo ve İade" crumbs={[{ label: "Kargo ve İade" }]} image={IMG.woodSet} />

      <section className="rg-section bg-rg-bg">
        <div className="rg-narrow">
          <div className="grid md:grid-cols-3 gap-6">
            {CARDS.map((c, i) => (
              <Reveal key={i} delay={i * 110}>
                <div className="h-full rounded-[30px] bg-rg-bg2 p-10">
                  <span className="w-16 h-16 rounded-full bg-rg-link text-white flex items-center justify-center"><c.icon size={26} strokeWidth={1.5} /></span>
                  <h2 className="mt-7 font-heading text-[25px]">{c.title}</h2>
                  <p className="mt-3 text-[16px]">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-12 gap-y-12 lg:gap-x-16">
            <Reveal className="col-span-12 lg:col-span-6">
              <div className="flex items-center gap-4"><ShieldCheck className="text-rg-link" size={30} strokeWidth={1.5} /><h2 className="rg-h4">İade koşulları</h2></div>
              <div className="rg-prose mt-6">
                <p>Teslimden itibaren 14 gün içinde cayma hakkınızı kullanabilirsiniz. Saç ve saç derisi bakım ürünleri hijyen kapsamında olduğundan yalnızca şu koşulları taşıyan ürünler iade alınır:</p>
                <ul>
                  <li>Açılmamış</li>
                  <li>Mührü bozulmamış</li>
                  <li>Kullanılmamış</li>
                  <li>Yeniden satılabilir durumda</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120} className="col-span-12 lg:col-span-6">
              <div className="flex items-center gap-4"><PackageX className="text-rg-link" size={30} strokeWidth={1.5} /><h2 className="rg-h4">Hasarlı ya da hatalı teslimat</h2></div>
              <div className="rg-prose mt-6">
                <p>Kırık, akmış, eksik ya da yanlış ürün teslim aldıysanız, <strong className="text-rg-title">teslimattan sonraki 3 gün içinde</strong> sipariş numaranızla birlikte bize bildirin.</p>
                <p>Bildiriminiz incelendikten sonra değişim ya da ücret iadesi yapılır. Bildirim sırasında paketin ve ürünün fotoğrafını paylaşmanız süreci hızlandırır.</p>
              </div>
              <a href={BRAND.instagramUrl} target="_blank" rel="noopener noreferrer" className="rg-btn mt-2"><Instagram size={17} /> Instagram’dan Bildir</a>
            </Reveal>
          </div>

          <Reveal className="mt-16 p-8 rounded-[24px] border border-rg-bd text-[15px]">
            Tek ürün siparişlerinde kargo ücreti hakkında bilgi yakında paylaşılacaktır. Ayrıntılı bilgi için <Link to="/mesafeli-satis-sozlesmesi" className="underline text-rg-title hover:text-rg-link">Mesafeli Satış Sözleşmesi</Link>’ne göz atabilirsiniz.
          </Reveal>
        </div>
      </section>
    </main>
  );
}
