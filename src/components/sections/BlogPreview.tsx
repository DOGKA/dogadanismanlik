'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { containerVariants, itemVariants } from '@/lib/animations';

const blogPosts = [
  {
    id: 1,
    title: 'Sağlık Sigortası Seçerken Nelere Dikkat Edilmeli?',
    excerpt:
      'Sağlık sigortası seçimi yaparken dikkat etmeniz gereken önemli kriterler ve ipuçları.',
    date: '2024-03-15',
    category: 'Sağlık',
    slug: 'saglik-sigortasi-secerken-dikkat-edilmesi-gerekenler',
    image: '/blog/health-insurance.jpg',
  },
  {
    id: 2,
    title: 'Kasko ve Trafik Sigortası Arasındaki Farklar',
    excerpt:
      'Araç sahipleri için kasko ve zorunlu trafik sigortası arasındaki temel farklar neler?',
    date: '2024-03-10',
    category: 'Araç',
    slug: 'kasko-ve-trafik-sigortasi-farklari',
    image: '/blog/car-insurance.jpg',
  },
  {
    id: 3,
    title: 'Yurt Dışı Seyahat Sigortası Neden Önemli?',
    excerpt:
      'Yurt dışı seyahatlerinizde karşılaşabileceğiniz risklere karşı neden sigortalı olmalısınız?',
    date: '2024-03-05',
    category: 'Seyahat',
    slug: 'yurt-disi-seyahat-sigortasi-neden-onemli',
    image: '/blog/travel-insurance.jpg',
  },
];

export default function BlogPreview() {
  return (
    <section
      className="py-16 md:py-24 bg-background"
      aria-labelledby="blog-heading"
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
            className="inline-block text-sm font-medium text-accent mb-2"
          >
            BLOG
          </motion.span>
          <motion.h2
            id="blog-heading"
            variants={itemVariants}
            className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4"
          >
            Son Yazılar
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Sigorta dünyası hakkında güncel bilgiler ve faydalı ipuçları
          </motion.p>
        </motion.div>

        {/* Blog Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              custom={index}
              whileHover={{ y: -8 }}
              className="group bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <Link href={`/blog/${post.slug}`}>
                {/* Image Skeleton */}
                <div className="relative h-48 bg-muted overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-muted-foreground text-sm">
                      {post.category}
                    </div>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('tr-TR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                    Devamını Oku
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                      <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Tüm Yazılar
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

