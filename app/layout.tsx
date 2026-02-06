import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './responsive.css'
import { Space_Grotesk, Bebas_Neue, Lobster_Two, Red_Rose } from 'next/font/google'
import JsonLd from '@/components/seo/JsonLd'

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
  metadataBase: new URL('https://infinitus-2026-srmap.vercel.app/'), // Replace with actual domain when deployed
  title: {
    default: 'Infinitus 2026 | SRM University AP',
    template: '%s | Infinitus 2026',
  },
  description: 'Join Infinitus 2026, the Annual National Level Techno Cultural Fest of SRM University Andhra Pradesh. Experience 3 days of innovation, culture, and entertainment.',
  keywords: ['Infinitus', 'Infinitus 2026', 'SRM AP', 'SRM University Andhra Pradesh', 'Techno Cultural Fest', 'College Fest', 'Tech Fest', 'Cultural Fest', 'Hackathon', 'Concert'],
  authors: [{ name: 'SRM University AP' }],
  creator: 'SRM University AP',
  publisher: 'SRM University AP',
  openGraph: {
    title: 'Infinitus 2026 | SRM University AP',
    description: 'The Annual National Level Techno Cultural Fest of SRM University Andhra Pradesh. Join us for innovation, music, and fun!',
    url: 'https://infinitus-srmap.com',
    siteName: 'Infinitus 2026',
    images: [
      {
        url: '/images/footerImages/INFINITUS2026LOGO.jpeg', // Using existing logo path
        width: 1200,
        height: 630,
        alt: 'Infinitus 2026 Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Infinitus 2026 | SRM University AP',
    description: 'Experience the biggest Techno Cultural Fest of Andhra Pradesh at SRM University AP.',
    images: ['/images/footerImages/INFINITUS2026LOGO.jpeg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${space.variable} ${lobsterTwo.variable} ${redRose.variable}`}>
      <body className={`${inter.className} ${space.variable} ${lobsterTwo.variable} ${redRose.variable} bg-[#030014] overflow-y-auto overflow-x-hidden `}>
        <JsonLd />
        {children}
      </body>
    </html>
  )
}
