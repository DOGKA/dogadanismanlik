import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Simple in-memory rate limiting
const rateLimit = new Map<string, number[]>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60000; // 1 minute
  const maxRequests = 3;

  const requests = rateLimit.get(ip) || [];
  const recentRequests = requests.filter((timestamp) => now - timestamp < windowMs);

  if (recentRequests.length >= maxRequests) {
    return false;
  }

  recentRequests.push(now);
  rateLimit.set(ip, recentRequests);
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Çok fazla istek gönderdiniz. Lütfen 1 dakika sonra tekrar deneyin.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { name, email, phone, topic, dateTime, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !topic || !message) {
      return NextResponse.json(
        { error: 'Lütfen tüm zorunlu alanları doldurun.' },
        { status: 400 }
      );
    }

    // Topic labels
    const topicLabels: Record<string, string> = {
      saglik: 'Modüler Sağlık & Tamamlayıcı Sağlık',
      arac: 'Araç (Kasko & Trafik)',
      konut: 'Konut Sigortası',
      isyeri: 'İş Yeri Sigortası',
      seyahat: 'Seyahat Sigortası',
      hayat: 'Hayat Sigortası',
    };

    const topicLabel = topicLabels[topic] || topic;

    // Send email using Gmail SMTP with nodemailer
    try {
      const gmailUser = process.env.GMAIL_USER;
      const gmailPassword = process.env.GMAIL_APP_PASSWORD;

      if (!gmailUser || !gmailPassword) {
        console.warn('Gmail credentials not set. Skipping email send.');
        return NextResponse.json(
          { success: true, message: 'Form alındı. (E-posta gönderimi yapılandırılmadı)' },
          { status: 200 }
        );
      }

      // Create transporter
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: gmailUser,
          pass: gmailPassword,
        },
      });

      // Send email
      await transporter.sendMail({
        from: `"Doğa Danışmanlık" <${gmailUser}>`,
        to: gmailUser, // Send to same Gmail address
        subject: `Yeni Danışma Talebi: ${topicLabel}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #0E7C86 0%, #0B3A45 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
                .header h1 { margin: 0; font-size: 24px; }
                .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
                .field { margin-bottom: 20px; padding: 15px; background: white; border-radius: 6px; border-left: 4px solid #0E7C86; }
                .field-label { font-weight: 600; color: #0B3A45; margin-bottom: 5px; }
                .field-value { color: #555; }
                .footer { text-align: center; margin-top: 20px; padding: 20px; color: #777; font-size: 14px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>🎯 Yeni Danışma Talebi</h1>
                </div>
                <div class="content">
                  <div class="field">
                    <div class="field-label">Ad Soyad:</div>
                    <div class="field-value">${name}</div>
                  </div>
                  <div class="field">
                    <div class="field-label">E-posta:</div>
                    <div class="field-value">${email}</div>
                  </div>
                  <div class="field">
                    <div class="field-label">Telefon:</div>
                    <div class="field-value">${phone}</div>
                  </div>
                  <div class="field">
                    <div class="field-label">Konu:</div>
                    <div class="field-value">${topicLabel}</div>
                  </div>
                  ${dateTime ? `
                  <div class="field">
                    <div class="field-label">Tercih Edilen Tarih & Saat:</div>
                    <div class="field-value">${new Date(dateTime).toLocaleString('tr-TR')}</div>
                  </div>
                  ` : ''}
                  <div class="field">
                    <div class="field-label">Mesaj:</div>
                    <div class="field-value">${message}</div>
                  </div>
                </div>
                <div class="footer">
                  <p>Bu e-posta Doğa Danışmanlık web sitesi danışma formundan otomatik olarak gönderilmiştir.</p>
                </div>
              </div>
            </body>
          </html>
        `,
      });

      return NextResponse.json(
        { success: true, message: 'Form başarıyla gönderildi.' },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Email send error:', emailError);
      return NextResponse.json(
        { error: 'E-posta gönderilemedi. Lütfen daha sonra tekrar deneyin.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Bir hata oluştu. Lütfen tekrar deneyin.' },
      { status: 500 }
    );
  }
}

