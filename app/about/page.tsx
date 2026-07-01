import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us — AK Pharma Group',
  description:
    'Learn about AK Pharma Group, founded by Ashok Kumar Mallick — a retired ex-serviceman of the Indian Army, Army Medical Corps — in West Bengal. A trusted pharmaceutical supplier to India\'s defence forces and institutional buyers.',
}

const values = [
  {
    title: 'Integrity',
    body: 'Every transaction, every shipment, every document reflects our commitment to honest and transparent business practices.',
  },
  {
    title: 'Reliability',
    body: 'Supply continuity is non-negotiable. Defence and critical healthcare institutions depend on us — we do not let them down.',
  },
  {
    title: 'Quality',
    body: 'ISO 9001:2015, CE, and WHO-GMP certified products, traceable batch records, and rigorous incoming quality checks are the foundation of our operations.',
  },
  {
    title: 'Compliance',
    body: 'ISO 9001:2015, CE, and WHO-GMP certified. Valid Drug License, GeM registration, and defence empanelment — every regulatory requirement met.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── Page header ────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#0B1F3A', padding: '72px 0 60px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="overline-light">Company</span>
          <h1
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
              fontWeight: 600,
              color: '#FFFFFF',
              lineHeight: 1.1,
              marginTop: '0.75rem',
              maxWidth: '680px',
            }}
          >
            Built on Trust, Sustained by Reliability
          </h1>
        </div>
      </section>
      <div className="h-1 grad-navy-bar" />

      {/* ── Founder section ────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <div>
              <span className="overline">Our Founder</span>
              <span className="section-rule block mt-3" />
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                  fontWeight: 600,
                  color: '#0B1F3A',
                  lineHeight: 1.15,
                  marginBottom: '1.25rem',
                }}
              >
                Ashok Kumar Mallick
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#1E56A0',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  marginBottom: '1.5rem',
                }}
              >
                Founder &amp; Managing Director | Indian Army (Retired) — Army Medical Corps
              </p>
              <div
                className="flex flex-col gap-4"
                style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#4B5563', lineHeight: '1.75' }}
              >
                <p>
                  Ashok Kumar Mallick is a retired ex-serviceman of the Indian Army, Army Medical Corps — a man who dedicated
                  years of his life to serving the nation in uniform. After retiring with honour, he
                  chose to continue serving India&rsquo;s defence forces in a different way: by ensuring
                  they never face a shortage of quality medicines.
                </p>
                <p>
                  During his years in the Army, Mr. Mallick witnessed firsthand the challenges defence
                  personnel face with pharmaceutical supply — inconsistent availability, unreliable
                  sourcing, and gaps that put the health of soldiers and their families at risk. It was
                  this experience that drove him to found AK Pharma Group, headquartered in West Bengal,
                  with a mission to bridge that gap and deliver reliable, quality-assured medicines to
                  the forces he once served alongside.
                </p>
                <p>
                  The military discipline, integrity, and unwavering sense of duty that defined his
                  years in uniform carry into every aspect of the business. Once a soldier, always a
                  soldier — his commitment to the nation&rsquo;s defenders did not end with retirement.
                </p>
                <p>
                  Today, AK Pharma Group is a GeM-registered, ISO 9001:2015, CE, and WHO-GMP certified supplier with an active
                  pan-India supply network, serving defence establishments, paramilitary units, and
                  B2B institutional buyers across all Indian states.
                </p>
              </div>
            </div>

            {/* Founder credentials card */}
            <div className="flex flex-col gap-4">
              {[
                { label: 'Role', value: 'Founder & Managing Director | Indian Army (Retired), AMC' },
                { label: 'Company', value: 'AK Pharma Group' },
                { label: 'Headquarters', value: 'West Bengal, India' },
                { label: 'Sector', value: 'Pharmaceuticals — Defence & Institutional Supply' },
                { label: 'Supply Reach', value: 'All 28 states & 8 UTs, incl. Andaman & Nicobar and Lakshadweep Islands' },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    padding: '14px 20px',
                    backgroundColor: '#F4F8FC',
                    borderLeft: '3px solid #1E56A0',
                    borderRadius: '0 6px 6px 0',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: '#1E56A0',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      minWidth: '110px',
                      paddingTop: '2px',
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '14px',
                      color: '#1F2937',
                      fontWeight: 500,
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Mission & Vision ───────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#F4F8FC', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              style={{
                backgroundColor: '#0B1F3A',
                padding: '40px',
                borderRadius: '6px',
              }}
            >
              <span className="overline-light">Mission</span>
              <h3
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '1.9rem',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  marginTop: '0.75rem',
                  marginBottom: '1rem',
                  lineHeight: 1.2,
                }}
              >
                Ensure every defence and institutional buyer receives the right medicine at the right time.
              </h3>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#9CA3AF', lineHeight: '1.7' }}>
                We exist to close the gap between WHO-GMP certified pharmaceutical manufacturing and the
                institutions — defence, paramilitary, and healthcare — that require uninterrupted supply.
              </p>
            </div>
            <div
              style={{
                backgroundColor: '#EBF2FA',
                padding: '40px',
                borderRadius: '6px',
                border: '1px solid #C9DAEA',
              }}
            >
              <span className="overline">Vision</span>
              <h3
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '1.9rem',
                  fontWeight: 600,
                  color: '#0B1F3A',
                  marginTop: '0.75rem',
                  marginBottom: '1rem',
                  lineHeight: 1.2,
                }}
              >
                To be India&rsquo;s most trusted pharmaceutical supply partner for defence and government institutions.
              </h3>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#4B5563', lineHeight: '1.7' }}>
                Building long-term institutional partnerships across every state — on the strength of
                quality, documentation, and a supply chain that never fails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ─────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="overline">What We Stand For</span>
            <span className="section-rule block mt-3 mx-auto" />
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 600,
                color: '#0B1F3A',
                lineHeight: 1.15,
              }}
            >
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="card p-7">
                <div
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '3rem',
                    fontWeight: 700,
                    color: '#EBF2FA',
                    lineHeight: 1,
                    marginBottom: '12px',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.4rem',
                    fontWeight: 600,
                    color: '#0B1F3A',
                    marginBottom: '8px',
                  }}
                >
                  {v.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13.5px', color: '#6B7280', lineHeight: '1.65' }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#0B1F3A', padding: '64px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 600,
              color: '#FFFFFF',
              marginBottom: '1rem',
            }}
          >
            Interested in Working With Us?
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#9CA3AF', marginBottom: '2rem' }}>
            For defence procurement, B2B supply enquiries, or product information.
          </p>
          <Link href="/contact" className="btn-navy" style={{ backgroundColor: '#1E56A0' }}>
            Get In Touch &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
