import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
