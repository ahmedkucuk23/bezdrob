import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const { name, phone, email, program, goals } = body;

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Ime i telefon su obavezni' },
        { status: 400 }
      );
    }

    // Program labels for the email
    const programLabels: Record<string, string> = {
      '1on1': '1:1 Personalni Trening',
      'team': 'Grupni Trening',
      'online': 'Online Coaching',
      'glute': 'Program Transformacije Gluteusa',
      'other': 'Još nije siguran/a',
    };

    const programName = program ? programLabels[program] || program : 'Nije odabrano';

    // Send email notification
    const { data, error } = await resend.emails.send({
      from: 'Kontakt Forma <info@bezdrob.com>',
      to: ['imranbezdrob@gmail.com'],
      subject: `Nova poruka od ${name} - Bezdrob.com`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FF7043; border-bottom: 2px solid #FF7043; padding-bottom: 10px;">
            Nova Kontakt Poruka
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 140px;">Ime:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Telefon:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                <a href="tel:${phone}" style="color: #FF7043;">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                ${email ? `<a href="mailto:${email}" style="color: #FF7043;">${email}</a>` : 'Nije uneseno'}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Program:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${programName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; vertical-align: top;">Ciljevi:</td>
              <td style="padding: 10px;">${goals || 'Nije uneseno'}</td>
            </tr>
          </table>

          <div style="margin-top: 30px; padding: 15px; background: #f5f5f5; border-radius: 8px;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              <strong>Brzi odgovor:</strong><br>
              <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" style="color: #25D366; text-decoration: none;">
                Odgovori putem WhatsApp
              </a>
            </p>
          </div>

          <p style="color: #999; font-size: 12px; margin-top: 30px; text-align: center;">
            Ova poruka je poslana sa www.bezdrob.com kontakt forme
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Greška pri slanju emaila' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Greška na serveru' },
      { status: 500 }
    );
  }
}
