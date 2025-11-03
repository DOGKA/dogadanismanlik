import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ConsultForm from '@/components/sections/ConsultForm';

export const metadata: Metadata = {
  title: 'İletişim',
  description:
    'Doğa Danışmanlık ile iletişime geçin. Sigorta danışmanlığı için bize ulaşın.',
};

export default function ContactPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            İletişim
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sigorta danışmanlığı için bize ulaşın, size en uygun poliçeyi birlikte
            bulalım
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">
                İletişim Bilgileri
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                    <a
                      href="tel:+905418778000"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +90 541 877 8000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">E-posta</h3>
                    <a
                      href="mailto:info@dogadanismanlik.com.tr"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@dogadanismanlik.com.tr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-secondary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Adres</h3>
                    <p className="text-muted-foreground">
                      Kozyatağı Kaya Sultan Sk. Zarbun Sitesi İş Merkezi D Blok
                      No:3 İstanbul/Kadıköy
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Çalışma Saatleri
                    </h3>
                    <p className="text-muted-foreground">Pzt-Cum: 09:00 - 20:00</p>
                    <p className="text-muted-foreground">Cmt-Paz: 10:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-accent/5 rounded-xl border border-accent/20">
              <h3 className="font-heading font-semibold text-foreground mb-2">
                Acil Durumlarda
              </h3>
              <p className="text-muted-foreground mb-4">
                Hasar ve acil durumlar için 7/24 destek hattımızı arayabilirsiniz.
              </p>
              <a
                href="tel:+905418778000"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-accent-foreground bg-accent rounded-lg hover:bg-accent/90 transition-colors"
              >
                <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                Hemen Ara
              </a>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
              <MapPin className="h-32 w-32 text-primary/30" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      <ConsultForm />
    </div>
  );
}

