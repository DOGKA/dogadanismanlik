'use client';

import { motion } from 'framer-motion';
import {
  Heart,
  Car,
  Home,
  Building2,
  Plane,
  Shield,
} from 'lucide-react';
import Link from 'next/link';
import { containerVariants, itemVariants } from '@/lib/animations';

const services = [
  {
    icon: Heart,
    title: 'Modüler Sağlık & Tamamlayıcı Sağlık',
    description: 'Beklenmedik sağlık giderlerinizi güvence altına alın.',
    href: '/hizmetler#saglik',
    color: 'text-red-500',
    bgColor: 'bg-red-50',
  },
  {
    icon: Car,
    title: 'Araç (Kasko & Trafik)',
    description: 'Hasar masraflarınızı sigortadan karşılayın.',
    href: '/hizmetler#arac',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Home,
    title: 'Konut Sigortası',
    description: 'Evinizi yangın, hırsızlık, deprem risklerine karşı koruyun.',
    href: '/hizmetler#konut',
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    icon: Building2,
    title: 'İş Yeri Sigortası',
    description: 'İş sürekliliğinizi koruyan kapsamlı teminatlar.',
    href: '/hizmetler#isyeri',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Plane,
    title: 'Seyahat (Yurt içi / Yurt dışı)',
    description: 'Sağlık ve kayıp risklerine karşı güvence.',
    href: '/hizmetler#seyahat',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
  },
  {
    icon: Shield,
    title: 'Hayat Sigortası',
    description: 'Sevdiklerinizi maddi risklere karşı koruyun.',
    href: '/hizmetler#hayat',
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-50',
  },
];

export default function ServicesGrid() {
  return (
    <section
      className="py-16 md:py-24 bg-background"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block text-sm font-medium text-primary mb-2"
          >
            HİZMETLERİMİZ
          </motion.span>
          <motion.h2
            id="services-heading"
            variants={itemVariants}
            className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4"
          >
            Kapsamlı Sigorta Çözümleri
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            İhtiyacınıza özel, bütçenize uygun sigorta ürünleri ile hayatınızı
            güvence altına alın.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={itemVariants} custom={index}>
              <Link href={service.href}>
                <motion.article
                  initial="rest"
                  whileHover="hover"
                  className="group relative h-full p-6 md:p-8 bg-card rounded-2xl border border-border shadow-sm hover:shadow-xl transition-shadow duration-300 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
                >
                  {/* Icon */}
                  <motion.div
                    variants={{
                      rest: { y: 0 },
                      hover: { y: -4 },
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    className={`inline-flex items-center justify-center w-14 h-14 ${service.bgColor} rounded-xl mb-4`}
                  >
                    <service.icon
                      className={`h-7 w-7 ${service.color}`}
                      aria-hidden="true"
                    />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Link Arrow */}
                  <motion.div
                    variants={{
                      rest: { x: 0, opacity: 0.7 },
                      hover: { x: 4, opacity: 1 },
                    }}
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    Detaylı Bilgi
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.div>

                  {/* Hover Gradient Overlay */}
                  <motion.div
                    variants={{
                      rest: { opacity: 0 },
                      hover: { opacity: 0.05 },
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl pointer-events-none"
                    aria-hidden="true"
                  />
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

