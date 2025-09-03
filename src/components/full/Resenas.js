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
        <section data-component="Asesorias" className="w-full flex justify-center bg-blue-500 min-h-96 py-8">
            <div className="w-full max-w-6xl px-5">
                <h2 className="text-4xl mb-4">Resenas (necesitamos titutlo para esta seccion)</h2>
                <p className="mb-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit eu magna sit amet varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ultricies enim non augue euismod mattis. Quisque dignissim nibh fermentum, suscipit erat ac, mattis nunc. Integer ut tortor eu arcu feugiat blandit sit amet nec massa.</p>
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {resenas.map((resena, index) => (                        
                       <div key={index}>
                            <h4 className="text-lg text-bold mb-2">{resena.title}</h4>
                            <div className="bg-white text-blue-200 flex justify-center items-center w-40 h-20 mb-2">image</div>
                            <p>{resena.text}</p>
                       </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Resenas