import { IMG } from "./mock";

// Blog yazıları (MOCK / statik içerik) – kozmetik bakım dili
export const POSTS = [
  {
    slug: "yagli-sac-derisi-icin-yikama-rutini",
    title: "Yağlı saç derisi için yıkama rutini nasıl olmalı?",
    category: "Bakım Rutini",
    date: "18 Eylül 2026",
    read: "4 dk okuma",
    image: IMG.bath,
    alt: "Banyoda şampuanla saç derisine masaj yapan kadın",
    excerpt:
      "Çabuk yağlanan saç derisinde yıkama sıklığından çok, yıkamanın nasıl yapıldığı önemlidir. Adım adım sade bir rutin.",
    body: [
      { h: "Doğru sıcaklıkla başlayın", p: "Çok sıcak su saç derisinde rahatsız edici bir his bırakabilir. Ilık su ile saç derisini iyice ıslatmak, şampuanın eşit dağılmasına yardımcı olur." },
      { h: "Şampuanı saç derisine odaklayın", p: "Sebum Dengeleyici Bakım Şampuanı'nı saç uçlarına değil, doğrudan saç derisine uygulayın. Parmak uçlarınızla dairesel hareketlerle köpürtün, 2–3 dakika bekletin ve bol suyla durulayın." },
      { h: "Tonik ile tamamlayın", p: "Saçınızı havluyla nazikçe kuruladıktan sonra Sebum Dengeleyici Saç Toniği'ni hafif nemli saç derisine uygulayın ve 1–2 dakika masaj yapın. Tonik durulanmaz." },
      { h: "Haftada bir ön bakım", p: "Rutininize haftada bir kez Ozon Serumu ekleyebilirsiniz. Serum şampuandan önce uygulanır ve 30–45 dakika bekletildikten sonra şampuanla yıkanır." },
    ],
  },
  {
    slug: "ozon-serumu-ile-haftalik-on-bakim",
    title: "Ozon Serumu ile haftalık ön bakım: adım adım",
    category: "Ürün Rehberi",
    date: "12 Eylül 2026",
    read: "3 dk okuma",
    image: IMG.ozon2,
    alt: "Elde tutulan CABELO₃ Ozon Serumu damlalıklı şişe",
    excerpt:
      "Ozon Serumu şampuandan önce kullanılır. Haftalık bakım gününüzü keyifli bir ritüele dönüştürmek için pratik öneriler.",
    body: [
      { h: "Serum ne zaman kullanılır?", p: "Ozon Serumu haftada bir uygulanan bir ön bakımdır ve her zaman şampuandan ÖNCE kullanılır. Tek bileşeni ozonlanmış zeytinyağıdır; serum %100 doğal olarak üretilmiştir." },
      { h: "Uygulama", p: "Kuru saç derisini bölümlere ayırın ve birkaç damla serumu çizgiler halinde uygulayın. Parmak uçlarınızla nazik, dairesel hareketlerle masaj yapın." },
      { h: "Bekleme süresi", p: "Serumu 30–45 dakika bekletin. Bu sürede saçınızı gevşek bir topuz yapabilir ya da bir havluyla sarabilirsiniz." },
      { h: "Yıkama ve tonik", p: "Bekleme süresinin ardından Sebum Dengeleyici Bakım Şampuanı ile yıkayın, gerekirse şampuanı iki kez uygulayın. Son adımda toniği temiz saç derisine uygulayarak rutini tamamlayın." },
    ],
  },
  {
    slug: "sulfatsiz-sampuan-etiket-okuma-rehberi",
    title: "Sülfatsız şampuan ne demek? Etiket okuma rehberi",
    category: "Bilgi",
    date: "5 Eylül 2026",
    read: "5 dk okuma",
    image: IMG.foamTiles,
    alt: "Fayans üzerinde köpükle yazılmış CABELO₃ yazısı",
    excerpt:
      "SLS, SLES, ALS, ALES… Şampuan etiketlerindeki kısaltmalar ne anlatıyor? Sade bir içerik listesi seçerken bakmanız gerekenler.",
    body: [
      { h: "Kısaltmaların anlamı", p: "SLS, SLES, ALS ve ALES, şampuanlarda sık kullanılan sülfat bazlı yüzey aktif maddelerin kısaltmalarıdır. Sülfatsız şampuanlar bu grubun yerine farklı temizleyici sistemler kullanır." },
      { h: "Başka neye bakmalı?", p: "Etiket okurken paraben, ftalat, silikon ve formaldehit salan maddeler gibi başlıkları da kontrol edebilirsiniz. Sebum Dengeleyici Bakım Şampuanı bu maddelerin hiçbirini içermez." },
      { h: "Köpük her şey değildir", p: "Sülfatsız formüller bazen daha az köpük verebilir. Şampuanı saç derisine iyice yayıp masajla köpürtmek ve 2–3 dakika bekletmek, arınma hissi için yeterlidir." },
    ],
  },
  {
    slug: "biberiye-ve-ginseng-tonikte-neden-birlikte",
    title: "Biberiye ve ginseng: tonikte neden birlikteler?",
    category: "Bileşenler",
    date: "28 Ağustos 2026",
    read: "3 dk okuma",
    image: IMG.rosemary,
    alt: "Yakın plan taze biberiye dalları",
    excerpt:
      "Sebum Dengeleyici Saç Toniği'nin iki yıldız bileşeni ve durulanmayan bir tonik kullanırken dikkat edilecek küçük detaylar.",
    body: [
      { h: "Biberiye", p: "Aromatik ve ferah karakteriyle biberiye, saç derisi bakımında uzun zamandır tercih edilen bitkilerden biridir. CABELO₃ serisinde hem şampuanda hem tonikte yer alır." },
      { h: "Ginseng", p: "Ginseng, tonikte biberiyeye eşlik eden ikinci bileşendir. Durulanmayan formül sayesinde saç derisinde bakımın bir parçası olarak kalır." },
      { h: "Uygulama ipucu", p: "Toniği temiz ve hafif nemli saç derisine uygulayın, 1–2 dakika masaj yapın. Günde 1–2 kez kullanılabilir; durulamanıza gerek yoktur." },
    ],
  },
  {
    slug: "sac-derisi-masaji-icin-pratik-ipuclari",
    title: "Saç derisi masajı için 5 pratik ipucu",
    category: "Bakım Rutini",
    date: "20 Ağustos 2026",
    read: "4 dk okuma",
    image: IMG.hairwash,
    alt: "Şampuanla saç derisine masaj yapılan kızıl saçlar",
    excerpt:
      "Masaj, rutindeki her ürünün ortak noktası. Parmak uçlarıyla yapılan kısa bir masajı daha keyifli hale getirmenin yolları.",
    body: [
      { h: "1. Tırnak değil, parmak ucu", p: "Masajı tırnaklarla değil parmak uçlarıyla yapın. Nazik, dairesel hareketler yeterlidir." },
      { h: "2. Bölümlere ayırın", p: "Saç derisini ön, yan ve ense olmak üzere bölümlere ayırmak ürünün eşit dağılmasını kolaylaştırır." },
      { h: "3. Süreye dikkat", p: "Şampuanda 2–3 dakika, tonikte 1–2 dakika masaj yeterlidir. Ozon Serumu'nu uyguladıktan sonra ise 30–45 dakika bekletin." },
      { h: "4. Sıcak havluyla rahatlayın", p: "Ozon Serumu bekleme süresinde saçınızı ılık bir havluyla sarmak bakım anını daha keyifli hale getirebilir." },
      { h: "5. Rutininizi sabitleyin", p: "Haftanın belirli bir gününü Ozon Serumu ön bakımına ayırmak, rutini sürdürmeyi kolaylaştırır." },
    ],
  },
];

export const getPost = (slug) => POSTS.find((p) => p.slug === slug);
