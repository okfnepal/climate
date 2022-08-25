import Link from 'next/link'
import Head from 'next/head'

import Nav from './Nav'

export default function Layout({ children, title = 'Home' }: any) {
    return (
        <>
            <Head>
                <title>{title}{title && ' - '}Climate Knowledge Portal 🌍</title>
                <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 120 120%22><text y=%22.9em%22 font-size=%2290%22>🌍</text></svg>" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                {/* <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet" /> */}
                <link rel="preload" href="/fonts/Restora/Restora.ttf" as="font" />
                <link rel="preload" href="/fonts/Restora/RestoraBold.ttf" as="font" />
                <link rel="preload" href="/fonts/Restora/RestoraExtraLight.otf" as="font" />
            </Head>
            <Nav />
            <main>
                {children}
            </main>
            <footer className="flex items-center justify-center w-full h-24 border-t ">
                <a
                    className="flex items-center justify-center"
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    A Project of
                    Open Knowledge Nepal
                </a>
            </footer>
        </>
    )
}