//Header component

import Logo from "../Logo/Logo"
import Nav from "../Nav/Nav"

const HeaderComponent = () => {
    return (
        <header className={`flex w-full h-full justify-center items-center bg-sky-900 py-2`}>
            <div className={`w-4/5 h-auto flex flex-row justify-start items-center`}>
                <Logo />
                <h1 className="text-3xl font-bold text-gray-50 flex justify-center items-center">Zona Eleitoral - Subprefeituras</h1>
                <Nav />
            </div>
        </header>
    )
}

export default HeaderComponent