import type { Metadata } from 'next'
import { Bebas_Neue, Open_Sans } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas-neue',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lion of Judah Security',
  description: 'Guarding, patrol, event security, and surveillance services.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang='en'><body className={`${bebasNeue.variable} ${openSans.variable}`}>{children}</body></html>
}
