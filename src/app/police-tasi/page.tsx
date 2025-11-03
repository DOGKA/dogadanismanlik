import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, Clock, CheckCircle, ArrowRight, Shield, DollarSign, Headphones, Users, Car, Heart, Home, Building, Plane, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Poliçe Taşıma | Doğa Danışmanlık',
  description: 'Sigorta poliçenizi Doğa Danışmanlık&apos;a taşıyarak daha geniş kapsam ve avantajlı fiyatlarla güvence altına alın. 23+ anlaşmalı şirket ile ücretsiz analiz.',
  keywords: [
    'poliçe taşıma',
    'sigorta poliçesi değiştirme',
    'poliçe transferi',
    'sigorta şirketi değiştirme',
    'poliçe yenileme',
    'araç sigortası taşıma',
    'sağlık sigortası taşıma',
    'konut sigortası taşıma'
  ],
  openGraph: {
    title: 'Poliçe Taşıma | Doğa Danışmanlık',
    description: 'Sigorta poliçenizi Doğa Danışmanlık&apos;a taşıyarak daha geniş kapsam ve avantajlı fiyatlarla güvence altına alın.',
    url: 'https://dogadanismanlik.com.tr/police-tasi',
  },
};

const insuranceTypes = [
  {
    title: 'Araç Sigortası',
    subtitle: 'Kasko & Trafik',
    description: 'Kasko ve zorunlu trafik sigortası poliçelerinizi güvenle taşıyın.',
    icon: Car,
  },
  {
    title: 'Sağlık Sigortası',
    subtitle: 'Tamamlayıcı Sağlık',
    description: 'Sağlık ve tamamlayıcı sağlık sigortası poliçelerinizi analiz edelim.',
    icon: Heart,
  },
  {
    title: 'Konut Sigortası',
    subtitle: 'Ev Sigortası',
    description: 'Konut sigortası poliçenizi daha avantajlı koşullarla yenileyin.',
    icon: Home,
  },
  {
    title: 'İş Yeri Sigortası',
    subtitle: 'Kurumsal Sigorta',
    description: 'İş yeri ve kurumsal sigorta poliçelerinizi optimize edelim.',
    icon: Building,
  },
  {
    title: 'Seyahat Sigortası',
    subtitle: 'Yurt Dışı Güvence',
    description: 'Seyahat sigortası poliçenizi daha kapsamlı teminatla taşıyın.',
    icon: Plane,
  },
  {
    title: 'Hayat Sigortası',
    subtitle: 'Yaşam Güvencesi',
    description: 'Hayat sigortası poliçenizi geleceğiniz için yenileyin.',
    icon: User,
  },
];

const processSteps = [
  {
    step: '1',
    title: 'Mevcut Poliçenizi Paylaşın',
    description: 'Poliçe detaylarınızı (sigorta türü, şirket, bitiş tarihi) bize iletin.',
  },
  {
    step: '2',
    title: 'Uzman Analizi',
    description: 'Danışmanlarımız mevcut poliçenizin teminatlarını, muafiyetlerini ve prim tutarını detaylı şekilde inceler.',
  },
  {
    step: '3',
    title: 'Karşılaştırmalı Teklif',
    description: '23+ anlaşmalı sigorta şirketi arasından sizin için en uygun alternatifleri listeliyoruz.',
  },
  {
    step: '4',
    title: 'Hızlı Geçiş',
    description: 'Onayınızla birlikte poliçeniz Doğa Danışmanlık\'a güvenle taşınır. Dilerseniz aynı gün içinde yeni poliçeniz aktif hale gelir.',
  },
];

const benefits = [
  {
    icon: Shield,
    title: 'Daha Fazla Güvence',
    description: 'Mevcut poliçenize göre kapsamı genişletilmiş teminatlar.',
  },
  {
    icon: DollarSign,
    title: 'Daha Az Maliyet',
    description: 'Piyasadaki en avantajlı primlerle bütçenizi koruyun.',
  },
  {
    icon: Headphones,
    title: '7/24 Destek',
    description: 'Hasar anında tek numarayla ulaşabileceğiniz uzman ekip.',
  },
  {
    icon: Users,
    title: 'Profesyonel Danışmanlık',
    description: 'Her poliçe değişikliğinde size özel yönlendirme.',
  },
];

export default function PoliceTasiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-teal-600/10"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Poliçeni{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Doğa Danışmanlık&apos;a
              </span>{' '}
              Taşı
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Doğru Poliçe, Doğru Danışmanlık
            </p>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Sigorta poliçenizi başka bir sigorta şirketinden Doğa Danışmanlık&apos;a taşıyarak hem kapsamınızı genişletin hem de bütçenize en uygun fiyatlarla güvence altına alın. 23&apos;ten fazla anlaşmalı sigorta şirketiyle çalışıyor, sizin için en avantajlı teminatları tek bir noktada topluyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+905418778000"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Ücretsiz Analiz Al
              </Link>
              <Link
                href="mailto:info@dogadanismanlik.com.tr?subject=Poliçe Taşıma Talebi&body=Merhaba, poliçemi Doğa Danışmanlık'a taşımak istiyorum. Detaylı bilgi için benimle iletişime geçebilir misiniz?"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-xl hover:bg-emerald-600 hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                E-posta Gönder
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Neden Poliçeni Doğa Danışmanlık&apos;a Taşımalısın?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Size özel avantajlar ve profesyonel hizmet anlayışımızla farkı yaşayın.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Poliçe Taşıma Süreci Nasıl İşler?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              4 basit adımda poliçenizi güvenle taşıyın ve avantajlı koşullardan yararlanın.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-emerald-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Types Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hangi Poliçeler Taşınabilir?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tüm sigorta türlerinde poliçe taşıma işlemlerini güvenli ve hızlı şekilde gerçekleştiriyoruz.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insuranceTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-emerald-600 font-semibold mb-4">{type.subtitle}</p>
                <p className="text-gray-600 leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ücretsiz Poliçe Analizi Talep Et
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Poliçenizi bize gönderin, farkı birlikte görelim.
            </p>
            <p className="text-lg mb-12 opacity-80">
              Hiçbir ücret ödemeden poliçe kıyaslama raporu alın.
            </p>
            
            {/* Contact Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <Phone className="w-8 h-8 mx-auto mb-4" />
                <p className="font-semibold text-lg mb-2">Telefon</p>
                <Link 
                  href="tel:+905418778000"
                  className="text-white hover:text-emerald-200 transition-colors font-medium"
                >
                  +90 541 877 8000
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <Mail className="w-8 h-8 mx-auto mb-4" />
                <p className="font-semibold text-lg mb-2">E-posta</p>
                <Link 
                  href="mailto:info@dogadanismanlik.com.tr"
                  className="text-white hover:text-emerald-200 transition-colors font-medium"
                >
                  info@dogadanismanlik.com.tr
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <Clock className="w-8 h-8 mx-auto mb-4" />
                <p className="font-semibold text-lg mb-2">Çalışma Saatleri</p>
                <p className="text-white font-medium">Pzt–Cum: 09:00–20:00</p>
                <p className="text-white font-medium">Cmt–Paz: 10:00–18:00</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+905418778000"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-bold text-lg rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-6 h-6 mr-3" />
                Hemen Ara
              </Link>
              <Link
                href="mailto:info@dogadanismanlik.com.tr?subject=Poliçe Taşıma Talebi&body=Merhaba, poliçemi Doğa Danışmanlık'a taşımak istiyorum. Detaylı bilgi için benimle iletişime geçebilir misiniz?"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-emerald-600 transition-all duration-300"
              >
                <Mail className="w-6 h-6 mr-3" />
                E-posta Gönder
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Doğa Danışmanlık ile Kazanın
            </h2>
            <p className="text-xl text-gray-700 mb-8 italic">
              &quot;Doğru poliçe, doğru danışmanlık.&quot;
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Hayatınızı güvence altına almak için bir telefon kadar yakınız.
            </p>
            <Link
              href="tel:+905418778000"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5 mr-2" />
              Hemen Ara
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
