import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Products — AK Pharma Group',
  description:
    'AK Pharma Group supplies a comprehensive range of WHO-GMP certified pharmaceutical products — tablets, injectables, syrups, topicals, ophthalmic, and surgical supplies. ISO 9001:2015 and CE certified.',
}

const categories = [
  {
    name: 'Tablets & Capsules',
    desc: 'Oral solid dosage forms covering analgesics, antibiotics, antivirals, antihypertensives, vitamins, minerals, and therapeutic formulations for all clinical indications.',
    items: ['Analgesics & Antipyretics', 'Antibiotics & Antimicrobials', 'Antihypertensives', 'Vitamins & Minerals', 'Antidiabetics', 'Gastrointestinal Agents'],
  },
  {
    name: 'Injectable Solutions',
    desc: 'Sterile injectable formulations including IV fluids, ampoules, and vials meeting BP/IP pharmacopoeia standards for clinical, surgical, and field medical use.',
    items: ['IV Fluids & Electrolytes', 'Antibiotic Injections', 'Analgesic Injections', 'Vitamins (Injectable)', 'Antispasmodics', 'Emergency Medicines'],
  },
  {
    name: 'Syrups & Suspensions',
    desc: 'Liquid oral formulations for all age groups — paediatric through adult — covering therapeutic categories including cough, fever, nutritional, and GI indications.',
    items: ['Cough & Cold Syrups', 'Antacid Suspensions', 'Antibiotic Suspensions', 'Nutritional Syrups', 'Antipyretic Syrups', 'Haematinics'],
  },
  {
    name: 'Topical Formulations',
    desc: 'External application preparations for dermatological, orthopaedic, wound-care, and antiseptic use — critical in defence field medical settings.',
    items: ['Antiseptic Creams & Ointments', 'Antifungal Preparations', 'Corticosteroid Topicals', 'Pain Relief Gels', 'Wound Healing Ointments', 'Sunscreen & Protective Creams'],
  },
  {
    name: 'Ophthalmic Preparations',
    desc: 'Sterile ophthalmic formulations meeting rigorous pharmacopoeia standards for infection, inflammation, lubrication, and surgical care of the eye.',
    items: ['Antibiotic Eye Drops', 'Anti-Inflammatory Eye Drops', 'Lubricant Eye Drops', 'Antifungal Eye Preparations', 'Mydriatics', 'Miotics'],
  },
  {
    name: 'Surgical & Medical Supplies',
    desc: 'Supporting pharmaceutical consumables and OTC products required in clinical, field, and institutional medical settings as adjuncts to surgical and critical care.',
    items: ['Surgical Spirit & Antiseptics', 'Dressing Supplies', 'ORS & Rehydration', 'Gloves & Consumables (OTC)', 'Bandaging Supplies', 'Cold & Analgesic Packs'],
  },
]

export default function ProductsPage() {
  return (
    <>
      {/* ── Page header ────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#0B1F3A', padding: '72px 0 60px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="overline-light">Product Range</span>
          <h1
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
              fontWeight: 600,
              color: '#FFFFFF',
              lineHeight: 1.1,
              marginTop: '0.75rem',
              maxWidth: '640px',
            }}
          >
            Comprehensive Pharmaceutical Supply
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '16px',
              color: '#9CA3AF',
              marginTop: '1rem',
              maxWidth: '560px',
              lineHeight: '1.7',
            }}
          >
            WHO-GMP certified products across all major therapeutic categories — ISO 9001:2015 and CE certified, sourced and supplied
            to meet the exacting standards of defence and institutional procurement.
          </p>
        </div>
      </section>
      <div className="h-1 grad-navy-bar" />

      {/* ── Notice bar ─────────────────────────────────────────────────── */}
      <div style={{ backgroundColor: '#EBF2FA', borderBottom: '1px solid #C9DAEA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-3">
          <span style={{ color: '#1E56A0', fontSize: '14px' }}>ℹ</span>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#374151' }}>
            All products are WHO-GMP certified, ISO 9001:2015 compliant, and CE marked. Specific product lists and batch
            documentation available upon institutional enquiry.{' '}
            <Link href="/contact" style={{ color: '#1E56A0', fontWeight: 600 }}>Contact us</Link> for a detailed catalogue.
          </p>
        </div>
      </div>

      {/* ── Product categories ─────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#F4F8FC', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            {categories.map((cat, i) => (
              <div key={cat.name} className="card p-0 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3">

                  {/* Category header */}
                  <div
                    style={{
                      backgroundColor: i % 2 === 0 ? '#0B1F3A' : '#112D56',
                      padding: '36px 32px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontFamily: 'var(--font-cormorant)',
                          fontSize: '3.5rem',
                          fontWeight: 700,
                          color: 'rgba(74,143,217,0.15)',
                          lineHeight: 1,
                          display: 'block',
                          marginBottom: '8px',
                        }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3
                        style={{
                          fontFamily: 'var(--font-cormorant)',
                          fontSize: '1.6rem',
                          fontWeight: 600,
                          color: '#FFFFFF',
                          lineHeight: 1.2,
                          marginBottom: '12px',
                        }}
                      >
                        {cat.name}
                      </h3>
                      <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13.5px', color: '#9CA3AF', lineHeight: '1.65' }}>
                        {cat.desc}
                      </p>
                    </div>
                  </div>

                  {/* Sub-items */}
                  <div
                    className="lg:col-span-2"
                    style={{ padding: '36px 32px', backgroundColor: '#FFFFFF' }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '11px',
                        fontWeight: 600,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: '#9CA3AF',
                        marginBottom: '16px',
                      }}
                    >
                      Product Types Supplied
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {cat.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2.5"
                          style={{
                            padding: '10px 14px',
                            backgroundColor: '#F4F8FC',
                            borderRadius: '4px',
                            border: '1px solid #E5E7EB',
                          }}
                        >
                          <span style={{ color: '#1E56A0', fontSize: '12px', fontWeight: 700 }}>→</span>
                          <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13.5px', color: '#374151', fontWeight: 500 }}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
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
            Need a Specific Product or Full Catalogue?
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#6B7280', marginBottom: '2rem', maxWidth: '440px', marginLeft: 'auto', marginRight: 'auto' }}>
            Contact us with your institutional requirements and we will provide a tailored product list with full compliance documentation.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-navy">Request Catalogue</Link>
            <Link href="/certifications" className="btn-ghost">View Certifications</Link>
          </div>
        </div>
      </section>
    </>
  )
}
