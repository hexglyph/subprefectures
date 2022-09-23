import Head from "next/head"
import Script from "next/script"
import Footer from "./Footer"
import Header from "./Header"

interface LayoutProps {
    children: any
}

const Layout = ({ children, ...props }: LayoutProps) => {
    return (
        <div id="app" className={`flex flex-col w-full h-full p-0 m-0`}>
            <Head>
                <title>Zona Eleitoral - Subprefeituras</title>
                <meta name="description" content="Zona Eleitoral - Subprefeituras" key="desc"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="keywords" content="Zona Eleitoral - Subprefeituras" />
                <meta name="author" content="Daniel Niemietz Braz" />
                <meta name="robots" content="all" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        
                <meta property="og:title" content="Zona Eleitoral - Subprefeituras" />
                <meta property="og:site_name" content="Zona Eleitoral - Subprefeituras" />
                <meta property="og:url" content="https://" />
                <meta property="og:locale" content="en" />
                <meta property="og:description" content="Zona Eleitoral - Subprefeituras"/>
                <meta property="og:image" content="https://"/>
        
                <link rel="canonical" href="https://" key="canonical" />
                <link rel="icon" href="favicon.ico" />
            </Head>
            <Header />

            <main className={`flex flex-col w-full h-full min-h-screen justify-start items-center bg-gray-100`}>
                {children}
            </main>

            <Footer />
        </div>
    )
}

export default Layout