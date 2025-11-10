import Image from "next/image"
import CloudDivider from "../layout/CloudDivider"

const Asesorias = () => {

    return (
        <section data-component="PlanDeSueno" className="w-full bg-yellow py-20 z-10">
            <div className="grid grid-cols-12 w-full max-w-[1580px] px-5 gap-20 items-center">
               <div className="mb-10 col-span-6 space-y-9">
                    <p className="bg-white text-navy text-lg px-6 py-2 rounded-full max-w-max">Conoce a tu asesora</p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl text-navy font-semibold">Plan de sueño</h2>
                    <p className="text-xl text-navy">¿Cómo funciona el plan de sueño infantil respetuoso?</p>
                    <p className="text-xl text-gray">
                        Los planes de sueño están diseñados para mejorar el sueño en unos plazos variables de entre X y X días. Yo te daré una pautas que diseñaremos según vuestro caso particular.
                    </p>
                    <p className="bg-bold text-navy">El plan consta de 5 pasos:</p>
                </div>
                <div className="col-span-6 flex items-center">
                    <Image
                        src="/images/planSuenoImg.svg"
                        alt="Entrenubes"
                        width={541}
                        height={541}
                        priority  
                    />
                </div>
            </div>
            <div>
                <button className="bg-navy text-white px-12 py-3 rounded-full text-lg font-bold transition-all hover:shadow-xl cursor-pointer">VALORACIÓN GRATUITA</button>
            </div>
        </section>
    )
}

export default Asesorias