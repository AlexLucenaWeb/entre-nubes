"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import ContactForm from "../layout/ContactForm";

const ANIM_MS = 220;

const ContactButton = (props) => {
  const { label, size = "", className = "" } = props;

  const [mounted, setMounted] = useState(false);
  const [renderModal, setRenderModal] = useState(false); // existe en DOM
  const [show, setShow] = useState(false); // activa clases de animación

  const panelRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  // Bloquear scroll + Escape mientras el modal esté renderizado
  useEffect(() => {
    if (!renderModal) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", onKeyDown);

    // foco inicial
    setTimeout(() => {
      const first = panelRef.current?.querySelector("input, textarea, button");
      first?.focus();
    }, 0);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [renderModal]);

  function openModal() {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);

    setRenderModal(true);

    // siguiente “tick” para que el transition funcione
    requestAnimationFrame(() => setShow(true));
  }

  function closeModal() {
    setShow(false);

    // esperar a que termine la animación antes de desmontar
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setRenderModal(false);
    }, ANIM_MS);
  }

  const modal = renderModal ? (
    <div className="fixed inset-0 z-[9999]">
      {/* Overlay (fade) */}
      <div
        className={[
          "absolute inset-0 bg-black/50 backdrop-blur-[2px]",
          "transition-opacity duration-200 motion-reduce:transition-none",
          show ? "opacity-100" : "opacity-0",
        ].join(" ")}
        onClick={closeModal}
        aria-hidden="true"
      />

      {/* Container fullscreen */}
      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
        {/* Card centrada (fade + slide) */}
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Formulario de contacto"
          onClick={(e) => e.stopPropagation()}
          className={[
            "w-full max-w-2xl bg-white shadow-2xl",
            "rounded-2xl overflow-hidden",
            "max-h-[calc(100vh-2rem)] sm:max-h-[calc(100vh-4rem)]",
            "flex flex-col",
            "transition-all duration-200 motion-reduce:transition-none",
            show ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-[0.99]",
          ].join(" ")}
        >
          {/* Header */}
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-black/10 bg-white px-5 py-4">
            <p className="font-bold text-navy">Contacto</p>
            <button
              type="button"
              onClick={closeModal}
              className="rounded-full px-3 py-2 text-navy hover:bg-black/5"
              aria-label="Cerrar"
            >
              ✕
            </button>
          </div>

          {/* Content scrollable */}
          <div className="p-5 overflow-y-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className={`w-full sm:w-auto bg-navy text-white rounded-full font-bold transition-all hover:shadow-lg cursor-pointer ${size} ${className}`}
      >
        {label}
      </button>

      {mounted && modal ? createPortal(modal, document.body) : null}
    </>
  );
};

export default ContactButton;
