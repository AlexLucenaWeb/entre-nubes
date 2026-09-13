export function refLinkHandler(divId) {
  if (typeof window === "undefined") return;

  // Tailwind: lg = 1024px
  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

  // Ajusta estos valores a la altura real de tu header en móvil/desktop
  const offSet = isDesktop ? 10 : 40;

  const destination = document.getElementById(divId);
  if (!destination) return;

  const top =
    destination.getBoundingClientRect().top + window.scrollY - offSet;

  window.scrollTo({ top, behavior: "smooth" });
}

// Para enlaces <a href="#seccion">. Mantiene el scroll suave pero deja que el
// navegador haga lo suyo en cmd+click, ctrl+click o click con rueda, para que
// "abrir en pestaña nueva" siga funcionando.
export function anchorScrollHandler(e, divId) {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

  e.preventDefault();
  refLinkHandler(divId);

  // Dejamos el hash en la barra de direcciones para que el enlace se pueda
  // copiar y compartir, pero sin añadir una entrada al historial.
  if (typeof window !== "undefined") {
    window.history.replaceState(null, "", `#${divId}`);
  }
}
