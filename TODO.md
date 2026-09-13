# Pendientes

Backlog vivo del plan de mejoras. Marca con `[x]` lo que se vaya cerrando.

## SEO — pendiente de decisión de contenido

Los dos siguientes no son trabajo de código: hace falta que Laura decida el
texto y el posicionamiento antes de tocar nada.

### [ ] #9 — El `<h1>` no contiene ninguna palabra clave

Hoy el titular del hero es:

> "Porque descansar es una necesidad, mi propósito es acompañarte"

Funciona emocionalmente, pero no le dice a Google de qué va la página. El `<h1>`
es de las señales de contenido con más peso.

Lo que hay que hacer: reescribirlo para que incluya "sueño infantil" o
"asesora de sueño" **sin perder el tono cercano**. No vale meter la palabra
clave con calzador; si el titular suena a folleto, se pierde más en conversión
de lo que se gana en posiciones.

Archivo: `src/components/layout/Hero.js`

### [ ] #12 — No se menciona ninguna ubicación ni el ámbito del servicio

La web no dice en ningún sitio desde dónde ni hasta dónde se trabaja. Eso cierra
la puerta al SEO local y deja al visitante con la duda de si Laura le puede
atender.

Hay que decidir primero el modelo de negocio:

- **Si es 100% online** (el copy dice que las sesiones son por videollamada):
  decirlo explícitamente — "asesoría de sueño infantil online para toda España".
  Es además una palabra clave por la que se busca.
- **Si además atiende en persona** en alguna zona: añadir ciudad/provincia,
  crear ficha en Google Business Profile y ampliar el JSON-LD con la dirección.

Cuando esté decidido, hay que reflejarlo en tres sitios:
- El copy visible (hero y/o sección de servicios).
- `site.descripcion` en `src/lib/site.js`.
- `areaServed` en `src/components/seo/JsonLd.js` (ahora es `Country: España`).

## Bloques del plan aún sin empezar

- **P0 #1** — RGPD y aviso legal: páginas de privacidad y aviso legal, y
  checkbox de consentimiento en el formulario. Los enlaces del footer ya existen
  apuntando a `href="#"`, a la espera de destino.
- **P2** — Rendimiento: `priority` en 4 imágenes, foto de Laura deformada
  (991×1281 servida como 154×154), `planSuenoImg` duplicada, SVG de nubes
  repetido, SVGO, listeners sin throttle.
- **P3** — Accesibilidad: labels del formulario comentados, foco no atrapado en
  el modal, contraste de las tarjetas `bg-navy-light`, dots del slider sin
  `aria-current`, navegación duplicada.
- **P4** — Conversión: sin analítica, email en texto plano en el footer, sin CTA
  de WhatsApp.
- **P5** — Código: `headerLinks` duplicado en 3 componentes, clases inexistentes
  (`bg-bold`, `bg-stone`), `console.log` en `Slider_save.js`, `SliderCard` con
  paleta `slate` en vez de los tokens de marca, restos de create-next-app en
  `public/`, `next lint` deprecado.
