import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'



export default function Document() {
    return (
    <Html lang="en">
        <Head />
        <body>
            <noscript>
                This app works best with JavaScript enabled.
            </noscript>
            <Main />
            <NextScript />
        </body>
    </Html>
    )
}