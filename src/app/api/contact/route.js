import { NextResponse } from "next/server";

const EMAIL_API_URL = process.env.NEXT_PUBLIC_EMAIL_API_URL;
const EMAIL_API_KEY = process.env.NEXT_PUBLIC_EMAIL_API_KEY;
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

const CONFIRMATION_SUBJECT = "Confirmación de contacto - Nathaniel";
const CONFIRMATION_MESSAGE = "¡Hola! Muchas gracias por estar interesadas en mis servicios, pronto me pondré en contacto contigo, habitualmente no demoro más de 48hrs.";

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, service, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Por favor completa todos los campos requeridos." },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Por favor ingresa un email válido." },
                { status: 400 }
            );
        }

        const serviceLabel = service === "web-estatica" ? "Web Estática (Landing, Portfolio, Blog)"
            : service === "app-web" ? "Aplicación Web (Dashboard, Sistema)"
            : service === "mantenimiento" ? "Mantenimiento / Actualizaciones"
            : service === "otro" ? "Otro"
            : "No especificado";

        const emailToMe = await fetch(`${EMAIL_API_URL}/api/email/enviar-directo`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-API-Key": EMAIL_API_KEY,
            },
            body: JSON.stringify({
                cuentaId: "api",
                to: CONTACT_EMAIL,
                asunto: `Nuevo contacto desde web: ${serviceLabel}`,
                contenido: `
                    <h2 style="color: #1d4ed8; margin-bottom: 16px;">Nuevo mensaje desde portafolio</h2>
                    <p><strong>Nombre:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Servicio de interés:</strong> ${serviceLabel}</p>
                    <p><strong>Mensaje:</strong></p>
                    <p>${message.replace(/\n/g, "<br>")}</p>
                `,
            }),
        });

        if (!emailToMe.ok) {
            console.error("Error enviando email a mí mismo");
            return NextResponse.json(
                { error: "Error al procesar tu mensaje. Intenta nuevamente." },
                { status: 500 }
            );
        }

        const emailToClient = await fetch(`${EMAIL_API_URL}/api/email/enviar-directo`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-API-Key": EMAIL_API_KEY,
            },
            body: JSON.stringify({
                cuentaId: "api",
                to: email,
                asunto: CONFIRMATION_SUBJECT,
                contenido: `
                    <h2 style="color: #1d4ed8; margin-bottom: 16px;">¡Hola ${name}!</h2>
                    <p>${CONFIRMATION_MESSAGE}</p>
                    <p style="margin-top: 16px; color: #6b7280;">--</p>
                    <p style="color: #6b7280; font-size: 14px;">Nathaniel<br/>Desarrollador FullStack</p>
                `,
            }),
        });

        if (!emailToClient.ok) {
            console.error("Error enviando confirmación al cliente");
        }

        return NextResponse.json({ success: true, message: "Mensaje enviado exitosamente" });

    } catch (error) {
        console.error("Error en /api/contact:", error);
        return NextResponse.json(
            { error: "Error de conexión. Intenta nuevamente." },
            { status: 500 }
        );
    }
}
