import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Noel's Portfolio",
  description: 'Portfolio website of Noel Paing Oak Soe',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${inter.className} bg-[#1f242d] text-white`}>
        {children}
      </body>
    </html>
  )
}
