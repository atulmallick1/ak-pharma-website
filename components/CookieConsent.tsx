'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'cookie-consent-v1'

type Choice = 'accepted' | 'declined' | null

export default function CookieConsent() {
  const [choice, setChoice] = useState<Choice>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored === 'accepted' || stored === 'declined') setChoice(stored)
    } catch {}
  }, [])

  const decide = (next: 'accepted' | 'declined') => {
    setChoice(next)
    try { localStorage.setItem(STORAGE_KEY, next) } catch {}
  }

  if (!mounted || choice !== null) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60]"
      style={{
        backgroundColor: '#0B1F3A',
        borderTop: '3px solid #1E56A0',
        boxShadow: '0 -8px 32px rgba(11,31,58,0.25)',
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:px-6 md:flex-row md:items-center md:gap-8 lg:px-8">
        <p
          className="flex-1"
          style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13.5px', lineHeight: 1.7, color: '#C9DAEA' }}
        >
          We use essential cookies to make this site work. We do not use advertising or
          cross-site tracking cookies. Accept to allow optional cookies, or decline to keep
          only what&apos;s strictly necessary.{' '}
          <Link href="/privacy-policy" className="underline underline-offset-2" style={{ color: '#7AB3E8' }}>
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => decide('declined')}
            style={{
              fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '10px 22px', border: '1px solid #7AB3E8', borderRadius: '4px',
              color: '#C9DAEA', backgroundColor: 'transparent', cursor: 'pointer',
            }}
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => decide('accepted')}
            style={{
              fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '10px 22px', border: '1px solid #1E56A0', borderRadius: '4px',
              color: '#FFFFFF', backgroundColor: '#1E56A0', cursor: 'pointer',
            }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
