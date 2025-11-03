import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Sigorta hakkında güncel bilgiler, ipuçları ve haberler.',
};

const blogPosts = [
  {
    id: 1,
    title: 'Sağlık Sigortası Seçerken Nelere Dikkat Edilmeli?',
    excerpt:
      'Sağlık sigortası seçimi yaparken dikkat etmeniz gereken önemli kriterler ve ipuçları. Doğru poliçe seçimi için rehberimiz.',
    date: '2024-03-15',
    category: 'Sağlık',
    slug: 'saglik-sigortasi-secerken-dikkat-edilmesi-gerekenler',
    readTime: '5 dk',
  },
  {
    id: 2,
    title: 'Kasko ve Trafik Sigortası Arasındaki Farklar',
    excerpt:
      'Araç sahipleri için kasko ve zorunlu trafik sigortası arasındaki temel farklar neler? Hangi durumda hangisi gerekli?',
    date: '2024-03-10',
    category: 'Araç',
    slug: 'kasko-ve-trafik-sigortasi-farklari',
    readTime: '4 dk',
  },
  {
    id: 3,
    title: 'Yurt Dışı Seyahat Sigortası Neden Önemli?',
    excerpt:
      'Yurt dışı seyahatlerinizde karşılaşabileceğiniz risklere karşı neden sigortalı olmalısınız? Schengen vizesi için gereklilikler.',
    date: '2024-03-05',
    category: 'Seyahat',
    slug: 'yurt-disi-seyahat-sigortasi-neden-onemli',
    readTime: '6 dk',
  },
  {
    id: 4,
    title: 'Konut Sigortası: Neleri Kapsar?',
    excerpt:
      'Ev sahipleri için konut sigortası zorunlu mu? Hangi risklere karşı koruma sağlar? Detaylı bilgi.',
    date: '2024-02-28',
    category: 'Konut',
    slug: 'konut-sigortasi-neleri-kapsar',
    readTime: '5 dk',
  },
  {
    id: 5,
    title: 'İş Yeri Sigortası ile İşletmenizi Koruyun',
    excerpt:
      'İş yeri sigortası nedir, neden önemlidir? İşletmeler için hangi teminatlar gereklidir?',
    date: '2024-02-20',
    category: 'İş Yeri',
    slug: 'is-yeri-sigortasi-ile-isletmenizi-koruyun',
    readTime: '7 dk',
  },
  {
    id: 6,
    title: 'Hayat Sigortası ile Geleceğinizi Planlayın',
    excerpt:
      'Hayat sigortası nasıl çalışır? Sevdiklerinizi maddi zorluklara karşı korumak için neler yapabilirsiniz?',
    date: '2024-02-15',
    category: 'Hayat',
    slug: 'hayat-sigortasi-ile-geleceginizi-planlayin',
    readTime: '6 dk',
  },
];

export default function BlogPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sigorta dünyası hakkında güncel bilgiler, faydalı ipuçları ve uzman
            görüşleri
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-muted-foreground text-sm">
                    {post.category}
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" aria-hidden="true" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('tr-TR', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    </div>
                    <span>•</span>
                    <span>{post.readTime} okuma</span>
                  </div>

                  <h2 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-primary font-medium text-sm">
                    Devamını Oku
                    <ArrowRight
                      className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

