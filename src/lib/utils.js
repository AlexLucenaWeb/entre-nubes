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
