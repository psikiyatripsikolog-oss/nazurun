import { BRAND, SHIPPING, PAYMENT, CONTRACT, S, PRODUCTS, formatTL, NEUTRAL, SINGLE_FEE_TEXT } from "./mock";

// Yasal metinler – değerler data/mock.js içindeki sabitlerden okunur.
// Her belge: [{ h: "Başlık", p?: "paragraf" | [..], list?: [..], table?: [[k, v], ...] }]

const BLANK = "……………………………";

export const SELLER_ROWS = [
  ["Ticaret unvanı", BRAND.seller],
  ["Marka", BRAND.name],
  ["MERSİS no", BRAND.mersis],
  ["Vergi dairesi / VKN", BRAND.taxInfo],
  ["Merkez adresi", BRAND.address],
  ["Telefon", BRAND.phone],
  ["E-posta", BRAND.email],
  ["KEP adresi", BRAND.kep],
  ["İnternet sitesi", BRAND.website],
];

export const shippingFeeText = (hasSet) =>
  hasSet ? "Ücretsiz (3'lü Set)" : SHIPPING.singleProductFee || NEUTRAL.fee;

export const orderTotals = (subtotal, hasSet) => {
  const fee = hasSet ? 0 : SHIPPING.singleProductFeeAmount;
  const known = fee !== null && fee !== undefined;
  return {
    feeText: hasSet ? "Ücretsiz" : known ? formatTL(fee) : SHIPPING.singleProductFee || "Ödeme ekranında gösterilir",
    totalText: known ? formatTL(subtotal + fee) : `${formatTL(subtotal)} + kargo ücreti`,
  };
};

// ctx: { buyer: {name, address, phone, email}, items: [{name, volume, qty, price, lineTotal}], subtotal, hasSet, date }
const buyerRows = (ctx) => [
  ["Adı soyadı", ctx?.buyer?.name || BLANK],
  ["Teslimat adresi", ctx?.buyer?.address || BLANK],
  ["Telefon", ctx?.buyer?.phone || BLANK],
  ["E-posta", ctx?.buyer?.email || BLANK],
];

const itemsBlock = (ctx) => {
  if (!ctx?.items?.length) {
    return {
      list: [
        `Ürün adı, adedi ve KDV dahil birim fiyatı: ${BLANK}`,
        `KDV dahil ürün toplamı: ${BLANK}`,
        `Kargo ücreti: 3'lü Set içeren siparişlerde ücretsizdir. ${SINGLE_FEE_TEXT}`,
        `KDV dahil genel toplam: ${BLANK}`,
      ],
    };
  }
  const t = orderTotals(ctx.subtotal, ctx.hasSet);
  return {
    table: [
      ...ctx.items.map((i) => [`${i.name} (${i.volume}) × ${i.qty}`, `${formatTL(i.lineTotal)} (KDV dahil, birim ${formatTL(i.price)})`]),
      ["Ürün toplamı (KDV dahil)", formatTL(ctx.subtotal)],
      ["Kargo ücreti", t.feeText],
      ["Genel toplam (KDV dahil)", t.totalText],
    ],
  };
};

const productBasics = () =>
  PRODUCTS.filter((p) => p.id !== "set").map((p) => `${p.name} (${p.volume}): ${p.tagline}. Kullanım: ${p.usage.join(" ")}`);

export function preInfoForm(ctx) {
  return [
    { p: "Bu form, Mesafeli Satış Sözleşmesi'nin ayrılmaz parçasıdır." },
    { h: "a) Ürünlerin temel nitelikleri", list: productBasics(), p: "3'lü Set; Sebum Dengeleyici Bakım Şampuanı, Sebum Dengeleyici Saç Toniği ve Ozon Serumu'ndan oluşur. Ürünlerin hacim, içerik ve kullanım bilgileri ilgili ürün sayfalarında yer alır." },
    { h: "b) Satıcının unvanı ve MERSİS numarası", table: [["Unvan", BRAND.seller], ["MERSİS no", BRAND.mersis]] },
    { h: "c) Satıcının açık adresi ve iletişim bilgileri", table: [["Adres", BRAND.address], ["Telefon", BRAND.phone], ["E-posta", BRAND.email], ["KEP", BRAND.kep]], p: "Satıcı adına hareket eden başka bir kişi bulunmamaktadır." },
    { h: "ç) Şikâyetlerin iletileceği iletişim bilgileri", p: `Şikâyetlerinizi ${BRAND.email}, ${BRAND.phone} veya ${BRAND.address} adresine iletebilirsiniz.` },
    { h: "Alıcı bilgileri", table: buyerRows(ctx) },
    { h: "d) Tüm vergiler dahil toplam fiyat ve teslimat masrafları", ...itemsBlock(ctx) },
    { h: "e) Uzaktan iletişim aracının kullanım bedeli", p: "Sözleşmenin kurulması sırasında uzaktan iletişim aracının kullanımı için alıcıya ilave bir maliyet yüklenmez." },
    { h: "f) Ödeme, teslimat ve ifaya ilişkin bilgiler", list: [`Ödeme: ${PAYMENT.methods}. Ödeme, PayTR güvenli ödeme altyapısı üzerinden alınır; kart bilgileri satıcı tarafından görülmez ve saklanmaz.`, S.S2, "Teslim her hâlde sipariş tarihinden itibaren en geç 30 gündür.", `Gönderim bölgesi: ${SHIPPING.region}.`, S.S6] },
    { h: "g) Cayma hakkı: şartlar, süre, usul ve iade taşıyıcısı", list: [S.S3, "Cayma hakkınızı, aşağıdaki iletişim kanallarından birine açık bir bildirim göndererek veya sitedeki Cayma Formu'nu doldurup ileterek kullanabilirsiniz.", S.S4, S.S5] },
    { h: "ğ) Cayma bildiriminin yapılacağı adres", table: [["Adres", BRAND.address], ["E-posta", BRAND.email], ["KEP", BRAND.kep], ["Telefon", BRAND.phone]] },
    { h: "h) Cayma hakkının kullanılamayacağı durumlar", p: S.S1 },
    { h: "ı) Depozito ve teminatlar", p: "Alıcıdan depozito veya başka bir mali teminat talep edilmez." },
    { h: "i–j) Dijital içerik", p: "Sitede dijital içerik satılmamaktadır." },
    { h: "k) Uyuşmazlıkların çözümü", p: "Alıcı, şikâyet ve itirazlarını, her yıl Ticaret Bakanlığı tarafından ilan edilen parasal sınırlar dahilinde yerleşim yerindeki veya işlemin yapıldığı yerdeki Tüketici Hakem Heyetine ya da Tüketici Mahkemesine iletebilir. Kanunen dava şartı olan hâllerde arabulucuya başvurulur." },
    ...(ctx?.date ? [{ h: "Tarih", p: ctx.date }] : []),
  ];
}

export function distanceContract(ctx) {
  return [
    { h: "1. Taraflar", p: "SATICI:", table: SELLER_ROWS },
    { p: "ALICI:", table: buyerRows(ctx) },
    { h: "2. Konu", p: `Bu sözleşmenin konusu, alıcının ${BRAND.website} internet sitesi üzerinden elektronik ortamda sipariş verdiği aşağıda nitelikleri ve satış fiyatı belirtilen ürünlerin satışı ve teslimi ile ilgili olarak 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği hükümleri gereğince tarafların hak ve yükümlülüklerinin belirlenmesidir.` },
    { h: "3. Ürün ve ödeme", ...itemsBlock(ctx) },
    { p: `Ürünlerin temel nitelikleri ürün sayfalarında ve Ön Bilgilendirme Formu'nda yer alır. Ödeme ${PAYMENT.methods} ile PayTR güvenli ödeme altyapısı üzerinden alınır. Siparişi onaylayan alıcı ödeme yükümlülüğü altına girer.` },
    { h: "4. Teslimat", list: [S.S2, `Gönderim bölgesi: ${SHIPPING.region}.`, "Teslim her hâlde sipariş tarihinden itibaren en geç 30 gündür. Bu süre içinde teslim edilemeyen siparişlerde alıcı sözleşmeyi feshedebilir.", `Kargo ücreti 3'lü Set içeren siparişlerde ücretsizdir. ${SINGLE_FEE_TEXT}`] },
    { h: "5. Cayma hakkı", list: [S.S3, "Cayma bildirimi; e-posta, KEP, telefon veya posta yoluyla ya da Cayma Formu doldurularak satıcıya iletilir.", S.S4] },
    { h: "6. Cayma hakkının istisnası", p: S.S1 },
    { h: "7. Para iadesi", p: S.S5 },
    { h: "8. Hasarlı, eksik veya hatalı ürün", p: S.S6 },
    { h: "9. Uyuşmazlıkların çözümü", p: "Bu sözleşmeden doğan uyuşmazlıklarda, Ticaret Bakanlığınca her yıl ilan edilen parasal sınırlar dahilinde alıcının yerleşim yerindeki veya işlemin yapıldığı yerdeki Tüketici Hakem Heyeti, bu sınırların üzerindeki uyuşmazlıklarda Tüketici Mahkemesi yetkilidir. Kanunen dava şartı olan hâllerde dava açılmadan önce arabulucuya başvurulur." },
    { h: "10. Sözleşmenin kuruluşu ve saklanması", list: ["Sözleşme; alıcının ödeme adımında Ön Bilgilendirme Formu'nu ve bu sözleşmeyi okuyup onaylaması ve \"Siparişi Onayla ve Öde\" düğmesine basmasıyla elektronik ortamda kurulur.", CONTRACT.storage ? `Saklama ve erişim: ${CONTRACT.storage}` : null] },
    { h: "11. Yürürlük", p: `Alıcı, bu sözleşmenin tüm koşullarını ve Ön Bilgilendirme Formu'nu okuyup kabul ettiğini beyan eder. Sözleşme, alıcının siparişi onayladığı tarihte yürürlüğe girer.${ctx?.date ? ` Tarih: ${ctx.date}` : ""}` },
  ];
}

export const KVKK = [
  { h: "1. Veri sorumlusu", p: `6698 sayılı Kişisel Verilerin Korunması Kanunu (“Kanun”) uyarınca kişisel verileriniz, veri sorumlusu sıfatıyla ${BRAND.seller} (“Şirket”) tarafından aşağıda açıklanan kapsamda işlenir.`, table: [["Adres", BRAND.address], ["E-posta", BRAND.email], ["KEP", BRAND.kep], ["MERSİS no", BRAND.mersis]] },
  { h: "2. İşlenen kişisel veriler", list: ["Kimlik: ad, soyad", "İletişim: telefon, e-posta, teslimat adresi", "Müşteri işlem: sipariş içeriği, sipariş tarihi, sipariş notu, iade ve cayma talepleri", "Pazarlama: yalnızca açık izin verdiyseniz ileti tercihiniz"] },
  { h: "3. İşleme amaçları", list: ["Siparişin alınması, hazırlanması, faturalandırılması ve teslimi", "Mesafeli sözleşmenin kurulması ve ifası, cayma ve iade süreçlerinin yürütülmesi", "Talep ve şikâyetlerin yanıtlanması", "Yasal yükümlülüklerin (vergi, ticaret ve tüketici mevzuatı) yerine getirilmesi", "Açık izniniz olması hâlinde kampanya ve bilgilendirme iletilerinin gönderilmesi"] },
  { h: "4. Aktarılan alıcı grupları", list: ["Kargo şirketleri (teslimat için)", "Ödeme kuruluşu PayTR (ödemenin alınması için; kart bilgileri doğrudan ödeme kuruluşuna iletilir)", "Barındırma (hosting) hizmeti sağlayıcısı", "Mali müşavir / muhasebe hizmeti sağlayıcısı", "Talep hâlinde yetkili kamu kurum ve kuruluşları"] },
  { h: "5. Toplama yöntemi ve hukuki sebep", p: "Kişisel verileriniz internet sitemizdeki ödeme adımı, e-posta, telefon ve Instagram üzerinden elektronik ortamda toplanır. Veriler Kanun'un 5/2-c (sözleşmenin kurulması ve ifası), 5/2-ç (hukuki yükümlülük), 5/2-e (bir hakkın tesisi, kullanılması veya korunması) ve 5/2-f (meşru menfaat) bentlerine; ticari ileti gönderimi ise 5/1 uyarınca açık rızanıza dayanır." },
  { h: "6. Kanun'un 11. maddesi kapsamındaki haklarınız", list: ["Kişisel verilerinizin işlenip işlenmediğini öğrenme ve işlenmişse bilgi talep etme", "İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme", "Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme", "Eksik veya yanlış işlenmişse düzeltilmesini isteme", "Kanun'un 7. maddesi çerçevesinde silinmesini veya yok edilmesini isteme", "Düzeltme, silme ve yok etme işlemlerinin aktarılan üçüncü kişilere bildirilmesini isteme", "Münhasıran otomatik sistemlerle analiz edilmesi sonucu aleyhinize bir sonucun ortaya çıkmasına itiraz etme", "Kanuna aykırı işleme nedeniyle zarara uğramanız hâlinde zararın giderilmesini talep etme"] },
  { h: "7. Başvuru yolu", p: `Haklarınıza ilişkin taleplerinizi, Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ'e uygun olarak yazılı şekilde ${BRAND.address} adresine${BRAND.kep ? `, kayıtlı elektronik posta ile ${BRAND.kep} adresine` : ""} veya sistemimizde kayıtlı e-posta adresinizden ${BRAND.email} adresine iletebilirsiniz. Başvurular en geç 30 gün içinde ücretsiz olarak sonuçlandırılır.` },
];

export const PRIVACY = [
  { h: "Genel", p: `Bu politika, ${BRAND.website} internet sitesini ziyaret eden ve alışveriş yapan kullanıcıların bilgilerinin nasıl toplandığını, kullanıldığını ve korunduğunu açıklar. Site, ${BRAND.seller} tarafından işletilir.` },
  { h: "Toplanan bilgiler", list: ["Sipariş sırasında girdiğiniz ad, soyad, telefon, e-posta ve teslimat adresi", "Sipariş içeriği ve sipariş notunuz", "Bize e-posta, telefon veya Instagram ile ilettiğiniz mesajlar"] },
  { h: "Kullanım amacı", list: ["Siparişinizin hazırlanması, faturalandırılması ve teslimi", "Cayma, iade ve şikâyet süreçlerinin yürütülmesi", "Yasal yükümlülüklerin yerine getirilmesi", "Yalnızca izin verdiyseniz kampanya ve bilgilendirme iletileri"] },
  { h: "Ödeme ve kart bilgileri", p: "Kart bilgileriniz sitemizde girilmez ve tutulmaz. Ödemeler, PayTR'nin güvenli ödeme sayfası üzerinden alınır; kart bilgileri doğrudan ödeme kuruluşuna iletilir." },
  { h: "Bilgilerin korunması", p: "Bilgileriniz yalnızca yukarıdaki amaçlarla ve gerekli olan kişilerle (kargo, ödeme kuruluşu, barındırma ve muhasebe hizmeti sağlayıcıları) paylaşılır; erişim yetkili kişilerle sınırlandırılır." },
  { h: "Çerezler ve tarayıcı depolaması", p: "Sitede yalnızca sitenin çalışması için zorunlu tarayıcı kayıtları kullanılır. Ayrıntılar için Çerez Politikası'na bakabilirsiniz.", link: { to: "/cerez-politikasi", label: "Çerez Politikası" } },
  { h: "Sözleşmenin kuruluşu", list: ["1) Ürünler sepete eklenir; adet değiştirilebilir veya ürün silinebilir.", "2) Ödeme adımında teslimat bilgileri girilir ve hatalı bilgiler düzeltilebilir.", "3) Sipariş özeti, Ön Bilgilendirme Formu ve Mesafeli Satış Sözleşmesi görüntülenir ve onaylanır.", "4) \"Siparişi Onayla ve Öde\" düğmesiyle ödeme adımına geçilir; sözleşme bu onayla kurulur."] },
  ...(CONTRACT.storage ? [{ h: "Saklama ve erişim", p: CONTRACT.storage }] : []),
  { h: "Başvuru", p: `Bilgilerinizle ilgili her türlü talep için ${BRAND.email}, ${BRAND.phone} veya ${BRAND.address} üzerinden bize ulaşabilirsiniz. Kişisel veri haklarınız için KVKK Aydınlatma Metni'ne bakabilirsiniz.`, link: { to: "/kvkk", label: "KVKK Aydınlatma Metni" } },
];

export const COOKIES = [
  { h: "Kullanılan kayıtlar", p: "Sitede reklam, analitik veya üçüncü taraf takip çerezi kullanılmaz. Yalnızca sitenin çalışması için zorunlu olan aşağıdaki tarayıcı kayıtları (yerel depolama) tutulur:" },
  { table: [["Sepet içeriği", "Sepete eklediğiniz ürün ve adetlerin sayfalar arasında korunması için (yerel depolama)."], ["Açılış animasyonu", "Logo açılış animasyonunun her oturumda yalnızca bir kez gösterilmesi için (oturum depolaması)."], ["Sipariş özeti", "Ödeme adımına geçtiğiniz siparişin özetinin tarayıcınızda tutulması için (yerel depolama)."]] },
  { h: "Onay", p: "Bu kayıtlar sitenin temel işlevleri için zorunlu olduğundan ayrıca onay istenmez. İleride analitik veya reklam amaçlı çerez kullanılırsa, bu çerezler yalnızca onayınızla etkinleştirilecektir." },
  { h: "Kayıtları silme", p: "Tarayıcınızın ayarlarından site verilerini dilediğiniz zaman silebilirsiniz. Bu durumda sepetiniz boşalır." },
  { h: "İletişim", p: `Sorularınız için: ${BRAND.email} · ${BRAND.phone}` },
];
