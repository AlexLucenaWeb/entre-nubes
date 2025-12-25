export default function SliderCard({ step, title, description }) {
  return (
    <article
      className="relative mr-4 flex gap-6 rounded-[32px] bg-white p-6 sm:p-8 shadow-lg"
    >
      {/* círculo con el número */}
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-slate-900 text-lg font-semibold text-white">
        {step}
      </div>

      {/* contenido */}
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-slate-900 md:text-xl">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-600 md:text-[0.95rem]">
          {description}
        </p>
      </div>
    </article>
  );
}
