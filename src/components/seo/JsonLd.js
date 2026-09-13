import { site, siteUrl, servicios } from "@/lib/site";
import { resenas } from "@/lib/resenas";

// Datos estructurados schema.org. Le explican a Google qué es este negocio,
// quién es Laura, qué servicios ofrece y a qué precio.
export default function JsonLd() {
  const idNegocio = `${siteUrl}/#negocio`;
  const idLaura = `${siteUrl}/#laura`;

  const grafo = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#web`,
        url: `${siteUrl}/`,
        name: site.nombre,
        description: site.descripcion,
        inLanguage: site.idioma,
        publisher: { "@id": idNegocio },
      },
      {
        "@type": "ProfessionalService",
        "@id": idNegocio,
        name: site.nombre,
        description: site.descripcion,
        slogan: site.lema,
        url: `${siteUrl}/`,
        image: `${siteUrl}/opengraph-image`,
        priceRange: "60€ - 380€",
        areaServed: { "@type": "Country", name: "España" },
        availableLanguage: "es",
        sameAs: [site.instagram],
        founder: { "@id": idLaura },
        employee: { "@id": idLaura },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: 5,
          bestRating: 5,
          reviewCount: resenas.length,
        },
        review: resenas.map((resena) => ({
          "@type": "Review",
          name: resena.title,
          reviewBody: resena.text,
          author: { "@type": "Person", name: resena.autor },
          reviewRating: {
            "@type": "Rating",
            ratingValue: 5,
            bestRating: 5,
          },
        })),
      },
      {
        "@type": "Person",
        "@id": idLaura,
        name: site.asesora.nombre,
        jobTitle: site.asesora.puesto,
        image: `${siteUrl}/images/lauraOpt.png`,
        worksFor: { "@id": idNegocio },
        knowsAbout: [
          "Sueño infantil",
          "Descanso del bebé",
          "Crianza respetuosa",
          "Enfermería",
        ],
      },
      ...servicios.map((servicio) => ({
        "@type": "Service",
        name: servicio.nombre,
        description: servicio.descripcion,
        serviceType: "Asesoría de sueño infantil",
        provider: { "@id": idNegocio },
        areaServed: { "@type": "Country", name: "España" },
        offers: {
          "@type": "Offer",
          price: servicio.precio,
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          url: `${siteUrl}/`,
        },
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(grafo) }}
    />
  );
}
