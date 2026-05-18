'use client'

import Link from 'next/link'
import Image from 'next/image'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Defence Supply', href: '/defence-supply' },
  { label: 'B2B Supply', href: '/b2b' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Contact', href: '/contact' },
]

const compliance = [
  'ISO 9001:2015 Certified',
  'CE Certified',
  'WHO-GMP Certified Manufacturing',
  'Drug License Holder',
  'GeM Registered Supplier',
  'Defence Empanelled',
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0B1F3A', color: '#D1D5DB' }}>

      {/* Top gradient rule */}
      <div className="h-0.5 grad-navy-bar" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5" aria-label="AK Pharma Group">
              <Image
                src="/logo-white.svg"
                alt="AK Pharma Group"
                width={160}
                height={43}
                className="h-11 w-auto"
              />
            </Link>
            <p style={{ fontSize: '13.5px', lineHeight: '1.7', color: '#9CA3AF', maxWidth: '240px' }}>
              West Bengal&rsquo;s trusted pharmaceutical partner for India&rsquo;s defence forces and
              institutional buyers. ISO 9001:2015, CE, and WHO-GMP certified. GeM registered.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              {['ISO 9001:2015', 'CE', 'WHO-GMP', 'GeM'].map((badge) => (
                <span
                  key={badge}
                  className="inline-block px-2.5 py-1 rounded text-xs font-semibold"
                  style={{ backgroundColor: '#112D56', color: '#7AB3E8', letterSpacing: '0.05em' }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#7AB3E8',
                marginBottom: '1rem',
              }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    style={{ fontSize: '13.5px', color: '#9CA3AF', textDecoration: 'none', transition: 'color 180ms' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#DDEEFF')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#9CA3AF')}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#7AB3E8',
                marginBottom: '1rem',
              }}
            >
              Compliance
            </h4>
            <ul className="flex flex-col gap-2.5">
              {compliance.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span style={{ color: '#4A8FD9', marginTop: '2px', flexShrink: 0 }}>✓</span>
                  <span style={{ fontSize: '13.5px', color: '#9CA3AF' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#7AB3E8',
                marginBottom: '1rem',
              }}
            >
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <div>
                <p style={{ fontSize: '11px', color: '#6B7280', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '3px' }}>Registered Office</p>
                <p style={{ fontSize: '13.5px', color: '#9CA3AF', lineHeight: '1.6' }}>
                  West Bengal, India
                </p>
              </div>
              <div>
                <p style={{ fontSize: '11px', color: '#6B7280', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '3px' }}>Email</p>
                <a
                  href="mailto:info@akpharmagroup.com"
                  style={{ fontSize: '13.5px', color: '#7AB3E8', textDecoration: 'none' }}
                >
                  info@akpharmagroup.com
                </a>
              </div>
              <div>
                <p style={{ fontSize: '11px', color: '#6B7280', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '3px' }}>Phone</p>
                <p style={{ fontSize: '13.5px', color: '#9CA3AF' }}>[Phone — placeholder]</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid #112D56' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p style={{ fontSize: '12.5px', color: '#6B7280' }}>
            &copy; {new Date().getFullYear()} AK Pharma Group. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              style={{ fontSize: '12.5px', color: '#6B7280', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#9CA3AF')}
              onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}
            >
              Privacy Policy
            </Link>
            <span style={{ color: '#374151' }}>·</span>
            <span style={{ fontSize: '12.5px', color: '#6B7280' }}>West Bengal, India</span>
          </div>
        </div>
      </div>

    </footer>
  )
}
