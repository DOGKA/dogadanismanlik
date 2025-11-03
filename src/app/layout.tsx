import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  metadataBase: new URL('https://dogadanismanlik.com.tr'),
  manifest: '/site.webmanifest?v=3',
  icons: {
    icon: [
      { url: '/brand-favicon.ico?v=4' },
      { url: '/favicon-16x16.png?v=3', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png?v=3', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png?v=3', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/brand-favicon.ico?v=4'],
  },
  title: {
    default: 'Doğa Danışmanlık — Doğru Poliçe, Doğru Danışmanlık',
    template: '%s | Doğa Danışmanlık',
  },
  description:
    'Sağlık, araç, konut, iş yeri, seyahat ve hayat sigortalarında ihtiyacınıza en uygun poliçe. Ücretsiz teklif alın.',
  keywords: [
    'sigorta',
    'sağlık sigortası',
    'araç sigortası',
    'kasko',
    'trafik sigortası',
    'konut sigortası',
    'iş yeri sigortası',
    'seyahat sigortası',
    'hayat sigortası',
    'tamamlayıcı sağlık sigortası',
  ],
  authors: [{ name: 'Doğa Danışmanlık' }],
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://dogadanismanlik.com.tr',
    siteName: 'Doğa Danışmanlık',
    title: 'Doğa Danışmanlık — Doğru Poliçe, Doğru Danışmanlık',
    description:
      'Sağlık, araç, konut, iş yeri, seyahat ve hayat sigortalarında ihtiyacınıza en uygun poliçe.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Doğa Danışmanlık',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Doğa Danışmanlık — Doğru Poliçe, Doğru Danışmanlık',
    description:
      'Sağlık, araç, konut, iş yeri, seyahat ve hayat sigortalarında ihtiyacınıza en uygun poliçe.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Ana içeriğe geç
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}
