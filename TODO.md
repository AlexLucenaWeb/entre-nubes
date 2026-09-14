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
- [x] **P2** — Rendimiento: **completo**.
  - Foto de Laura: declaraba 154×154 sobre un original 991×1281, así que salía
    achatada. Ahora 154×199 (ratio real). Desaparece el warning de next/image.
  - `priority`: de 4 imágenes a 1 (solo el hero, que es el LCP).
  - SVGO sobre los dos SVG: 111 KB → 87 KB. Son bytes reales para el visitante
    porque next/image **no optimiza SVG**: se sirven crudos desde `/images/`.
  - Nubes: el `path` de 2.374 caracteres se define una vez en `CloudSprite.js`
    y los 3 separadores lo reutilizan con `<use>`. HTML: −8,5 KB.
  - Listeners de scroll y resize: solo llaman a `setState` al cruzar el umbral,
    no en cada evento.
  - `planSuenoImg` sigue duplicada a propósito: el orden en móvil y escritorio
    difiere, y al compartir `src` el navegador la descarga una sola vez.
- **P3** — Accesibilidad: hecho todo menos el slider.
  - [x] Contraste de las tarjetas `bg-navy-light`: `text-white`. Antes heredaba
    el color del `body`, que cambiaba según el tema del sistema del visitante.
    Contraste medido: 7,45:1, cumple WCAG AAA.
  - [x] Formulario: los tres `<label>` estaban comentados. Ahora existen con
    `sr-only` (sin cambio visual), más `aria-invalid` y `aria-describedby` en el
    email y un `role="status"` que anuncia el resultado del envío.
  - [x] Modal: trampa de foco con Tab y Shift+Tab, y devolución del foco al
    botón que lo abrió.
  - [x] `id="mobile-menu"` estaba duplicado en los dos headers, lo que además
    rompía el `aria-controls` del sticky. Ahora `menu-movil-cabecera` y
    `menu-movil-sticky`.
  - [x] Landmarks: los 4 `<nav>` etiquetados, `Footer` pasa de `<div>` a
    `<footer>`. axe: de 2 infracciones a 0.
  - [x] Elementos fantasma en el tabulador: el sticky fuera de pantalla y los
    menús móviles cerrados (`max-h-0`, que no saca del foco) llevan `inert`.
    De 46 paradas de tabulación a 35.
  - [x] Enlace "Saltar al contenido" y `aria-label` en el burger del sticky.
  - [ ] **Slider**: falta `aria-current` en los puntos, una región `aria-live`
    que anuncie el cambio de tarjeta y navegación con flechas del teclado.
- **P4** — Conversión: sin analítica, email en texto plano en el footer, sin CTA
  de WhatsApp.
- **P5** — Código: `headerLinks` duplicado en 3 componentes, clases inexistentes
  (`bg-bold`, `bg-stone`), `console.log` en `Slider_save.js`, `SliderCard` con
  paleta `slate` en vez de los tokens de marca, restos de create-next-app en
  `public/`, `next lint` deprecado.
