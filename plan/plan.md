# CABELO₃ – PayTR başvurusu öncesi yasal sayfalar, künye ve ödeme adımı

Mevcut CABELO₃ e-ticaret sitesine PayTR sanal POS incelemesinde istenen yasal sayfalar, satıcı künyesi ve mevzuata uygun bir ödeme adımı eklenir. Tasarım, renkler, yerleşim ve logo aynı kalır. Değişiklikler yalnız içerik, sayfa ve bağlantılarla sınırlıdır.

## Kimler için
- **Marka sahibi ve satıcı:** PayTR başvurusunu ret riski olmadan yapmak ve siteyi cabelo3.com'da paylaşımlı hostinge yüklemek istiyor.
- **Müşteriler:** Sipariş vermeden önce satıcıyı, KDV dahil fiyatı, kargo, teslim ve iade koşullarını açıkça görmek istiyor.

## Temel özellikler ve deneyim

### Genel kurallar
- **Bilinmeyen değerler:** Bilinmeyen her bilgi köşeli parantezli yer tutucu olarak yazılır, değer uydurulmaz.
  - Tüm yer tutucular tek dosyada toplanır: marka ve künye bilgilerinin bulunduğu mevcut sabitler dosyası. Site bu değerleri oradan okur.
  - Kullanıcının sohbette verdiği değerler doğrudan bu dosyaya işlenir.
- **Ticaret unvanı:** "NEFES SAÇ EKİMİ DANIŞMANLIK TİC. LTD. ŞTİ." sitede zaten yazılı. Sabit dosyaya değer olarak girer ve her yerde kullanılır.
- **Değişmeyenler:** Marka adı, ürün adları ve fiyat rakamları aynı kalır. Kod içindeki teknik adlara dokunulmaz.
- **Sabit cümleler:** S1–S6 (İstisna, Teslim, Cayma, İade kargosu, Para iadesi, Hasar) geçtikleri her yerde kullanıcının verdiği metinle birebir aynı yazılır.
- **Hukuki metinler:** Örnek metindir. Avukat kontrolü önerisi yalnız raporda yer alır, sitede görünmez.

### 1. Temizlik
- **Kaldırılacak sözcük ve notlar:** Ziyaretçinin gördüğü hiçbir metinde (sayfa, başlık, meta açıklama, sipariş kaydı) şunlar kalmaz:
  - "TEST", "MOCK", "yakında"
  - "taslak niteliğindedir" notları
  - Gizlilik metnindeki test cümlesi
  - Lorem ipsum, "yapım aşamasında", boş sayfa, kırık bağlantı, demo ürün
- **Sipariş kaydı:** Ödeme durumu "ödeme bekleniyor" olarak yazılır.
- **Kart formu:** Kart adı, kart no, son kullanma tarihi ve CVC alanları tamamen kalkar. Kart bilgisi yalnız PayTR'nin güvenli ödeme ekranında girilir.
- **Emergent ve izleme kodları:**
  - Emergent betiği, "Made with Emergent" rozeti ve PostHog kodunun tamamı (oturum kaydı dahil) kaldırılır.
  - Yayın paketinde "emergent.sh", "posthog" ve "rrweb" hiç geçmez.
- **Çalışmayan formlar:** İletişim formu ve footerdaki bülten formu kaldırılır. Yerlerine e-posta ve telefon bilgisi gelir. Gerçekte gitmeyen hiçbir şey için "gönderildi" denmez.

### 2. Sayfalar
Mevcut adresler korunur, eksik sayfalar eklenir. Yeni sayfalar mevcut iç sayfaların görünümünü kullanır.

**Footer bağlantıları:**
- İlk beşi PayTR'nin aradığı adlarla birebir yazılır: Gizlilik Politikası · Mesafeli Satış Sözleşmesi · Teslimat ve İade Şartları · Hakkımızda · İletişim
- Ardından: KVKK Aydınlatma Metni · Çerez Politikası · Ön Bilgilendirme Formu · Cayma Formu · Ödeme Seçenekleri · SSS
- Instagram bağlantısı kalır.

**Sayfa içerikleri:**
- **İletişim (`/iletisim`):**
  - Künye: unvan, MERSİS no, merkez adresi, vergi dairesi / VKN, KEP, e-posta, telefon, tescilli marka (varsa).
  - Ticaret odası ve meslek davranış kuralları bağlantısı.
  - Şikâyet ve cayma bildirimi için başvuru yolu.
  - Üst menüdeki "İletişim" bağlantısıyla ana sayfadan tek tıkla ulaşılır.
- **Hakkımızda (`/hakkimizda`):**
  - Marka ve satıcı şirketin kim olduğu ve ne sattığı.
  - İletişim sayfasına bağlantı.
  - "Aynı gün kargo" istatistiği kalkar.
- **Ön Bilgilendirme Formu (`/on-bilgilendirme-formu`, yeni):**
  - Mesafeli Sözleşmeler Yönetmeliği m.5/1'deki maddelerin tamamı: temel nitelikler, satıcı ve iletişim bilgileri, KDV dahil fiyat ve ayrı kargo ücreti, S2, S3 ve cayma yolu, S4, S5, S1, uyuşmazlık yolları.
  - "Bu form, Mesafeli Satış Sözleşmesi'nin ayrılmaz parçasıdır." cümlesi yer alır.
  - Yazı boyutu en az 16 px'tir (yasal ölçü).
- **Mesafeli Satış Sözleşmesi (`/mesafeli-satis-sozlesmesi`):** Tam metin, 11 bölüm:
  1. Taraflar
  2. Konu
  3. Ürün ve ödeme
  4. Teslimat: S2, gönderim bölgesi ve her hâlde en geç 30 gün
  5. Cayma: S3, S4
  6. İstisna: S1
  7. Para iadesi: S5
  8. Hasar: S6, süre sınırı yok
  9. Uyuşmazlık
  10. Kuruluş ve saklama
  11. Yürürlük
- **Teslimat ve İade Şartları (`/kargo-ve-iade`):**
  - Başlık "Teslimat ve İade Şartları" olur.
  - İçerik: S2 ve gönderim bölgesi; kargo ücreti (3'lü Set'te ücretsiz, tek üründe [TEK ÜRÜN KARGO ÜCRETİ]); S3; 3 adımlı iade yolu; S1.
  - Kaldırılan ifadeler: "kullanılmamış ve yeniden satılabilir" ve "3 gün içinde bildirim". Yerlerine S6 yazılır.
- **Cayma Formu (`/cayma-formu`, yeni):**
  - Yazdırılabilir örnek form.
  - Alanlar: alıcı adı, sipariş no, sipariş ve teslim tarihi, iade edilen ürün, adres, tarih, imza.
  - Gönderim adresi yer alır. Çevrim içi gönderim yoktur.
- **Gizlilik Politikası (`/gizlilik-politikasi`):**
  - Toplanan bilgiler, kullanım amacı ve koruma.
  - Kart bilgisinin sitede tutulmadığı, ödemenin PayTR ile alındığı.
  - Çerez Politikası bağlantısı.
  - Sözleşmenin kuruluş adımları ve saklama/erişim bilgisi.
  - Başvuru için iletişim bilgileri.
- **KVKK Aydınlatma Metni (`/kvkk`):**
  - Tam metin (m.10): veri sorumlusu, amaçlar, alıcı grupları (kargo, ödeme kuruluşu, barındırma, muhasebe), toplama yöntemi ve hukuki sebep, m.11 hakları, başvuru yolu.
  - Bağlantı footerda ve ödeme adımında yer alır.
- **Çerez Politikası (`/cerez-politikasi`, yeni):**
  - Sitede yalnız zorunlu tarayıcı depolaması kalır: sepet ve açılış animasyonunun bir kez gösterilmesi için tutulan kayıt.
  - Bu yüzden onay bildirimi eklenmez, yalnız sayfa eklenir.
- **Ödeme Seçenekleri (`/odeme-secenekleri`, yeni):**
  - Kabul edilen ödeme araçları ve PayTR güvenli ödeme bilgisi.
  - Taksitten söz edilmez.
  - Ödeme logosu çizilmez. PayTR'nin resmi görselleri gelene kadar ödeme araçları metin olarak yazılır.
- **SSS (`/sss`):**
  - Yeni sorular: "Sipariş nasıl verilir?" (adım adım), "Kargo ne zaman gelir?", "İade nasıl yapılır?", "Hangi ödeme yöntemleri var?"
  - Tüm cevaplar S1–S6 ile uyumlu hâle gelir.
- **Üyelik Sözleşmesi:** Sitede üyelik olmadığı için eklenmez.

### 3. Ürün sayfaları ve ürün metinleri
- **Fiyat:** Ürün kartları, ürün detayı, sepet ve özette fiyatın yanında "KDV dahil" yazar.
- **Kargo ve teslim:**
  - Kargo ücreti ya da ücretsiz kargo bilgisi ve S2 ürün sayfalarında yer alır.
  - Sitedeki tüm "aynı gün kargo" ifadeleri (ana sayfa, ürünler, sepet, Hakkımızda, meta açıklamalar) kalkar ya da S2 ile değiştirilir.
- **Temel nitelikler:** Hacim, içerik listesi ve kullanım şekli. Sitede yazılı olanlar kullanılır.
- **İade:** "İade koşulları" bağlantısı ve S1.
- **Ek bilgiler:**
  - Stok durumu: varsayılan "Stokta", sabit dosyadan değiştirilebilir.
  - Üretici/ithalatçı: [ÜRETİCİ / İTHALATÇI]
  - Üretim yeri: [ÜRETİM YERİ]
  - Birim fiyat (100 ml fiyatı): Şampuan 560 TL · Tonik 1.250 TL · Ozon Serumu 5.000 TL
- **3'lü Set:**
  - Üstü çizili fiyat kalkar. Yerine "Ayrı ayrı alındığında toplam 4.150 TL" yazar.
  - "Set fırsatı" ifadeleri "3'lü Set" ya da "3 ürün bir arada" olur.
- **Tıbbi iddia taraması:** Ana sayfa, ürünler, bileşenler, rehber, blog, SSS, başlıklar ve meta açıklamalar taranır.
  - Tedavi ya da iyileştirme iddiası, hastalık veya tanı adı, resmî onay veya kayıt ifadesi bulunursa kozmetik dille yeniden yazılır.
  - Raporda "eski → yeni" listesi verilir. Hiçbir şey bulunmazsa bu açıkça belirtilir.

### 4. Sepet ve ödeme adımı
- **Düzeltme:** Sepette adet değiştirme ve ürün silme, ödeme adımında adres düzeltme mümkündür.
- **Özet:** PayTR'ye geçmeden hemen önce şunlar bir arada görünür:
  - Ürünler, kısa nitelikleri ve adetleri
  - KDV dahil ara toplam, ayrı satırda kargo ücreti, KDV dahil genel toplam
  - S3 ve S1
  - İade kargo firması, gönderim bölgesi ve kabul edilen ödeme araçları
  - Sepet ve teslimat bilgileriyle doldurulmuş Ön Bilgilendirme Formu
- **Onay kutusu (işaretsiz gelir):** "Ön Bilgilendirme Formu'nu ve Mesafeli Satış Sözleşmesi'ni okudum, kabul ediyorum."
  - İki bağlantı, sepet ve adres bilgileriyle doldurulmuş metni sayfa üstünde açılan bir pencerede gösterir.
  - Kutu işaretlenmeden ilerlenemez.
- **İleti izni:** Ayrı, işaretsiz ve isteğe bağlı bir kutu: "Kampanya ve bilgilendirme iletileri almak istiyorum."
- **Diğer:** KVKK Aydınlatma Metni bağlantısı yer alır. Önceden işaretli ek ücretli seçenek yoktur.
- **Düğme:** Metni "Siparişi Onayla ve Öde" olur. Hemen üstünde şu cümle durur: "Siparişi onayladığınızda ödeme yükümlülüğü altına girersiniz."
- **Bu turdaki ödeme davranışı:**
  - Düğmeye basılınca sipariş numarası üretilmez, "sipariş alındı" ya da "ödeme alındı" denmez.
  - Sipariş özeti ve [ÖDEME ÖNCESİ GEÇİCİ MESAJ] gösterilir.
  - Tarayıcıda "ödeme bekleniyor" durumlu bir kayıt tutulur.
  - Sepet boşaltılmaz.
- **Kaldırılan sayfa:** Mevcut "Sipariş alındı" sayfası kalkar. PayTR turunda yeniden yapılır.
- **PayTR bilgileri:** Mağaza numarası, anahtar, gizli değer ve test/canlı ayarı ön yüz koduna ve ön yüz ortam değişkenlerine konmaz.

### 5. Yayın ortamı
- **Statik yayın:**
  - Site, cPanel'li paylaşımlı hostinge derlenmiş statik dosya olarak yüklenmeye hazır olur. Emergent yayını kullanılmaz.
  - Hiçbir sayfa backend'e ya da `/api` çağrısına bağlı değildir. Derlenmiş paket backend olmadan her sayfada hatasız açılır.
- **Bağlantılar:** Tüm iç bağlantılar görelidir.
- **.htaccess:**
  - Tek sayfa uygulama yönlendirme kuralı pakete dahildir.
  - http→https kuralı yorum satırı olarak hazır durur.
- **Rapor (kod yazılmadan öneri):** Sunucu tarafında gereken üç iş için nasıl çözülebileceği, nerede çalışacağı ve hangi bilgilerin gerektiği yazılır:
  1. PayTR ödeme jetonu ve bildirim adresi
  2. Ekli sözleşmelerle sipariş teyit e-postası
  3. İletişim, bülten ve çevrim içi cayma formları

### 6. Bitiş raporu
- "GitHub'a kaydetmeye hazır" notu. Kaydı kullanıcı "Save to GitHub" ile yapar.
- Değişen ve eklenen dosyaların listesi
- **YAYINDAN ÖNCE DOLDURULACAK:** Doldurulmamış tüm yer tutucular ve durdukları dosya
- Tıbbi iddia değişiklikleri ("eski → yeni")
- Kaldırılan formlar ve kodlar
- Sunucu tarafı önerisi
- Kullanıcının verdiği kabul kontrol listesinin madde madde sonucu

## Kullanıcı akışı
1. Ziyaretçi ana sayfaya gelir. Üst menüden İletişim'e, footerdan tüm yasal sayfalara tek tıkla ulaşır.
2. Ürün sayfasında şunları görür:
   - KDV dahil fiyat ve birim fiyat
   - Stok durumu, içerik ve kullanım bilgisi
   - Kargo ve teslim bilgisi, iade koşulları
3. Sepette adedi düzenler ya da ürünü siler. KDV dahil ara toplamı ve varsa ücretsiz kargo bilgisini görür.
4. Ödeme adımında teslimat bilgilerini girer ve sipariş özetini görür. Gerekirse doldurulmuş Ön Bilgilendirme Formu'nu ve Sözleşme'yi açıp okur, onay kutusunu işaretler.
5. "Siparişi Onayla ve Öde" düğmesine basar. Ödeme altyapısı bağlanana kadar özet ve geçici bilgilendirme mesajı görünür.

## UI/UX hissi
- Mevcut tasarım, renkler, yazı tipi, animasyonlar ve yeni altın logo olduğu gibi kalır.
- Yeni yasal sayfalar mevcut iç sayfa düzenini kullanır: koyu başlık bandı, içerik haritası (breadcrumb) ve okunaklı metin alanı. Uzun metinler başlıklarla bölünür.
- Ödeme adımındaki özet ve yasal bilgiler sade, okunaklı ve tek bakışta anlaşılır olur.

## Uygulama aşamaları
**Aşama 1 (bu turda yapılacak tek aşama):**
- §1–§6'daki tüm temizlik, sayfa, içerik ve ödeme adımı düzenlemeleri.
- Statik yayına hazır paket ve rapor.

**Aşama 2 (bu turda yapılmaz):**
- PayTR entegrasyonu: ödeme jetonu, bildirim adresi, test ve canlı geçişi (kullanıcı tarafından).
- Gerçek "Sipariş alındı" sayfası ve sipariş numarası.
- Ekli sözleşmelerle sipariş teyit e-postası.

**Aşama 3 (bu turda yapılmaz):**
- Gerçekten gönderilen iletişim, bülten ve çevrim içi cayma formları.
- Sipariş kayıtlarının sunucuda tutulması.
- İleride eklenirse analitik veya reklam kodu ve buna bağlı, varsayılanı kapalı çerez onay bildirimi.

## Varsayımlar
- **İletişim bilgileri:** Önceki sorunun cevabı doğrultusunda yer tutucu olarak girilir. Ürün fotoğrafı ve logo bu turun konusu değildir.
- **Yer tutucuların görünümü:** Doldurulana kadar sitede köşeli parantezli hâlleriyle görünür. "Yakında" yazısı hiçbir yerde kalmaz.
- **Hero'daki video düğmesi:** Reels'i sitede gömülü oynatmak yerine Instagram'ı yeni sekmede açar. Böylece üçüncü taraf çerezi oluşmaz ve onay bildirimi gerekmez. Rozetin görünümü değişmez.
- **Yazı tipi:** Onest, Google sunucusu yerine site dosyalarından yüklenir. Üçüncü taraf bağlantısı oluşmaz, görünüm değişmez.
- **Footer düzeni:** Sütunlu düzen korunur. Kaldırılan bülten formunun yerine e-posta ve telefon bilgisi gelir. Yasal bağlantılar mevcut bağlantı sütunlarına ve alt satıra yerleşir.
- **Hakkımızda istatistikleri:** "Aynı gün kargo" kalkar. "3 ürün", hacim bilgisi ve "14 gün cayma hakkı" kalır.
- **Birim fiyat:** 3'lü Set farklı hacimlerden oluştuğu için sette tek bir birim fiyat gösterilmez. Birim fiyat yalnız tek ürünlerde hesaplanır.
- **Stok durumu:** Gerçek stok bilgisi olmadığından tüm ürünler varsayılan olarak "Stokta" görünür. Değer sabit dosyadan değiştirilebilir.
- **Doldurulmuş belgeler:** Ödeme adımında sayfa üstünde açılan pencerede gösterilir. Footerdan açılan bağımsız sayfalarda alıcı ve sipariş alanları boş şablon olarak durur.
- **Önceki içerik kuralları:** Yasaklı kelimeler, "doğal" kelimesinin yalnız Ozon Serumu için kullanılması ve "içermez" iddiasının yalnız şampuan için yazılması geçerliliğini korur.
- **GitHub:** Kayıt kullanıcı tarafından "Save to GitHub" ile yapılır.
