'use client';

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  Users,
  Award,
  Heart,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Shield,
  Star,
  Sparkles
} from 'lucide-react';

function Counter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { 
    stiffness: 50,
    damping: 30,
    mass: 1
  });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(end);
    }
  }, [isInView, end, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        const value = Math.round(latest);
        ref.current.textContent = value.toLocaleString('tr-TR') + suffix;
      }
    });

    return () => unsubscribe();
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function AboutPage() {

  const values = [
    {
      icon: Heart,
      title: 'Müşteri Odaklılık',
      description: 'Müşterilerimiz her şeyden önce gelir. İhtiyaçlarını anlamak ve en iyi çözümleri sunmak için çalışıyoruz.',
      color: 'bg-red-50 border-red-200'
    },
    {
      icon: Shield,
      title: 'Güvenilirlik',
      description: '30 yıllık tecrübemizle müşterilerimizin güvenini kazanmak ve sigorta sürecini kolaylaştırmak.',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      icon: Sparkles,
      title: 'Sürekli Gelişim',
      description: 'Sektördeki yenilikleri takip ediyor, müşterilerimize en güncel çözümleri sunmak için kendimizi geliştiriyoruz.',
      color: 'bg-green-50 border-green-200'
    },
    {
      icon: Star,
      title: 'Kaliteli Hizmet',
      description: 'Deneyimli ve uzman ekibimizle müşterilerimizle birebir ilgileniyoruz.',
      color: 'bg-yellow-50 border-yellow-200'
    }
  ];

  const services = [
    { 
      name: 'Araç Sigortası',
      desc: 'Kasko, zorunlu trafik ve İMM sigortaları ile aracınızı koruma altına alın.'
    },
    { 
      name: 'Konut Sigortası',
      desc: 'Yangın, hırsızlık, deprem ve doğal afetler için kapsamlı konut sigortası.'
    },
    { 
      name: 'Sağlık Sigortası',
      desc: 'Özel hastane ağı ve tamamlayıcı sağlık sigortası çözümleri.'
    },
    { 
      name: 'İşyeri Sigortası',
      desc: 'İş yeri yangın, hırsızlık ve sorumluluk sigortası paketleri.'
    },
    { 
      name: 'Nakliyat Sigortası',
      desc: 'Emtia, yük ve taşıma sigortası çözümleri.'
    },
    { 
      name: 'Seyahat Sigortası',
      desc: 'Yurt içi ve yurt dışı seyahat sigortası ile güvenli yolculuklar.'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              30 Yıllık Deneyim
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Doğa <span className="text-emerald-600">Danışmanlık</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Sigorta sektöründeki 30 yıllık tecrübemizi 2025 yılında hayata geçirdiğimiz markamızla sürdürüyoruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#hizmetler"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:bg-emerald-700 transition-colors"
              >
                Hizmetlerimiz
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="#iletisim"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-lg font-semibold flex items-center justify-center gap-2 hover:border-emerald-600 transition-colors"
              >
                İletişim
                <Phone className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
                  <Award className="w-4 h-4" />
                  30 Yıllık Hikaye
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Sigorta Sektöründe <span className="text-emerald-600">Öncü</span>
                </h2>

                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Sigorta sektöründeki <span className="text-emerald-600 font-semibold">30 yıllık tecrübemizi</span> 2025 yılında Doğa Danışmanlık markasıyla sürdürüyoruz.
                  </p>

                  <p>
                    Türkiye&apos;nin her yerinde müşterilerimize kaliteli sigorta hizmetleri sunmak ve güvenlerini kazanmak önceliğimiz.
                  </p>

                  <p>
                    Müşterilerimizin ihtiyaçlarını anlayıp <span className="text-emerald-600 font-medium">en uygun çözümleri</span> sunmak için çalışıyoruz.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <motion.div
                      className="text-3xl font-bold text-emerald-600 mb-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <Counter end={30} suffix="+" />
                    </motion.div>
                    <div className="text-sm text-gray-600">Yıllık Tecrübe</div>
                  </div>
                  <div className="text-center">
                    <motion.div
                      className="text-3xl font-bold text-emerald-600 mb-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <Counter end={1000} suffix="+" />
                    </motion.div>
                    <div className="text-sm text-gray-600">Mutlu Müşteri</div>
                  </div>
                  <div className="text-center">
                    <motion.div
                      className="text-3xl font-bold text-emerald-600 mb-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <Counter end={81} />
                    </motion.div>
                    <div className="text-sm text-gray-600">İl Hizmet</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/assets/img/about/about-hero-image.jpg"
                    alt="Doğa Danışmanlık Ekibi"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetler" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Kapsamlı Hizmetler
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Geniş Ürün <span className="text-emerald-600">Yelpazesi</span>
              </h2>

              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Farklı kategorilerde geniş ürün seçenekleriyle müşterilerimizin her ihtiyacına yanıt veriyoruz.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-emerald-600 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{service.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 text-center"
            >
              <button className="px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg flex items-center gap-2 mx-auto">
                <span>Tüm Hizmetleri İncele</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-sm text-gray-600 mt-4">
                6 farklı sigorta kategorisinde 50+ ürün seçeneği
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                Kurumsal Değerlerimiz
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-emerald-600">Değerlerimiz</span> ile Fark Yaratıyoruz
              </h2>

              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Müşterilerimizin güvende hissetmelerini sağlamak ve geleceklerini korumak önceliğimiz.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`p-8 rounded-2xl border-2 ${value.color} hover:shadow-lg transition-all`}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-xl bg-white/80 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <value.icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 text-center"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-50 rounded-full border border-emerald-200">
                <Star className="w-5 h-5 text-emerald-600" />
                <span className="text-emerald-800 font-medium">
                  Bu değerlerle 30+ yıldır hizmet veriyoruz
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Aileye Katılın
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Doğa <span className="text-emerald-600">Danışmanlık</span> Ailesine Katılın
            </h2>

            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
              Müşterilerimizin benzersiz ihtiyaçlarına odaklanıyor, size en uygun çözümleri sunmak için çalışıyoruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.a
                href="tel:+905418778000"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-4 bg-emerald-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
              >
                Ücretsiz Teklif Al
                <ArrowRight className="w-6 h-6" />
              </motion.a>

              <motion.a
                href="#iletisim"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-lg font-semibold text-lg hover:border-emerald-600 transition-colors flex items-center justify-center gap-2"
              >
                İletişime Geç
                <Phone className="w-6 h-6" />
              </motion.a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span>30+ Yıllık Deneyim</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span>1000+ Mutlu Müşteri</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span>7/24 Destek</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="iletisim" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                <Phone className="w-4 h-4" />
                İletişim Bilgilerimiz
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                <span className="text-emerald-600">7/24</span> Yanınızdayız
              </h2>

              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Profesyonel ekibimizle her zaman yanınızdayız. Sorularınız için iletişime geçin.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-emerald-600 hover:shadow-lg transition-all text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Telefon</h3>
                <a
                  href="tel:+905418778000"
                  className="text-lg font-semibold text-emerald-600 hover:text-emerald-700 transition-colors block mb-2"
                >
                  +90 541 877 8000
                </a>
                <p className="text-sm text-gray-600">Hızlı danışma için arayın</p>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-emerald-600 hover:shadow-lg transition-all text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">E-posta</h3>
                <a
                  href="mailto:info@dogadanismanlik.com.tr"
                  className="text-lg font-semibold text-emerald-600 hover:text-emerald-700 transition-colors block mb-2"
                >
                  info@dogadanismanlik.com.tr
                </a>
                <p className="text-sm text-gray-600">Detaylı bilgi için yazın</p>
              </motion.div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-emerald-600 hover:shadow-lg transition-all text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Konum</h3>
                <div className="text-lg font-semibold text-emerald-600 mb-2">
                  Türkiye Geneli
                </div>
                <p className="text-sm text-gray-600">81 ilde hizmet veriyoruz</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 text-center"
            >
              <a
                href="tel:+905418778000"
                className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg"
              >
                Hemen Ara
                <Phone className="w-5 h-5" />
              </a>
              <p className="text-sm text-gray-600 mt-4">
                Veya yukarıdaki iletişim kanallarından herhangi birini kullanın
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}