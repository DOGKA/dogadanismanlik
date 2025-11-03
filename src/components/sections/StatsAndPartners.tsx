'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const stats = [
  {
    number: '10K+',
    label: 'Mutlu Müşteri',
  },
  {
    number: '23',
    label: 'Anlaşmalı Sigorta Şirketi',
  },
  {
    number: '24/7',
    label: 'Kesintisiz Destek',
  },
];

const partners = [
  {
    name: 'Allianz Sigorta',
    logo: '/assets/img/partners/allianz.png',
  },
  {
    name: 'Aksigorta',
    logo: '/assets/img/partners/aksigorta.png',
  },
  {
    name: 'Anadolu Sigorta',
    logo: '/assets/img/partners/anadolu.png',
  },
  {
    name: 'Ankara Sigorta',
    logo: '/assets/img/partners/ankara.png',
  },
  {
    name: 'AXA Sigorta',
    logo: '/assets/img/partners/axa.png',
  },
  {
    name: 'Bereket Sigorta',
    logo: '/assets/img/partners/bereket-sigorta.png',
  },
  {
    name: 'Corpus Sigorta',
    logo: '/assets/img/partners/corpus-sigorta.png',
  },
  {
    name: 'Doğa Sigorta',
    logo: '/assets/img/partners/doga-sigorta.png',
  },
  {
    name: 'EMAA Sigorta',
    logo: '/assets/img/partners/emaa-sigorta.png',
  },
  {
    name: 'Generali Sigorta',
    logo: '/assets/img/partners/generali.png',
  },
  {
    name: 'GIG Sigorta',
    logo: '/assets/img/partners/gig-sigorta.png',
  },
  {
    name: 'Groupama Sigorta',
    logo: '/assets/img/partners/groupama.png',
  },
  {
    name: 'HDI Sigorta',
    logo: '/assets/img/partners/hdi.png',
  },
  {
    name: 'Mapfre Sigorta',
    logo: '/assets/img/partners/mapfre.png',
  },
  {
    name: 'Neova Sigorta',
    logo: '/assets/img/partners/neova-sigorta.png',
  },
  {
    name: 'Orient Sigorta',
    logo: '/assets/img/partners/orient-sigorta.png',
  },
  {
    name: 'Quick Sigorta',
    logo: '/assets/img/partners/quick-sigorta.png',
  },
  {
    name: 'Ray Sigorta',
    logo: '/assets/img/partners/ray-sigorta.png',
  },
  {
    name: 'Sompo Sigorta',
    logo: '/assets/img/partners/sompo.png',
  },
  {
    name: 'Türk Nippon Sigorta',
    logo: '/assets/img/partners/turk-nippon-sigorta.png',
  },
  {
    name: 'Türkiye Sigorta',
    logo: '/assets/img/partners/turkiye.png',
  },
  {
    name: 'Unico Sigorta',
    logo: '/assets/img/partners/unico-sigorta.png',
  },
  {
    name: 'Zurich Sigorta',
    logo: '/assets/img/partners/zurich-sigorta.png',
  },
];

export default function StatsAndPartners() {
  const marqueePartners = [...partners, ...partners];

  return (
    <section className="py-12 bg-background border-t border-b border-border">
      <div className="container mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Partner Logos Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="overflow-hidden"
        >
          <p className="text-center text-sm text-muted-foreground mb-6">
            Anlaşmalı Olduğumuz Sigorta Şirketleri
          </p>
          <div className="relative">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Slider container */}
            <div className="flex gap-8 animate-scroll">
              {marqueePartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 h-24 w-40 bg-white rounded-lg border border-border flex flex-col items-center justify-center px-4 py-3 hover:border-primary/50 transition-colors"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={100}
                    height={40}
                    className="h-10 w-auto object-contain"
                  />
                  <span className="mt-2 text-xs font-medium text-muted-foreground text-center whitespace-nowrap">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: fit-content;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

