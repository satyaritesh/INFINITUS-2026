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
  metadataBase: new URL('https://infinitus26.com'),
  title: {
    default: 'Infinitus 2026 | Annual National Techno Cultural Fest - SRM University AP',
    template: '%s | Infinitus 2026 - SRM University AP',
  },
  description: 'Join Infinitus 2026, the Annual National Level Techno Cultural Fest at SRM University Andhra Pradesh from March 1-3, 2026. Experience 3 days of innovation, technology competitions, cultural performances, hackathons, workshops, gaming tournaments, and live concerts. Register now for India\'s most exciting college fest!',
  keywords: [
    'Infinitus 2026',
    'Infinitus',
    'SRM AP',
    'SRM University Andhra Pradesh',
    'SRM Amaravati',
    'Techno Cultural Fest',
    'College Fest 2026',
    'Tech Fest India',
    'Cultural Fest Andhra Pradesh',
    'National Level Fest',
    'Hackathon 2026',
    'Technical Competitions',
    'Cultural Events',
    'College Events',
    'Student Fest',
    'Gaming Tournament',
    'Workshops',
    'Concert',
    'Fest Registration',
    'Andhra Pradesh College Fest',
    'SRMAP Events',
    'Apex Trails',
    'Battle of Bands',
  ],
  authors: [{ name: 'SRM University AP', url: 'https://srmap.edu.in' }],
  creator: 'SRM University AP',
  publisher: 'SRM University AP',
  category: 'Education & Events',
  applicationName: 'Infinitus 2026',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Infinitus 2026 | Annual National Techno Cultural Fest - SRM University AP',
    description: 'The Annual National Level Techno Cultural Fest of SRM University Andhra Pradesh. Join us for 3 days of innovation, technology, culture, gaming, and entertainment from March 1-3, 2026!',
    url: 'https://infinitus26.com',
    siteName: 'Infinitus 2026',
    images: [
      {
        url: 'https://infinitus26.com/images/footerImages/INFINITUS2026LOGO.jpeg',
        width: 1200,
        height: 630,
        alt: 'Infinitus 2026 - SRM University AP Techno Cultural Fest Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Infinitus 2026 | National Techno Cultural Fest',
    description: 'Experience the biggest Techno Cultural Fest of Andhra Pradesh at SRM University AP. 3 days of tech, culture & entertainment. March 1-3, 2026.',
    images: ['https://infinitus26.com/images/footerImages/INFINITUS2026LOGO.jpeg'],
    creator: '@SRMAP_Official',
    site: '@SRMAP_Official',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://infinitus26.com',
  },
  verification: {
    google: 'google-site-verification-code', // Replace with actual Google Search Console verification code
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
