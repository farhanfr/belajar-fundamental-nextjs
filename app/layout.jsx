import { roboto } from './fonts'
import './global.css'

import Navbar from '@/components/Navbar'

export default function Layout({ children }) {
    return (
        <html lang="en" className={roboto.variable}>
            <head>
                <title>Learn next.js fundamental</title>
            </head>
            <body className="bg-gray-50 flex flex-col px-4 py-4 min-h-screen">
                <header>
                    <Navbar/>
                </header>
                <main className="py-4 grow">
                    {children}
                </main>
                <footer className="border-t py-3">
                   
                    FOOTER</footer>
            </body>
        </html>
    )
}