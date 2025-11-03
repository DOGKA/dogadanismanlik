import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';

// This would typically come from a CMS or database
const blogPosts: Record<string, { title: string; date: string; content: string; category: string }> = {
  'saglik-sigortasi-secerken-dikkat-edilmesi-gerekenler': {
    title: 'Sağlık Sigortası Seçerken Nelere Dikkat Edilmeli?',
    date: '2024-03-15',
    category: 'Sağlık',
    content: `
<h2>Sağlık Sigortası Seçimi: Kapsamlı Rehber</h2>
<p>Sağlık sigortası, beklenmedik sağlık giderleri karşısında sizleri ve ailenizi korumak için hayati öneme sahiptir. Doğru poliçeyi seçmek, uzun vadede hem sağlık hem de mali açıdan büyük fark yaratabilir.</p>

<h3>1. Teminat Kapsamı</h3>
<p>Sağlık sigortanızın neleri kapsadığını iyi anlamak, poliçe seçimindeki en önemli adımdır:</p>
<ul>
<li><strong>Hastane Ağı:</strong> Anlaşmalı hastanelerin sayısı ve kalitesi. Geniş hastane ağına sahip poliçeler, daha fazla seçenek sunar.</li>
<li><strong>Ameliyat Teminatları:</strong> Hangi ameliyatların tam karşılandığı, hangilerinde katkı payı olduğunu kontrol edin.</li>
<li><strong>Check-up:</strong> Yıllık sağlık kontrolleri ve tarama testlerinin kapsam dahilinde olup olmadığını öğrenin.</li>
<li><strong>Diş Tedavisi:</strong> Diş tedavi teminatının bulunup bulunmadığı ve kapsam detayları.</li>
<li><strong>Doğum Teminatı:</strong> Aile planlaması yapıyorsanız, doğum teminatlarını mutlaka kontrol edin.</li>
</ul>

<h3>2. Yıllık Limit ve Kademeler</h3>
<p>Poliçenizin yıllık limiti, hastalık durumunda karşılanacak maksimum tutardır. İhtiyaçlarınıza göre:</p>
<ul>
<li><strong>Temel Paket:</strong> 50.000 - 100.000 TL (Genç ve sağlıklı bireyler için)</li>
<li><strong>Orta Paket:</strong> 100.000 - 200.000 TL (Aile için önerilir)</li>
<li><strong>Premium Paket:</strong> 200.000 TL ve üzeri (Kapsamlı koruma isteyenler için)</li>
</ul>

<h3>3. Katkı Payı Oranları</h3>
<p>Katkı payı, tedavi masrafının sizin tarafınızdan karşılanan kısmıdır. Genellikle %10-20 arasında değişir. Düşük katkı payı daha yüksek prim anlamına gelir.</p>

<h3>4. Bekleme Süreleri</h3>
<p>Poliçenizde bazı hastalıklar için bekleme süresi olabilir. Bu süreleri öğrenin ve planlarınızı buna göre yapın.</p>

<h3>5. Fiyat ve Ödeme Seçenekleri</h3>
<p>En ucuz poliçe her zaman en iyi seçenek olmayabilir. Teminat kapsamı ve hizmet kalitesini de göz önünde bulundurarak değerlendirin. Aylık, 3 aylık veya yıllık ödeme seçeneklerini karşılaştırın.</p>

<h3>6. Yenileme Koşulları</h3>
<p>Poliçenizin yenileme koşullarını öğrenin. Fiyat artışları, hastalık geçmişinize göre değişiklik gösterebilir.</p>

<h2>Sonuç</h2>
<p>Sağlık sigortası seçimi, dikkatli bir araştırma ve planlama gerektirir. Doğa Danışmanlık olarak, size en uygun poliçeyi bulmanızda yardımcı olmak için buradayız. <strong>30 yıllık deneyimimizle</strong>, ihtiyaçlarınıza özel çözümler sunuyoruz.</p>
    `,
  },
  'kasko-ve-trafik-sigortasi-farklari': {
    title: 'Kasko ve Trafik Sigortası Arasındaki Farklar',
    date: '2024-03-10',
    category: 'Araç',
    content: `
<h2>Araç Sigortaları: Kasko vs Trafik Sigortası</h2>
<p>Araç sahipleri için en çok karıştırılan konulardan biri, kasko ve zorunlu trafik sigortası arasındaki farklardır. Bu yazımızda, her iki sigorta türünü detaylı olarak inceleyeceğiz.</p>

<h3>Zorunlu Trafik Sigortası (Zorunlu Mali Sorumluluk Sigortası)</h3>
<p>Zorunlu trafik sigortası, adından da anlaşılacağı üzere, tüm araç sahipleri için <strong>yasal zorunluluktur</strong>.</p>

<h4>Neleri Kapsar?</h4>
<ul>
<li>Karşı tarafa verilen maddi zararlar (araç hasarı)</li>
<li>Karşı tarafın yaralanması veya ölümü durumunda tedavi masrafları</li>
<li>Üçüncü şahıslara verilen zararlar</li>
</ul>

<h4>Neleri Kapsamaz?</h4>
<ul>
<li>Kendi aracınızın hasarları</li>
<li>Sizin yaralanmanız durumunda tedavi masrafları</li>
<li>Hırsızlık, yangın gibi durumlar</li>
</ul>

<h3>Kasko Sigortası</h3>
<p>Kasko sigortası <strong>isteğe bağlıdır</strong> ve kendi aracınızı kapsamlı şekilde korur.</p>

<h4>Neleri Kapsar?</h4>
<ul>
<li>Kendi aracınızın kaza hasarları</li>
<li>Hırsızlık</li>
<li>Yangın</li>
<li>Sel, su baskını, deprem gibi doğal afetler</li>
<li>Cam kırılması</li>
<li>Mini onarım hizmetleri</li>
<li>İkame araç hizmeti (paket seçimine göre)</li>
</ul>

<h4>Kasko Türleri</h4>
<p><strong>Tam Kasko:</strong> Aracın tüm hasarlarını kapsar.<br/>
<strong>Kısmi Kasko:</strong> Sadece yangın, hırsızlık gibi belirli durumları kapsar.<br/>
<strong>Mini Kasko:</strong> Küçük hasarlar için sınırlı teminat sunar.</p>

<h3>Hangisi Sizin İçin Uygun?</h3>
<p><strong>Sadece Zorunlu Trafik:</strong> Eski ve düşük değerli araçlar için yeterli olabilir.<br/>
<strong>Trafik + Kasko:</strong> Yeni ve değerli araçlar için önerilir. Kredili araçlar için genellikle zorunludur.</p>

<h2>Sonuç</h2>
<p>Zorunlu trafik sigortası yasal bir zorunluluktur, ancak kendi aracınızı korumaz. Kasko sigortası ise aracınızı kapsamlı şekilde korur. <strong>Doğa Danışmanlık</strong> olarak, bütçenize ve ihtiyaçlarınıza en uygun poliçeyi bulmanızda size yardımcı oluruz.</p>
    `,
  },
  'yurt-disi-seyahat-sigortasi-neden-onemli': {
    title: 'Yurt Dışı Seyahat Sigortası Neden Önemli?',
    date: '2024-03-05',
    category: 'Seyahat',
    content: `
<h2>Yurt Dışı Seyahat Sigortası: Kapsamlı Rehber</h2>
<p>Yurt dışı seyahatlerinizde karşılaşabileceğiniz beklenmedik durumlar için seyahat sigortası, vazgeçilmez bir güvencedir. Özellikle Schengen vizesi için zorunludur.</p>

<h3>Neden Seyahat Sigortası Yapmalısınız?</h3>
<ul>
<li><strong>Sağlık Güvencesi:</strong> Yurt dışında tedavi masrafları çok yüksek olabilir. Acil durumda seyahat sigortanız tüm masrafları karşılar.</li>
<li><strong>Bagaj Güvencesi:</strong> Kayıp veya hasarlı bagaj durumunda tazminat alırsınız.</li>
<li><strong>Seyahat İptali:</strong> Beklenmedik durumlarda seyahatinizi iptal etmek zorunda kalırsanız, masraflarınız karşılanır.</li>
<li><strong>Yasal Destek:</strong> Yurt dışında yasal bir sorunla karşılaşırsanız, sigorta şirketiniz destek sağlar.</li>
</ul>

<h3>Schengen Vizesi İçin Gereklilikler</h3>
<p>Schengen bölgesine seyahat edecekseniz, vize başvurusu için seyahat sigortası <strong>zorunludur</strong>:</p>
<ul>
<li>Minimum 30.000 Euro teminat</li>
<li>Tüm Schengen ülkelerinde geçerli olmalı</li>
<li>Vize başvurusundan önce yapılmalı</li>
<li>Acil sağlık hizmetlerini ve repatriation'ı kapsamalı</li>
</ul>

<h3>Seyahat Sigortası Neleri Kapsar?</h3>
<ul>
<li><strong>Acil Sağlık Masrafları:</strong> Hastane, doktor, ameliyat masrafları</li>
<li><strong>İlaç Masrafları:</strong> Reçeteli ilaç giderleri</li>
<li><strong>Repatriation:</strong> Acil durumlarda ülkeye geri dönüş masrafları</li>
<li><strong>Bagaj Kaybı/Gecikmesi:</strong> Kayıp veya gecikmeli bagaj için tazminat</li>
<li><strong>Seyahat İptali/Gecikmesi:</strong> İptal veya gecikme durumunda masraflar</li>
<li><strong>Kişisel Sorumluluk:</strong> Üçüncü şahıslara verdiğiniz zararlar</li>
<li><strong>Yasal Yardım:</strong> Hukuki destek ve danışmanlık</li>
</ul>

<h3>Yurt İçi Seyahat Sigortası</h3>
<p>Türkiye içindeki seyahatleriniz için de seyahat sigortası yaptırabilirsiniz. Özellikle tatil bölgelerinde olası risklere karşı koruma sağlar.</p>

<h2>Sonuç</h2>
<p>Yurt dışı seyahat sigortası, seyahatinizi güvenli ve huzurlu hale getirir. <strong>Doğa Danışmanlık</strong> olarak, tüm dünya için geçerli seyahat sigortası poliçeleri sunuyoruz. Schengen vizesi için uygun poliçelerimizle güvenle seyahat edin.</p>
    `,
  },
  'konut-sigortasi-neleri-kapsar': {
    title: 'Konut Sigortası: Neleri Kapsar?',
    date: '2024-02-28',
    category: 'Konut',
    content: `
<h2>Konut Sigortası: Evinizi Koruyun</h2>
<p>Konut sigortası, evinizi ve eşyalarınızı çeşitli risklere karşı koruyan önemli bir güvencedir. Türkiye'de zorunlu olmasa da, ev sahipleri için önemle tavsiye edilir.</p>

<h3>Konut Sigortası Zorunlu mu?</h3>
<p>Türkiye'de konut sigortası <strong>zorunlu değildir</strong>, ancak:</p>
<ul>
<li>Mortgage ile alınmış evlerde bankalar zorunlu kılar</li>
<li>Apartman yönetimi genel sigorta yaptırabilir</li>
<li>Kira sigortası kiracılar için önerilir</li>
</ul>

<h3>Konut Sigortası Neleri Kapsar?</h3>
<h4>Temel Teminatlar:</h4>
<ul>
<li><strong>Yangın:</strong> Ev içi veya dışı kaynaklı yangın hasarları</li>
<li><strong>Deprem:</strong> Deprem sonucu oluşan hasarlar (ek prim gerektirir)</li>
<li><strong>Hırsızlık:</strong> Zorla girişle gerçekleşen hırsızlık olayları</li>
<li><strong>Su Baskını:</strong> Sel, su baskını, tesisat patlaması</li>
<li><strong>Fırtına/Dolu:</strong> Doğal afetler nedeniyle oluşan hasarlar</li>
<li><strong>Cam Kırılması:</strong> Pencere, balkon kapısı gibi camların kırılması</li>
</ul>

<h4>Ek Teminatlar:</h4>
<ul>
<li><strong>Beyaz Eşya:</strong> Buzdolabı, çamaşır makinesi gibi cihazlar</li>
<li><strong>Elektronik Cihaz:</strong> Televizyon, bilgisayar gibi elektronik eşyalar</li>
<li><strong>Zıynet Eşyası:</strong> Mücevher, değerli eşyalar</li>
<li><strong>Kira Kaybı:</strong> Yangın sonrası evinizde oturamıyorsanız kira masrafları</li>
<li><strong>Ek Yaşama Giderleri:</strong> Geçici konaklama masrafları</li>
<li><strong>3. Şahıslara Sorumluluk:</strong> Komşulara verdiğiniz zararlar</li>
</ul>

<h3>Konut Sigortası Neleri Kapsamaz?</h3>
<ul>
<li>Kasıtlı zararlar</li>
<li>Savaş, terör eylemleri</li>
<li>Bakımsızlıktan kaynaklanan hasarlar</li>
<li>Doğal aşınma ve yıpranma</li>
</ul>

<h3>Prim Hesaplama Nasıl Yapılır?</h3>
<p>Konut sigortası primi şu faktörlere göre belirlenir:</p>
<ul>
<li>Evin değeri ve büyüklüğü</li>
<li>Konum (deprem riski, suç oranı vb.)</li>
<li>Yapı türü (betonarme, ahşap vb.)</li>
<li>Seçilen teminatlar</li>
<li>Muafiyet tutarı</li>
</ul>

<h2>Sonuç</h2>
<p>Konut sigortası, evinizi ve eşyalarınızı beklenmedik durumlara karşı korur. <strong>Doğa Danışmanlık</strong> olarak, ihtiyaçlarınıza özel konut sigortası paketleri sunuyoruz. Ücretsiz teklif almak için bize ulaşın.</p>
    `,
  },
  'is-yeri-sigortasi-ile-isletmenizi-koruyun': {
    title: 'İş Yeri Sigortası ile İşletmenizi Koruyun',
    date: '2024-02-20',
    category: 'İş Yeri',
    content: `
<h2>İş Yeri Sigortası: İşletmeniz İçin Kapsamlı Koruma</h2>
<p>İş yeri sigortası, işletmenizi çeşitli risklere karşı koruyan ve iş sürekliliğinizi sağlayan önemli bir güvencedir.</p>

<h3>İş Yeri Sigortası Nedir?</h3>
<p>İş yeri sigortası, işletmenizin fiziki varlıklarını, stokları, demirbaşları ve mali kayıplarını çeşitli risklere karşı koruyan kapsamlı bir sigorta türüdür.</p>

<h3>Temel Teminatlar</h3>
<ul>
<li><strong>Yangın:</strong> İş yeri içi veya dışı kaynaklı yangın hasarları</li>
<li><strong>Hırsızlık:</strong> Zorla girişle gerçekleşen hırsızlık olayları</li>
<li><strong>Deprem:</strong> Deprem sonucu oluşan yapısal hasarlar</li>
<li><strong>Su Baskını:</strong> Sel, tesisat patlaması, su baskını</li>
<li><strong>Fırtına/Dolu:</strong> Doğal afetler nedeniyle oluşan hasarlar</li>
<li><strong>Cam Kırılması:</strong> Vitrin, pencere gibi camların kırılması</li>
</ul>

<h3>Ek Teminatlar</h3>
<ul>
<li><strong>İş Durması:</strong> Felaket sonrası iş yapamama durumunda gelir kaybı</li>
<li><strong>Makine Kırılması:</strong> Üretim makinelerinin arızalanması</li>
<li><strong>Elektronik Cihaz:</strong> Bilgisayar, sunucu gibi elektronik cihazlar</li>
<li><strong>Sorumluluk:</strong> Çalışanlar ve müşterilere karşı sorumluluk</li>
<li><strong>Nakliye:</strong> Malların nakliyesi sırasındaki hasar</li>
<li><strong>Kasa Muhteviyatı:</strong> Kasadaki nakit ve değerli evraklar</li>
<li><strong>3. Şahıs Mali Sorumluluk:</strong> Müşterilere veya üçüncü şahıslara verilen zararlar</li>
</ul>

<h3>Hangi İşletmeler İçin Gereklidir?</h3>
<p>Her türlü işletme için önerilir:</p>
<ul>
<li>Mağazalar ve dükkanlar</li>
<li>Restoranlar ve kafeler</li>
<li>Ofisler</li>
<li>Atölyeler ve fabrikalar</li>
<li>Depolar</li>
<li>Otel ve pansiyonlar</li>
</ul>

<h3>Prim Hesaplama</h3>
<p>İş yeri sigortası primi şu faktörlere göre belirlenir:</p>
<ul>
<li>İşletmenin türü ve faaliyet alanı</li>
<li>İş yerinin değeri ve büyüklüğü</li>
<li>Konum ve risk faktörleri</li>
<li>Seçilen teminatlar</li>
<li>Güvenlik önlemleri (alarm, kamera vb.)</li>
</ul>

<h2>Sonuç</h2>
<p>İş yeri sigortası, işletmenizin sürekliliğini sağlamak için kritik öneme sahiptir. Beklenmedik bir felaket durumunda, maddi kayıplarınızı minimize ederek işinize devam etmenizi sağlar. <strong>Doğa Danışmanlık</strong> olarak, işletmenizin ihtiyaçlarına özel çözümler sunuyoruz.</p>
    `,
  },
  'hayat-sigortasi-ile-geleceginizi-planlayin': {
    title: 'Hayat Sigortası ile Geleceğinizi Planlayın',
    date: '2024-02-15',
    category: 'Hayat',
    content: `
<h2>Hayat Sigortası: Sevdiklerinizi Koruyun</h2>
<p>Hayat sigortası, sizin veya aile bireylerinizin hayatını kaybetmesi veya maluliyet durumlarında, geriye kalanların maddi açıdan zorlanmaması için yapılan bir güvence planıdır.</p>

<h3>Hayat Sigortası Nasıl Çalışır?</h3>
<p>Hayat sigortası, belirlenen bir prim karşılığında, sigortalının vefatı veya maluliyet durumunda, lehtarlara (genellikle aile üyeleri) belirlenen bir miktar ödeme yapılmasını sağlar.</p>

<h3>Hayat Sigortası Türleri</h3>

<h4>1. Vefat (Ölüm) Sigortası</h4>
<p>Sigortalının vefatı durumunda, lehdarlarına belirlenen miktarda ödeme yapılır.</p>

<h4>2. Maluliyet Sigortası</h4>
<p>Kaza veya hastalık sonucu kalıcı sakatlık durumunda, sigortalıya ödeme yapılır.</p>

<h4>3. Kritik Hastalık Sigortası</h4>
<p>Kanser, kalp krizi, felç gibi kritik hastalıklar teşhis edildiğinde, belirli bir ödeme yapılır.</p>

<h4>4. Biriktirme (Tasarruf) Amaçlı Hayat Sigortası</h4>
<p>Hem koruma hem de tasarruf imkanı sunar. Belirli bir süre sonunda birikimlerinizi alabilirsiniz.</p>

<h4>5. Kredi Koruma Sigortası</h4>
<p>Kredili bir ürün aldıysanız (ev, araba vb.), vefat durumunda kalan kredi borcunuz sigorta tarafından ödenir.</p>

<h3>Hayat Sigortasının Avantajları</h3>
<ul>
<li><strong>Aile Güvencesi:</strong> Sevdikleriniz maddi açıdan zorlanmaz</li>
<li><strong>Borç Güvencesi:</strong> Kredi ve borçlarınız ödenebilir</li>
<li><strong>Vergi Avantajı:</strong> Primlerin bir kısmı vergi indiriminde kullanılabilir</li>
<li><strong>Tasarruf:</strong> Biriktirme amaçlı poliçelerle emeklilik planlaması</li>
<li><strong>Eğitim Fonu:</strong> Çocuklarınızın eğitim masrafları için fon oluşturma</li>
</ul>

<h3>Kimler İçin Gereklidir?</h3>
<p>Hayat sigortası özellikle şu kişiler için önerilir:</p>
<ul>
<li>Ailenin geçimini tek başına sağlayanlar</li>
<li>Kredisi veya borcu olanlar</li>
<li>Küçük çocuklu aileler</li>
<li>İşletme sahipleri</li>
<li>Emeklilik planlaması yapanlar</li>
</ul>

<h3>Prim Hesaplama</h3>
<p>Hayat sigortası primi şu faktörlere göre belirlenir:</p>
<ul>
<li>Yaş</li>
<li>Sağlık durumu</li>
<li>Meslek</li>
<li>Yaşam tarzı (sigara kullanımı, spor vb.)</li>
<li>Teminat tutarı</li>
<li>Poliçe süresi</li>
</ul>

<h2>Sonuç</h2>
<p>Hayat sigortası, geleceğinizi ve sevdiklerinizi korumak için akıllıca bir yatırımdır. Ne kadar erken başlarsanız, primleri o kadar uygun olur. <strong>Doğa Danışmanlık</strong> olarak, size en uygun hayat sigortası poliçesini bulmanızda yardımcı oluruz.</p>
    `,
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: 'Yazı Bulunamadı',
    };
  }

  return {
    title: post.title,
    description: post.content.slice(0, 160),
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-background via-emerald-50/10 to-background">
      <article className="container mx-auto py-16 md:py-24 max-w-4xl px-4">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 transition-colors mb-8 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
          <span className="font-medium">Tüm Yazılar</span>
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block px-4 py-2 text-sm font-medium bg-emerald-100 text-emerald-700 rounded-full border border-emerald-200">
              {post.category}
            </span>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('tr-TR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-8"></div>
        </header>

        {/* Article Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-emerald-100/50 shadow-lg mb-12">
          <div 
            className="prose prose-lg max-w-none
              prose-headings:font-heading prose-headings:text-foreground
              prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-6 prose-h2:mt-12 prose-h2:text-emerald-600 prose-h2:border-b prose-h2:border-emerald-100 prose-h2:pb-4
              prose-h3:text-2xl prose-h3:font-semibold prose-h3:mb-4 prose-h3:mt-8 prose-h3:text-emerald-700
              prose-h4:text-xl prose-h4:font-semibold prose-h4:mb-3 prose-h4:mt-6 prose-h4:text-teal-600
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
              prose-ul:space-y-3 prose-ul:my-6
              prose-li:text-muted-foreground prose-li:text-base prose-li:leading-relaxed
              prose-strong:text-emerald-600 prose-strong:font-semibold
              prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{
              __html: post.content,
            }}
          />
        </div>

        {/* CTA Section */}
        <div className="mt-16 pt-12 border-t border-emerald-100">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 md:p-12 text-center border border-emerald-200">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Size Özel Sigorta Çözümü Hazırlayalım
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              30 yıllık deneyimimizle, ihtiyaçlarınıza en uygun poliçeyi bulmanızda size yardımcı oluruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#teklif"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl"
              >
                Ücretsiz Teklif Al
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-foreground bg-white border-2 border-emerald-200 rounded-xl hover:border-emerald-300 hover:bg-emerald-50 transition-all"
              >
                İletişime Geç
              </Link>
            </div>
          </div>
        </div>

        {/* Related Articles Suggestion */}
        <div className="mt-12">
          <Link
            href="/blog"
            className="flex items-center justify-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors font-medium group"
          >
            <span>Diğer yazıları keşfet</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </article>
    </div>
  );
}

