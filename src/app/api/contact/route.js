import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // En prod, lo recomendado es usar tu dominio verificado.
    const from =
      process.env.RESEND_FROM || "Web Contact <jano@test.dev>";

    const body = await req.json().catch(() => ({}));

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

    const ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "";
    const ua = req.headers.get("user-agent") || "";

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
