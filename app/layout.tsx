import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './responsive.css'
import { Space_Grotesk, Bebas_Neue, Lobster_Two, Red_Rose } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const space = Space_Grotesk({
  subsets: ['latin-ext'],
  weight: ['300', '400', '700'],
  variable: '--font-space'
})

const lobsterTwo = Lobster_Two({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lobster-two',
})

const redRose = Red_Rose({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-red-rose',
})

export const metadata: Metadata = {
  title: 'Infinitus 2026',
  description: 'Annual National Level Techno Cultural Fest of SRM University Andhra Pradesh',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${space.variable} ${lobsterTwo.variable} ${redRose.variable}`}>
      <body className={`${inter.className} ${space.variable} ${lobsterTwo.variable} ${redRose.variable} bg-[#030014] overflow-y-auto overflow-x-hidden `}>{children}</body>
    </html>
  )
}
