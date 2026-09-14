"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import ContactForm from "../layout/ContactForm";
import CloseX from "../icons/CloseX";

const ANIM_MS = 220;

const ContactButton = (props) => {
  const { label, size = "", className = "", light } = props;

  const [mounted, setMounted] = useState(false);
  const [renderModal, setRenderModal] = useState(false); // existe en DOM
  const [show, setShow] = useState(false); // activa clases de animación

  const panelRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const disparadorRef = useRef(null); // quién abrió el modal, para devolverle el foco

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

    const SELECTOR_FOCO =
      'a[href], button:not([disabled]), input:not([tabindex="-1"]), textarea, select, [tabindex]:not([tabindex="-1"])';

    const focusablesVisibles = () =>
      [...(panelRef.current?.querySelectorAll(SELECTOR_FOCO) || [])].filter(
        (el) => el.offsetParent !== null
      );

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
        return;
      }

      // Trampa de foco: el tabulador da la vuelta dentro del modal en lugar de
      // salirse a la página de detrás, que está tapada por la capa oscura.
      if (e.key !== "Tab") return;

      const focusables = focusablesVisibles();
      if (!focusables.length) return;

      const primero = focusables[0];
      const ultimo = focusables[focusables.length - 1];
      const activo = document.activeElement;

      if (!panelRef.current?.contains(activo)) {
        e.preventDefault();
        primero.focus();
      } else if (e.shiftKey && activo === primero) {
        e.preventDefault();
        ultimo.focus();
      } else if (!e.shiftKey && activo === ultimo) {
        e.preventDefault();
        primero.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    // foco inicial
    setTimeout(() => {
      focusablesVisibles()[0]?.focus();
    }, 0);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);

      // Devolvemos el foco al botón que abrió el modal
      disparadorRef.current?.focus?.();
    };
  }, [renderModal]);

  function openModal(e) {
    disparadorRef.current = e?.currentTarget ?? null;

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
            <div>
                <button
                type="button"
                onClick={closeModal}
                className="rounded-full w-8 h-8 text-navy cursor-pointer"
                aria-label="Cerrar"
                >
                <CloseX />
                </button>
            </div>
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
        className={`w-full sm:w-auto  rounded-full font-bold transition-all hover:shadow-lg cursor-pointer ${size} ${className} ${light ? "bg-white text-navy" : "bg-navy hover:bg-navy-light text-white"}`}
      >
        {label}
      </button>

      {mounted && modal ? createPortal(modal, document.body) : null}
    </>
  );
};

export default ContactButton;
