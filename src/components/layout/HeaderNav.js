import Link from "next/link"

const HeaderNav = () => {

    const headerLinks = [{label: "Servicios", href: "servicios"},{label: "Valoracion Gratuita", href: "valoracion-gratuita"},{label: "Contacto", href: "contacto"}]

    return (
        <div data-component="Header" className="w-full flex justify-center bg-white text-blue-900 py-5">
            <div className="w-full lg:max-w-7xl px-5 flex justify-between items-center">
                <div className="flex gap-4 items-center">
                    <Link href="/">
                        <div className="h-14 w-14 rounded-full bg-blue-400 text-blue-200 text-sm flex items-center justify-center"> LOGO </div>
                    </Link>
                    <h2 className="text-lg">Entre Nubes</h2>
                </div>

                <nav className="flex gap-4">
                    {headerLinks.map((link, index)=>(
                        <Link key={index} href={link.href} className="">
                            {link.label} 
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    )
}

export default HeaderNav
