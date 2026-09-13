# Entre Nubes

Landing page one-page de **Entre Nubes Descanso**, la web de Laura (enfermera y asesora de sueño infantil respetuoso). Único objetivo del sitio: que las familias pidan una "valoración gratuita" a través del formulario de contacto.

Todo el contenido visible está **en castellano**. Los comentarios del código también. Mantén ese idioma al añadir texto o copys.

## Stack

- **Next.js 15** (App Router) + **React 19**, en **JavaScript puro** (no TypeScript)
- **Tailwind CSS v4** — configuración CSS-first, sin `tailwind.config.js`
- **Resend** para el envío del formulario de contacto
- Alias de imports: `@/*` → `./src/*` (`jsconfig.json`)

## Comandos

```bash
npm run dev     # servidor de desarrollo en http://localhost:3000
npm run build   # build de producción
npm run start   # sirve el build
npm run lint    # ESLint (next/core-web-vitals)
```

No hay tests en el proyecto.

## Estructura

```
src/app/
  layout.js               # RootLayout: HeaderNav + StickyHeader + children + Footer, lang="es"
  page.js                 # home: monta las secciones en orden + <div id="modal-root" />
  globals.css             # Tailwind + tokens de color + animación de las nubes
  api/contact/route.js    # POST → envía el email con Resend
src/components/
  layout/                 # estructura de página: HeaderNav, StickyHeader, Footer, Hero, CloudDivider, ContactForm
  full/                   # secciones completas de la home: QuienSoy, PlanDeSueno, Resenas, Planes
  partial/                # piezas reutilizables: ContactButton, Slider, SliderCard, Button
  icons/                  # SVG inline como componentes (logo, star, arrow, insta, BurguerMenu, CloseX)
src/lib/utils.js          # refLinkHandler: scroll suave a una sección por id
public/images/            # imágenes y SVG del sitio
```

## Convenciones del proyecto

**Colores: usa siempre los tokens, nunca hex sueltos.** Están definidos en `src/app/globals.css` como variables CSS y expuestos a Tailwind vía `@theme inline`. Disponibles: `yellow`, `navy`, `navy-light`, `green`, `green-light`, `gray`, `green-bg`, `background`, `foreground`. Se usan como cualquier utilidad Tailwind: `bg-navy`, `text-green`, `border-yellow`.

**`data-component` en el nodo raíz.** Casi todos los componentes llevan `data-component="NombreDelComponente"` en su elemento externo, para poder localizarlos en el DOM. Mantén la costumbre en componentes nuevos.

**Navegación por scroll, no por rutas.** Es una sola página. Los enlaces del header, del sticky y del footer llaman a `refLinkHandler(id)` de `@/lib/utils`, que hace scroll suave con un offset distinto en móvil y desktop. Los ids de sección son: `hero`, `quienSoy`, `planSueno`, `resenas`.

> Si añades o renombras una sección, actualiza el array `headerLinks` **en los dos sitios**: `HeaderNav.js` y `StickyHeader.js` (están duplicados a propósito), además de los botones del `Footer.js`.

**Separadores de nubes entre secciones.** Cada sección que termina en nube repite este patrón al final, con `relative` en la `<section>`:

```jsx
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 md:h-32 lg:h-40 2xl:h-60 overflow-hidden flex items-end">
  <CloudDivider className="absolute bottom-0 left-1/2 -translate-x-1/2 block h-full w-auto min-w-[120%] text-<color-de-la-siguiente-seccion> svg-separator-float" />
  <div className="w-full h-[4px] sm:h-2 bg-<color-de-la-siguiente-seccion>"></div>
</div>
```

El color del divider (`text-…`) y el de la franja (`bg-…`) deben ser **el color de fondo de la sección siguiente**, no el de la actual. `svg-separator-float` es la animación de flotado, definida en `globals.css` y desactivada con `prefers-reduced-motion`. `CloudDividerMenu` es la variante invertida que usa el menú móvil.

**Modal de contacto.** `ContactButton` es un client component que abre un modal con `createPortal` sobre `#modal-root` (el div está en `page.js`; si se elimina, el modal deja de funcionar). El modal bloquea el scroll del body, cierra con `Escape` y tiene una animación de 220 ms (`ANIM_MS`). Dentro renderiza `ContactForm`.

**Client vs server components.** Por defecto, server. Llevan `'use client'` solo los que necesitan estado o eventos: `HeaderNav`, `StickyHeader`, `Footer`, `ContactForm`, `ContactButton`, `Slider`. Las secciones (`Hero`, `QuienSoy`, `PlanDeSueno`, `Resenas`) son server components.

**Contenido hardcodeado.** No hay CMS ni fuente de datos externa. Los textos de reseñas (`Resenas.js`) y los pasos del plan (`SLIDES` en `Slider.js`) son arrays dentro de sus propios componentes. Para cambiar copys, se edita el componente.

## Formulario de contacto

`ContactForm` (cliente) hace `POST /api/contact` con `{ name, email, notes }`. La ruta (`src/app/api/contact/route.js`) valida, recorta longitudes, escapa HTML y envía el correo con Resend, poniendo el email del visitante como `replyTo`.

Variables de entorno, en `.env.local` (gitignoreado, **nunca commitear**):

| Variable | Uso |
|---|---|
| `RESEND_API_KEY` | API key de Resend. Sin ella la ruta devuelve 500. |
| `CONTACT_TO` | Destinatario de los avisos. Sin ella la ruta devuelve 500. |
| `RESEND_FROM` | Remitente. En producción debe ser un dominio verificado en Resend; el valor por defecto del código es solo de pruebas. |

La validación está duplicada a propósito en cliente y servidor (mismo regex de email). Si cambias las reglas, cámbialas en los dos sitios.

## Cosas a tener en cuenta

- **Código muerto que no conviene tocar sin preguntar:** `full/Planes.js` (sección con lorem ipsum y colores `bg-blue-500`, se importa en `page.js` como `Valoracion` pero **no se renderiza**), `partial/Slider_save.js` (versión anterior del slider) y `partial/Button.js` (sin usar).
- Hay clases que no existen en el tema y por tanto no pintan nada: `bg-bold` en `PlanDeSueno.js` y `bg-stone` en los dots del `Slider.js`.
- `globals.css` tiene un bloque `prefers-color-scheme: dark` heredado de `create-next-app` que cambia `--background`/`--foreground`. Las secciones fijan su propio fondo, así que apenas se nota, pero está ahí.
- Las fuentes `--font-geist-sans` / `--font-geist-mono` se declaran en `@theme` pero nunca se cargan; el `body` acaba usando `Arial, Helvetica, sans-serif`.

## Git

Rama de producción: `main`. El trabajo se hace en ramas `dev*` (`dev`, `dev-cambios`, `dev_slider`, …) y se mergea a `main`. No commitees sobre `main` directamente.
