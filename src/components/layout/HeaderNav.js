'use client'

import { useState } from "react";
import Logo from "../icons/logo";
import BurgerIcon from "../icons/BurguerMenu";
import ContactButton from "../partial/ContactButton";
import { refLinkHandler } from "@/lib/utils";

const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerLinks = [
    { label: "Sueño respetuoso", destino: "hero" },
    { label: "Quién es Laura", destino: "quienSoy" },
    { label: "Plan", destino: "planSueno" },
    { label: "Relatos familiares", destino: "resenas" },
  ];

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const handleMobileNav = (destino) => {
    refLinkHandler(destino);
    setIsMenuOpen(false);
  };

  return (
    <header
      data-component="Header"
      className="w-full bg-green-bg text-navy relative z-50"
    >
      <div className="w-full flex justify-center items-center py-5">
        <div className="w-full lg:max-w-[1800px] px-5 flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <Logo classes="text-navy" width="180" />
          </div>

          {/* Desktop nav */}
          <nav className="hidden sm:flex gap-6 items-center">
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
            aria-label="Abrir menú"
          >
            <BurgerIcon />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <nav
        id="mobile-menu"
        className={[
          "sm:hidden absolute left-0 right-0 top-full bg-green-bg shadow-md overflow-hidden z-50",
          "transition-all duration-300 ease-out",
          isMenuOpen
            ? "max-h-screen opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2 pointer-events-none",
        ].join(" ")}
      >
        <ul className="px-5 pb-5 pt-4 flex flex-col gap-3">
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
    </header>
  );
};

export default HeaderNav;