'use client';

import { useRef, useState } from 'react';
import SliderCard from './SliderCard';

const SLIDES = [
  {
    step: 1,
    title: 'Llamada de valoración gratuita',
    description:
      'En esta primera toma de contacto charlamos durante unos 30 minutos sobre las dificultades que estáis atravesando y qué tipo de acompañamiento sería el más adecuado para vuestra familia.',
  },
  {
    step: 2,
    title: 'Primera sesión del plan de sueño',
    description:
      'Diseñamos e implantamos vuestro plan de sueño personalizado. Lo construimos juntos, ajustando mis recomendaciones a vuestro ritmo y necesidades.',
  },
  {
    step: 3,
    title: 'Seguimiento y ajustes',
    description:
      'Revisamos cómo está funcionando el plan, resolvemos dudas y hacemos los ajustes necesarios para que el bebé y la familia vayáis ganando confianza.',
  },
  {
    step: 4,
    title: 'Consolidación de hábitos',
    description:
      'Trabajamos en consolidar los nuevos hábitos de sueño para que los resultados se mantengan en el tiempo de forma estable.',
  },
  {
    step: 5,
    title: 'Cierre y próximos pasos',
    description:
      'Valoramos todo el proceso, resolvemos las últimas dudas y os dejo una hoja de ruta para gestionar futuros cambios en las rutinas.',
  },
];

export default function Slider() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  const maxIndex = Math.max(0, SLIDES.length - 3);
  const canGoNext = index < maxIndex;

  const scrollToIndex = (i) => {
    if (!trackRef.current) return;
    const card = trackRef.current.children[i];
    if (!card) return;
    console.log("ofset ", card.offsetLeft)
    trackRef.current.scrollTo({
      left: card.offsetLeft + 100,
      behavior: 'smooth',
    });
  };

  const handleNext = () => {
    if (!canGoNext) return;
    const nextIndex = index + 1;
    setIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const handleDotClick = (i) => {
    setIndex(i);
    scrollToIndex(i);
  };

  return (
    <section className="w-full bg-yellow py-10 sm:py-12">
      <div className="relative mx-auto">

        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-hidden scroll-smooth pb-6 "
        >
          {SLIDES.map((slide) => (
            <SliderCard
              key={slide.step}
              step={slide.step}
              title={slide.title}
              description={slide.description}
            />
          ))}
        </div>
      </div>

      {/* Puntos de navegación */}
      <div className="mt-6 flex justify-center gap-3">
        {Array.from({ length: SLIDES.length }).map((_, i) => {
          const active = i === index;
          return (
            <button
              key={i}
              type="button"
              onClick={() => handleDotClick(i)}
              aria-label={`Ir al paso ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full border border-transparent transition ${
                active ? 'bg-slate-900' : 'bg-[#d0c5a8] hover:bg-slate-700'
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}

function NextButton({ canGoNext, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!canGoNext}
      aria-label="Ir al siguiente paso"
      className={`absolute left-1/2 top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900 text-xl font-semibold text-white shadow-xl transition ${
        canGoNext
          ? 'cursor-pointer hover:scale-105 hover:shadow-2xl active:scale-95'
          : 'cursor-default opacity-40 shadow-none'
      }`}
    >
      &gt;
    </button>
  );
}
