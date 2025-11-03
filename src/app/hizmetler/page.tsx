'use client';

import { Heart, Car, Home, Building2, Plane, Shield } from 'lucide-react';

const services = [
  {
    id: 'saglik',
    icon: Heart,
    title: 'Modüler Sağlık & Tamamlayıcı Sağlık Sigortası',
    description:
      'Özel sağlık güvencesi ve tamamlayıcı sağlık sigortası ile sağlık harcamalarınızı güvence altına alın.',
    features: [
      'Geniş hastane ağı',
      'Check-up teminatı',
      'Doğum teminatı',
      'Diş tedavi teminatı',
      'Online asistans hizmetleri',
    ],
  },
  {
    id: 'arac',
    icon: Car,
    title: 'Araç Sigortası (Kasko & Trafik)',
    description:
      'Aracınızı tüm risklere karşı koruyun. Kasko ve zorunlu trafik sigortası seçenekleri.',
    features: [
      'Kasko sigortası',
      'Zorunlu trafik sigortası',
      'Mini onarım hizmeti',
      'İkame araç teminatı',
      '7/24 yol yardım',
    ],
  },
  {
    id: 'konut',
    icon: Home,
    title: 'Konut Sigortası',
    description:
      'Evinizi yangın, hırsızlık, deprem ve doğal afetlere karşı koruyun.',
    features: [
      'Yangın teminatı',
      'Hırsızlık güvencesi',
      'Deprem sigortası',
      'Su baskını koruması',
      'Cam kırılması teminatı',
    ],
  },
  {
    id: 'isyeri',
    icon: Building2,
    title: 'İş Yeri Sigortası',
    description:
      'İşletmenizi maddi kayıplara ve iş durmasına karşı güvence altına alın.',
    features: [
      'İşyeri yangın sigortası',
      'İş durması teminatı',
      'Makine kırılması sigortası',
      'Elektronik cihaz sigortası',
      'Sorumluluk sigortası',
    ],
  },
  {
    id: 'seyahat',
    icon: Plane,
    title: 'Seyahat Sigortası',
    description:
      'Yurt içi ve yurt dışı seyahatlerinizde sağlık ve bagaj güvencesi.',
    features: [
      'Schengen vizesi uygun',
      'Acil sağlık masrafları',
      'Bagaj kaybı teminatı',
      'Seyahat iptali güvencesi',
      '7/24 asistans hizmeti',
    ],
  },
  {
    id: 'hayat',
    icon: Shield,
    title: 'Hayat Sigortası',
    description:
      'Sevdiklerinizi gelecekte maddi zorluklara karşı koruyun.',
    features: [
      'Vefat teminatı',
      'Maluliyet güvencesi',
      'Kritik hastalık koruması',
      'Kaza sonucu ölüm teminatı',
      'Biriktirme seçenekleri',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Hizmetlerimiz
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            İhtiyacınıza özel, kapsamlı sigorta çözümleri
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <section
              key={service.id}
              id={service.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                  <service.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className="h-6 w-6 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                  <service.icon className="h-32 w-32 text-primary/30" aria-hidden="true" />
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-24 text-center">
          <button
            onClick={() => window.location.href = '/#teklif'}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-primary-foreground bg-primary rounded-xl hover:bg-primary/90 transition-colors shadow-lg"
          >
            Ücretsiz Teklif Al
          </button>
        </div>
      </div>
    </div>
  );
}

