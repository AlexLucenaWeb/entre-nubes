const Asesorias = () => {

    const asesorias = [
        {
            title: "Asesoria Uno",
            items: ["Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet."]
        },
        {
            title: "Asesoria Dos",
            items: ["Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet."]
        }

    ]

    return (
        <section data-component="Asesorias" className="w-full flex justify-center bg-blue-500 min-h-96 py-8">
            <div className="w-full max-w-6xl px-5">
                <h2 className="text-4xl mb-4">Como puedo ayudarte?</h2>
                <p className="mb-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit eu magna sit amet varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ultricies enim non augue euismod mattis. Quisque dignissim nibh fermentum, suscipit erat ac, mattis nunc. Integer ut tortor eu arcu feugiat blandit sit amet nec massa.</p>
                <div className="grid grid-cols-2">
                    {asesorias.map((a, index) => (                        
                       <div key={index}>
                            <h4 className="text-lg text-bold mb-2">{a.title}</h4>
                            <div className="bg-white text-blue-200 flex justify-center items-center w-40 h-20 mb-2">image</div>
                            <ul>
                                {a.items.map((item, index)=>(
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                       </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Asesorias