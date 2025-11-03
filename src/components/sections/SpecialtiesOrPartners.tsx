'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { slideFromLeft, slideFromRight } from '@/lib/animations';

const specialties = [
  'Sağlık Sigortası',
  'Tamamlayıcı Sağlık Sigortası',
  'Araç Sigortası (Kasko & Trafik)',
  'Konut Sigortası',
  'İş Yeri Sigortası',
  'Seyahat Sigortası (Yurt İçi/Dışı)',
  'Hayat Sigortası',
  'Kurumsal Çözümler',
  'Acil Durum & Hasar Yönetimi',
];

const insuranceCompanies = [
  'Allianz Sigorta',
  'Aksigorta',
  'Anadolu Sigorta',
  'Ankara Sigorta',
  'AXA Sigorta',
  'Bereket Sigorta',
  'Corpus Sigorta',
  'Doğa Sigorta',
  'EMAA Sigorta',
  'Generali Sigorta',
  'GIG Sigorta',
  'Groupama Sigorta',
  'HDI Sigorta',
  'Mapfre Sigorta',
  'Neova Sigorta',
  'Orient Sigorta',
  'Quick Sigorta',
  'Ray Sigorta',
  'Sompo Sigorta',
  'Türk Nippon Sigorta',
  'Türkiye Sigorta',
  'Unico Sigorta',
  'Zurich Sigorta',
];

export default function SpecialtiesOrPartners() {
  return (
    <section
      className="py-16 md:py-24 bg-muted/50"
      aria-labelledby="specialties-heading"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column - Specialties */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6"
          >
            <motion.div variants={slideFromLeft}>
              <span className="inline-block text-sm font-medium text-primary mb-2">
                UZMANLIK ALANLARIMIZ
              </span>
              <h2
                id="specialties-heading"
                className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4"
              >
                Geniş Ürün Yelpazesi
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Bireysel ve kurumsal tüm sigorta ihtiyaçlarınız için profesyonel
                danışmanlık hizmeti sunuyoruz.
              </p>
            </motion.div>

            <motion.ul className="space-y-3" role="list">
              {specialties.map((specialty, index) => (
                <motion.li
                  key={specialty}
                  custom={index}
                  variants={slideFromLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-card transition-colors"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check
                      className="h-4 w-4 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="text-foreground font-medium">{specialty}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right Column - Insurance Companies */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6"
          >
            <motion.div variants={slideFromRight}>
              <span className="inline-block text-sm font-medium text-accent mb-2">
                ANLAŞMALI SİGORTA ŞİRKETLERİ
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Güvenilir İş Ortaklarımız
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Türkiye&apos;nin önde gelen sigorta şirketleri ile çalışarak size en
                uygun teklifi sunuyoruz.
              </p>
            </motion.div>

            <motion.div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {insuranceCompanies.map((company, index) => (
                <motion.div
                  key={company}
                  custom={index}
                  variants={slideFromRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  whileHover={{ scale: 1.05 }}
                  className="group relative p-4 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {company}
                  </div>
                  {/* Small dot indicator */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-primary/20 rounded-full group-hover:bg-primary transition-colors" />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20"
            >
              <p className="text-sm text-muted-foreground text-center">
                <span className="font-semibold text-primary">23+</span> sigorta
                şirketi arasından size en uygun poliçeyi buluyoruz
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

