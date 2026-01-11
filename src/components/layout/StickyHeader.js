'use client'

import { useEffect, useState } from "react";
import Logo from "../icons/logo";
import BurgerIcon from "../icons/BurguerMenu";
import ContactButton from "../partial/ContactButton";
import { refLinkHandler } from "@/lib/utils";

const StickyHeader = () => {
  const [showStickyNav, setShowStickyNav] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerLinks = [
    { label: "Sueño respetuoso", destino: "hero" },
    { label: "Quién es Laura", destino: "quienSoy" },
    { label: "Plan", destino: "planSueno" },
    { label: "Relatos familiares", destino: "resenas" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 100;
      setShowStickyNav(shouldShow);

      // Si el sticky desaparece, cerramos el menú móvil
      if (!shouldShow) setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // inicializa estado si ya estás scrolleado

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  const handleMobileNav = (destino) => {
    refLinkHandler(destino);
    setIsMenuOpen(false);
  };

  return (
    <div
      data-component="StickyHeader"
      className={`w-screen fixed z-50 left-0 flex justify-center bg-white shadow-md transition-transform duration-300 transform -top-24 py-3 ${
        showStickyNav ? "translate-y-24" : ""
      }`}
    >
      <div className="w-full lg:max-w-[1800px] px-5 flex justify-between items-center relative">
        <div className="flex gap-4 items-center">
          <Logo classes="text-navy" width="180" />
        </div>

        {/* Desktop nav */}
        <nav className="hidden sm:flex gap-8 items-center">
          {headerLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => refLinkHandler(link.destino)}
              className="cursor-pointer text-navy transition-colors duration-300 rounded-full px-3 hover:bg-navy-light hover:text-white"
            >
              {link.label}
            </button>
          ))}
          <ContactButton label="Contacta" size="px-4 py-2" />
        </nav>

        {/* Burger button */}
        <button
          type="button"
          className="sm:hidden"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <BurgerIcon />
        </button>
      </div>

      {/* Burger Menu (Mobile) */}
      <nav
        id="mobile-menu"
        className={`sm:hidden absolute left-0 top-full w-full bg-white shadow-md overflow-hidden
          transition-[max-height,opacity,transform] duration-300 ease-out
          ${isMenuOpen ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"}
        `}
      >
        <ul className="px-5 py-4 flex flex-col gap-3">
          {headerLinks.map((link, index) => (
            <li key={index}>
              <button
                onClick={() => handleMobileNav(link.destino)}
                className="w-full text-left cursor-pointer text-navy transition-colors duration-300 rounded-full px-3 py-2 hover:bg-navy-light hover:text-white"
              >
                {link.label}
              </button>
            </li>
          ))}

          <div className="pt-2">
            <ContactButton label="Contacta" size="w-full px-4 py-2" />
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default StickyHeader;
