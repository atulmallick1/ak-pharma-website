import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Defence Supply — AK Pharma Group',
  description:
    'AK Pharma Group supplies ISO 9001:2015, CE, and WHO-GMP certified pharmaceutical products to India\'s Army, Navy, Air Force, paramilitary, and CAPF through GeM and institutional procurement channels.',
}

const forces = [
  { name: 'Indian Army', abbr: 'IA', img: '/force-army-v2.jpg', desc: 'Supply to Army medical establishments, MH (Military Hospitals), field units, and cantonment dispensaries across India.' },
  { name: 'Indian Navy', abbr: 'IN', img: '/force-navy-v2.jpg', desc: 'Pharmaceutical supply to naval bases, INS hospitals, ship medical facilities, and maritime border establishments.' },
  { name: 'Indian Air Force', abbr: 'IAF', img: '/force-airforce-v2.jpg', desc: 'Supply to Air Force stations, base hospitals, and medical units at airbases and training establishments nationwide.' },
  { name: 'Border Security Force', abbr: 'BSF', img: '/force-bsf-v2.jpg', desc: 'Medicines for BSF border outposts, group medical centres, and composite hospitals along India\'s borders.' },
  { name: 'CRPF', abbr: 'CRPF', img: '/force-crpf-v2.jpg', desc: 'Central Reserve Police Force — pharmaceutical supply for CRPF composite hospitals and sector establishments.' },
  { name: 'ITBP', abbr: 'ITBP', img: '/force-itbp-v2.jpg', desc: 'Indo-Tibetan Border Police — supply to high-altitude border posts and field medical stations.' },
  { name: 'CISF', abbr: 'CISF', img: '/force-cisf-v2.jpg', desc: 'Central Industrial Security Force — medicines for CISF medical units and stationed personnel.' },
  { name: 'Assam Rifles', abbr: 'AR', img: '/force-assam-rifles-v2.jpg', desc: 'Supply to Assam Rifles field medical units, regimental medical establishments, and hospitals.' },
]

const procurementChannels = [
  {
    title: 'Government e-Marketplace (GeM)',
    body: 'AK Pharma Group is a registered supplier on the Government e-Marketplace (GeM) — India\'s official procurement portal for government buyers. Defence and paramilitary institutions can place direct orders through our GeM seller profile with full compliance.',
  },
  {
    title: 'Direct Institutional Tenders',
    body: 'We actively participate in tender-based procurement floated by DGAFMS (Directorate General of Armed Forces Medical Services), AFMSD, and individual defence medical establishments. Full documentation and technical bid support provided.',
  },
  {
    title: 'Rate Contract Supply',
    body: 'For recurring pharmaceutical requirements, AK Pharma Group supports rate contract arrangements with defence medical establishments ensuring price consistency, supply continuity, and simplified reorder processes.',
  },
  {
    title: 'Emergency & Urgent Supply',
    body: 'Dedicated fast-track supply protocols for urgent defence requirements. We maintain buffer stocks of high-frequency essential medicines to ensure no establishment faces a stock-out situation.',
  },
]

export default function DefenceSupplyPage() {
  return (
    <>
      {/* ── Page header ────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: '#0B1F3A', padding: '72px 0 60px' }}
      >
        {/* Geometric accent */}
        <div className="absolute right-0 top-0 bottom-0 pointer-events-none" aria-hidden>
          <svg height="100%" viewBox="0 0 300 400" style={{ opacity: 0.06 }}>
            <path d="M 150 20 L 280 80 L 280 250 Q 280 360 150 400 Q 20 360 20 250 L 20 80 Z"
              fill="none" stroke="#4A8FD9" strokeWidth="2"/>
            <path d="M 150 50 L 250 100 L 250 250 Q 250 340 150 375 Q 50 340 50 250 L 50 100 Z"
              fill="none" stroke="#4A8FD9" strokeWidth="1.5"/>
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="overline-light">Defence Supply</span>
          <h1
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
              fontWeight: 600,
              color: '#FFFFFF',
              lineHeight: 1.1,
              marginTop: '0.75rem',
              maxWidth: '700px',
            }}
          >
            Serving Those Who Protect the Nation
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '16px',
              color: '#9CA3AF',
              marginTop: '1.25rem',
              maxWidth: '560px',
              lineHeight: '1.75',
            }}
          >
            AK Pharma Group supplies WHO-GMP certified pharmaceutical products to India&rsquo;s armed forces,
            paramilitary, and central armed police forces through GeM, direct tenders, and rate
            contract arrangements.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-navy" style={{ backgroundColor: '#1E56A0' }}>
              Defence Procurement Enquiry
            </Link>
            <Link href="/certifications" className="btn-ghost-white">
              View Certifications
            </Link>
          </div>
        </div>
      </section>
      <div className="h-1 grad-navy-bar" />

      {/* ── Procurement channels ───────────────────────────────────────── */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="overline">How We Supply</span>
            <span className="section-rule block mt-3" />
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 600,
                color: '#0B1F3A',
                lineHeight: 1.15,
              }}
            >
              Procurement Channels
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {procurementChannels.map((ch, i) => (
              <div key={i} className="card-accent">
                <div
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: '#EBF2FA',
                    lineHeight: 1,
                    marginBottom: '10px',
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
                    marginBottom: '10px',
                    lineHeight: 1.2,
                  }}
                >
                  {ch.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13.5px', color: '#4B5563', lineHeight: '1.7' }}>
                  {ch.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Forces grid ────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#F4F8FC', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="overline">Forces &amp; Institutions</span>
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
              Institutions We Serve
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {forces.map((f) => (
              <div
                key={f.abbr}
                className="relative overflow-hidden flex flex-col justify-end"
                style={{ borderRadius: '6px', border: '1px solid #E5E7EB', minHeight: 340 }}
              >
                <Image
                  src={f.img}
                  alt={f.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, rgba(11,31,58,0.20) 0%, rgba(11,31,58,0.65) 45%, rgba(11,31,58,0.95) 100%)' }}
                />
                <div className="relative z-10 p-6">
                  <div
                    className="inline-flex items-center justify-center mb-4 px-3 py-1.5"
                    style={{ backgroundColor: '#1E56A0', borderRadius: '4px' }}
                  >
                    <span style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '0.7rem', color: '#FFFFFF', letterSpacing: '0.1em' }}>
                      {f.abbr}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 600, fontSize: '1.2rem', color: '#FFFFFF', marginBottom: '0.5rem', lineHeight: 1.2 }}>
                    {f.name}
                  </h3>
                  <p style={{ fontSize: '12.5px', lineHeight: 1.65, color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-dm-sans)' }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why defence buyers trust us ────────────────────────────────── */}
      <section style={{ backgroundColor: '#0B1F3A', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="overline-light">Why Choose AK Pharma</span>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 600,
                color: '#FFFFFF',
                marginTop: '0.75rem',
                lineHeight: 1.15,
              }}
            >
              Defence-Grade Standards at Every Step
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'GeM Registered', body: 'Listed and verified on Government e-Marketplace — no paperwork friction for defence and government buyers.' },
              { title: 'ISO 9001:2015 | CE | WHO-GMP', body: 'All supplied products are sourced from ISO 9001:2015 certified, CE marked, and WHO-GMP certified manufacturers meeting international pharmacopoeia standards.' },
              { title: 'Zero Supply Interruption', body: 'Buffer stock management and dedicated logistics ensure no establishment faces a medicine stock-out.' },
              { title: 'Full Documentation', body: 'Batch certificates, quality compliance documents, and quality reports provided with every consignment.' },
              { title: 'Tender Expertise', body: 'Experienced in DGAFMS, AFMSD, and service-specific tender processes. Technical bids prepared correctly, first time.' },
              { title: 'Pan-India Reach', body: 'Supply to defence establishments across all Indian states — Leh to Kanyakumari, Gujarat to Arunachal Pradesh.' },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: '24px',
                  backgroundColor: 'rgba(30,86,160,0.12)',
                  border: '1px solid rgba(74,143,217,0.18)',
                  borderRadius: '6px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.3rem',
                    fontWeight: 600,
                    color: '#DDEEFF',
                    marginBottom: '8px',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13.5px', color: '#9CA3AF', lineHeight: '1.65' }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#EBF2FA', padding: '64px 0', borderTop: '1px solid #C9DAEA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              fontWeight: 600,
              color: '#0B1F3A',
              marginBottom: '1rem',
            }}
          >
            Submit a Defence Procurement Enquiry
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#4B5563', marginBottom: '2rem', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
            Reach our defence supply team for product lists, GeM order assistance, tender documentation, or rate contract discussions.
          </p>
          <Link href="/contact" className="btn-navy">Contact Defence Supply Team &rarr;</Link>
        </div>
      </section>
    </>
  )
}
