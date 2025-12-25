const Resenas = () => {

    const resenas = [
        {
            title: "Resena Uno",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit eu magna sit amet varius. Class aptent taciti sociosqu ad litora torquent"
        },
        {
            title: "Resena Dos",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit eu magna sit amet varius. Class aptent taciti sociosqu ad litora torquent"
        },
        {
            title: "Resena Tres",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit eu magna sit amet varius. Class aptent taciti sociosqu ad litora torquent"
        },

    ]

    return (
        <section data-component="Resenas" className="w-full bg-green-bg py-20 z-10">
            <div className="grid grid-cols-12 w-full max-w-[1580px] px-5 gap-20">
               <div className="mb-10 col-span-8 space-y-9">
                    <p className="bg-yellow text-navy text-lg px-6 py-2 rounded-full max-w-max">Review de las familias</p>
                    <h3 className="text-4xl sm:text-5xl md:text-6xl text-green font-semibold">Porque descansar es una necesidad, mi propósito es acompañarte</h3>
                    <p className="text-xl text-gray">Entre nubes nace como un espacio de acompañamiento a familias que desean mejorar el descanso en casa. Mi enfoque es cercano y personalizado, poniendo siempre en el centro las necesidades y el bienestar de cada bebé, con respeto y cuidado en cada paso del proceso.</p>
                </div>
            </div>
            <div className="col-span-12 grid grid-cols-4">
                {resenas.map((resena, index)=> (
                    <div key={index} className={``}>
                        <h4>{resena.title}</h4>
                        <p>{resena.text}</p>

                    </div>
                ))}

            </div>
            <p className="text-xl text-navy">Si quieres transformar el descanso de tu bebé y recuperar la armonía familiar, estaré encantada de acompañarte.</p>
            <button className="bg-navy text-white px-12 py-3 rounded-full text-lg font-bold transition-all hover:shadow-xl cursor-pointer">VALORACIÓN GRATUITA</button>
        </section>
    )
}

export default Resenas