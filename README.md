# Modern Türkiye Hava Durumu Uygulaması

![Hava Durumu Uygulaması](https://img.shields.io/badge/Uygulama-Hava%20Durumu-blue)
![Dil](https://img.shields.io/badge/Dil-Türkçe-red)
![Teknoloji](https://img.shields.io/badge/Teknoloji-HTML%2FCSS%2FJS-yellow)

Modern bir arayüz ile Türkiye'deki tüm illerin anlık hava durumu bilgilerini görüntüleyen web uygulaması. Şık kart tasarımı ve farklı hava koşullarında değişen görsel temalarla kullanıcı dostu bir deneyim sunar.

![Uygulama Görünümü](https://via.placeholder.com/800x400/3498db/FFFFFF?text=Hava+Durumu+Uygulamas%C4%B1)

## Özellikler

- 📍 81 il için canlı hava durumu verisi
- 🌈 Hava durumuna göre otomatik değişen tema ve arka planlar
- 📱 Mobil uyumlu (responsive) tasarım
- 🌡️ Sıcaklık, nem, rüzgar hızı ve hissedilen sıcaklık verileri
- 💨 Modern ve minimalist arayüz
- 🔍 Kolay şehir seçimi
- 🚀 Hızlı yükleme süresi

## Teknolojiler

- HTML5
- CSS3 (Modern değişkenler, gradyanlar ve esneklik)
- JavaScript (Saf JS, harici kütüphane gerekmez)
- [Open-Meteo API](https://open-meteo.com/) - Ücretsiz hava durumu verileri
- [Lucide Icons](https://lucide.dev/) - Hava durumu ve arayüz simgeleri

## Kurulum ve Çalıştırma

1. Bu depoyu bilgisayarınıza klonlayın:
   ```bash
   git clone https://github.com/nacikaratas/turkiye-hava-durumu.git
   ```

2. Proje klasörüne gidin:
   ```bash
   cd turkiye-hava-durumu
   ```

3. Herhangi bir HTTP sunucusu ile çalıştırabilirsiniz:
   - VS Code için: Live Server eklentisi kullanabilirsiniz
   - Python ile: `python -m http.server`
   - Node.js ile: `npx serve` 

4. Tarayıcınızda açın ve kullanmaya başlayın!

## Kullanım

1. Açılır menüden bir şehir seçin
2. Hava durumu bilgisi otomatik olarak görüntülenecektir
3. Farklı şehirlerin hava durumu için yeni bir seçim yapın

## Test Şehirleri

Uygulamayı test etmek için, aşağıdaki test şehirlerini kullanabilirsiniz:

- **TEST-GÜNEŞLI**: Güneşli hava durumu temasını görüntüler
- **TEST-YAĞMURLU**: Yağmurlu hava durumu temasını görüntüler
- **TEST-P.BULUTLU**: Parçalı bulutlu hava durumu temasını görüntüler
- **TEST-SİSLİ**: Sisli hava durumu temasını görüntüler
- **TEST-FIRTINALI**: Fırtınalı hava durumu temasını görüntüler

## Katkıda Bulunma

1. Bu repoyu forklayın
2. Yeni bir özellik dalı oluşturun: `git checkout -b yeni-ozellik`
3. Değişikliklerinizi commit edin: `git commit -m 'Yeni özellik eklendi'`
4. Dalınıza push yapın: `git push origin yeni-ozellik`
5. Pull Request açın

## Lisans

Bu proje [MIT Lisansı](LICENSE) altında lisanslanmıştır.

## İletişim

Sorularınız veya geri bildirimleriniz için [issues](https://github.com/nacikaratas/turkiye-hava-durumu/issues) bölümünü kullanabilirsiniz.

---

Hava durumu verileri [Open-Meteo](https://open-meteo.com/) tarafından sağlanmaktadır.

Geliştirici: [İsim Soyisim](https://github.com/nacikaratas) 