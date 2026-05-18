import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — AK Pharma Group',
  description: 'Privacy Policy for AK Pharma Group. Learn how we collect, use, and protect your information.',
}

export default function PrivacyPolicyPage() {
  const lastUpdated = 'May 2025'

  return (
    <>
      {/* ── Page header ────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#0B1F3A', padding: '60px 0 48px' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="overline-light">Legal</span>
          <h1
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 600,
              color: '#FFFFFF',
              lineHeight: 1.1,
              marginTop: '0.75rem',
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#7AB3E8', marginTop: '0.75rem' }}>
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>
      <div className="h-1 grad-navy-bar" />

      {/* ── Policy content ─────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#F4F8FC', padding: '64px 0' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="card p-8 sm:p-12"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '14.5px',
              lineHeight: '1.8',
              color: '#374151',
            }}
          >

            <Section title="1. Introduction">
              <p>
                AK Pharma Group (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), headquartered in West Bengal, India,
                operates the website <strong>akpharmagroup.com</strong> (the &ldquo;Website&rdquo;). This Privacy
                Policy explains how we collect, use, disclose, and safeguard your information when
                you visit our Website or contact us through it.
              </p>
              <p className="mt-3">
                By using our Website, you agree to the collection and use of information in
                accordance with this Policy. If you do not agree, please do not use our Website.
              </p>
            </Section>

            <Section title="2. Information We Collect">
              <p>We may collect the following types of information:</p>
              <ul className="list-none mt-3 flex flex-col gap-2">
                {[
                  { term: 'Contact Information', detail: 'Name, email address, phone number, and organisation name provided when you use our contact form or send us an email enquiry.' },
                  { term: 'Enquiry Details', detail: 'Product requirements, procurement details, and other information you voluntarily provide in your enquiry.' },
                  { term: 'Technical Data', detail: 'IP address, browser type, pages visited, and time spent on our Website — collected automatically via standard server logs.' },
                  { term: 'Cookies', detail: 'Small data files stored on your browser for basic website functionality. We do not use cookies for advertising or cross-site tracking.' },
                ].map((item) => (
                  <li key={item.term} className="flex gap-3">
                    <span style={{ color: '#1E56A0', fontWeight: 700, flexShrink: 0 }}>→</span>
                    <span><strong>{item.term}:</strong> {item.detail}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="3. How We Use Your Information">
              <p>We use the information we collect to:</p>
              <ul className="list-none mt-3 flex flex-col gap-2">
                {[
                  'Respond to your enquiries regarding pharmaceutical products, procurement, or partnerships',
                  'Process and fulfil institutional supply orders and related correspondence',
                  'Send relevant information about our products, services, or certifications when requested',
                  'Improve our Website and user experience',
                  'Comply with applicable laws and regulatory requirements under Indian law',
                  'Maintain records as required under the Drugs and Cosmetics Act, 1940 and related regulations',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span style={{ color: '#1E56A0', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3">
                We do not sell, rent, or trade your personal information to third parties for
                marketing purposes.
              </p>
            </Section>

            <Section title="4. Legal Basis for Processing">
              <p>
                We process your personal information under the following legal bases in accordance
                with the Information Technology Act, 2000 and applicable Indian data protection law:
              </p>
              <ul className="list-none mt-3 flex flex-col gap-2">
                {[
                  { term: 'Consent', detail: 'When you submit a contact form or enquiry, you consent to us processing your information to respond.' },
                  { term: 'Legitimate Interest', detail: 'To operate our website, manage institutional supply relationships, and maintain business records.' },
                  { term: 'Legal Obligation', detail: 'To comply with the Drugs and Cosmetics Act, 1940, GST requirements, and other applicable Indian regulations.' },
                ].map((item) => (
                  <li key={item.term} className="flex gap-3">
                    <span style={{ color: '#1E56A0', fontWeight: 700, flexShrink: 0 }}>→</span>
                    <span><strong>{item.term}:</strong> {item.detail}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="5. Information Sharing">
              <p>
                We do not share your personal information with third parties except in the following
                limited circumstances:
              </p>
              <ul className="list-none mt-3 flex flex-col gap-2">
                {[
                  'Logistics and courier partners who require delivery information to fulfil orders',
                  'Payment processing partners for order transactions (no card data is stored by us)',
                  'Regulatory authorities as required under the Drugs and Cosmetics Act or other applicable law',
                  'Professional advisers (legal, accounting) bound by confidentiality obligations',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span style={{ color: '#1E56A0', fontWeight: 700, flexShrink: 0 }}>→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="6. Data Retention">
              <p>
                We retain your personal information only for as long as necessary to fulfil the
                purposes for which it was collected, or as required by law. Enquiry records are
                typically retained for a period of 3 years. Supply and transaction records are
                retained as required under the Drugs and Cosmetics Act and GST regulations.
              </p>
            </Section>

            <Section title="7. Data Security">
              <p>
                We implement reasonable technical and organisational measures to protect your
                personal information against unauthorised access, disclosure, alteration, or
                destruction. However, no method of transmission over the internet is 100%
                secure, and we cannot guarantee absolute security.
              </p>
              <p className="mt-3">
                Our Website uses HTTPS encryption for all data transmitted between your browser
                and our servers.
              </p>
            </Section>

            <Section title="8. Your Rights">
              <p>
                Under applicable Indian law, you may have the right to:
              </p>
              <ul className="list-none mt-3 flex flex-col gap-2">
                {[
                  'Access the personal information we hold about you',
                  'Request correction of inaccurate or incomplete information',
                  'Request deletion of your personal information (subject to legal retention obligations)',
                  'Withdraw consent for processing where consent is the legal basis',
                  'Lodge a complaint with a relevant regulatory authority',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span style={{ color: '#1E56A0', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:info@akpharmagroup.com" style={{ color: '#1E56A0' }}>
                  info@akpharmagroup.com
                </a>
                . We will respond within 30 days.
              </p>
            </Section>

            <Section title="9. Cookies">
              <p>
                Our Website uses only essential cookies necessary for the Website to function.
                We do not use advertising cookies, third-party analytics cookies, or tracking
                pixels that share data with external parties. You may configure your browser to
                refuse cookies, but this may affect certain Website functionality.
              </p>
            </Section>

            <Section title="10. Third-Party Links">
              <p>
                Our Website may contain links to third-party websites (such as the GeM portal or
                regulatory authority websites). We are not responsible for the privacy practices
                of those websites and recommend reviewing their privacy policies separately.
              </p>
            </Section>

            <Section title="11. Children's Privacy">
              <p>
                Our Website is not directed at individuals under the age of 18. We do not
                knowingly collect personal information from minors. If you believe we have
                inadvertently collected such information, please contact us for its immediate
                deletion.
              </p>
            </Section>

            <Section title="12. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. The revised version will
                be posted on this page with an updated &ldquo;last updated&rdquo; date. We encourage you
                to review this Policy periodically. Continued use of our Website after changes
                constitutes acceptance of the revised Policy.
              </p>
            </Section>

            <Section title="13. Governing Law">
              <p>
                This Privacy Policy is governed by the laws of India, including the Information
                Technology Act, 2000 and the Information Technology (Reasonable Security
                Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.
                Any disputes shall be subject to the exclusive jurisdiction of the courts of
                West Bengal, India.
              </p>
            </Section>

            <Section title="14. Contact Us">
              <p>
                For any questions, concerns, or requests regarding this Privacy Policy or your
                personal information, please contact us:
              </p>
              <div
                className="mt-4 p-5 rounded"
                style={{ backgroundColor: '#F4F8FC', border: '1px solid #C9DAEA' }}
              >
                <p style={{ fontWeight: 600, color: '#0B1F3A', marginBottom: '8px' }}>AK Pharma Group</p>
                <p>West Bengal, India</p>
                <p>
                  Email:{' '}
                  <a href="mailto:info@akpharmagroup.com" style={{ color: '#1E56A0' }}>
                    info@akpharmagroup.com
                  </a>
                </p>
              </div>
            </Section>

          </div>
        </div>
      </section>
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <h2
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: '1.5rem',
          fontWeight: 600,
          color: '#0B1F3A',
          marginBottom: '0.75rem',
          paddingBottom: '0.5rem',
          borderBottom: '1px solid #E5E7EB',
        }}
      >
        {title}
      </h2>
      {children}
    </div>
  )
}
