import Button from "../partial/Button"

const Valoracion = () => {

    return (
        <section data-component="Asesorias" className="w-full flex justify-center bg-blue-500 py-8">
            <div className="w-full max-w-6xl px-5">
                <h2 className="text-4xl mb-4">Valoracion Gratuita</h2>
                <p className="mb-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit eu magna sit amet varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ultricies enim non augue euismod mattis. Quisque dignissim nibh fermentum, suscipit erat ac, mattis nunc. Integer ut tortor eu arcu feugiat blandit sit amet nec massa.</p>
                <Button label="CTA 1"/>
            </div>
        </section>
    )
}

export default Valoracion