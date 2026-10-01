import React from "react";
import Seo from "../components/common/Seo";
import PageTitle from "../components/common/PageTitle";
import LegalDoc from "../components/common/LegalDoc";
import { BRAND } from "../data/mock";
import { KVKK, PRIVACY, COOKIES, preInfoForm, distanceContract } from "../data/legal";

const DOCS = {
  kvkk: { title: "KVKK Aydınlatma Metni", desc: "Kişisel verilerinizin işlenmesine ilişkin 6698 sayılı Kanun kapsamında aydınlatma metni.", sections: KVKK },
  gizlilik: { title: "Gizlilik Politikası", desc: "Toplanan bilgiler, kullanım amacı, ödeme güvenliği ve başvuru yolları.", sections: PRIVACY },
  cerez: { title: "Çerez Politikası", desc: "Sitede kullanılan zorunlu tarayıcı kayıtları hakkında bilgi.", sections: COOKIES },
  mesafeli: { title: "Mesafeli Satış Sözleşmesi", desc: "CABELO₃ online satışlarına ilişkin mesafeli satış sözleşmesi.", sections: distanceContract() },
  onbilgi: { title: "Ön Bilgilendirme Formu", desc: "Mesafeli Sözleşmeler Yönetmeliği m.5 kapsamında ön bilgilendirme formu.", sections: preInfoForm() },
};

export default function Legal({ doc }) {
  const d = DOCS[doc];
  return (
    <main data-testid={`legal-page-${doc}`}>
      <Seo title={d.title} description={`${d.title} – ${BRAND.name}. ${d.desc}`} />
      <PageTitle title={d.title} crumbs={[{ label: d.title }]} />
      <section className="rg-section bg-rg-bg">
        <div className="rg-narrow max-w-[960px]">
          <LegalDoc sections={d.sections} />
        </div>
      </section>
    </main>
  );
}
