import React from "react";
import Seo from "../components/common/Seo";
import PageTitle from "../components/common/PageTitle";
import { BRAND } from "../data/mock";

const NOTE = "Bu sayfa taslak niteliğindedir. Tam hukuki metin marka tarafından eklenecektir.";

const DOCS = {
  kvkk: {
    title: "KVKK Aydınlatma Metni",
    sections: [
      { h: "Veri sorumlusu", p: `${BRAND.seller} (“Satıcı”), 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri sorumlusu sıfatıyla hareket eder.` },
      { h: "İşlenen veriler", p: "Sipariş sırasında paylaştığınız ad, soyad, telefon, e-posta ve teslimat adresi bilgileri siparişinizin hazırlanması ve teslimi amacıyla işlenir." },
      { h: "Haklarınız", p: "Kanun’un 11. maddesi kapsamındaki haklarınıza ilişkin taleplerinizi iletişim kanallarımız üzerinden iletebilirsiniz." },
    ],
  },
  gizlilik: {
    title: "Gizlilik Politikası",
    sections: [
      { h: "Genel", p: `Bu politika, ${BRAND.name} web sitesini ziyaret eden ve alışveriş yapan kullanıcıların bilgilerinin nasıl korunduğunu açıklar. Satıcı: ${BRAND.seller}.` },
      { h: "Çerezler ve tarayıcı verileri", p: "Sepet içeriğiniz yalnızca tarayıcınızda saklanır. Test aşamasındaki ödeme adımında kart bilgileri kaydedilmez." },
      { h: "Üçüncü taraflar", p: "Teslimat için gerekli bilgiler yalnızca kargo firması ile paylaşılır." },
    ],
  },
  mesafeli: {
    title: "Mesafeli Satış Sözleşmesi",
    sections: [
      { h: "Taraflar", p: `Satıcı: ${BRAND.seller}. Marka: ${BRAND.name}. Alıcı: sipariş formunda bilgileri yer alan kişi.` },
      { h: "Teslimat", p: "Siparişler aynı gün kargoya verilir. 3'lü Set içeren siparişlerde kargo ücretsizdir." },
      { h: "Cayma hakkı", p: "Alıcı, ürünün teslim edildiği tarihten itibaren 14 gün içinde cayma hakkını kullanabilir. Hijyen gereği yalnızca açılmamış, mühürlü, kullanılmamış ve yeniden satılabilir ürünler iade alınır." },
      { h: "Hasarlı / hatalı ürün", p: "Kırık, akmış, eksik ya da yanlış ürün teslimattan sonraki 3 gün içinde sipariş numarasıyla bildirilir. İnceleme sonrası değişim ya da ücret iadesi yapılır." },
    ],
  },
};

export default function Legal({ doc }) {
  const d = DOCS[doc];
  return (
    <main data-testid={`legal-page-${doc}`}>
      <Seo title={d.title} description={`${d.title} – ${BRAND.name}`} />
      <PageTitle title={d.title} crumbs={[{ label: d.title }]} />
      <section className="rg-section bg-rg-bg">
        <div className="rg-narrow max-w-[900px]">
          <p className="p-5 rounded-[20px] bg-rg-bg2 text-[15px] text-rg-title">{NOTE}</p>
          <div className="rg-prose mt-6">
            {d.sections.map((s) => (
              <React.Fragment key={s.h}>
                <h2>{s.h}</h2>
                <p>{s.p}</p>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
