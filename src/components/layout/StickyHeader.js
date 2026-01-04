'use client'

import { useState, useEffect } from "react";
import Logo from "../icons/logo";
import BurgerIcon from "../icons/BurguerMenu";
import CloudDividerMenu from "./CloudDividerMenu";

const StickyHeader = () => {

    const [showStickyNav, setShowStickyNav] = useState(false);
    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 100 ){
            setShowStickyNav(true);
            console.log("SHOW", showStickyNav)
        }
        else{
            setShowStickyNav(false);
            console.log("HIDE", showStickyNav)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    });

    const headerLinks = [
        {label: "Sueño respetuoso", destino: "sueno"},
        {label: "Quién es Laura", destino: "laura"},
        {label: "Plan", destino: "plan"},
        {label: "Relatos familiares", destino: "relatos"},
        {label: "CONTACTA", destino: "contacta"},
    ]

    return (
        <div data-component="StickyHeader" className={`w-screen bg-white fixed z-50 shadow-md transition-transform duration-300 transform -top-20 py-5 ${showStickyNav === true ? "translate-y-20" : ""}`}>
            
            <div className="w-full lg:max-w-[1800px] px-5 flex justify-between items-center relative">
                <div className="flex gap-4 items-center">
                    <Logo classes="text-navy" width="180"/>
                </div>

                <nav className="hidden sm:flex gap-8">
                    {headerLinks.map((link, index)=>(
                        <button key={index} className={`cursor-pointer ${link.label === "CONTACTA" && "text-sm bg-navy text-white rounded-full hover:shadow-xl font-medium px-4 py-2 transition-all duration-300"}`}>
                            {link.label} 
                        </button>
                    ))}
                </nav>

                <button className="sm:hidden">
                    <BurgerIcon/>
                </button>
                <CloudDividerMenu className="inset-x-0 absolute -bottom-20 text-white"/> 
            </div>
        </div>
    )
}

export default StickyHeader
