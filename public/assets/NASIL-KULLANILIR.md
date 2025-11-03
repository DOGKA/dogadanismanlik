# DOĞA Sigorta - Assets Klasör Yapısı

Bu dosya, Bootstrap şablonunuzdaki dosyaları nereye koymanız gerektiğini gösterir.

## 📁 Klasör Yapısı

```
public/assets/
├── css/
│   └── main.css                    ← Temanızın ana CSS dosyası
│
├── js/
│   └── main.js                     ← Temanızın ana JavaScript dosyası
│
├── img/
│   ├── favicon.png                 ← Site ikonu (16x16 veya 32x32)
│   ├── apple-touch-icon.png        ← iOS ikonu (180x180)
│   └── health/
│       ├── showcase-1.webp         ← Hero bölümü görseli
│       └── facilities-1.webp       ← Hakkımızda bölümü görseli
│
└── vendor/                         ← Üçüncü parti kütüphaneler
    ├── bootstrap/
    │   ├── css/bootstrap.min.css
    │   └── js/bootstrap.bundle.min.js
    │
    ├── bootstrap-icons/
    │   └── bootstrap-icons.css
    │
    ├── aos/
    │   └── aos.js                  ← Animasyon kütüphanesi
    │   └── aos.css
    │
    ├── fontawesome-free/
    │   └── css/all.min.css         ← Font Awesome ikonları
    │
    ├── swiper/
    │   └── swiper-bundle.min.css
    │   └── swiper-bundle.min.js
    │
    ├── glightbox/
    │   ├── css/glightbox.min.css
    │   └── js/glightbox.min.js
    │
    ├── php-email-form/
    │   └── validate.js
    │
    ├── purecounter/
    │   └── purecounter_vanilla.js
    │
    ├── imagesloaded/
    │   └── imagesloaded.pkgd.min.js
    │
    └── isotope-layout/
        └── isotope.pkgd.min.js
```

## 🚀 Nasıl Kullanılır?

1. **Bootstrap şablonunuzdaki assets klasörünü** `public/assets/` içine kopyalayın
2. Tüm dosyalar yukarıdaki yapıya uygun şekilde yerleştirilmelidir
3. Görselleri `public/assets/img/` klasörüne ekleyin

## ✅ Kontrol Listesi

- [ ] `main.css` dosyasını `public/assets/css/` içine koydum
- [ ] `main.js` dosyasını `public/assets/js/` içine koydum
- [ ] Bootstrap CSS/JS dosyalarını `public/assets/vendor/bootstrap/` içine koydum
- [ ] Bootstrap Icons CSS'ini `public/assets/vendor/bootstrap-icons/` içine koydum
- [ ] Font Awesome CSS'ini `public/assets/vendor/fontawesome-free/css/` içine koydum
- [ ] AOS animasyon dosyalarını `public/assets/vendor/aos/` içine koydum
- [ ] Diğer vendor dosyalarını ilgili klasörlere koydum
- [ ] Görselleri `public/assets/img/` ve alt klasörlerine koydum
- [ ] Favicon ve apple-touch-icon dosyalarını ekledim

## 📝 Not

Eğer Bootstrap şablonunuzda hazır bir `assets` klasörü varsa, doğrudan `public/` klasörüne kopyalayabilirsiniz. 
Dosya yolları zaten `/assets/...` şeklinde ayarlanmış durumda.

## 🔗 Alternatif: CDN Kullanımı

Eğer vendor dosyalarınız yoksa, CDN linklerini kullanabilirsiniz.
`src/app/layout.tsx` dosyasında CDN linklerine geçebilirsiniz.

