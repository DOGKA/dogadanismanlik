'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, Loader2, CheckCircle2 } from 'lucide-react';
import { containerVariants, itemVariants } from '@/lib/animations';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  name: z.string().min(2, 'Ad soyad en az 2 karakter olmalıdır'),
  email: z.string().email('Geçerli bir e-posta adresi giriniz'),
  phone: z
    .string()
    .min(10, 'Geçerli bir telefon numarası giriniz')
    .regex(/^[0-9\s\+\-\(\)]+$/, 'Sadece rakam ve telefon karakterleri kullanınız'),
  topic: z.string().min(1, 'Lütfen bir konu seçiniz'),
  dateTime: z.string().optional(),
  message: z.string().min(10, 'Mesajınız en az 10 karakter olmalıdır'),
});

type FormData = z.infer<typeof formSchema>;

const topics = [
  { value: 'saglik', label: 'Modüler Sağlık & Tamamlayıcı Sağlık' },
  { value: 'arac', label: 'Araç (Kasko & Trafik)' },
  { value: 'konut', label: 'Konut Sigortası' },
  { value: 'isyeri', label: 'İş Yeri Sigortası' },
  { value: 'seyahat', label: 'Seyahat Sigortası' },
  { value: 'hayat', label: 'Hayat Sigortası' },
];

export default function ConsultForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/consult', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Form gönderilemedi');
      }

      setIsSuccess(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Bir hata oluştu. Lütfen tekrar deneyiniz.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="teklif"
      className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5"
      aria-labelledby="consult-heading"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block text-sm font-medium text-primary mb-2"
          >
            ÜCRETSİZ DANIŞMA
          </motion.span>
          <motion.h2
            id="consult-heading"
            variants={itemVariants}
            className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4"
          >
            Size Uygun Poliçeyi Bulalım
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground"
          >
            Bilgilerinizi paylaşın, uzman ekibimiz en kısa sürede sizinle iletişime
            geçsin.
          </motion.p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="bg-card rounded-2xl border border-border shadow-xl p-6 md:p-10"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Ad Soyad <span className="text-red-500">*</span>
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className={cn(
                    'w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors',
                    errors.name ? 'border-red-500' : 'border-input'
                  )}
                  placeholder="Adınız ve soyadınız"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    E-posta <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className={cn(
                      'w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors',
                      errors.email ? 'border-red-500' : 'border-input'
                    )}
                    placeholder="ornek@email.com"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Telefon <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    id="phone"
                    className={cn(
                      'w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors',
                      errors.phone ? 'border-red-500' : 'border-input'
                    )}
                    placeholder="0541 877 8000"
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1 text-sm text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Topic & DateTime */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="topic"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Konu <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register('topic')}
                    id="topic"
                    className={cn(
                      'w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors',
                      errors.topic ? 'border-red-500' : 'border-input'
                    )}
                    aria-invalid={errors.topic ? 'true' : 'false'}
                    aria-describedby={errors.topic ? 'topic-error' : undefined}
                  >
                    <option value="">Konu seçiniz</option>
                    {topics.map((topic) => (
                      <option key={topic.value} value={topic.value}>
                        {topic.label}
                      </option>
                    ))}
                  </select>
                  {errors.topic && (
                    <p id="topic-error" className="mt-1 text-sm text-red-500">
                      {errors.topic.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="dateTime"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Tercih Edilen Tarih & Saat
                  </label>
                  <input
                    {...register('dateTime')}
                    type="datetime-local"
                    id="dateTime"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Mesajınız <span className="text-red-500">*</span>
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={4}
                  className={cn(
                    'w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none',
                    errors.message ? 'border-red-500' : 'border-input'
                  )}
                  placeholder="Sigorta ihtiyaçlarınız hakkında kısa bilgi veriniz..."
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={cn(
                  'w-full px-8 py-4 text-base font-medium text-primary-foreground bg-primary rounded-xl shadow-lg hover:shadow-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
                  !isSubmitting && 'hover:bg-primary/90'
                )}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <Loader2 className="animate-spin mr-2 h-5 w-5" aria-hidden="true" />
                    Gönderiliyor...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Send className="mr-2 h-5 w-5" aria-hidden="true" />
                    GÖNDER
                  </span>
                )}
              </motion.button>

              {/* Success Message */}
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center gap-2 p-4 bg-green-50 text-green-700 rounded-lg"
                >
                  <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                  <p className="text-sm font-medium">
                    Formunuz başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.
                  </p>
                </motion.div>
              )}

              {/* Info Text */}
              <p className="text-sm text-muted-foreground text-center">
                Formu gönderdiğinizde ekibimiz en kısa sürede sizinle iletişime geçer.
              </p>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

