import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['400', '500', '600', '700'],
})
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'AK Pharma Group — Defence & Institutional Pharmaceutical Supply',
  description:
    'AK Pharma Group is a West Bengal-based ISO 9001:2015, CE, and WHO-GMP certified pharmaceutical supplier to India\'s defence forces, paramilitary institutions, and B2B buyers across India.',
  keywords:
    'pharmaceutical supplier India, defence pharma, GeM pharma supplier, ISO 9001:2015 certified, CE certified, WHO-GMP certified, GMP certified West Bengal, defence medicines India, institutional pharma B2B, DGAFMS empanelled',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-[#0B1F3A] focus:px-4 focus:py-2 focus:text-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#7AB3E8]"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
