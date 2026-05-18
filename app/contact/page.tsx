import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact — AK Pharma Group',
  description: 'Contact AK Pharma Group for defence procurement, B2B pharmaceutical supply, and institutional enquiries.',
}

export default function ContactPage() {
  return (
    <>
      <section style={{ backgroundColor: '#0B1F3A', padding: '72px 0 60px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="overline-light">Contact</span>
          <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.1, marginTop: '0.75rem', maxWidth: '600px' }}>
            Get In Touch
          </h1>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#9CA3AF', marginTop: '1rem', maxWidth: '520px', lineHeight: '1.7' }}>
            For defence procurement enquiries, B2B supply partnerships, product catalogues, or compliance documentation requests.
          </p>
        </div>
      </section>
      <div className="h-1 grad-navy-bar" />

      <section style={{ backgroundColor: '#F4F8FC', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Contact info cards */}
            <div className="flex flex-col gap-5">
              {[
                { label: 'Email', value: 'akpharmagroup@gmail.com', href: 'mailto:akpharmagroup@gmail.com', sub: 'We respond within one business day' },
                { label: 'Phone', value: '[Phone — placeholder]', href: undefined, sub: 'Mon–Sat, 9:00 AM – 6:00 PM IST' },
                { label: 'Registered Office', value: 'West Bengal, India\n[Full address — placeholder]', href: undefined, sub: 'Headquarters & supply coordination' },
              ].map((c) => (
                <div key={c.label} className="card-accent">
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#1E56A0', marginBottom: '6px' }}>
                    {c.label}
                  </p>
                  {c.href ? (
                    <a href={c.href} style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.25rem', fontWeight: 600, color: '#0B1F3A', textDecoration: 'none' }}>
                      {c.value}
                    </a>
                  ) : (
                    <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.15rem', fontWeight: 600, color: '#0B1F3A', whiteSpace: 'pre-line' }}>
                      {c.value}
                    </p>
                  )}
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12.5px', color: '#6B7280', marginTop: '6px' }}>{c.sub}</p>
                </div>
              ))}

              <div style={{ padding: '20px', backgroundColor: '#0B1F3A', borderRadius: '6px' }}>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#7AB3E8', marginBottom: '8px' }}>
                  Government Buyers
                </p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13.5px', color: '#9CA3AF', lineHeight: '1.6' }}>
                  Defence and government institutions can also reach us directly through our{' '}
                  <span style={{ color: '#7AB3E8', fontWeight: 600 }}>GeM seller profile</span> for procurement orders.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="card p-8">
                <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.75rem', fontWeight: 600, color: '#0B1F3A', marginBottom: '6px' }}>
                  Send an Enquiry
                </h2>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13.5px', color: '#6B7280', marginBottom: '28px' }}>
                  Fill out the form and our team will get back to you within one business day.
                </p>

                <form
                  action={`mailto:akpharmagroup@gmail.com`}
                  method="POST"
                  encType="text/plain"
                  className="flex flex-col gap-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Full Name" name="name" type="text" placeholder="Your name" required />
                    <Field label="Organisation" name="organisation" type="text" placeholder="Company / Institution" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
                    <Field label="Phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#374151', display: 'block', marginBottom: '6px' }}>
                      Enquiry Type
                    </label>
                    <select
                      name="enquiry_type"
                      style={{
                        width: '100%', padding: '10px 14px', border: '1px solid #D1D5DB', borderRadius: '4px',
                        fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#374151', backgroundColor: '#FFFFFF',
                      }}
                    >
                      <option>Defence Procurement</option>
                      <option>B2B / Institutional Supply</option>
                      <option>Product Catalogue Request</option>
                      <option>Compliance Documentation</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#374151', display: 'block', marginBottom: '6px' }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Describe your requirements — products, volumes, delivery location, timelines..."
                      required
                      style={{
                        width: '100%', padding: '10px 14px', border: '1px solid #D1D5DB', borderRadius: '4px',
                        fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#374151', resize: 'vertical',
                      }}
                    />
                  </div>
                  <div>
                    <button type="submit" className="btn-navy" style={{ width: '100%', justifyContent: 'center', padding: '14px 28px' }}>
                      Submit Enquiry
                    </button>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: '#9CA3AF', marginTop: '8px', textAlign: 'center' }}>
                      By submitting, you agree to our <Link href="/privacy-policy" style={{ color: '#1E56A0' }}>Privacy Policy</Link>.
                    </p>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

function Field({ label, name, type, placeholder, required }: { label: string; name: string; type: string; placeholder: string; required?: boolean }) {
  return (
    <div>
      <label style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#374151', display: 'block', marginBottom: '6px' }}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        style={{
          width: '100%', padding: '10px 14px', border: '1px solid #D1D5DB', borderRadius: '4px',
          fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#374151',
        }}
      />
    </div>
  )
}
