import StarIcon from "../icons/star"

const Resenas = () => {

    const resenas = [
        {
            title: "Seriously amazing!",
            text: "Seriously amazing! They are so good with kids and even care about the parents who come in. We have been many times from fever, ear infections, flu shot. It’s great to have a place nearby that you can walk-in in a moments notice to ease your mom nerves or get care for your children! xoxo",
            autor: "Lauren N., Brave Care Parent"
        },
        {
            title: "Resena Dos",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit eu magna sit amet varius. Class aptent taciti sociosqu ad litora torquent",
            autor: "Lauren N., Brave Care Parent"
        },
        {
            title: "Resena Tres",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit eu magna sit amet varius. Class aptent taciti sociosqu ad litora torquent",
            autor: "Lauren N., Brave Care Parent"
        },
        {
            title: "Resena Cuatro",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit eu magna sit amet varius. Class aptent taciti sociosqu ad litora torquent",
            autor: "Lauren N., Brave Care Parent"
        },

    ]

    return (
        <section data-component="Resenas" className="w-full bg-green-bg py-20 z-10">
            <div className="grid grid-cols-12 w-full max-w-[1580px] px-5">
               <div className="mb-10 col-span-8 space-y-9">
                    <p className="bg-yellow text-navy text-lg px-6 py-2 rounded-full max-w-max">Review de las familias</p>
                    <h3 className="text-4xl sm:text-5xl md:text-6xl text-green font-semibold">Porque descansar es una necesidad, mi propósito es acompañarte</h3>
                    <p className="text-xl text-gray">Entre nubes nace como un espacio de acompañamiento a familias que desean mejorar el descanso en casa. Mi enfoque es cercano y personalizado, poniendo siempre en el centro las necesidades y el bienestar de cada bebé, con respeto y cuidado en cada paso del proceso.</p>
                </div>
                <div className="col-span-12 grid grid-cols-4 gap-6 mb-10">
                    {resenas.map((resena, index)=> (
                        <div key={index} className={`p-5 rounded-lg ${index === 0 || index === 2 ? "bg-navy-light" : "bg-yellow text-gray"}`}>
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
                    <button className="bg-navy text-white px-12 py-3 rounded-full text-lg font-bold transition-all hover:shadow-xl cursor-pointer">VALORACIÓN GRATUITA</button>
                </div>

            </div>
        </section>
    )
}

export default Resenas