'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Phone, FileText, ArrowRight } from 'lucide-react';
import { containerVariants, itemVariants } from '@/lib/animations';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const heroSlides = [
  {
    id: 1,
    image: '/assets/img/hero/slider-1.png',
    alt: 'Sigorta Danışmanlığı',
    title: 'Doğru Poliçe, Doğru Danışmanlık',
    subtitle: 'Sigorta sektörü 2025\'te %51,2 büyüdü. Sağlık, araç, konut, iş yeri, seyahat ve hayat sigortalarında ihtiyacınıza en uygun poliçeyi bulun.',
    description: 'Bütçenize uygun, ihtiyacınıza özel sigorta çözümleri ile hayatınızı güvence altına alın.',
  },
  {
    id: 2,
    image: '/assets/img/hero/slider-2.png',
    alt: 'Güvenli Gelecek',
    title: 'Doğru Poliçe, Doğru Danışmanlık',
    subtitle: 'Sigorta sektörü aktif büyüklüğü 2025\'te 1,7 trilyon lirayı aştı. Bütçenize uygun, ihtiyacınıza özel sigorta çözümleri ile hayatınızı güvence altına alın.',
    description: 'Sağlık, araç, konut, iş yeri, seyahat ve hayat sigortalarında ihtiyacınıza en uygun poliçeyi bulun.',
  },
  {
    id: 3,
    image: '/assets/img/hero/slider-3.png',
    alt: 'Doğa Danışmanlık',
    title: 'Doğru Poliçe, Doğru Danışmanlık',
    subtitle: 'Sigorta sektöründe 2026\'da %35-40 büyüme bekleniyor. Sağlık, araç, konut, iş yeri, seyahat ve hayat sigortalarında ihtiyacınıza en uygun poliçeyi bulun.',
    description: 'Bütçenize uygun, ihtiyacınıza özel sigorta çözümleri ile hayatınızı güvence altına alın.',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-[800px] flex items-center overflow-hidden pt-20"
      aria-labelledby="hero-heading"
    >
      {/* Background Slider (z-index: -1) */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            {/* Hero Image */}
            <Image
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].alt}
              fill
              priority={currentSlide === 0}
              className="object-cover"
              onError={() => {
                const gradient = document.getElementById('hero-fallback-gradient');
                if (gradient) gradient.style.display = 'block';
              }}
            />
            {/* Fallback gradient background */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-accent"
              style={{
                display: 'none',
                backgroundImage: `linear-gradient(135deg, 
                  ${currentSlide === 0 ? '#0B3A45' : currentSlide === 1 ? '#0E7C86' : '#0B3A45'} 0%, 
                  ${currentSlide === 0 ? '#0E7C86' : currentSlide === 1 ? '#F59E0B' : '#0E7C86'} 100%)`,
              }}
              id="hero-fallback-gradient"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>

        {/* Decorative pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      {/* Content Section (z-index: 10) */}
      <div className="container mx-auto relative z-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium border border-white/30">
                🎉 Ücretsiz Danışmanlık Hizmeti
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              id="hero-heading"
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight"
            >
              {heroSlides[currentSlide].title.split(',')[0]},<br />
              <span className="text-accent">{heroSlides[currentSlide].title.split(',')[1]}</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/90 mb-4"
            >
              {heroSlides[currentSlide].subtitle}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base text-white/80 mb-8"
            >
              {heroSlides[currentSlide].description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#teklif"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-accent rounded-lg hover:bg-accent/90 transition-colors shadow-xl hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  <FileText className="mr-2 h-5 w-5" aria-hidden="true" />
                  Ücretsiz Teklif Al
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="tel:+905418778000"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-lg hover:bg-white/20 transition-colors shadow-lg hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                >
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  Danışmanı Ücretsiz Ara
                </Link>
              </motion.div>

            </motion.div>

            {/* Additional Link */}
            <motion.div variants={itemVariants} className="mt-6">
              <Link
                href="/police-tasi"
                className="inline-flex items-center text-white/80 hover:text-white transition-colors text-sm"
              >
                Poliçeni Doğa&apos;ya Taşı
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Quick Action Cards (Medical template style) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:grid grid-cols-2 gap-4"
          >
          </motion.div>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Slayt ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

