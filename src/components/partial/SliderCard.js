// Permite marcar palabras en negrita dentro de la descripción con **asteriscos**
function renderConNegrita(texto) {
  return String(texto)
    .split(/(\*\*[^*]+\*\*)/g)
    .map((trozo, i) =>
      trozo.startsWith("**") && trozo.endsWith("**") ? (
        <strong key={i} className="font-semibold text-slate-900">
          {trozo.slice(2, -2)}
        </strong>
      ) : (
        trozo
      )
    );
}

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
          {renderConNegrita(description)}
        </p>
      </div>
    </article>
  );
}
