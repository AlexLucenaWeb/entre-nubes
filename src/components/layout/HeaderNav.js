'use client'

import Logo from "../icons/logo";
import BurgerIcon from "../icons/BurguerMenu";
import ContactButton from "../partial/ContactButton";
import { refLinkHandler } from "@/lib/utils";

const HeaderNav = () => {

    const headerLinks = [
        {label: "Sueño respetuoso", destino: "hero"},
        {label: "Quién es Laura", destino: "quienSoy"},
        {label: "Plan", destino: "planSueno"},
        {label: "Relatos familiares", destino: "resenas"},
        
    ]

    return (
        <div data-component="Header" className="w-full flex justify-center items-center bg-green-bg sm:bg-green-bg text-navy py-5">
            <div className="w-full lg:max-w-[1800px] px-5 flex justify-between items-center relative">
                <div className="flex gap-4 items-center">
                    <Logo classes="text-navy" width="180"/>
                </div>

                <nav className="hidden sm:flex gap-6">
                    {headerLinks.map((link, index)=>(
                        <button key={index} onClick={() => refLinkHandler(link.destino)} className="cursor-pointer text-navy transition-colors duration-300 rounded-full px-3 hover:bg-navy-light hover:text-white">
                            {link.label}
                        </button>
                    ))}
                    <ContactButton label="Contacta" size="px-4 py-2"/>
                </nav>

                <button className="sm:hidden">
                    <BurgerIcon/>
                </button>
            </div>
        </div>
    )
}

export default HeaderNav