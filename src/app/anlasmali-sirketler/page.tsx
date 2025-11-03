'use client';

import { Phone, Mail, CheckCircle, Building2 } from 'lucide-react';
import Image from 'next/image';

const companies = [
  {
    id: 1,
    name: 'Allianz Sigorta',
    slug: 'allianz',
    logo: '/assets/img/partners/allianz.png',
    description: 'Dünya çapında güvenilir sigorta hizmetleri sunan global lider. 130 ülkede faaliyet gösteren güçlü altyapı.',
    products: ['Sağlık', 'Araç', 'Konut', 'Hayat', 'Seyahat'],
    established: '1890',
    website: 'https://www.allianz.com.tr',
    featured: true,
  },
  {
    id: 2,
    name: 'Aksigorta',
    slug: 'aksigorta',
    logo: '/assets/img/partners/aksigorta.png',
    description: 'Türkiye\'nin köklü ve güvenilir sigorta şirketlerinden. 90 yılı aşkın deneyim ve müşteri memnuniyeti odaklı hizmet.',
    products: ['Sağlık', 'Araç', 'Konut', 'İş Yeri', 'Hayat'],
    established: '1960',
    website: 'https://www.aksigorta.com.tr',
    featured: true,
  },
  {
    id: 3,
    name: 'Anadolu Sigorta',
    slug: 'anadolu',
    logo: '/assets/img/partners/anadolu.png',
    description: 'Geniş ürün yelpazesi ve hızlı hasar ödemeleriyle tanınan yerli şirket. Türkiye\'nin en büyük sigorta şirketlerinden.',
    products: ['Sağlık', 'Araç', 'Konut', 'İş Yeri', 'Seyahat'],
    established: '1925',
    website: 'https://www.anadolusigorta.com.tr',
    featured: true,
  },
  {
    id: 4,
    name: 'Mapfre Sigorta',
    slug: 'mapfre',
    logo: '/assets/img/partners/mapfre.png',
    description: 'Global deneyim, yerel hizmet anlayışı. İspanyol kökenli, dünya çapında faaliyet gösteren güçlü marka.',
    products: ['Sağlık', 'Araç', 'Konut', 'Hayat'],
    established: '1996',
    website: 'https://www.mapfre.com.tr',
    featured: false,
  },
  {
    id: 5,
    name: 'HDI Sigorta',
    slug: 'hdi',
    logo: '/assets/img/partners/hdi.png',
    description: 'Yenilikçi sigorta çözümleri ve dijital hizmet anlayışı. Özellikle kasko ve trafik sigortalarında öncü.',
    products: ['Araç', 'Konut', 'İş Yeri', 'Seyahat'],
    established: '2001',
    website: 'https://www.hdi.com.tr',
    featured: false,
  },
  {
    id: 6,
    name: 'AXA Sigorta',
    slug: 'axa',
    logo: '/assets/img/partners/axa.png',
    description: 'Uluslararası güvence partneri. Fransız kökenli, dünya çapında tanınan prestijli sigorta markası.',
    products: ['Sağlık', 'Araç', 'Konut', 'Hayat', 'Seyahat'],
    established: '2008',
    website: 'https://www.axa.com.tr',
    featured: true,
  },
  {
    id: 7,
    name: 'Sompo Sigorta',
    slug: 'sompo',
    logo: '/assets/img/partners/sompo.png',
    description: 'Japon kalitesi ve güvenilirliği. Teknoloji odaklı hızlı ve etkin sigorta çözümleri.',
    products: ['Sağlık', 'Araç', 'Konut', 'İş Yeri'],
    established: '2015',
    website: 'https://www.somposigorta.com.tr',
    featured: false,
  },
  {
    id: 8,
    name: 'Generali Sigorta',
    slug: 'generali',
    logo: '/assets/img/partners/generali.png',
    description: 'İtalyan kökenli dünya devi. 190 yılı aşkın deneyim ve global güvenilirlik.',
    products: ['Sağlık', 'Araç', 'Konut', 'Hayat', 'Seyahat'],
    established: '2001',
    website: 'https://www.generali.com.tr',
    featured: true,
  },
  {
    id: 9,
    name: 'Groupama Sigorta',
    slug: 'groupama',
    logo: '/assets/img/partners/groupama.png',
    description: 'Fransız güvencesiyle hizmet. Tarım sigortalarında öncü, geniş ürün portföyü.',
    products: ['Sağlık', 'Araç', 'Konut', 'İş Yeri'],
    established: '2008',
    website: 'https://www.groupama.com.tr',
    featured: false,
  },
  {
    id: 10,
    name: 'Ankara Sigorta',
    slug: 'ankara',
    logo: '/assets/img/partners/ankara.png',
    description: 'Yerli ve güvenilir. Türkiye\'nin köklü sigorta şirketlerinden, müşteri odaklı hizmet.',
    products: ['Araç', 'Konut', 'İş Yeri', 'Hayat'],
    established: '1987',
    website: 'https://www.ankarasigorta.com.tr',
    featured: false,
  },
  {
    id: 11,
    name: 'Türkiye Sigorta',
    slug: 'turkiye',
    logo: '/assets/img/partners/turkiye.png',
    description: 'Milli sigorta şirketi. Kamu güvencesiyle hizmet veren, Türkiye\'nin en büyük sigorta şirketlerinden.',
    products: ['Sağlık', 'Araç', 'Konut', 'İş Yeri', 'Hayat'],
    established: '2020',
    website: 'https://www.turkiyesigorta.com.tr',
    featured: true,
  },
  {
    id: 12,
    name: 'Doğa Sigorta',
    slug: 'doga',
    logo: '/assets/img/partners/doga-sigorta.png',
    description: 'Yerel uzmanlık ve hızlı çözüm. Müşteri memnuniyeti odaklı, kişiselleştirilmiş sigorta hizmetleri.',
    products: ['Sağlık', 'Araç', 'Konut', 'Seyahat'],
    established: '2010',
    website: 'https://www.dogasigorta.com.tr',
    featured: false,
  },
  {
    id: 13,
    name: 'Bereket Sigorta',
    slug: 'bereket',
    logo: '/assets/img/partners/bereket-sigorta.png',
    description: 'Katılım sigortacılığında öncü kurum. Faizsiz, İslami prensipler doğrultusunda hizmet veren güvenilir marka.',
    products: ['Sağlık', 'Araç', 'Konut', 'Hayat'],
    established: '2010',
    website: 'https://www.bereketsigorta.com.tr',
    featured: false,
  },
  {
    id: 14,
    name: 'Corpus Sigorta',
    slug: 'corpus',
    logo: '/assets/img/partners/corpus-sigorta.png',
    description: 'Kurumsal müşterilere özel çözümler sunan, deneyimli ve yenilikçi sigorta şirketi.',
    products: ['Sağlık', 'Araç', 'Konut', 'İş Yeri'],
    established: '2015',
    website: 'https://www.corpussigorta.com',
    featured: false,
  },
  {
    id: 15,
    name: 'GIG Sigorta',
    slug: 'gig',
    logo: '/assets/img/partners/gig-sigorta.png',
    description: 'Uluslararası deneyim ve yerel bilgiyle, kapsamlı sigorta çözümleri sunan güvenilir marka.',
    products: ['Sağlık', 'Araç', 'Konut', 'İş Yeri', 'Hayat'],
    established: '2008',
    website: 'https://www.gig.com.tr',
    featured: false,
  },
  {
    id: 16,
    name: 'EMAA Sigorta',
    slug: 'emaa',
    logo: '/assets/img/partners/emaa-sigorta.png',
    description: 'Tarımsal sigortalarda uzman, geniş ürün portföyü ile hizmet veren sigorta şirketi.',
    products: ['Araç', 'Konut', 'İş Yeri', 'Tarım'],
    established: '2012',
    website: 'https://www.emaasigorta.com',
    featured: false,
  },
  {
    id: 17,
    name: 'Zurich Sigorta',
    slug: 'zurich',
    logo: '/assets/img/partners/zurich-sigorta.png',
    description: 'İsviçre kökenli global sigorta devi. 150 yılı aşkın deneyim ve dünya çapında güvenilirlik.',
    products: ['Sağlık', 'Araç', 'Konut', 'İş Yeri', 'Hayat', 'Seyahat'],
    established: '2008',
    website: 'https://www.zurich.com.tr',
    featured: true,
  },
  {
    id: 18,
    name: 'Neova Sigorta',
    slug: 'neova',
    logo: '/assets/img/partners/neova-sigorta.png',
    description: 'Genç ve dinamik yapısıyla, modern sigorta çözümleri sunan yenilikçi şirket.',
    products: ['Sağlık', 'Araç', 'Konut'],
    established: '2014',
    website: 'https://www.neovasigorta.com.tr',
    featured: false,
  },
  {
    id: 19,
    name: 'Orient Sigorta',
    slug: 'orient',
    logo: '/assets/img/partners/orient-sigorta.png',
    description: 'Kurumsal müşterilere özel çözümler ve geniş hizmet ağı ile güvenilir sigorta partneri.',
    products: ['Araç', 'Konut', 'İş Yeri', 'Nakliyat'],
    established: '2009',
    website: 'https://www.orientsigorta.com.tr',
    featured: false,
  },
  {
    id: 20,
    name: 'Quick Sigorta',
    slug: 'quick',
    logo: '/assets/img/partners/quick-sigorta.png',
    description: 'Hızlı ve pratik sigorta çözümleri sunan, dijital odaklı modern sigorta şirketi.',
    products: ['Araç', 'Seyahat', 'Sağlık'],
    established: '2016',
    website: 'https://www.quicksigorta.com.tr',
    featured: false,
  },
  {
    id: 21,
    name: 'Ray Sigorta',
    slug: 'ray',
    logo: '/assets/img/partners/ray-sigorta.png',
    description: 'Müşteri memnuniyeti odaklı, kapsamlı sigorta ürünleri ile hizmet veren şirket.',
    products: ['Sağlık', 'Araç', 'Konut', 'Hayat'],
    established: '2011',
    website: 'https://www.raysigorta.com.tr',
    featured: false,
  },
  {
    id: 22,
    name: 'Türk Nippon Sigorta',
    slug: 'turk-nippon',
    logo: '/assets/img/partners/turk-nippon-sigorta.png',
    description: 'Türk-Japon ortaklığı ile kurulan, güçlü altyapı ve kaliteli hizmet sunan sigorta şirketi.',
    products: ['Sağlık', 'Araç', 'Konut', 'İş Yeri', 'Hayat'],
    established: '1990',
    website: 'https://www.turknippon.com',
    featured: false,
  },
  {
    id: 23,
    name: 'Unico Sigorta',
    slug: 'unico',
    logo: '/assets/img/partners/unico-sigorta.png',
    description: 'Bireysel ve kurumsal müşterilere özel sigorta çözümleri sunan, güvenilir sigorta şirketi.',
    products: ['Sağlık', 'Araç', 'Konut', 'İş Yeri'],
    established: '2013',
    website: 'https://www.unicosigorta.com',
    featured: false,
  },
];

export default function PartnersPage() {
  return (
    <div className="pt-20 min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Building2 className="w-4 h-4 mr-2" />
              23 Anlaşmalı Şirket
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Anlaşmalı Sigorta Şirketleri
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Türkiye&apos;nin önde gelen sigorta şirketleri ile çalışarak size en uygun
              poliçeyi, en iyi fiyatla sunuyoruz. Tüm seçenekleri karşılaştırıp, 
              ihtiyacınıza özel çözüm üretiyoruz.
            </p>
          </div>
        </div>
      </div>

      {/* Companies Grid */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company) => (
            <div
              key={company.id}
              className="group bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Logo Area */}
              <div className="h-32 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center p-6 border-b border-border relative overflow-hidden">
                {/* Company Logo */}
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src={company.logo}
                    alt={`${company.name} Logo`}
                    width={240}
                    height={80}
                    className="object-contain max-h-full"
                  />
                  {/* Fallback Placeholder */}
                  <div className="text-center" style={{ display: 'none' }}>
                    <div className="w-20 h-20 mx-auto mb-2 bg-white rounded-xl shadow-md flex items-center justify-center border border-border">
                      <span className="text-2xl font-bold text-primary">
                        {company.name.charAt(0)}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">Logo yükleniyor...</p>
                  </div>
                </div>
                {company.featured && (
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center px-2 py-1 rounded-md bg-accent text-white text-xs font-medium">
                      ⭐ Popüler
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {company.name}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {company.description}
                </p>

                {/* Products */}
                <div className="mb-4">
                  <p className="text-xs font-medium text-muted-foreground mb-2">Ürünler:</p>
                  <div className="flex flex-wrap gap-2">
                    {company.products.map((product) => (
                      <span
                        key={product}
                        className="inline-flex items-center px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Info */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 pb-4 border-b border-border">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>Kuruluş: {company.established}</span>
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => window.location.href = '/#teklif'}
                  className="block w-full text-center px-4 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                >
                  Teklif Al
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 md:p-12 bg-gradient-to-br from-primary to-secondary rounded-2xl text-center text-white">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Size En Uygun Poliçeyi Bulalım
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            23+ sigorta şirketi arasından en uygun teklifi almanız için biz çalışıyoruz. 
            Ücretsiz danışmanlık ve teklif hizmeti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = '/#teklif'}
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-xl hover:bg-accent/90 transition-colors font-medium shadow-xl"
            >
              Hızlı Teklif Al
            </button>
            <a
              href="tel:+905418778000"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-xl hover:bg-white/90 transition-colors font-medium shadow-xl"
            >
              <Phone className="w-5 h-5 mr-2" />
              Hemen Ara
            </a>
          </div>
        </div>

        {/* Info Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-card rounded-xl border border-border text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">
              Karşılaştırma Garantisi
            </h3>
            <p className="text-sm text-muted-foreground">
              Tüm şirketlerin tekliflerini karşılaştırıp en uygununu buluyoruz
            </p>
          </div>

          <div className="p-6 bg-card rounded-xl border border-border text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">
              Ücretsiz Danışmanlık
            </h3>
            <p className="text-sm text-muted-foreground">
              Uzman ekibimiz size en uygun poliçeyi seçmenizde yardımcı oluyor
            </p>
          </div>

          <div className="p-6 bg-card rounded-xl border border-border text-center">
            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">
              Hızlı Süreç
            </h3>
            <p className="text-sm text-muted-foreground">
              Poliçenizi en kısa sürede hazırlayıp size ulaştırıyoruz
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

