export default function SliderCard({ step, title, description }) {
  return (
    <article className="relative mr-2 rounded-[32px] bg-white p-6 sm:p-8 shadow-lg">
      <div className="flex gap-4 pb-4">
        {/* círculo con el número */}
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-slate-900 text-lg font-semibold text-white">
          {step}
        </div>
        <h3 className="text-lg font-semibold text-slate-900 md:text-xl">
          {title}
        </h3>
      </div>


      {/* contenido */}
      <p className="text-sm leading-relaxed text-slate-600 md:text-[0.95rem]">
        {description}
      </p>
    </article>
  );
}
