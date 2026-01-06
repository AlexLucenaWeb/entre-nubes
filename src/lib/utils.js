export function refLinkHandler(divId, offSet) {
  if (typeof window === "undefined") return;

  const destination = document.getElementById(divId);
  if (!destination) return;

  window.scrollTo({
    top: destination.getBoundingClientRect().top + window.scrollY - offSet,
    behavior: "smooth",
  });
}
