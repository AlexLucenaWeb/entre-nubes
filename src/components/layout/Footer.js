import Logo from "../icons/logo"
import Insta from "../icons/insta"

const Footer = () => {

    return (
        <div data-component="Footer" className="w-full text-white font-normal">
            <div className="w-full bg-navy px-5 py-16 flex justify-center items-center flex-col gap-6">
                <Logo classes="text-green-bg"/>
                <p>Duerme con tranquilidad, sueña con tranquilidad</p>
                <div className="flex gap-6 flex-col sm:flex-row">
                    <button className="bg-white text-navy px-10 sm:px-12 py-3 rounded-full sm:text-lg font-bold transition-all hover:shadow-xl cursor-pointer">VALORACIÓN GRATUITA</button>
                    <button className="bg-navy-light text-white px-10 sm:px-12 py-3 rounded-full sm:text-lg font-bold transition-all hover:shadow-xl cursor-pointer">CONTACTA VIA MAIL</button>
                </div>
                <div className="flex flex-col gap-6 py-6 items-center">
                    <a href="#">Sueño respetuoso</a>
                    <span className="hidden sm:block w-px h-5 bg-white"></span>
                    <a href="#">Quién es Laura</a>
                    <span className="hidden sm:block w-px h-5 bg-white"></span>
                    <a href="#">Plan</a>
                    <span className="hidden sm:block w-px h-5 bg-white"></span>
                    <a href="#">Relatos familiares</a>
                </div>
                <div className="flex gap-2">
                    <p>Síguenos en</p>
                    <Insta />
                    <a href="#" className="flex">
                        @entrenubes_sueno
                    </a>
                </div>
            </div>
            <div className="bg-navy-light flex flex-col sm:flex-row gap-6 items-center justify-center py-10">
                <a href="#">© 2025 entrenubes. Todos los derechos reservados</a>
                <a href="#">Política de privacidad</a>
                <a href="#">Términos y condiciones</a>
                <a href="#">Política de pacientes</a>
            </div>
        </div>
    )
}

export default Footer