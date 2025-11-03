import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const footerLinks = {
  hizmetler: [
    { name: 'Modüler Sağlık & Tamamlayıcı Sağlık', href: '/hizmetler#saglik' },
    { name: 'Araç (Kasko & Trafik)', href: '/hizmetler#arac' },
    { name: 'Konut Sigortası', href: '/hizmetler#konut' },
    { name: 'İş Yeri Sigortası', href: '/hizmetler#isyeri' },
    { name: 'Seyahat Sigortası', href: '/hizmetler#seyahat' },
    { name: 'Hayat Sigortası', href: '/hizmetler#hayat' },
  ],
  kurumsal: [
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'Anlaşmalı Şirketler', href: '/anlasmali-sirketler' },
    { name: 'Blog', href: '/blog' },
    { name: 'İletişim', href: '/iletisim' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground" role="contentinfo">
      <div className="container mx-auto py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/img/logo/logo.svg"
                alt="Doğa Danışmanlık"
                width={150}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
            <p className="text-sm text-secondary-foreground/80">
              Doğru poliçe, doğru danışmanlık. Sigorta ihtiyaçlarınız için
              güvenilir çözüm ortağınız.
            </p>
          </div>

          {/* Hizmetler */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Hizmetlerimiz</h4>
            <ul className="space-y-2" role="list">
              {footerLinks.hizmetler.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kurumsal */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Kurumsal</h4>
            <ul className="space-y-2" role="list">
              {footerLinks.kurumsal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="font-heading font-semibold mb-4">İletişim</h4>
            <ul className="space-y-3" role="list">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-sm">
                  <a
                    href="tel:+905418778000"
                    className="text-secondary-foreground/80 hover:text-accent transition-colors"
                  >
                    +90 541 877 8000
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-sm">
                  <a
                    href="mailto:info@dogadanismanlik.com.tr"
                    className="text-secondary-foreground/80 hover:text-accent transition-colors"
                  >
                    info@dogadanismanlik.com.tr
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-sm text-secondary-foreground/80">
                  <p>Pzt-Cum: 09:00 - 20:00</p>
                  <p>Cmt-Paz: 10:00 - 18:00</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-sm text-secondary-foreground/80">
                  Kozyatağı Kaya Sultan Sk. Zarbun Sitesi İş Merkezi D Blok No:3
                  İstanbul/Kadıköy
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/60 text-center md:text-left">
              © {new Date().getFullYear()} Doğa Danışmanlık. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-6">
              <Link
                href="/gizlilik"
                className="text-sm text-secondary-foreground/60 hover:text-accent transition-colors"
              >
                Gizlilik Politikası
              </Link>
              <Link
                href="/kvkk"
                className="text-sm text-secondary-foreground/60 hover:text-accent transition-colors"
              >
                KVKK
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

