'use client'

import Logo from "../icons/logo"
import Insta from "../icons/insta"
import ContactButton from "../partial/ContactButton"
import { refLinkHandler } from "@/lib/utils"

const Footer = () => {

    return (
        <div data-component="Footer" className="w-full text-white font-normal">
            <div className="w-full bg-navy px-5 py-16 flex justify-center items-center flex-col gap-6">
                <Logo classes="text-green-bg"/>
                <p>Duerme con tranquilidad, sueña con tranquilidad</p>
                <div className="flex gap-6 flex-col sm:flex-row">
                    <ContactButton label="VALORACIÓN GRATUITA" size="px-12 py-3 text-lg" light={true}/>
                    <a href="mailto:lauradelacorteasesora@gmail.com?subject=Consulta%20Sueno%20Respetuoso=Hola%20Laura," target="_blank" className="text-center bg-navy-light text-white px-10 sm:px-12 py-3 rounded-full sm:text-lg font-bold transition-all hover:shadow-xl cursor-pointer">
                        CONTACTA VIA MAIL
                    </a>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 py-6 items-center">
                    <button onClick={() => refLinkHandler("hero")} className="cursor-pointer hover:text-yellow transition-colors duration-300">Sueño respetuoso</button>
                    <span className="hidden sm:block w-px h-5 bg-white"></span>
                    <button onClick={() => refLinkHandler("quienSoy")} className="cursor-pointer hover:text-yellow transition-colors duration-300">Quién es Laura</button>
                    <span className="hidden sm:block w-px h-5 bg-white"></span>
                    <button onClick={() => refLinkHandler("planSueno")} className="cursor-pointer hover:text-yellow transition-colors duration-300">Nuestro Plan</button>
                    <span className="hidden sm:block w-px h-5 bg-white"></span>
                    <button onClick={() => refLinkHandler("resenas" )} className="cursor-pointer hover:text-yellow transition-colors duration-300">Relatos familiares</button>
                </div>
                <div className="flex gap-2">
                    <p>Síguenos en</p>
                    <Insta />
                    <a href="https://www.instagram.com/entrenubesdescanso" target="_blank" className="hover:text-yellow transition-colors duration-300">
                        @entrenubes_sueno
                    </a>
                </div>
            </div>
            <div className="bg-navy-light flex flex-col sm:flex-row gap-6 items-center justify-center py-10">
                <p>© 2025 entrenubes. Todos los derechos reservados</p>
                <a href="#">Política de privacidad</a>
                <a href="#">Términos y condiciones</a>
                <a href="#">Política de pacientes</a>
            </div>
        </div>
    )
}

export default Footer