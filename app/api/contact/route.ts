import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * Contact Form API Endpoint
 * POST /api/contact
 *
 * Backend propio para envío de emails con Nodemailer
 * Compatible con: Gmail, Outlook, SMTP personalizado
 */

// Tipos
interface ContactFormData {
  name: string;
  business: string;
  phone: string;
  email: string;
  honeypot?: string;
}

interface EmailResponse {
  success: boolean;
  message: string;
  timestamp: string;
}

/**
 * Configurar transportador de Nodemailer
 * Soporta: Gmail, Outlook, SMTP personalizado
 */
function getEmailTransporter() {
  const emailService = process.env.EMAIL_SERVICE || "gmail";
  const emailUser = process.env.EMAIL_USER;
  const emailPassword = process.env.EMAIL_PASSWORD;

  if (!emailUser || !emailPassword) {
    throw new Error(
      "EMAIL_USER y EMAIL_PASSWORD son requeridos en variables de entorno"
    );
  }

  if (emailService === "custom_smtp") {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });
  }

  // Gmail o Outlook
  return nodemailer.createTransport({
    service: emailService,
    auth: {
      user: emailUser,
      pass: emailPassword,
    },
  });
}

/**
 * Validaciones básicas del lado del servidor
 */
function validateFormData(data: ContactFormData): string | null {
  // Honeypot check (anti-spam)
  if (data.honeypot) {
    console.warn("[API] Spam detected - honeypot field filled");
    return null;
  }

  // Validar campos requeridos
  if (!data.name?.trim()) return "Nombre es requerido";
  if (!data.business?.trim()) return "Nombre del negocio es requerido";
  if (!data.phone?.trim()) return "Teléfono es requerido";
  if (!data.email?.trim()) return "Email es requerido";

  // Validar formato de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) return "Email inválido";

  // Validar longitudes
  if (data.name.length > 100) return "Nombre muy largo";
  if (data.business.length > 100) return "Nombre del negocio muy largo";
  if (data.email.length > 255) return "Email muy largo";

  return null; // Sin errores
}

/**
 * Sanitizar datos para prevenir inyecciones
 */
function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, "").slice(0, 255);
}

/**
 * Enviar email con Nodemailer (backend propio)
 */
async function sendEmailViaNodemailer(
  formData: ContactFormData
): Promise<EmailResponse> {
  const transporter = getEmailTransporter();
  const toEmail = process.env.CONTACT_EMAIL || process.env.EMAIL_USER;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #1a1a1a; color: #fff; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 8px; }
          .field { margin: 15px 0; }
          .label { font-weight: bold; color: #1a1a1a; }
          .value { color: #555; margin-top: 5px; }
          .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #999; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>🎯 Nuevo contacto - Early Adopter de Appki</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Nombre:</div>
              <div class="value">${sanitizeInput(formData.name)}</div>
            </div>
            <div class="field">
              <div class="label">Negocio:</div>
              <div class="value">${sanitizeInput(formData.business)}</div>
            </div>
            <div class="field">
              <div class="label">Teléfono:</div>
              <div class="value">${sanitizeInput(formData.phone)}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${formData.email}">${
    formData.email
  }</a></div>
            </div>
            <div class="footer">
              <p>Recibido: ${new Date().toLocaleString("es-CO")}</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: toEmail,
    replyTo: formData.email,
    subject: `🤝 Nuevo Early Adopter: ${sanitizeInput(formData.business)}`,
    html: htmlContent,
  };

  try {
    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message: "Email enviado correctamente desde backend propio",
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    console.error("[Email Error]", error);
    throw new Error(
      `Error al enviar email: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}

/**
 * Handler POST - Procesar formulario de contacto
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Parse request body
    let body: ContactFormData;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    // Validar datos
    const validationError = validateFormData(body);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    // Honeypot check silencioso
    if (body.honeypot) {
      console.warn("[SECURITY] Spam attempt detected from IP:", request.ip);
      return NextResponse.json(
        { success: true, message: "Thank you for your submission" },
        { status: 200 }
      );
    }

    // Enviar email con backend propio (Nodemailer)
    await sendEmailViaNodemailer(body);

    // Log exitoso
    console.log(`[API] Contact form submitted successfully`, {
      email: body.email,
      business: body.business,
      timestamp: new Date().toISOString(),
    });

    // Respuesta exitosa
    return NextResponse.json(
      {
        success: true,
        message: "Gracias por tu interés. Nos pondremos en contacto pronto.",
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    // Log error
    console.error("[API Error]", {
      error: error instanceof Error ? error.message : String(error),
      timestamp: new Date().toISOString(),
    });

    // Respuesta de error
    return NextResponse.json(
      {
        success: false,
        error:
          "Hubo un error al procesar tu solicitud. Por favor intenta de nuevo.",
      },
      { status: 500 }
    );
  }
}

/**
 * Handler GET - Info del endpoint
 */
export async function GET(): Promise<NextResponse> {
  return NextResponse.json(
    {
      endpoint: "/api/contact",
      method: "POST",
      description: "Contact form endpoint for Appki landing",
      status: "operational",
    },
    { status: 200 }
  );
}

/**
 * Handler OPTIONS - Para CORS (si es necesario)
 */
export async function OPTIONS(): Promise<NextResponse> {
  return NextResponse.json(
    { message: "OK" },
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": process.env.NEXT_PUBLIC_SITE_URL || "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
}
