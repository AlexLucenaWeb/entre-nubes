import Button from "../partial/Button"

const Planes = () => {

    return (
        <section data-component="Asesorias" className="w-full flex justify-center bg-blue-500 py-8">
            <div className="w-full max-w-6xl px-5">
                <h2 className="text-4xl mb-4">Planes</h2>
                <p className="mb-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit eu magna sit amet varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ultricies enim non augue euismod mattis. Quisque dignissim nibh fermentum, suscipit erat ac, mattis nunc. Integer ut tortor eu arcu feugiat blandit sit amet nec massa.</p>
                <div className="flex gap-2">
                    <div className="space-y-4">
                        <button className="bg-white text-blue-500 h-20 w-36 rounded-sm block">
                            Plan Semanal
                        </button>
                        <button className="bg-blue-300 text-white hover:bg-blue-500 transition-colors duration-300 h-20 w-36 rounded-sm block">
                            Plan Mensual
                        </button>

                    </div>
                    <div className="">
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Planes