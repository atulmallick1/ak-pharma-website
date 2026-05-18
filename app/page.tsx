import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'AK Pharma Group — Defence & Institutional Pharmaceutical Supply',
  description:
    'AK Pharma Group is West Bengal\'s trusted ISO 9001:2015, CE, and WHO-GMP certified pharmaceutical supplier to India\'s defence forces, paramilitary institutions, and B2B buyers nationwide.',
}

const stats = [
  { value: 'ISO 9001:2015', label: 'Quality Management' },
  { value: 'WHO-GMP', label: 'Certified Manufacturing' },
  { value: 'CE', label: 'Certified Products' },
  { value: 'GeM', label: 'Registered Supplier' },
]

const services = [
  {
    title: 'Defence Force Supply',
    body:
      'We supply WHO-GMP certified pharmaceutical products directly to India\'s armed forces, paramilitary, and central armed police forces through established procurement channels including GeM and direct institutional tenders.',
    href: '/defence-supply',
    icon: '🛡',
  },
  {
    title: 'B2B Institutional Supply',
    body:
      'Hospitals, distributors, nursing homes, and government healthcare institutions across all 28 states rely on AK Pharma Group for consistent, quality-assured pharmaceutical supply with dependable logistics.',
    href: '/b2b',
    icon: '🏥',
  },
  {
    title: 'WHO-GMP & ISO Certified Quality',
    body:
      'Every product leaving our supply chain is WHO-GMP certified, ISO 9001:2015 compliant, and CE marked. We maintain rigorous quality documentation, batch traceability, and regulatory compliance at every step.',
    href: '/certifications',
    icon: '✦',
  },
]

const defenceInstitutions = [
  { name: 'Indian Army', abbr: 'IA', img: '/force-army-v2.jpg', desc: 'Supply to Army medical establishments, MH, field units, and cantonment dispensaries across India.' },
  { name: 'Indian Navy', abbr: 'IN', img: '/force-navy-v2.jpg', desc: 'Pharmaceutical supply to naval bases, INS hospitals, and ship medical facilities.' },
  { name: 'Indian Air Force', abbr: 'IAF', img: '/force-airforce-v2.jpg', desc: 'Supply to Air Force stations, base hospitals, and medical units at airbases nationwide.' },
  { name: 'Border Security Force', abbr: 'BSF', img: '/force-bsf-v2.jpg', desc: 'Medicines for BSF border outposts, group medical centres, and composite hospitals.' },
  { name: 'CRPF', abbr: 'CRPF', img: '/force-crpf-v2.jpg', desc: 'Pharmaceutical supply for CRPF composite hospitals and sector establishments.' },
  { name: 'ITBP', abbr: 'ITBP', img: '/force-itbp-v2.jpg', desc: 'Supply to high-altitude border posts and field medical stations.' },
  { name: 'CISF', abbr: 'CISF', img: '/force-cisf-v2.jpg', desc: 'Medicines for CISF medical units and stationed personnel.' },
  { name: 'Assam Rifles', abbr: 'AR', img: '/force-assam-rifles-v2.jpg', desc: 'Supply to Assam Rifles field medical units and regimental establishments.' },
]

const productCategories = [
  { name: 'Tablets & Capsules', desc: 'Oral solid dosage forms — analgesics, antibiotics, vitamins, and more.' },
  { name: 'Injectable Solutions', desc: 'IV fluids, ampoules, and vials for clinical and field medical use.' },
  { name: 'Syrups & Suspensions', desc: 'Liquid oral formulations for all age groups and therapeutic needs.' },
  { name: 'Topical Formulations', desc: 'Ointments, creams, and gels for dermatological and wound care use.' },
  { name: 'Ophthalmic Preparations', desc: 'Eye drops and ointments meeting sterility and pharmacopoeia standards.' },
  { name: 'Surgical & Medical Supplies', desc: 'Supporting consumables and OTC pharmaceutical products for clinical settings.' },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: '#0B1F3A', minHeight: '88vh' }}
      >
        {/* Geometric pattern — right side */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          {/* Large diamond grid */}
          <svg
            className="absolute right-0 top-0 h-full"
            style={{ width: '52%', opacity: 0.07 }}
            viewBox="0 0 500 800"
            preserveAspectRatio="xMidYMid slice"
          >
            {Array.from({ length: 8 }).map((_, row) =>
              Array.from({ length: 6 }).map((_, col) => (
                <rect
                  key={`${row}-${col}`}
                  x={col * 80 + (row % 2 === 0 ? 0 : 40)}
                  y={row * 100 - 40}
                  width="56"
                  height="56"
                  fill="none"
                  stroke="#4A8FD9"
                  strokeWidth="1.5"
                  transform={`rotate(45, ${col * 80 + 28 + (row % 2 === 0 ? 0 : 40)}, ${row * 100 - 12})`}
                />
              ))
            )}
          </svg>
          {/* Steel-blue vertical accent bar */}
          <div
            className="absolute right-0 top-0 h-full"
            style={{ width: '3px', background: 'linear-gradient(to bottom, transparent, #1E56A0 25%, #1E56A0 75%, transparent)' }}
          />
          {/* Diagonal accent line */}
          <div
            className="absolute"
            style={{
              right: '45%',
              top: 0,
              bottom: 0,
              width: '1px',
              background: 'linear-gradient(to bottom, transparent 10%, rgba(74,143,217,0.15) 40%, rgba(74,143,217,0.15) 60%, transparent 90%)',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl">

            {/* Credential badges */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              {['ISO 9001:2015', 'CE CERTIFIED', 'WHO-GMP', 'GEM REGISTERED', 'DEFENCE EMPANELLED'].map((badge) => (
                <span
                  key={badge}
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.18em',
                    color: '#7AB3E8',
                    border: '1px solid rgba(74,143,217,0.3)',
                    padding: '4px 10px',
                    borderRadius: '2px',
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Heading */}
            <h1
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
                fontWeight: 600,
                lineHeight: 1.1,
                color: '#FFFFFF',
                marginBottom: '1.5rem',
                letterSpacing: '-0.01em',
              }}
            >
              Pharmaceutical Supply<br />
              <span style={{ color: '#4A8FD9' }}>For The Nation&rsquo;s</span><br />
              Defenders.
            </h1>

            {/* Horizontal rule */}
            <div
              style={{
                width: '60px',
                height: '2px',
                background: 'linear-gradient(90deg, #1E56A0, #4A8FD9)',
                marginBottom: '1.5rem',
              }}
            />

            {/* Sub text */}
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '17px',
                lineHeight: '1.75',
                color: '#9CA3AF',
                marginBottom: '2.5rem',
                maxWidth: '520px',
              }}
            >
              AK Pharma Group is West Bengal&rsquo;s trusted pharmaceutical partner for India&rsquo;s defence
              forces, paramilitary, and institutional buyers. ISO 9001:2015 certified. CE certified.
              WHO-GMP certified. GeM registered. Supplying pan-India.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link href="/defence-supply" className="btn-navy">
                Defence Supply &rarr;
              </Link>
              <Link href="/b2b" className="btn-ghost-white">
                B2B Enquiries
              </Link>
            </div>

          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #0B1F3A)' }}
        />
      </section>

      {/* ── Stats bar ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#112D56' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center"
                style={{ borderRight: i < stats.length - 1 ? '1px solid rgba(74,143,217,0.15)' : 'none' }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: '#DDEEFF',
                    lineHeight: 1.1,
                  }}
                >
                  {s.value}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '11.5px',
                    color: '#7AB3E8',
                    letterSpacing: '0.05em',
                    marginTop: '4px',
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ───────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '96px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="overline">What We Do</span>
            <span className="section-rule block mt-3" />
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 600,
                color: '#0B1F3A',
                maxWidth: '540px',
                lineHeight: 1.15,
              }}
            >
              Reliable Supply Across Every Channel
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link key={s.href} href={s.href} style={{ textDecoration: 'none' }}>
                <div className="card-accent h-full flex flex-col">
                  <span style={{ fontSize: '24px', marginBottom: '14px' }}>{s.icon}</span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: '1.45rem',
                      fontWeight: 600,
                      color: '#0B1F3A',
                      marginBottom: '10px',
                      lineHeight: 1.2,
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '14px',
                      lineHeight: '1.7',
                      color: '#4B5563',
                      flex: 1,
                    }}
                  >
                    {s.body}
                  </p>
                  <span
                    style={{
                      display: 'inline-block',
                      marginTop: '16px',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#1E56A0',
                      fontFamily: 'var(--font-dm-sans)',
                    }}
                  >
                    Learn more &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── About section ──────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#F4F8FC', padding: '96px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Large quote */}
            <div>
              <span className="overline">Our Foundation</span>
              <blockquote
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
                  fontWeight: 500,
                  color: '#0B1F3A',
                  lineHeight: 1.25,
                  marginTop: '1.2rem',
                  marginBottom: '1.5rem',
                  fontStyle: 'italic',
                  borderLeft: '3px solid #1E56A0',
                  paddingLeft: '1.5rem',
                }}
              >
                &ldquo;A soldier&rsquo;s duty doesn&rsquo;t end with retirement. The men and women
                defending our borders, and the families standing behind them, deserve medicines
                they can trust — that is not a business goal, it is a personal oath.&rdquo;
              </blockquote>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '14px',
                  color: '#6B7280',
                  letterSpacing: '0.04em',
                }}
              >
                — Ashok Kumar Mallick, Founder | Indian Army (Retired)
              </p>
              <div className="mt-8">
                <Link href="/about" className="btn-navy">
                  Our Story &rarr;
                </Link>
              </div>
            </div>

            {/* Right: Feature checklist */}
            <div className="flex flex-col gap-5">
              {[
                { title: 'West Bengal Headquarters', body: 'Rooted in West Bengal with a pan-India supply network covering hospitals, defence establishments, and institutional buyers across all states.' },
                { title: 'Uninterrupted Supply Chain', body: 'Our procurement and logistics systems are built around the zero-tolerance supply standards demanded by defence and critical healthcare institutions.' },
                { title: 'Full Regulatory Compliance', body: 'ISO 9001:2015, CE, and WHO-GMP certified. Valid Drug License and GeM registration — every document in order, every batch traceable.' },
                { title: 'Founder-Led Integrity', body: 'Founded by Ashok Kumar Mallick, a retired Indian Army ex-serviceman whose military discipline and personal commitment to quality carry into every aspect of the business.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: '#EBF2FA',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    <span style={{ color: '#1E56A0', fontSize: '14px', fontWeight: 700 }}>✓</span>
                  </div>
                  <div>
                    <h4
                      style={{
                        fontFamily: 'var(--font-cormorant)',
                        fontSize: '1.2rem',
                        fontWeight: 600,
                        color: '#0B1F3A',
                        marginBottom: '4px',
                      }}
                    >
                      {item.title}
                    </h4>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13.5px', color: '#6B7280', lineHeight: '1.65' }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Defence institutions ────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#0B1F3A', padding: '72px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="overline-light">Institutions Served</span>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                fontWeight: 600,
                color: '#FFFFFF',
                marginTop: '0.75rem',
              }}
            >
              Supplying India&rsquo;s Defence &amp; Paramilitary Forces
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {defenceInstitutions.map((force) => (
              <div
                key={force.name}
                className="relative overflow-hidden flex flex-col justify-end"
                style={{ borderRadius: '6px', border: '1px solid rgba(74,143,217,0.2)', minHeight: 320 }}
              >
                <Image
                  src={force.img}
                  alt={force.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, rgba(11,31,58,0.25) 0%, rgba(11,31,58,0.70) 50%, rgba(11,31,58,0.94) 100%)' }}
                />
                <div className="relative z-10 p-6">
                  <div
                    className="inline-flex items-center justify-center mb-4 px-3 py-1.5"
                    style={{ backgroundColor: '#1E56A0', borderRadius: '4px' }}
                  >
                    <span style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '0.7rem', color: '#FFFFFF', letterSpacing: '0.1em' }}>
                      {force.abbr}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 600, fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '0.4rem', lineHeight: 1.2 }}>
                    {force.name}
                  </h3>
                  <p style={{ fontSize: '12.5px', lineHeight: 1.6, color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-dm-sans)' }}>
                    {force.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/defence-supply" className="btn-ghost-white">
              Defence Supply Details &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── Products ───────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '96px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="overline">Product Range</span>
              <span className="section-rule block mt-3" />
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 600,
                  color: '#0B1F3A',
                  lineHeight: 1.15,
                }}
              >
                Comprehensive Pharmaceutical Categories
              </h2>
            </div>
            <Link href="/products" className="btn-ghost" style={{ flexShrink: 0 }}>
              Full Product List
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {productCategories.map((cat) => (
              <div key={cat.name} className="card p-6">
                <h3
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.3rem',
                    fontWeight: 600,
                    color: '#0B1F3A',
                    marginBottom: '8px',
                  }}
                >
                  {cat.name}
                </h3>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13.5px', color: '#6B7280', lineHeight: '1.65' }}>
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA banner ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #1A3D72 60%, #1E56A0 100%)', padding: '80px 0' }}
      >
        {/* Subtle geometric overlay */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <svg className="absolute right-0 bottom-0 opacity-5" width="320" height="320" viewBox="0 0 320 320">
            <circle cx="160" cy="160" r="140" fill="none" stroke="#FFFFFF" strokeWidth="2"/>
            <circle cx="160" cy="160" r="100" fill="none" stroke="#FFFFFF" strokeWidth="1.5"/>
            <circle cx="160" cy="160" r="60" fill="none" stroke="#FFFFFF" strokeWidth="1"/>
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="overline-light">Get In Touch</span>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 600,
              color: '#FFFFFF',
              lineHeight: 1.15,
              margin: '1rem 0 1.25rem',
            }}
          >
            Ready to Partner With AK Pharma Group?
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '16px',
              color: '#9CA3AF',
              marginBottom: '2.5rem',
              maxWidth: '500px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: '1.7',
            }}
          >
            Reach us for defence procurement enquiries, B2B supply partnerships,
            or product information. We respond within one business day.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-navy" style={{ backgroundColor: '#FFFFFF', color: '#0B1F3A' }}>
              Contact Us &rarr;
            </Link>
            <a href="mailto:akpharmagroup@gmail.com" className="btn-ghost-white">
              akpharmagroup@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
