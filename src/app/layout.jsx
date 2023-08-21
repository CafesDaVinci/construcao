import Footer from './components/Footer'
import NavBar from './components/NavBar'
import './globals.css'
import { Inter, Dancing_Script, Bebas_Neue } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const dancing_script = Dancing_Script({ subsets: ['latin'], weight: '700', variable: '--font-dancing' })
const bebas_neue = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--font-bebas' })


export const metadata = {
  title: 'Café da Vinci',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">

      <body className={`${dancing_script.variable} ${bebas_neue.variable} min-h-screen bg-primary text-text`}>
        <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}