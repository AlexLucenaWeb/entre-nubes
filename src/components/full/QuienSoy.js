import Image from "next/image"
import CloudDivider from "../layout/CloudDivider"
import ContactButton from "../partial/ContactButton"

const QuienSoy = () => {

    return (
        <section data-component="QuienSoy" id="quienSoy" className="w-full flex justify-center bg-white pt-10 sm:pt-20 pb-30 sm:pb-60 z-10 relative">
            <div className="sm:grid grid-cols-12 w-full max-w-[1580px] px-5 gap-20">
               <div className="mb-10 col-span-6 space-y-6 sm:space-y-9">
                    <p className="bg-yellow text-navy sm:text-lg px-6 py-2 rounded-full max-w-max">Conoce a tu asesora</p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl text-green font-semibold">Quien es Laura</h2>
                    <p className="text-xl text-navy">Mi nombre es Laura y soy enfermera, mamá y asesora de sueño infantil respetuoso.</p>

                    <div className="w-52 h-52 bg-green-bg rounded-full flex justify-center items-end overflow-hidden mx-auto sm:mx-0">
                        <Image
                            src="/images/lauraOpt.png"
                            alt="Laura"
                            width={154}
                            height={154}
                            priority  
                        />
                    </div>

                    <p className="text-xl text-gray">Cuidar y proteger la salud de las personas no solo es mi profesión, también es mi vocación. En mis asesorías de sueño, acompaño a las familias a mejorar su descanso de una manera cercana y personalizada. Sé que cada bebé tiene su propio ritmo, por eso me adapto en todo momento a las necesidades de cada familia, ofreciendo un acompañamiento respetuoso y lleno de cuidado en este proceso de cambio.</p>
                    <ContactButton label="VALORACIÓN GRATUITA" size="px-12 py-3 text-lg" />
                </div>
                <div className="col-span-6 flex items-center">
                    <div className="rounded-4xl border-2 border-yellow shadow-2xl p-6 sm:p-12 space-y-6 sm:space-y-10 text-navy">
                        <p className="font-semibold">¿QUÉ PUEDO OFRECERTE?</p>
                        <ul className="space-y-4">
                            <li><span className="font-bold">Pautas</span> adaptadas a tu familia y vuestro ritmo.</li>
                            <li><span className="font-bold">Respeto</span> por las necesidades de tu bebé y también por las tuyas.</li>
                            <li><span className="font-bold">Paciencia, comprensión y mucho cariño</span> en cada paso.</li>
                        </ul>
                        <p className="font-semibold">Porque no se trata solo de dormir mejor, sino de sentiros acompañados en el proceso, con la tranquilidad de no estar solos.</p>
                    </div>
                </div>
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 md:h-32 lg:h-40 overflow-hidden flex items-end">
                <CloudDivider className="absolute bottom-0 left-1/2 -translate-x-1/2 block h-full w-auto min-w-[120%] text-yellow svg-separator-float" />
                <div className="w-full h-[4px] sm:h-2  bg-yellow"></div>
            </div>
        </section>
    )
}

export default QuienSoy