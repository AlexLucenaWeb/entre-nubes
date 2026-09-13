import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const resend = new Resend(process.env.RESEND_API_KEY);

// --- Rate limit ---------------------------------------------------------
// Contador en memoria del proceso. Frena un flood desde una misma IP sin
// necesidad de infraestructura extra. Aviso: en serverless cada instancia
// tiene su propio contador y se pierde al enfriarse, así que no es una
// barrera dura. Si algún día hace falta algo serio, mover a Upstash/Redis.
const RATE_LIMIT_MAX = 5; // envíos permitidos...
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // ...por IP en esta ventana
const MAX_IPS_EN_MEMORIA = 500;

const envios = new Map();

function purgarCaducados(ahora) {
  for (const [ip, marcas] of envios) {
    const vigentes = marcas.filter((t) => ahora - t < RATE_LIMIT_WINDOW_MS);
    if (vigentes.length) envios.set(ip, vigentes);
    else envios.delete(ip);
  }
}

function dentroDelLimite(ip) {
  const ahora = Date.now();

  if (envios.size > MAX_IPS_EN_MEMORIA) purgarCaducados(ahora);

  const vigentes = (envios.get(ip) || []).filter(
    (t) => ahora - t < RATE_LIMIT_WINDOW_MS
  );

  if (vigentes.length >= RATE_LIMIT_MAX) {
    envios.set(ip, vigentes);
    return false;
  }

  vigentes.push(ahora);
  envios.set(ip, vigentes);
  return true;
}

// -----------------------------------------------------------------------

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || "").trim());
}

function clamp(str, max) {
  const s = String(str || "");
  return s.length > max ? s.slice(0, max) : s;
}

function escapeHtml(str) {
  return String(str || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req) {
  try {
    // x-forwarded-for puede venir como "cliente, proxy1, proxy2"
    const ip =
      (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      "";
    const ua = req.headers.get("user-agent") || "";

    if (!dentroDelLimite(ip || "sin-ip")) {
      return NextResponse.json(
        { ok: false, error: "Too many requests" },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => ({}));

    // Honeypot: campo invisible para personas, tentador para bots.
    // Si viene relleno devolvemos éxito sin enviar nada, para no darles pistas.
    if (String(body.website || "").trim()) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { ok: false, error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    // Gmail destino
    const to = process.env.CONTACT_TO;
    if (!to) {
      return NextResponse.json(
        { ok: false, error: "Missing CONTACT_TO env var" },
        { status: 500 }
      );
    }

    // Debe ser un dominio verificado en Resend. Sin valor preferimos fallar
    // antes que enviar desde un remitente que acabaría en spam.
    const from = process.env.RESEND_FROM;
    if (!from) {
      return NextResponse.json(
        { ok: false, error: "Missing RESEND_FROM env var" },
        { status: 500 }
      );
    }

    const name = clamp(body.name, 120).trim();
    const email = clamp(body.email, 200).trim();
    const notes = clamp(body.notes, 4000).trim();

    if (!name || !email || !notes) {
      return NextResponse.json(
        { ok: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email" },
        { status: 400 }
      );
    }

    const subject = `Nuevo mensaje de ${name}`;

    const html = `
      <div style="font-family: ui-sans-serif, system-ui; line-height: 1.5;">
        <h2>Nuevo mensaje desde el formulario</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Notas:</strong></p>
        <pre style="white-space: pre-wrap; background:#f6f6f6; padding:12px; border-radius:8px;">${escapeHtml(
          notes
        )}</pre>
        <hr />
        <p style="color:#666; font-size:12px;">
          IP: ${escapeHtml(ip)}<br/>
          UA: ${escapeHtml(ua)}
        </p>
      </div>
    `;

    const text = `Nuevo mensaje desde el formulario

Nombre: ${name}
Email: ${email}

Notas:
${notes}

IP: ${ip}
UA: ${ua}
`;

    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      subject,
      // ✅ replyTo existe y es el correcto en el SDK Node
      replyTo: email,
      html,
      text,
    });

    if (error) {
      return NextResponse.json(
        { ok: false, error: error.message || "Resend error" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, id: data?.id }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err?.message || "Server error" },
      { status: 500 }
    );
  }
}
