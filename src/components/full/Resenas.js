import StarIcon from "../icons/star"
import ContactButton from "../partial/ContactButton"
import { resenas } from "@/lib/resenas"
const Resenas = () => {


    return (
        <section data-component="Resenas" id="resenas" className="w-full bg-green-bg pt-10 sm:pt-26 pb-20 sm:pb-26 z-10">
            <div className="sm:grid grid-cols-12 w-full max-w-[1580px] px-5 mx-auto">
               <div className="mb-10 col-span-8 space-y-9">
                    <p className="bg-yellow text-navy sm:text-lg px-6 py-2 rounded-full max-w-max">Review de las familias</p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl text-green font-semibold">Acompañar significa escuchar, sostener y transitar el cambio juntos.</h2>
                    <p className="text-xl text-gray">Así lo han vivido algunas de las familias con las que he trabajado.</p>
                </div>
                <div className="col-span-12 sm:grid grid-cols-4 gap-6 mb-10">
                    {resenas.map((resena, index)=> (
                        <div key={index} className={`p-5 rounded-lg mb-5 sm:mb-0 ${index === 0 || index === 2 ? "bg-navy-light" : "bg-yellow text-gray"}`}>
                            <div className="flex gap-2 mb-3">
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                            </div>
                            <h3 className="mb-2 text-xl">{resena.title}</h3>
                            <p className="mb-3">{resena.text}</p>
                            <p>{resena.autor}</p>
                        </div>
                    ))}
                </div>
                <div className="col-span-8">
                    <p className="text-xl text-navy pb-6">Si quieres transformar el descanso de tu bebé y recuperar la armonía familiar, estaré encantada de acompañarte.</p>
                    <ContactButton label="VALORACIÓN GRATUITA" size="px-12 py-3 text-lg" />
                </div>
            </div>
        </section>
    )
}

export default Resenas