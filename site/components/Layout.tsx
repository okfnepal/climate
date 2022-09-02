import Link from 'next/link'
import Head from 'next/head'

import Nav from './Nav'

export default function Layout({ children, title = 'Home' }: any) {
    return (
        <>
            <Head>
                <title>{title}{title && ' - '}Climate Knowledge Portal</title>
                <link rel="icon" href="/favicon.ico" />
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
            <div className='border-t-2'></div>
            <footer className="flex items-center  w-full h-24  max-w-7xl mx-auto">
                <p className='ml-6'>
                    Made by
                </p>
                <Link href='https://oknp.org/' passHref>
                    <a
                        className="flex items-center justify-center ml-2 underline"
                        href="/oknp.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Open Knowledge Nepal</a>
                </Link>

                <p className='ml-2'>- “Liberating Knowledge for Opportunity”</p>

            </footer>
        </>
    )
}