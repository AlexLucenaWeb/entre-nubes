import Image from "next/image"
import CloudDivider from "../layout/CloudDivider"
import Slider from "../partial/Slider"
import ContactButton from "../partial/ContactButton"

const Asesorias = () => {

    return (
        <section data-component="PlanDeSueno" id="planSueno" className="w-full bg-yellow pt-10 sm:pt-20 pb-20 sm:pb-50 z-10 relative">
            <div className="relative sm:pb-60 lg:pb-40">
                <div className="sm:grid grid-cols-12 w-full max-w-[1580px] px-5 gap-20 items-center mx-auto">
                <div className="sm:mb-10 col-span-6 space-y-4 sm:space-y-9">
                        <p className="bg-white text-navy sm:text-lg px-6 py-2 rounded-full max-w-max">Conoce a tu asesora</p>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl text-navy font-semibold">Plan de sueño</h2>
                        <p className="text-xl text-navy">¿Cómo funciona el plan de sueño infantil respetuoso?</p>
                        <p className="sm:text-xl text-gray">
                            Los planes de sueño están diseñados para mejorar el sueño en unos plazos variables de entre 5 y 6 semanas. Yo os daré una pautas que diseñaremos según vuestro caso particular.
                        </p>
                        <p className="bg-bold text-navy mt-10 font-bold">El plan consta de 5 pasos:</p>
                    </div>
                    <div className="hidden sm:flex col-span-6 items-center">
                        <Image
                            src="/images/planSuenoImg.svg"
                            alt="Entrenubes"
                            width={541}
                            height={541}
                            priority  
                        />
                    </div>
                </div>
                <div className="sm:absolute bottom-10 left-0">
                    <Slider />
                </div>
            </div>
            <div className="px-5">
                <ContactButton label="VALORACIÓN GRATUITA" size="px-12 py-3 text-lg" />
            </div>
            <div className="sm:hidden pt-10 flex items-center">
                <Image
                    src="/images/planSuenoImg.svg"
                    alt="Entrenubes"
                    width={541}
                    height={541}
                    priority  
                />
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 md:h-32 lg:h-40 overflow-hidden flex items-end">
                <CloudDivider className="absolute bottom-0 left-1/2 -translate-x-1/2 block h-full w-auto min-w-[120%] text-green-bg svg-separator-float"/>
                <div className="w-full h-[4px] sm:h-2 bg-green-bg"></div>
            </div>
        </section>
    )
}

export default Asesorias