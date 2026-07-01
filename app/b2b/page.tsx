import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'B2B Supply — AK Pharma Group',
  description:
    'AK Pharma Group is a pan-India pharmaceutical B2B supplier for hospitals, distributors, nursing homes, and government healthcare institutions. ISO 9001:2015, CE, and WHO-GMP certified. GeM registered.',
}

const buyers = [
  { title: 'Government Hospitals', desc: 'District hospitals, medical colleges, and government health centres requiring dependable bulk pharmaceutical supply.' },
  { title: 'Private Hospitals & Nursing Homes', desc: 'Clinical establishments of all sizes sourcing quality-assured pharmaceutical products at institutional pricing.' },
  { title: 'Pharmaceutical Distributors', desc: 'Wholesale distributors seeking reliable supply of WHO-GMP certified formulations for regional redistribution.' },
  { title: 'Retail Pharmacy Chains', desc: 'Multi-outlet pharmacy chains and co-operative pharmacy networks requiring volume pharmaceutical supply.' },
  { title: 'NGO & Aid Organisations', desc: 'Health-focused NGOs and humanitarian organisations requiring verified, quality-compliant pharmaceutical supply.' },
  { title: 'Industrial & Corporate Clinics', desc: 'Factory, plant, and corporate health centres requiring regular pharmaceutical restocking under standing orders.' },
]

const process = [
  { step: '01', title: 'Submit Enquiry', desc: 'Send us your product requirement list, volumes, and delivery location via email or our contact form.' },
  { step: '02', title: 'Receive Quotation', desc: 'We respond within one business day with a detailed quotation including product specifications, batch details, and pricing.' },
  { step: '03', title: 'Documentation & Compliance', desc: 'We provide full quality documentation — batch certificates, regulatory compliance records, drug license copies — before order confirmation.' },
  { step: '04', title: 'Order Fulfilment', desc: 'Confirmed orders are dispatched with traceable logistics, proper cold-chain where required, and delivery documentation.' },
  { step: '05', title: 'Ongoing Partnership', desc: 'Establish a standing supply relationship with scheduled deliveries, dedicated account support, and priority stock allocation.' },
]

export default function B2BPage() {
  return (
    <>
      {/* ── Page header ────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#0B1F3A', padding: '72px 0 60px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="overline-light">B2B Supply</span>
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
            Pan-India Institutional Pharmaceutical Supply
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
            Hospitals, distributors, government health centres, and institutional buyers across
            India rely on AK Pharma Group for consistent, quality-assured pharmaceutical supply
            backed by full regulatory documentation.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-navy" style={{ backgroundColor: '#1E56A0' }}>
              Start a B2B Partnership &rarr;
            </Link>
          </div>
        </div>
      </section>
      <div className="h-1 grad-navy-bar" />

      {/* ── Who we serve ───────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="overline">Who We Serve</span>
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
              Trusted by Institutions Across India
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {buyers.map((b) => (
              <div key={b.title} className="card-accent">
                <h3
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.35rem',
                    fontWeight: 600,
                    color: '#0B1F3A',
                    marginBottom: '8px',
                    lineHeight: 1.2,
                  }}
                >
                  {b.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13.5px', color: '#4B5563', lineHeight: '1.65' }}>
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why partner ────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#F4F8FC', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="overline">Why Partner With Us</span>
              <span className="section-rule block mt-3" />
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                  fontWeight: 600,
                  color: '#0B1F3A',
                  lineHeight: 1.15,
                  marginBottom: '1.5rem',
                }}
              >
                The AK Pharma Advantage
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '15px',
                  color: '#4B5563',
                  lineHeight: '1.75',
                  marginBottom: '1.25rem',
                }}
              >
                We are not a marketplace aggregator or a trading intermediary. AK Pharma Group
                is a direct institutional supplier with fixed supply relationships, maintained
                inventory, and a documented quality trail for every product we supply.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '15px',
                  color: '#4B5563',
                  lineHeight: '1.75',
                }}
              >
                Our B2B partners get consistent pricing, priority stock access, full documentation
                support, and a single point of contact who understands their institutional
                procurement requirements.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { icon: '✦', title: 'ISO 9001:2015 | CE | WHO-GMP Certified', body: 'All products sourced from ISO 9001:2015, CE, and WHO-GMP certified manufacturers — quality backed by international certifications and documentation.' },
                { icon: '✦', title: 'Competitive Institutional Pricing', body: 'Volume-based pricing for institutional buyers with transparent quotations and no hidden charges.' },
                { icon: '✦', title: 'Full Compliance Documentation', body: 'Batch certificates, regulatory compliance records, and drug license documentation provided with every supply.' },
                { icon: '✦', title: 'Pan-India Logistics', body: 'Reliable supply to all Indian states, Union Territories, and defence-present island territories, with proper cold-chain management and traceable delivery.' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 items-start"
                  style={{
                    padding: '16px 20px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E5E7EB',
                    borderRadius: '6px',
                  }}
                >
                  <span style={{ color: '#1E56A0', fontSize: '18px', flexShrink: 0, marginTop: '2px' }}>{item.icon}</span>
                  <div>
                    <h4
                      style={{
                        fontFamily: 'var(--font-cormorant)',
                        fontSize: '1.15rem',
                        fontWeight: 600,
                        color: '#0B1F3A',
                        marginBottom: '4px',
                      }}
                    >
                      {item.title}
                    </h4>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#6B7280', lineHeight: '1.6' }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#0B1F3A', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="overline-light">How It Works</span>
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
              From Enquiry to Delivery
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {process.map((p, i) => (
              <div
                key={p.step}
                style={{
                  padding: '24px 20px',
                  backgroundColor: 'rgba(30,86,160,0.12)',
                  border: '1px solid rgba(74,143,217,0.18)',
                  borderRadius: '6px',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    color: 'rgba(74,143,217,0.2)',
                    lineHeight: 1,
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  {p.step}
                </span>
                <h4
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    color: '#DDEEFF',
                    marginBottom: '8px',
                    lineHeight: 1.2,
                  }}
                >
                  {p.title}
                </h4>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12.5px', color: '#9CA3AF', lineHeight: '1.6' }}>
                  {p.desc}
                </p>
                {i < process.length - 1 && (
                  <div
                    className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2"
                    style={{ color: '#4A8FD9', fontSize: '16px', zIndex: 1 }}
                  >
                    →
                  </div>
                )}
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
            Ready to Place a B2B Order?
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#4B5563', marginBottom: '2rem', maxWidth: '460px', marginLeft: 'auto', marginRight: 'auto' }}>
            Send us your requirements and we will respond within one business day with a complete quotation and compliance documentation.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-navy">Send Enquiry</Link>
            <Link href="/products" className="btn-ghost">View Products</Link>
          </div>
        </div>
      </section>
    </>
  )
}
