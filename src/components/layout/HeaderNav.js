import Image from "next/image";

const HeaderNav = () => {

    const headerLinks = [
        {label: "Sueño respetuoso", destino: "sueno"},
        {label: "Quién es Laura", destino: "laura"},
        {label: "Plan", destino: "plan"},
        {label: "Relatos familiares", destino: "relatos"},
        {label: "CONTACTA", destino: "contacta"},
    ]

    return (
        <div data-component="Header" className="w-full flex justify-center bg-green-bg text-navy py-5">
            <div className="w-full lg:max-w-[1800px] px-5 flex justify-between items-center">
                <div className="flex gap-4 items-center">
                    <Image
                        src="/images/entrenubes.png"
                        alt="Entrenubes"
                        width={235}
                        height={38}
                        className="rounded-2xl"
                        priority 
                    />
                </div>

                <nav className="flex gap-8">
                    {headerLinks.map((link, index)=>(
                        <button key={index} className={`cursor-pointer ${link.label === "CONTACTA" && "text-sm bg-navy text-white rounded-full hover:shadow-xl font-medium px-4 py-2 transition-all duration-300"}`}>
                            {link.label} 
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    )
}

export default HeaderNav
