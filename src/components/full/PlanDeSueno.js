import Image from "next/image"
import CloudDivider from "../layout/CloudDivider"
import Slider from "../partial/Slider"
import ContactButton from "../partial/ContactButton"

const Asesorias = () => {

    return (
        <section data-component="PlanDeSueno" id="planSueno" className="w-full bg-yellow pt-10 sm:pt-20 pb-20 sm:pb-50 z-10 relative">
            <div>
                <div className="sm:grid grid-cols-12 w-full max-w-[1580px] px-5 gap-20 items-center mx-auto">
                <div className="sm:mb-2 col-span-6 space-y-4 sm:space-y-9">
                        <p className="bg-white text-navy sm:text-lg px-6 py-2 rounded-full max-w-max">Servicios</p>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl text-navy font-semibold">Plan de sueño</h2>
                        <p className="text-xl text-navy">¿Cómo funciona el plan de sueño infantil respetuoso?</p>
                        <p className="sm:text-xl text-gray">
                            Los planes de sueño están diseñados para mejorar el sueño en unos plazos variables de entre 5 y 6 semanas. Yo os daré una pautas que diseñaremos según vuestro caso particular.
                        </p>
                        <ul className="space-y-3 sm:text-xl text-navy list-disc pl-5 marker:text-navy">
                            <li><span className="font-bold">Precio:</span> 380&nbsp;€</li>
                            <li><span className="font-bold">Edad recomendada:</span> de 6 meses a 2 años y medio</li>
                            <li className="font-bold">Seguimiento personalizado</li>
                        </ul>
                        <p className="bg-bold text-navy mt-10 font-bold">El plan consta de 5 pasos:</p>
                    </div>
                    <div className="hidden sm:flex col-span-6 items-center">
                        <Image
                            src="/images/planSuenoImg.svg"
                            alt="Madre con su bebé en brazos junto a una cuna"
                            width={541}
                            height={541}
                            priority  
                        />
                    </div>
                </div>
                <div className="mt-2 sm:mt-4">
                    <Slider />
                </div>
            </div>
            <div className="w-full max-w-[1580px] px-5 mx-auto pt-10 sm:pt-20">
                <div className="sm:grid grid-cols-12 gap-20 items-center">
                    <div className="col-span-6 space-y-4 sm:space-y-9">
                        <h3 className="text-3xl sm:text-4xl md:text-5xl text-navy font-semibold">Consulta puntual</h3>
                        <p className="sm:text-xl text-gray">
                            Una consulta puntual para acompañaros en un momento concreto, cambio o situación que queráis consultar sin precisar seguimiento.
                        </p>
                        <p className="sm:text-xl text-gray">
                            Hablamos por videollamada y me contáis la dificultad que atravesáis y lo que os preocupa, y os guío en la necesidad de implementar pautas nuevas que os permitan mejorar.
                        </p>
                        <ul className="space-y-3 sm:text-xl text-navy list-disc pl-5 marker:text-navy">
                            <li><span className="font-bold">Precio:</span> 60&nbsp;€</li>
                            <li><span className="font-bold">Edad recomendada:</span> hasta 3 años</li>
                        </ul>
                    </div>
                    <div className="col-span-6 flex items-center mt-10 sm:mt-0">
                        <div className="rounded-4xl bg-white shadow-lg p-6 sm:p-12 space-y-6 sm:space-y-8 text-navy">
                            <p className="font-bold">Las dificultades más habituales son:</p>
                            <ul className="space-y-3 sm:text-xl list-disc pl-5 marker:text-navy">
                                <li>Despertares nocturnos</li>
                                <li>Hora de ir a dormir</li>
                                <li>Consulta acerca de siestas (número, horario y duración)</li>
                                <li>Cambio de habitación</li>
                                <li>Ajustes en rutina de noche</li>
                            </ul>
                            <p className="sm:text-xl">
                                Siempre adaptado a vuestra situación familiar. Os envío un documento con pautas claras y personalizadas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-5 py-4 lg:py-6">
                <ContactButton label="VALORACIÓN GRATUITA" size="px-12 py-3 text-lg" />
            </div>
            <div className="sm:hidden pt-10 flex items-center">
                <Image
                    src="/images/planSuenoImg.svg"
                    alt="Madre con su bebé en brazos junto a una cuna"
                    width={541}
                    height={541}
                    priority  
                />
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 md:h-32 lg:h-40 2xl:h-60 overflow-hidden flex items-end">
                <CloudDivider className="absolute bottom-0 left-1/2 -translate-x-1/2 block h-full w-auto min-w-[120%] text-green-bg svg-separator-float"/>
                <div className="w-full h-[4px] sm:h-2 bg-green-bg"></div>
            </div>
        </section>
    )
}

export default Asesorias