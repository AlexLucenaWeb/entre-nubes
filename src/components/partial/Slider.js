"use client";

import { useEffect, useRef, useState } from "react";
import IconArrow from "../icons/arrow";
import SliderCard from "./SliderCard";

const SLIDES = [
  {
    step: 1,
    title: "Llamada de valoración gratuita",
    description:
      "En esta primera toma de contacto charlamos durante unos 30 minutos sobre las dificultades que estáis atravesando y qué tipo de acompañamiento sería el más adecuado para vuestra familia.",
  },
  {
    step: 2,
    title: "Primera sesión del plan de sueño",
    description:
      "Diseñamos e implantamos vuestro plan de sueño personalizado. Lo construimos juntos, ajustando mis recomendaciones a vuestro ritmo y necesidades.",
  },
  {
    step: 3,
    title: "Seguimiento y ajustes",
    description:
      "Revisamos cómo está funcionando el plan, resolvemos dudas y hacemos los ajustes necesarios para que el bebé y la familia vayáis ganando confianza.",
  },
  {
    step: 4,
    title: "Consolidación de hábitos",
    description:
      "Trabajamos en consolidar los nuevos hábitos de sueño para que los resultados se mantengan en el tiempo de forma estable.",
  },
  {
    step: 5,
    title: "Cierre y próximos pasos",
    description:
      "Valoramos todo el proceso, resolvemos las últimas dudas y os dejo una hoja de ruta para gestionar futuros cambios en las rutinas.",
  },
];

function NextButton({ canGoNext, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!canGoNext}
      aria-label="Ir al siguiente paso"
      className={`z-10 flex-none hidden sm:flex h-10 w-10 items-center justify-center rounded-full shadow-xl transition ${
        canGoNext
          ? "cursor-pointer hover:scale-105 hover:shadow-2xl active:scale-95"
          : "cursor-default opacity-40 shadow-none"
      }`}
    >
      <IconArrow direction="right"/>
    </button>
  );
}

function RestartButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Volver al inicio"
      className="z-10 flex-none hidden sm:flex h-8 w-8 items-center justify-center  shadow-xl transition cursor-pointer hover:scale-105 hover:shadow-2xl active:scale-95"
    >
      <IconArrow direction="left"/>
    </button>
  );
}

export default function Slider() {
  const length = SLIDES.length;

  const DESKTOP_SLIDES_PER_VIEW = 2.25; // 2 cards + “peek” de la 3ª
  const MOBILE_SLIDES_PER_VIEW = 1;

  const [slidesPerView, setSlidesPerView] = useState(DESKTOP_SLIDES_PER_VIEW);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isLocked, setIsLocked] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);

  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const nextSlidesPerView =
        window.innerWidth < 768 ? MOBILE_SLIDES_PER_VIEW : DESKTOP_SLIDES_PER_VIEW;

      setSlidesPerView(nextSlidesPerView);
      // mantenemos el índice y lo “clamp” por si acaso
      setCurrentIndex((prev) => Math.max(0, Math.min(prev, length - 1)));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [length]);

  const totalSlides = length;

  const canGoNext = currentIndex < length - 1;
  const canGoPrev = currentIndex > 0;
  const isAtEnd = currentIndex === length - 1;

  const lock = (ms = 500) => {
    setIsLocked(true);
    setTimeout(() => setIsLocked(false), ms);
  };

  const next = () => {
    if (isLocked || !canGoNext) return;
    lock(500);
    setCurrentIndex((prev) => Math.min(prev + 1, length - 1));
  };

  const prev = () => {
    if (isLocked || !canGoPrev) return;
    lock(500);
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToStart = () => {
    if (isLocked) return;
    lock(500);
    setCurrentIndex(0);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.changedTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const distance = touchStartX - touchEndX;

    if (distance > 50) next();
    else if (distance < -50) prev();

    setTouchStartX(null);
  };

  const translateX = -(currentIndex * (100 / totalSlides));

  return (
    <div className="w-full overflow-hidden pl-3 relative pt-4 sm:pt-0 pb-16 sm:pb-0" data-component="Slider">
      <div
        ref={sliderRef}
        className="flex transition-transform duration-500 ease-in-out"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{
          width: `${(totalSlides * 100) / slidesPerView}%`,
          transform: `translateX(${translateX}%)`,
        }}
      >
        {SLIDES.map((slide, i) => (
          <div
            key={slide.step}
            className="flex-shrink-0"
            style={{ width: `${100 / totalSlides}%` }}
          >
            <div className="px-2 flex items-center">
              <SliderCard {...slide} />

              {/* Botón “después de la tarjeta” (tu layout) */}
              {i < length - 1 ? (
                <NextButton canGoNext={canGoNext} onClick={next} />
              ) : (
                 <RestartButton onClick={goToStart} />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="mt-4 px-4">
        <div className="flex justify-center space-x-2 sm:hidden">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              aria-label={`Ir a la tarjeta ${i + 1}`}
              className={`w-8 h-8 text-sm rounded-full transition-colors duration-200 text-navy ${
                i === currentIndex ? "bg-navy text-white" : "bg-stone text-navy"
              }`}
            >
              {i+1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
