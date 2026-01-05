import ContactButton from "../partial/ContactButton"
import CloudDivider from "./CloudDivider"
import Image from "next/image"

const Hero = () => {

    return (
        <section data-component="Hero" className="w-full flex justify-center bg-green-bg pb-20 sm:pb-40 relative">
            <div className="sm:grid grid-cols-12 max-w-[1580px] py-10 sm:py-20 px-3 sm:px-10 gap-16">
                <div className="mb-10 col-span-7 space-y-9">
                    <p className="hidden sm:block bg-yellow text-navy text-lg px-6 py-2 rounded-full max-w-max">Sueño tranquilo, crianza consciente. Acompañamos cada paso.</p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl text-green font-bold">Porque descansar es una necesidad, mi propósito es acompañarte</h1>
                    <p className="text-lg sm:text-xl text-gray">Entre nubes nace como un espacio de acompañamiento a familias que desean mejorar el descanso en casa. Mi enfoque es cercano y personalizado, poniendo siempre en el centro las necesidades y el bienestar de cada bebé, con respeto y cuidado en cada paso del proceso.</p>
                    <p className="text-lg sm:text-xl text-navy">Si quieres transformar el descanso de tu bebé y recuperar la armonía familiar, estaré encantada de acompañarte.</p>
                    <ContactButton label="VALORACIÓN GRATUITA" size="px-12 py-3 text-lg" />
                </div>
                <div className="col-span-5">
                    <Image
                        src="/images/hero_image.svg"
                        alt="Entrenubes"
                        width={541}
                        height={541}
                        priority  
                    />
                </div>
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 md:h-32 lg:h-40 overflow-hidden">
                <CloudDivider className="absolute bottom-0 left-1/2 -translate-x-1/2 block h-full w-auto min-w-[120%] text-white" />
            </div>
        </section>
    )
}

export default Hero