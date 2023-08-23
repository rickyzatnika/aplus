import Navbar from '@/components/Navbar'
import './globals.css'

import Footer from '@/components/Footer'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: "400", display: "swap" })

export const metadata = {
  title: 'Aplus Multi Kreasi',
  description: 'Aplus Multi Kreasi are a creative agency in the marketing spehere that focuses on Event, Production and Branding.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}` }>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
