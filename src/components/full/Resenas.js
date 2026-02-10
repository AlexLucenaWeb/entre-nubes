import StarIcon from "../icons/star"
import ContactButton from "../partial/ContactButton"
const Resenas = () => {

    const resenas = [
        {
            title: "Facil acceso a dudas",
            text: "Teníamos muchos despertares que exigían movimiento y tiempo para redormir, mala calidad del sueño en toda la familia, ahora tenemos más tiempo para nosotros y para su hermana, lo que más valoramos de Laura son los conocimientos y la forma de transmitirlos.",
            autor: "Diego y Maca"
        },
        {
            title: "Bienestar familiar",
            text: "Nuestro hijo tenía hasta 7 y 8 despertares por noche. El descanso no era reparador y eso generaba bastante cansancio y estrés en casa. Hemos aprendido a manejar mejor nuestras rutinas laborales, adaptando el descanso del niño a los distintos turnos sin que eso suponga tanto desajuste como antes. En definitiva, hemos ganado en bienestar y en equilibrio familiar.",
            autor: "Laura y Nacho"
        },
        {
            title: "Método muy respetuoso",
            text: "Nuestro bebé de 8 meses prácticamente se despertaba cada hora. El cambio para todos fue muy positivo, pasó a hacer tirones de más de 3h y eso se notó tanto en el carácter del bebé como del nuestro. Lo que más valoramos fue que el método fue muy respetuoso",
            autor: "Garazi y Álvaro"
        }

    ]

    return (
        <section data-component="Resenas" id="resenas" className="w-full bg-green-bg pt-10 sm:pt-26 pb-20 sm:pb-26 z-10">
            <div className="sm:grid grid-cols-12 w-full max-w-[1580px] px-5 mx-auto">
               <div className="mb-10 col-span-8 space-y-9">
                    <p className="bg-yellow text-navy sm:text-lg px-6 py-2 rounded-full max-w-max">Review de las familias</p>
                    <h3 className="text-4xl sm:text-5xl md:text-6xl text-green font-semibold">Porque descansar es una necesidad, mi propósito es acompañarte</h3>
                    {/* <p className="text-xl text-gray">Entre nubes nace como un espacio de acompañamiento a familias que desean mejorar el descanso en casa. Mi enfoque es cercano y personalizado, poniendo siempre en el centro las necesidades y el bienestar de cada bebé, con respeto y cuidado en cada paso del proceso.</p> */}
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
                            <h6 className="mb-2 text-xl">{resena.title}</h6>
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