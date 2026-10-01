# CABELO₃ – PayTR başvurusu öncesi yayın raporu

**Durum:** GitHub'a kaydetmeye hazır. Kaydı Emergent arayüzündeki **"Save to GitHub"** ile siz yaparsınız.

## 1. Yayın paketi (cPanel / paylaşımlı hosting)
- Yüklenecek klasör: `yayin/cabelo3-statik/`. Bu klasör, `frontend` içinde `yarn build` ile üretilen derlenmiş dosyaların kopyasıdır.
- Klasörün **içeriğini** (gizli `.htaccess` dosyası dahil) `public_html` köküne yükleyin.
- Backend ya da `/api` çağrısı yoktur. Paket her sayfada backend olmadan açılır.
- `.htaccess`:
  - Tek sayfa uygulama yönlendirme kuralı etkin.
  - http→https kuralı yorum satırı olarak hazır duruyor; SSL kurulduktan sonra açın.
- Site alan adının köküne göre derlenir (`/`). İç bağlantılarda alan adı yazılı değildir.
- Kodu değiştirdikten sonra paketi yeniden üretmek için:
  1. `cd frontend && yarn build`
  2. `build/` içeriğini yükleyin.
- Paketi yerelde backend olmadan denemek için: `python3 tools/serve_build.py 3001`

## 2. Değişen ve eklenen dosyalar
**Eklenen**
- `frontend/src/data/legal.js` – yasal metinler (Ön Bilgilendirme, Mesafeli Satış, KVKK, Gizlilik, Çerez)
- `frontend/src/components/common/LegalDoc.jsx` – yasal belge görünümü (yazılar en az 16 px)
- `frontend/src/pages/WithdrawalForm.jsx` – `/cayma-formu`
- `frontend/src/pages/PaymentOptions.jsx` – `/odeme-secenekleri`
- `frontend/public/.htaccess`
- `frontend/src/assets/fonts/onest-latin.woff2`, `onest-latin-ext.woff2` – yazı tipi artık sitenin kendi dosyalarından yükleniyor
- `tools/serve_build.py` – derlenmiş paketi yerelde deneme sunucusu
- `yayin/cabelo3-statik/` – yüklenmeye hazır paket
- `YAYIN_RAPORU.md` – bu rapor

**Değişen**
- `frontend/public/index.html`: Emergent betiği, rozet ve PostHog kaldırıldı; Google Fonts bağlantısı kaldırıldı.
- `frontend/src/data/mock.js`: künye, kargo, ödeme ve ürün sabitleri, S1–S6, yeni SSS, birim fiyatlar, 3'lü Set.
- `frontend/src/index.css`: yazı tipi yerel dosyadan yükleniyor.
- `frontend/src/App.js`: yeni sayfa adresleri eklendi, "Sipariş alındı" sayfası kaldırıldı.
- Sayfalar: `Checkout.jsx`, `Contact.jsx`, `Shipping.jsx`, `Legal.jsx`, `About.jsx`, `Cart.jsx`, `ProductDetail.jsx`, `Shop.jsx`.
- Bileşenler: `Footer.jsx`, `ProductCard.jsx`, `SetOffer.jsx`, `CartDrawer.jsx`, `Hero.jsx`, `CompareSection.jsx`.

**Silinen**
- `frontend/src/pages/OrderSuccess.jsx`

## 3. YAYINDAN ÖNCE DOLDURULACAK
Tüm yer tutucular tek dosyada: **`frontend/src/data/mock.js`** (dosyanın en üstünde). Değeri yazdığınızda sitede geçtiği her yerde güncellenir.

| Yer tutucu | Sabit |
|---|---|
| [MERSİS NO] | `BRAND.mersis` |
| [VERGİ DAİRESİ / VKN] | `BRAND.taxInfo` |
| [AÇIK ADRES] | `BRAND.address` |
| [TELEFON] | `BRAND.phone` |
| [E-POSTA] | `BRAND.email` |
| [KEP ADRESİ] | `BRAND.kep` |
| [TİCARET ODASI] | `BRAND.chamber` |
| [ODA İNTERNET ADRESİ] | `BRAND.chamberUrl` |
| [TESCİLLİ MARKA — varsa] | `BRAND.trademark` |
| [KARGOYA VERİLİŞ SÜRESİ] | `SHIPPING.dispatchTime` |
| [TESLİM SÜRESİ] | `SHIPPING.deliveryTime` |
| [TEK ÜRÜN KARGO ÜCRETİ] | `SHIPPING.singleProductFee` + sayı olarak `SHIPPING.singleProductFeeAmount` (genel toplam hesabı için) |
| [İADE KARGO FİRMASI] | `SHIPPING.returnCarrier` |
| [GÖNDERİM BÖLGESİ] | `SHIPPING.region` |
| [KABUL EDİLEN ÖDEME ARAÇLARI] | `PAYMENT.methods` |
| [ÖDEME ÖNCESİ GEÇİCİ MESAJ] | `PAYMENT.preMessage` |
| [SÖZLEŞME SAKLAMA / ERİŞİM BİLGİSİ] | `CONTRACT.storage` |
| [ÜRETİCİ / İTHALATÇI] | `PRODUCT_INFO.manufacturer` |
| [ÜRETİM YERİ] | `PRODUCT_INFO.origin` |

- Stok durumu varsayılan olarak "Stokta". Değiştirmek için:
  - Tüm ürünler: `PRODUCT_INFO.defaultStock`
  - Tek bir ürün: o ürüne `stock: "Tükendi"` alanı eklenir.
- Ön Bilgilendirme Formu'nda (madde c) şu cümle var: "Satıcı adına hareket eden başka bir kişi bulunmamaktadır." Bu durum sizin için geçerli değilse cümleyi `frontend/src/data/legal.js` içinde düzeltin.

## 4. Tıbbi iddia taraması
Taranan yerler: ana sayfa, ürünler, bileşenler, rehber, blog, SSS, başlıklar ve meta açıklamalar.

**Tedavi ya da iyileştirme iddiası, hastalık veya tanı adı, resmî onay veya kayıt ifadesi bulunamadı. Bu nedenle tıbbi iddia nedeniyle yeniden yazılan metin yok.**

İlgisiz düzeltmeler (tıbbi iddia değil):
- "Set fırsatı" → "3'lü Set" / "3 ürün bir arada"
- Üstü çizili 4.150 TL → "Ayrı ayrı alındığında toplam 4.150 TL"
- "Kutudan köpüğe, yakından tanıyın" → "Kutudan köpüğe, CABELO₃ dokusu". "yakından" kelimesi "yakında" ifadesini içerdiği için yasaklı ifade taramasına takılmasın diye değişti.
- Tüm "aynı gün kargo" ifadeleri kaldırıldı ya da S2 ile değiştirildi:
  - Ürünler bandı
  - Sepet
  - Ürün detayı
  - Hakkımızda istatistiği
  - SSS

## 5. Kaldırılan formlar ve kodlar
- Kaldırılan izleme ve Emergent kodları:
  - Emergent betiği (`emergent-main.js`)
  - "Made with Emergent" rozeti
  - PostHog (oturum kaydı dahil)
- Kaldırılan Google bağlantıları:
  - Google Fonts bağlantısı (yazı tipi artık sitenin kendi dosyalarından yükleniyor)
- Kaldırılan formlar:
  - İletişim formu
  - Footerdaki bülten formu
  - Bu ikisinin yerine e-posta, telefon ve adres bilgisi geldi
- Kaldırılan ödeme öğeleri:
  - Kart adı, kart numarası, son kullanma tarihi ve CVC alanları
  - Sahte "Siparişiniz alındı" sayfası ve sipariş numarası üretimi
- Kaldırılan gömülü video:
  - Hero'daki gömülü Instagram videosu. Rozet artık Reels'i yeni sekmede açar; üçüncü taraf çerezi oluşmaz.

## 6. Sunucu tarafı önerisi (kod yazılmadı)
### 1. PayTR iFrame ödeme jetonu ve bildirim adresi
- **Nerede çalışır:**
  - Aynı hostingde, örneğin `public_html/odeme/` altında bir PHP betiği. cPanel'de PHP hazır bulunur.
  - Betik `get-token.php` ve `bildirim.php` olarak ikiye ayrılabilir.
- **İşleyiş:**
  - Ödeme adımında "Siparişi Onayla ve Öde" düğmesi sepeti ve adresi `get-token.php`'ye gönderir.
  - `get-token.php`:
    - Tutarı ve kargo ücretini sunucuda yeniden hesaplar; tarayıcıdan gelen fiyata güvenmez.
    - Sipariş numarasını üretir.
    - `merchant_id`, `merchant_key` ve `merchant_salt` ile `paytr_token` alır.
    - Siparişi "ödeme bekleniyor" durumunda MySQL'e kaydeder.
  - Ön yüz, dönen jetonla PayTR iFrame'ini açar.
  - `bildirim.php`:
    - PayTR'nin hash'ini doğrular.
    - Siparişi "ödendi" ya da "başarısız" yapar.
    - PayTR'ye `OK` döner.
  - Gerçek "Sipariş alındı" sayfası yalnız bu bildirimden sonra gösterilir.
- **Gerekenler:**
  - PayTR mağaza no, anahtar ve gizli değer. Yalnız sunucudaki PHP yapılandırmasında tutulur, ön yüze ve `REACT_APP_` değişkenlerine konmaz.
  - Test/canlı ayarı
  - Başarılı ve başarısız dönüş adresleri
  - PayTR panelinde tanımlı bildirim URL'si
  - cPanel'de bir MySQL veritabanı

### 2. Sipariş teyit e-postası (ekli sözleşmelerle)
- **Nerede çalışır:** `bildirim.php`, ödeme onaylanınca çalıştırır.
- **İşleyiş:**
  - Ön Bilgilendirme Formu ve Mesafeli Satış Sözleşmesi, sipariş bilgileriyle PDF ya da HTML olarak üretilir.
  - Bu belgeler, örneğin PHPMailer ve SMTP ile alıcıya gönderilir.
  - Bir kopyası satıcıda saklanır ([SÖZLEŞME SAKLAMA / ERİŞİM BİLGİSİ]).
- **Gerekenler:**
  - Gönderici e-posta ve SMTP bilgileri (cPanel e-posta hesabı)
  - Alan adı için SPF/DKIM ayarı

### 3. İletişim, bülten ve çevrim içi cayma formları
- **Nerede çalışır:** Aynı PHP klasöründe her biri için bir uç nokta: `iletisim.php`, `bulten.php`, `cayma.php`.
- **İşleyiş:**
  - Formlar veritabanına kaydedilir ve satıcıya e-posta gönderilir.
  - Çevrim içi cayma bildiriminde alıcıya teyit e-postası otomatik gönderilir (yasal zorunluluk).
  - Bülten:
    - Ticari ileti onayı İYS'ye (İleti Yönetim Sistemi) kaydedilir.
    - Ödeme adımındaki isteğe bağlı ileti izni de bu yolla işlenir.
  - Formlara reCAPTCHA ya da benzeri bir koruma eklenmelidir.
- **Gerekenler:**
  - SMTP bilgileri
  - İYS hesabı
  - MySQL veritabanı

## 7. Kabul kontrol listesi
- [x] Ziyaretçinin gördüğü metinde şunlar geçmiyor: "TEST", "mock", "yakında", "taslak niteliğindedir", lorem ipsum, "yapım aşamasında". Tüm sayfaların görünür metni otomatik tarandı.
- [x] Kart no, son kullanma tarihi ve CVC alanı yok.
- [x] Build çıktısında (index.html ve tüm dosyalar) "emergent.sh", "posthog" ve "rrweb" hiç geçmiyor.
- [x] Sayfalar ve bağlantılar:
  - [x] Tüm sayfalar açılıyor ve footerdan ulaşılıyor.
  - [x] 5 PayTR bağlantısı birebir adlarıyla ve ilk sırada duruyor: Gizlilik Politikası · Mesafeli Satış Sözleşmesi · Teslimat ve İade Şartları · Hakkımızda · İletişim.
  - [x] İletişim sayfası ana sayfadan tek tıkla açılıyor (üst menü).
  - [x] Kırık bağlantı ya da 404 yok. 25 iç bağlantı ve ek ürün, blog ve ödeme adresleri derlenmiş pakette tek tek açılarak denendi.
- [x] Build, backend olmadan her sayfada hatasız açılıyor (yerel statik sunucuda, konsol hatası yok).
- [x] Ön Bilgilendirme Formu m.5/1'in tüm bentlerini içeriyor (a, b, c, ç, d, e, f, g, ğ, h, ı, i–j, k). Ödeme adımında sepet ve teslimat bilgisiyle doluyor.
- [x] Mesafeli Satış Sözleşmesi şunları içeriyor:
  - [x] taraflar, konu, fiyat
  - [x] teslimat (en geç 30 gün)
  - [x] cayma (S3) ve istisnası (S1)
  - [x] iade kargosu (S4) ve para iadesi (S5)
  - [x] hakem heyeti, mahkeme, arabulucu
  - [x] saklama ve erişim bilgisi
- [x] S1–S6 geçtikleri her yerde birebir aynı; hepsi tek kaynaktan (`S` sabiti) okunuyor.
  - İade sayfasındaki 2 çelişkili ifade kaldırıldı: "kullanılmamış ve yeniden satılabilir" ve "3 gün içinde bildirim". Yerlerine S1 ve S6 geldi.
- [x] KVKK metninde kimlik, amaç, alıcı grupları, toplama yöntemi, hukuki sebep ve haklar var.
- [x] Ürün sayfalarında şunlar var:
  - KDV dahil fiyat ve birim fiyat
  - Kargo ücreti ve teslim süresi (S2)
  - Stok durumu
  - İçerik ve kullanım bilgisi (sekmelerde)
  - İade koşulları bağlantısı ve S1
  - Üretici / ithalatçı ve üretim yeri
- [x] Hiçbir metinde tedavi iddiası, hastalık adı ya da taksit sözü yok.
- [x] Ödeme adımı:
  - [x] Özet, PayTR'ye geçmeden hemen önce bir arada görünüyor: ürünler, KDV dahil ara toplam, kargo satırı, genel toplam, S3, S1, iade kargo firması, gönderim bölgesi, ödeme araçları, doldurulmuş Ön Bilgilendirme Formu.
  - [x] Onay kutusu işaretsiz geliyor, işaretlenmeden düğme pasif.
  - [x] İleti izni ayrı ve işaretsiz.
  - [x] "Ödeme yükümlülüğü" cümlesi ve "Siparişi Onayla ve Öde" düğmesi var.
  - [x] Ek ücretli hiçbir seçenek önceden seçili değil.
- [x] Sahte "sipariş alındı" ya da "ödeme alındı" yok.
  - Düğme yalnız özet ve [ÖDEME ÖNCESİ GEÇİCİ MESAJ] gösteriyor.
  - Tarayıcıda "ödeme bekleniyor" kaydı tutuluyor.
  - Sepet boşalmıyor.
  - PayTR anahtarı ve mod ayarı kodda ve `REACT_APP_` değişkenlerinde yok.
- [x] Yer tutucular tek dosyada toplandı (`frontend/src/data/mock.js`); listesi yukarıda.
- [x] Mevcut tasarım, renk, yerleşim ve logo değişmedi. Footerda yalnız bülten formunun yerine iletişim bilgileri ve yasal bağlantılar sütunu geldi.
- [x] GitHub'a kaydetmeye hazır. Değişen ve eklenen dosyaların listesi yukarıda.
