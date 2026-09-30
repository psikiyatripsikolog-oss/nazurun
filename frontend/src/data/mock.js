// CABELO₃ Dermokozmetik – site verileri (MOCK / statik içerik)
// Aşama 2'de ürün, sipariş ve blog verileri backend'den gelecek şekilde tasarlandı.

export const BRAND = {
  name: "CABELO₃ Dermokozmetik",
  short: "CABELO₃",
  owner: "Nazife Soyubol",
  seller: "NEFES SAÇ EKİMİ DANIŞMANLIK TİC. LTD. ŞTİ.",
  instagram: "cabelo3haircosmetic",
  instagramUrl: "https://www.instagram.com/cabelo3haircosmetic/",
  phone: null, // yakında
  email: null, // yakında
  address: null, // yakında
};

export const IMG = {
  logoDark: "/images/brand/logo-dark.svg",
  logoLight: "/images/brand/logo-light.svg",
  mark: "/images/brand/mark.png",
  hero: "/images/brand/hero.jpg",
  sampuan: "/images/brand/sampuan.jpg",
  sampuan2: "/images/brand/sampuan-2.jpg",
  tonik: "/images/brand/tonik.jpg",
  tonik2: "/images/brand/tonik-2.jpg",
  ozon: "/images/brand/ozon-serumu.jpg",
  ozon2: "/images/brand/ozon-serumu-2.jpg",
  set: "/images/ig/ig-12.jpg",
  series: "/images/ig/ig-01.jpg",
  woodSet: "/images/ig/ig-02.jpg",
  bath: "/images/ig/ig-03.jpg",
  model: "/images/ig/ig-04.jpg",
  reelPlant: "/images/ig/ig-05.jpg",
  foamTiles: "/images/ig/ig-07.jpg",
  tonikDark: "/images/ig/ig-08.jpg",
  rosemary: "/images/stock/rosemary.jpg",
  rosemaryField: "/images/stock/rosemary-field.jpg",
  oilDrop: "/images/stock/oil-drop.jpg",
  oliveOil: "/images/stock/olive-oil.jpg",
  foam: "/images/stock/foam.jpg",
  blackCumin: "/images/stock/black-cumin.jpg",
  ginseng: "/images/stock/ginseng.jpg",
  wheat: "/images/stock/wheat.jpg",
  geranium: "/images/stock/geranium.jpg",
  towel: "/images/stock/towel.jpg",
  hairwash: "/images/stock/hairwash.jpg",
};

export const SHAMPOO_FREE_FROM = [
  "SLS, SLES, ALS, ALES ve sülfat bazlı yüzey aktif maddeler",
  "Paraben",
  "Formaldehit ve formaldehit salan maddeler",
  "Ftalat",
  "Silikon",
];

export const PRODUCTS = [
  {
    id: "sampuan",
    slug: "sebum-dengeleyici-bakim-sampuani",
    name: "Sebum Dengeleyici Bakım Şampuanı",
    shortName: "Şampuan",
    volume: "250 ml",
    price: 1400,
    category: "Şampuan",
    step: "Arındır",
    tagline: "Saç derisini kurutmadan arındırır",
    image: IMG.sampuan,
    hoverImage: IMG.model,
    gallery: [IMG.sampuan, IMG.model, IMG.sampuan2, IMG.foamTiles, IMG.bath],
    alt: "CABELO₃ Sebum Dengeleyici Bakım Şampuanı 250 ml kutusu",
    short:
      "Aşırı yağlanma ve sebum düzensizliği eğilimli saç derisi için sülfatsız bakım şampuanı. Saç derisini kurutmadan arındırır, sebum dengesini korumaya yardımcı olur ve ferahlık verir.",
    description: [
      "Sebum Dengeleyici Bakım Şampuanı, gün içinde çabuk yağlanan saç derisi için geliştirilmiş, sülfatsız bir bakım şampuanıdır. Saç derisini kurutmadan arındırır ve sebum dengesini korumaya yardımcı olur.",
      "Çörek otu, biberiye, ıtır ve ozon yağlarının yanında çinko sülfat ve buğday proteini içerir. Yıkama sonrasında saç derisinde ferahlık hissi bırakır; düzenli kullanımda saçların daha hacimli ve canlı görünmesini destekler.",
    ],
    ingredients: [
      "Çörek otu, biberiye, ıtır ve ozon yağları",
      "Çinko sülfat",
      "Buğday proteini",
    ],
    usage: [
      "Islak saç derisine yeterli miktarda uygulayın.",
      "Parmak uçlarınızla masaj yaparak köpürtün.",
      "2–3 dakika bekletin, ardından bol suyla durulayın.",
    ],
    freeFrom: SHAMPOO_FREE_FROM,
    routineNote:
      "Rutinin 02. adımıdır: haftalık Ozon Serumu bakımından sonra ve Saç Toniği'nden önce kullanılır. Tek başına da kullanılabilir.",
  },
  {
    id: "tonik",
    slug: "sebum-dengeleyici-sac-tonigi",
    name: "Sebum Dengeleyici Saç Toniği",
    shortName: "Tonik",
    volume: "100 ml",
    price: 1250,
    category: "Tonik",
    step: "Dengele",
    tagline: "Durulanmayan, hafif dokulu bakım",
    image: IMG.tonik,
    hoverImage: IMG.tonikDark,
    gallery: [IMG.tonik, IMG.tonikDark, IMG.tonik2, IMG.series],
    alt: "CABELO₃ Sebum Dengeleyici Saç Toniği 100 ml sprey şişe",
    short:
      "Biberiye ve ginseng içeren, durulanmayan saç derisi toniği. Temiz saç derisinde sebum dengesini korumaya yardımcı olur.",
    description: [
      "Sebum Dengeleyici Saç Toniği, yıkamadan sonra temiz ve hafif nemli saç derisine uygulanan, durulanmayan bir bakım ürünüdür.",
      "Biberiye ve ginseng içerir. Hafif dokusuyla saçı ağırlaştırmadan uygulanır ve sebum dengesini korumaya yardımcı olur. Günde 1–2 kez kullanılabilir.",
    ],
    ingredients: ["Biberiye", "Ginseng"],
    usage: [
      "Temiz ve hafif nemli saç derisine uygulayın.",
      "1–2 dakika parmak uçlarınızla masaj yapın.",
      "Durulamayın. Günde 1–2 kez kullanabilirsiniz.",
    ],
    freeFrom: null,
    routineNote:
      "Rutinin 03. adımıdır: şampuanla yıkamanın ardından uygulanır. Tek başına da kullanılabilir.",
  },
  {
    id: "ozon",
    slug: "ozon-serumu",
    name: "Ozon Serumu",
    shortName: "Ozon Serumu",
    volume: "30 ml",
    price: 1500,
    category: "Serum",
    step: "Haftalık ön bakım",
    tagline: "%100 doğal, tek bileşenli haftalık bakım",
    image: IMG.ozon,
    hoverImage: IMG.ozon2,
    gallery: [IMG.ozon, IMG.ozon2, IMG.oilDrop, IMG.series],
    alt: "CABELO₃ Ozon Serumu 30 ml kutusu",
    short:
      "Haftalık yoğun saç derisi bakımı. Tek bileşeni ozonlanmış zeytinyağıdır, %100 doğal olarak üretilmiştir. Şampuandan önce kullanılır.",
    description: [
      "Ozon Serumu, haftada bir uygulanan yoğun bir saç derisi bakımıdır. Tek bileşeni ozonlanmış zeytinyağıdır ve %100 doğal olarak üretilmiştir.",
      "Şampuandan ÖNCE kullanılır: birkaç damla saç derisine masajla uygulanır, 30–45 dakika bekletilir ve ardından Sebum Dengeleyici Bakım Şampuanı ile yıkanır.",
    ],
    ingredients: ["Ozonlanmış zeytinyağı (tek bileşen)"],
    usage: [
      "Kuru saç derisine birkaç damla uygulayın.",
      "Parmak uçlarınızla nazikçe masaj yapın.",
      "30–45 dakika bekletin, ardından şampuanla yıkayın.",
    ],
    freeFrom: null,
    routineNote:
      "Rutinin 01. adımıdır: haftalık ön bakım olarak şampuandan önce uygulanır. Tek başına da kullanılabilir.",
  },
  {
    id: "set",
    slug: "3lu-set",
    name: "3'lü Set",
    shortName: "3'lü Set",
    volume: "Şampuan 250 ml + Tonik 100 ml + Ozon Serumu 30 ml",
    price: 3600,
    oldPrice: 4150,
    freeShipping: true,
    category: "Set",
    step: "Tam rutin",
    tagline: "Şampuan + Tonik + Ozon Serumu",
    image: IMG.set,
    hoverImage: IMG.series,
    gallery: [IMG.set, IMG.series, IMG.woodSet, IMG.foamTiles],
    alt: "CABELO₃ 3'lü Set: Sebum Dengeleyici Bakım Şampuanı, Saç Toniği ve Ozon Serumu kutuları",
    short:
      "Sebum Dengeleyici Bakım Şampuanı, Sebum Dengeleyici Saç Toniği ve Ozon Serumu bir arada. Ayrı ayrı 4.150 TL yerine 3.600 TL, kargo ücretsiz.",
    description: [
      "3'lü Set, CABELO₃ rutininin üç adımını bir araya getirir: haftalık ön bakım için Ozon Serumu, arındırmak için Sebum Dengeleyici Bakım Şampuanı ve dengelemek için Sebum Dengeleyici Saç Toniği.",
      "Ürünler birlikte bir rutin oluşturacak şekilde tasarlanmıştır; her biri tek başına da kullanılabilir. Set siparişlerinde kargo ücretsizdir.",
    ],
    includes: ["sampuan", "tonik", "ozon"],
    ingredients: [
      "Şampuan: çörek otu, biberiye, ıtır ve ozon yağları · çinko sülfat · buğday proteini",
      "Tonik: biberiye · ginseng",
      "Ozon Serumu: ozonlanmış zeytinyağı (tek bileşen)",
    ],
    usage: [
      "Haftalık: Ozon Serumu'nu saç derisine masajla uygulayın, 30–45 dk bekletin.",
      "Şampuanı ıslak saç derisinde köpürtün, 2–3 dk bekletip durulayın.",
      "Toniği temiz, hafif nemli saç derisine 1–2 dk masajla uygulayın; durulamayın.",
    ],
    freeFrom: SHAMPOO_FREE_FROM,
    freeFromNote: "Bu liste setteki Sebum Dengeleyici Bakım Şampuanı içindir.",
    routineNote: "Setteki ürünler tek başına da kullanılabilir.",
  },
];

export const getProduct = (slug) => PRODUCTS.find((p) => p.slug === slug);
export const getProductById = (id) => PRODUCTS.find((p) => p.id === id);

export const formatTL = (n) =>
  `${Number(n).toLocaleString("tr-TR", { minimumFractionDigits: 0 })} TL`;

export const ROUTINE_STEPS = [
  {
    no: "01",
    title: "Haftalık ön bakım",
    product: "Ozon Serumu",
    slug: "ozon-serumu",
    text: "Ozon Serumu şampuandan ÖNCE kullanılır. Birkaç damlayı saç derisine masajla sürün ve 30–45 dakika bekletin. Ardından şampuan adımına geçin.",
  },
  {
    no: "02",
    title: "Arındır",
    product: "Sebum Dengeleyici Bakım Şampuanı",
    slug: "sebum-dengeleyici-bakim-sampuani",
    text: "Islak saç derisinde masajla köpürtün, 2–3 dakika bekletin ve durulayın. Saç derisini kurutmadan arındırır, ferahlık verir.",
  },
  {
    no: "03",
    title: "Dengele",
    product: "Sebum Dengeleyici Saç Toniği",
    slug: "sebum-dengeleyici-sac-tonigi",
    text: "Temiz ve hafif nemli saç derisine 1–2 dakika masajla uygulayın. Durulanmaz; günde 1–2 kez kullanılabilir.",
  },
];

export const INGREDIENTS = [
  {
    id: "corek-otu",
    name: "Çörek otu yağı",
    product: "Şampuan",
    image: IMG.blackCumin,
    text: "Şampuandaki bitkisel yağ karışımının bir parçasıdır. Yıkama sırasında saç derisine bakımlı bir his vermek için formüle eklenmiştir.",
  },
  {
    id: "biberiye",
    name: "Biberiye",
    product: "Şampuan · Tonik",
    image: IMG.rosemary,
    text: "Hem şampuanda hem tonikte yer alır. Ferah, aromatik karakteriyle saç derisi bakımında sıkça tercih edilen bir bitkidir.",
  },
  {
    id: "itir",
    name: "Itır yağı",
    product: "Şampuan",
    image: IMG.geranium,
    text: "Geranium olarak da bilinen ıtır, şampuandaki yağ karışımına eşlik eder ve bakım rutinine hoş bir koku karakteri katar.",
  },
  {
    id: "ozon-yaglari",
    name: "Ozon yağları",
    product: "Şampuan",
    image: IMG.foamTiles,
    text: "Şampuanın formülünde yer alan ozon yağları, yıkama sonrasında saç derisinde ferahlık hissine katkıda bulunur.",
  },
  {
    id: "ozonlanmis-zeytinyagi",
    name: "Ozonlanmış zeytinyağı",
    product: "Ozon Serumu",
    image: IMG.oilDrop,
    text: "Ozon Serumu'nun tek bileşenidir. Serum %100 doğal olarak üretilmiştir ve haftalık ön bakımda şampuandan önce kullanılır.",
  },
  {
    id: "cinko-sulfat",
    name: "Çinko sülfat",
    product: "Şampuan",
    image: IMG.foam,
    text: "Yağlanmaya eğilimli saç derisi için hazırlanan şampuan formülünde, sebum dengesini korumaya yardımcı bileşenlerden biridir.",
  },
  {
    id: "bugday-proteini",
    name: "Buğday proteini",
    product: "Şampuan",
    image: IMG.wheat,
    text: "Saç tellerine yumuşak bir dokunuş kazandırmak için şampuana eklenmiştir; saçların daha hacimli ve canlı görünmesini destekler.",
  },
  {
    id: "ginseng",
    name: "Ginseng",
    product: "Tonik",
    image: IMG.ginseng,
    text: "Tonikte biberiyeye eşlik eder. Durulanmayan formülde saç derisine uygulanan bakımın bir parçasıdır.",
  },
];

export const MARQUEE_WORDS = ["Çörek otu", "Biberiye", "Ginseng", "Ozon", "Itır", "Buğday proteini"];

export const FAQS = [
  {
    q: "Ürünleri hangi sırayla kullanmalıyım?",
    a: "Her yıkamada önce Sebum Dengeleyici Bakım Şampuanı, ardından Saç Toniği. Haftada bir, şampuandan ÖNCE Ozon Serumu'nu saç derisine masajla uygulayıp 30–45 dakika bekletin; sonra şampuan ve tonikle devam edin.",
  },
  {
    q: "Ürünleri tek başına kullanabilir miyim?",
    a: "Evet. Ürünler birlikte bir rutin oluşturacak şekilde tasarlandı, ancak her biri tek başına da kullanılabilir.",
  },
  {
    q: "Şampuan neleri içermez?",
    a: "Sebum Dengeleyici Bakım Şampuanı; SLS, SLES, ALS, ALES ve sülfat bazlı yüzey aktif maddeler, paraben, formaldehit ve formaldehit salan maddeler, ftalat ve silikon içermez.",
  },
  {
    q: "Tonik durulanır mı?",
    a: "Hayır. Tonik temiz ve hafif nemli saç derisine 1–2 dakika masajla uygulanır ve durulanmaz. Günde 1–2 kez kullanılabilir.",
  },
  {
    q: "Ozon Serumu'nun içeriğinde ne var?",
    a: "Tek bileşeni ozonlanmış zeytinyağıdır. Ozon Serumu %100 doğal olarak üretilmiştir.",
  },
  {
    q: "Siparişim ne zaman kargoya verilir?",
    a: "Siparişler aynı gün kargoya verilir. 3'lü Set siparişlerinde kargo ücretsizdir.",
  },
  {
    q: "İade koşulları nelerdir?",
    a: "Teslimden itibaren 14 gün cayma hakkınız vardır. Hijyen gereği yalnızca açılmamış, mühürlü, kullanılmamış ve yeniden satılabilir ürünler iade alınır.",
  },
  {
    q: "Ürün hasarlı ya da eksik geldiyse ne yapmalıyım?",
    a: "Kırık, akmış, eksik ya da yanlış ürünü teslimattan sonraki 3 gün içinde sipariş numaranızla bize bildirin. İnceleme sonrası değişim ya da ücret iadesi yapılır.",
  },
];

export const INSTAGRAM_POSTS = [
  { id: "DdlPtzuNWIJ", type: "p", image: "/images/ig/ig-12.jpg", alt: "CABELO₃ 3'lü set kutuları" },
  { id: "DdyhWYyNo5w", type: "p", image: "/images/ig/ig-01.jpg", alt: "CABELO₃ ürün serisi ve biberiye" },
  { id: "DdyfFOJtNYf", type: "p", image: "/images/ig/ig-03.jpg", alt: "Banyoda saç derisi masajı" },
  { id: "DdtJzFsNI0n", type: "p", image: "/images/ig/ig-07.jpg", alt: "Fayans üzerinde CABELO₃ köpük yazısı" },
  { id: "DduTSrChgrC", type: "p", image: "/images/ig/ig-04.jpg", alt: "CABELO₃ şampuanı ile gülümseyen model" },
  { id: "Ddq8HlttmGH", type: "reel", image: "/images/ig/ig-08.jpg", alt: "CABELO₃ Saç Toniği çekimi" },
  { id: "DdygxWYNI5Q", type: "reel", image: "/images/ig/ig-02.jpg", alt: "Ahşap masada 3'lü set tanıtımı" },
  { id: "DdtLv1eN2d1", type: "reel", image: "/images/ig/ig-05.jpg", alt: "CABELO₃ reels kapak görseli" },
];

export const igUrl = (p) => `https://www.instagram.com/${p.type === "reel" ? "reel" : "p"}/${p.id}/`;

export const NAV = [
  { label: "Ana Sayfa", to: "/" },
  {
    label: "Ürünler",
    to: "/urunler",
    children: [
      { label: "Tüm Ürünler", to: "/urunler" },
      ...PRODUCTS.map((p) => ({ label: p.name, to: `/urun/${p.slug}` })),
    ],
  },
  {
    label: "Keşfet",
    to: "/hakkimizda",
    children: [
      { label: "Hakkımızda", to: "/hakkimizda" },
      { label: "Bileşenler", to: "/bilesenler" },
      { label: "Kullanım Rehberi", to: "/kullanim-rehberi" },
      { label: "Sıkça Sorulan Sorular", to: "/sss" },
      { label: "Kargo ve İade", to: "/kargo-ve-iade" },
    ],
  },
  { label: "Blog", to: "/blog" },
  { label: "İletişim", to: "/iletisim" },
];

export const TR_CITIES = [
  "Adana","Adıyaman","Afyonkarahisar","Ağrı","Aksaray","Amasya","Ankara","Antalya","Ardahan","Artvin","Aydın","Balıkesir","Bartın","Batman","Bayburt","Bilecik","Bingöl","Bitlis","Bolu","Burdur","Bursa","Çanakkale","Çankırı","Çorum","Denizli","Diyarbakır","Düzce","Edirne","Elazığ","Erzincan","Erzurum","Eskişehir","Gaziantep","Giresun","Gümüşhane","Hakkari","Hatay","Iğdır","Isparta","İstanbul","İzmir","Kahramanmaraş","Karabük","Karaman","Kars","Kastamonu","Kayseri","Kilis","Kırıkkale","Kırklareli","Kırşehir","Kocaeli","Konya","Kütahya","Malatya","Manisa","Mardin","Mersin","Muğla","Muş","Nevşehir","Niğde","Ordu","Osmaniye","Rize","Sakarya","Samsun","Şanlıurfa","Siirt","Sinop","Şırnak","Sivas","Tekirdağ","Tokat","Trabzon","Tunceli","Uşak","Van","Yalova","Yozgat","Zonguldak",
];
