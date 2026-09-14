"use client";

import { useMemo, useState } from "react";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    notes: "",
    website: "", // honeypot: debe quedarse vacío
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const emailOk = useMemo(() => isValidEmail(form.email), [form.email]);

  const canSubmit = useMemo(() => {
    return (
      form.name.trim().length > 0 &&
      emailOk &&
      form.notes.trim().length > 0 &&
      status !== "loading"
    );
  }, [form.name, form.notes, emailOk, status]);

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg("");

    // Validación front
    if (!form.name.trim()) {
      setStatus("error");
      setErrorMsg("Por favor, escribe tu nombre.");
      return;
    }
    if (!emailOk) {
      setStatus("error");
      setErrorMsg("Por favor, escribe un email válido.");
      return;
    }
    if (!form.notes.trim()) {
      setStatus("error");
      setErrorMsg("Por favor, describe brevemente la situación.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          notes: form.notes.trim(),
          website: form.website,
        }),
      });

      if (res.status === 429) {
        setStatus("error");
        setErrorMsg(
          "Has enviado varios mensajes seguidos. Espera unos minutos e inténtalo de nuevo."
        );
        return;
      }

      if (!res.ok) {
        throw new Error("No se pudo enviar el formulario.");
      }

      setStatus("success");
      setForm({ name: "", email: "", notes: "", website: "" });
    } catch {
      setStatus("error");
      setErrorMsg(
        "Ha habido un error en el envío. Por favor, inténtalo más tarde."
      );
    }
  }

  return (
    <form data-component="ContactForm" onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="space-y-1">
        <label htmlFor="name" className="sr-only">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
          className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-navy outline-none focus:ring-2 focus:ring-black/10"
          placeholder="Tu nombre"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
          className={`w-full rounded-xl border px-4 py-3 text-navy outline-none focus:ring-2 ${
            form.email.length === 0 || emailOk
              ? "border-black/10 bg-white focus:ring-black/10"
              : "border-red-400 bg-red-50 focus:ring-red-200"
          }`}
          placeholder="email@email.com"
          aria-invalid={form.email.length > 0 && !emailOk}
          aria-describedby={
            form.email.length > 0 && !emailOk ? "email-error" : undefined
          }
        />
        {form.email.length > 0 && !emailOk && (
          <p id="email-error" className="text-sm text-red-600">
            El email no parece válido.
          </p>
        )}
      </div>

      <div className="space-y-1">
        <label htmlFor="notes" className="sr-only">
          Notas
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={6}
          value={form.notes}
          onChange={(e) => setForm((s) => ({ ...s, notes: e.target.value }))}
          className="w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-3 text-navy outline-none focus:ring-2 focus:ring-black/10"
          placeholder="Por favor, describe brevemente la situación"
        />
      </div>

      {/* Honeypot: oculto a la vista y fuera del tabulador. Si se rellena,
          el servidor descarta el envío en silencio. */}
      <div className="absolute left-[-9999px] top-0 h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">No rellenes este campo</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => setForm((s) => ({ ...s, website: e.target.value }))}
        />
      </div>

      <button
        type="submit"
        disabled={!canSubmit}
        className="w-full rounded-xl bg-navy px-4 py-3 font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
      >
        {status === "loading" ? "Enviando..." : "Enviar"}
      </button>

      {/* role="status" hace que el lector de pantalla anuncie el resultado
          del envío sin que haga falta mover el foco. */}
      <div role="status" aria-live="polite">
        {status === "success" && (
          <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-green-800">
            ¡Mensaje enviado! Te responderé lo antes posible.
          </div>
        )}

        {status === "error" && errorMsg && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-800">
            <p>{errorMsg}</p>
          </div>
        )}
      </div>
    </form>
  );
}
