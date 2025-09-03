import Button from "../partial/Button"

const Hero = () => {

    return (
        <div data-component="Hero" className="w-full flex justify-center bg-blue-500 min-h-96">
            <div className="max-w-6xl py-20 px-5 flex flex-col justify-between items-start">
                <div className="mb-10">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl mb-2 text-white font-bold">Entre Nubes</h1>
                    <p className="text-xl sm:text-2xl">Asesoramiento de Sueño Infantil Respetuso</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button label="CTA 1"/>
                    <Button label="CTA 2"/>
                </div>
            </div>
        </div>
    )
}

export default Hero