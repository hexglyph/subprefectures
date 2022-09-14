import { createContext, useEffect, useState } from "react";

interface AppContextProps {
    theme?: string
    menu?: string
    size?: number
    sizeSaved?: number
    themeSaved?: any
    menuSaved?: any
    htmlSize?: any
    switchTheme?: () => void
    switchMenu?: () => void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props: { children: any; }) {
    const [size, setSize] = useState<number>(16)
    const [theme, setTheme] = useState<string>('')
    const [menu, setMenu] = useState<string>('hidden')

    function htmlSize(fontsize: number) {
        //const newSize = size === '' ? 16 : ''
        //setSize(newSize)
        setSize(fontsize)
        const newSize = fontsize.toString()
        sessionStorage.setItem('size', newSize)
    }
    function switchTheme() {
        const newTheme = theme === '' ? 'dark' : ''
        setTheme(newTheme)
        sessionStorage.setItem('theme', newTheme)
    }
    function switchMenu() {
        const newMenu = menu === 'block' ? 'hidden' : 'block'
        setMenu(newMenu)
        sessionStorage.setItem('menu', newMenu)
    }

    useEffect(() => {
        const sizeSaved = sessionStorage.getItem('size')
        setSize(16)
    }, [])
    useEffect(() => {
        const themeSaved = sessionStorage.getItem('theme')
        setTheme(themeSaved || '')
    }, [])
    useEffect(() => {
        const menuSaved = sessionStorage.getItem('menu')
        setMenu(menuSaved || 'hidden')
    }, [])

    return (
        <AppContext.Provider value={{
            theme,
            menu,
            size,
            htmlSize,
            switchMenu,
            switchTheme
        }}>
            {props.children}
        </AppContext.Provider>
    )
}


export default AppContext
export const AppConsumer = AppContext.Consumer