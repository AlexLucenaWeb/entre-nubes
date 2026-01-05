import Logo from "../icons/logo";
import BurgerIcon from "../icons/BurguerMenu";
import ContactButton from "../partial/ContactButton";

const HeaderNav = () => {

    const headerLinks = [
        {label: "Sueño respetuoso", destino: "sueno"},
        {label: "Quién es Laura", destino: "laura"},
        {label: "Plan", destino: "plan"},
        {label: "Relatos familiares", destino: "relatos"},
    ]

    return (
        <div data-component="Header" className="w-full flex justify-center items-center bg-green-bg sm:bg-green-bg text-navy py-5">
            <div className="w-full lg:max-w-[1800px] px-5 flex justify-between items-center relative">
                <div className="flex gap-4 items-center">
                    <Logo classes="text-navy" width="180"/>
                </div>

                <nav className="hidden sm:flex gap-8">
                    {headerLinks.map((link, index)=>(
                        <button key={index} className={`cursor-pointer`}>
                            {link.label} 
                        </button>
                    ))}
                    <ContactButton label="Contacta" size="px-4 py-2"/>
                </nav>

                <button className="sm:hidden">
                    <BurgerIcon/>
                </button>
            </div>
        </div>
    )
}

export default HeaderNav
