// Configuración única del sitio: la usan los metadatos, el sitemap, el
// robots.txt y los datos estructurados. Tocar aquí, no en cada archivo.

// Dominio de producción. Se puede sobrescribir con NEXT_PUBLIC_SITE_URL
// (útil si algún día quieres que un despliegue de preview no apunte aquí).
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.entrenubesdescanso.com"
).replace(/\/$/, "");

export const site = {
  nombre: "Entre Nubes Descanso",
  nombreCorto: "Entre Nubes",
  titulo: "Asesora de sueño infantil respetuoso | Entre Nubes Descanso",
  descripcion:
    "Asesoría de sueño infantil respetuoso online. Laura, enfermera y asesora de sueño, acompaña a tu familia a descansar mejor. Valoración gratuita de 30 minutos.",
  lema: "Duerme con tranquilidad, sueña con tranquilidad",
  idioma: "es-ES",
  instagram: "https://www.instagram.com/entrenubesdescanso",
  asesora: {
    nombre: "Laura de la Corte",
    puesto: "Enfermera y asesora de sueño infantil respetuoso",
  },
};

// Ojo: los precios también aparecen en el texto de PlanDeSueno.js.
// Si cambian ahí, cambiarlos aquí.
export const servicios = [
  {
    nombre: "Plan de sueño",
    descripcion:
      "Plan de sueño infantil personalizado en 5 pasos, con seguimiento a lo largo de 5 o 6 semanas.",
    precio: 380,
    edad: "De 6 meses a 2 años y medio",
  },
  {
    nombre: "Consulta puntual",
    descripcion:
      "Consulta puntual por videollamada para resolver una dificultad concreta del sueño, sin seguimiento posterior.",
    precio: 60,
    edad: "Hasta 3 años",
  },
];
