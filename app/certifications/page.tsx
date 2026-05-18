import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Certifications — AK Pharma Group',
  description:
    'AK Pharma Group is ISO 9001:2015 certified, CE certified, and manufactures/supplies WHO-GMP certified medicines. Also holds valid Drug License and GeM registration — full regulatory credentials for defence and institutional pharmaceutical supply.',
}

const certs = [
  {
    title: 'ISO 9001:2015 Certification',
    authority: 'International Organisation for Standardisation',
    desc: 'AK Pharma Group is ISO 9001:2015 certified, demonstrating that our quality management system meets international standards for consistency, customer satisfaction, and continual improvement across all pharmaceutical supply operations.',
    badge: 'ISO',
    details: ['International quality management standard', 'Process-driven quality assurance', 'Continual improvement framework', 'Customer satisfaction focus', 'Regular surveillance audits'],
  },
  {
    title: 'CE Certification',
    authority: 'European Conformity',
    desc: 'CE certification confirms that AK Pharma Group\'s products meet the health, safety, and environmental protection standards required for products sold and distributed within the European Economic Area and internationally.',
    badge: 'CE',
    details: ['European conformity standards met', 'Product safety and quality verified', 'International market compliance', 'Rigorous testing and documentation', 'Recognised globally by institutional buyers'],
  },
  {
    title: 'WHO-GMP Certification',
    authority: 'World Health Organisation / State Drug Authority',
    desc: 'AK Pharma Group manufactures and supplies WHO-GMP certified medicines. WHO Good Manufacturing Practice certification confirms that pharmaceutical products are manufactured under conditions meeting the stringent standards set by the World Health Organisation, mandatory for defence and government institutional supply.',
    badge: 'WHO-GMP',
    details: ['WHO-level manufacturing standards', 'Batch traceability at every stage', 'Quality Control (QC) documentation', 'Compliant storage and handling', 'Regular third-party audits'],
  },
  {
    title: 'Drug License',
    authority: 'State Drug Licensing Authority',
    desc: 'AK Pharma Group holds a valid Drug License under the Drugs and Cosmetics Act, 1940. This license authorises the sale, stocking, and distribution of pharmaceutical products as per Schedule H and H1 requirements across India.',
    badge: 'DL',
    details: ['Valid Drugs and Cosmetics Act license', 'Authorised wholesale distribution', 'Schedule H and H1 products covered', 'Regular license renewal maintained', 'Compliant documentation procedures'],
  },
  {
    title: 'GeM Registration',
    authority: 'Government e-Marketplace (GeM)',
    desc: 'AK Pharma Group is a verified supplier on the Government e-Marketplace — the Government of India\'s official procurement platform. GeM registration enables direct purchase by defence establishments, PSUs, and government institutions without additional tendering formalities.',
    badge: 'GeM',
    details: ['Verified seller on GeM portal', 'Direct procurement by government buyers', 'Transparent bid and order history', 'MSME/startup benefits where applicable', 'Defence and CPSE buyer enabled'],
  },
]

export default function CertificationsPage() {
  return (
    <>
      {/* ── Page header ────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#0B1F3A', padding: '72px 0 60px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="overline-light">Certifications &amp; Compliance</span>
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
            Every Credential. Every Standard. Met.
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
            Our certifications are not incidental — they are the foundation of every supply
            relationship. ISO 9001:2015 certified. CE certified. WHO-GMP certified. Drug Licenced and GeM registered.
          </p>
        </div>
      </section>
      <div className="h-1 grad-navy-bar" />

      {/* ── Cert summary badges ────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#112D56' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap justify-center gap-6">
            {certs.map((c) => (
              <div key={c.badge} className="flex items-center gap-3">
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '4px',
                    backgroundColor: '#1E56A0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.05em' }}>
                    {c.badge}
                  </span>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.1rem', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.1 }}>{c.title}</p>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: '#7AB3E8', letterSpacing: '0.05em' }}>{c.authority}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cert detail sections ───────────────────────────────────────── */}
      <section style={{ backgroundColor: '#F4F8FC', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
          {certs.map((cert, i) => (
            <div key={cert.badge} className="card p-0 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3">

                {/* Badge + title */}
                <div
                  style={{
                    backgroundColor: i % 2 === 0 ? '#0B1F3A' : '#112D56',
                    padding: '40px 36px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(30,86,160,0.5)',
                      border: '1px solid rgba(74,143,217,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, color: '#7AB3E8', letterSpacing: '0.05em' }}>
                      {cert.badge}
                    </span>
                  </div>
                  <h2
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: '1.75rem',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      lineHeight: 1.15,
                      marginBottom: '8px',
                    }}
                  >
                    {cert.title}
                  </h2>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: '#7AB3E8', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {cert.authority}
                  </p>
                </div>

                {/* Description + details */}
                <div
                  className="lg:col-span-2"
                  style={{ padding: '40px 36px', backgroundColor: '#FFFFFF' }}
                >
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14.5px', color: '#4B5563', lineHeight: '1.75', marginBottom: '20px' }}>
                    {cert.desc}
                  </p>
                  <div
                    style={{
                      borderTop: '1px solid #E5E7EB',
                      paddingTop: '16px',
                    }}
                  >
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: '12px' }}>
                      Key Compliance Points
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {cert.details.map((d) => (
                        <li key={d} className="flex items-center gap-2">
                          <span style={{ color: '#1E56A0', fontSize: '13px', fontWeight: 700, flexShrink: 0 }}>✓</span>
                          <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13.5px', color: '#374151' }}>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Document request ───────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '64px 0', borderTop: '1px solid #E5E7EB' }}>
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
            Request Compliance Documentation
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#6B7280', marginBottom: '2rem', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.7' }}>
            Procurement officers and institutional buyers may request certified copies of our
            Drug License, ISO 9001:2015 certificate, CE certificate, WHO-GMP certificate, GeM registration, and product-specific batch documents.
          </p>
          <Link href="/contact" className="btn-navy">Request Documents</Link>
        </div>
      </section>
    </>
  )
}
