import { roboto } from './fonts'
import './global.css'

import Navbar from '@/components/Navbar'

export const metadata = {
    title: {
        default: "Situs next JS",
        template: "%s | Situs next JS"
    },
    description: "Kumpulan materi nextjs"
}


export default function Layout({ children }) {
    return (
        <html lang="en" className={roboto.variable}>
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