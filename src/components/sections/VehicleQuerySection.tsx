'use client';

import { motion } from 'framer-motion';
import { Car, FileText, ExternalLink, Search } from 'lucide-react';
import { itemVariants, containerVariants } from '@/lib/animations';

export default function VehicleQuerySection() {
  const queries = [
    {
      id: 'hgs',
      title: 'HGS İhlal Sorgulama',
      description: 'Otoyol ve köprü geçişlerinizi kontrol edin.',
      icon: Car,
      url: 'https://webihlaltakip.kgm.gov.tr/WebIhlalSorgulama/Sayfalar/Sorgulama.aspx?lang=tr',
      color: 'primary',
      features: [
        'Cezasız 15 gün ödeme süresi',
        'Tüm otoyol geçişleri',
        'Köprü geçiş borçları',
      ],
    },
    {
      id: 'mtv',
      title: 'MTV & Trafik Cezası',
      description: 'Motorlu Taşıtlar Vergisi ve trafik cezalarınızı sorgulayın, online ödeyin.',
      icon: FileText,
      url: 'https://dijital.gib.gov.tr/hizliOdemeler/MTVTPCOdeme',
      color: 'accent',
      features: [
        'MTV borç sorgulama',
        'Trafik cezası sorgulama',
        'Online ödeme imkanı',
      ],
    },
  ];

  const handleQuery = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-muted via-background to-muted/50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Search className="w-4 h-4 mr-2" />
              Hızlı Sorgulama
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Araç Borç Sorgulama
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              HGS ihlal borçlarınızı, MTV ve trafik cezalarınızı hızlıca sorgulayın.
              <br />
              Doğa Danışmanlık olarak size kolaylık sağlıyoruz.
            </p>
          </motion.div>

          {/* Query Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {queries.map((query) => (
              <motion.div
                key={query.id}
                variants={itemVariants}
                className="group relative bg-white rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                      backgroundSize: '20px 20px',
                    }}
                  />
                </div>

                <div className="relative p-8">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl ${
                      query.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                    } flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-105`}
                  >
                    <query.icon
                      className={`w-8 h-8 ${
                        query.color === 'primary' ? 'text-primary' : 'text-accent'
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                      {query.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {query.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {query.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div
                            className={`w-4 h-4 rounded-full ${
                              query.color === 'primary' ? 'bg-primary' : 'bg-accent'
                            } text-white flex items-center justify-center text-xs font-bold flex-shrink-0`}
                          >
                            ✓
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => handleQuery(query.url)}
                    className={`w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold text-white transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] ${
                      query.color === 'primary'
                        ? 'bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70'
                        : 'bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70'
                    }`}
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Hemen Sorgula</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Info Banner */}
          <motion.div
            variants={itemVariants}
            className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-xl text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <ExternalLink className="w-5 h-5 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-blue-900">Güvenli Erişim</h4>
            </div>
            <p className="text-sm text-blue-800 max-w-2xl mx-auto">
              Bu hizmetler doğrudan resmi devlet kurumları tarafından sunulmaktadır. 
              Doğa Danışmanlık olarak sadece bu sayfalara güvenli ve kolay erişim sağlamaktayız. 
              Herhangi bir veri toplamıyor veya işlem yapmıyoruz.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}