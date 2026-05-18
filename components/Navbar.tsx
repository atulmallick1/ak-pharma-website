'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const links = [
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Defence Supply', href: '/defence-supply' },
  { label: 'B2B Supply', href: '/b2b' },
  { label: 'Certifications', href: '/certifications' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 bg-white"
      style={{ borderBottom: '1px solid #E5E7EB', boxShadow: '0 1px 3px rgba(11,31,58,0.06)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center select-none" aria-label="AK Pharma Group — Home">
          <Image
            src="/logo.svg"
            alt="AK Pharma Group"
            width={180}
            height={48}
            priority
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '13.5px',
                fontWeight: 500,
                color: '#374151',
                textDecoration: 'none',
                letterSpacing: '0.01em',
                transition: 'color 180ms ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#1E56A0')}
              onMouseLeave={e => (e.currentTarget.style.color = '#374151')}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-navy" style={{ padding: '8px 20px', fontSize: '13px' }}>
            Contact Us
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col justify-center gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className="block w-5 h-0.5 transition-all duration-200"
            style={{ backgroundColor: '#374151', transform: open ? 'rotate(45deg) translate(2px, 4px)' : 'none' }}
          />
          <span
            className="block w-5 h-0.5 transition-all duration-200"
            style={{ backgroundColor: '#374151', opacity: open ? 0 : 1 }}
          />
          <span
            className="block w-5 h-0.5 transition-all duration-200"
            style={{ backgroundColor: '#374151', transform: open ? 'rotate(-45deg) translate(2px, -4px)' : 'none' }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden px-4 pb-5 pt-2 flex flex-col gap-1"
          style={{ borderTop: '1px solid #E5E7EB', backgroundColor: '#FFFFFF' }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '15px',
                fontWeight: 500,
                color: '#374151',
                padding: '10px 8px',
                textDecoration: 'none',
                borderBottom: '1px solid #F3F4F6',
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-navy mt-3"
            style={{ justifyContent: 'center' }}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  )
}
