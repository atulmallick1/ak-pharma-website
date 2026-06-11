import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — AK Pharma Group',
  description: 'How AK Pharma Group collects, uses, and protects personal data under the Digital Personal Data Protection Act, 2023.',
}

export default function PrivacyPolicyPage() {
  const lastUpdated = '12 June 2026'

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

            <Section title="1. Who We Are — the Data Fiduciary">
              <p>
                AK Pharma Group (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), headquartered in West Bengal, India,
                operates the website <strong>akpharmagroup.com</strong> (the &ldquo;Website&rdquo;). Under the
                Digital Personal Data Protection Act, 2023 (&ldquo;DPDP Act&rdquo;), AK Pharma Group is the
                <strong> Data Fiduciary</strong> for any personal data collected through this Website. This
                Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you visit our Website or contact us through it.
              </p>
              <p className="mt-3">
                By using our Website, you agree to the collection and use of information in
                accordance with this Policy. If you do not agree, please do not use our Website.
              </p>
            </Section>

            <Section title="2. Information We Collect">
              <p>We collect only what is necessary to respond to an enquiry or fulfil a supply request:</p>
              <ul className="list-none mt-3 flex flex-col gap-2">
                {[
                  { term: 'Contact Information', detail: 'Name, email address, phone number, and organisation name provided when you use our contact form or send us an email enquiry.' },
                  { term: 'Enquiry Details', detail: 'Product requirements, procurement details, and other information you voluntarily provide in your enquiry.' },
                  { term: 'Technical Data', detail: 'IP address, browser type, pages visited, and time spent on our Website — collected automatically via standard server logs for security, fraud prevention, and performance purposes.' },
                  { term: 'Cookies', detail: 'Small data files stored on your browser for basic website functionality. We do not use cookies for advertising or cross-site tracking.' },
                ].map((item) => (
                  <li key={item.term} className="flex gap-3">
                    <span style={{ color: '#1E56A0', fontWeight: 700, flexShrink: 0 }}>→</span>
                    <span><strong>{item.term}:</strong> {item.detail}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3">
                We do not ask for, and you should not submit, sensitive personal, medical, financial,
                or government-ID information through this Website. Pharmaceutical enquiries should
                refer to product names and quantities, not patient-level data.
              </p>
            </Section>

            <Section title="3. Lawful Basis Under the DPDP Act">
              <p>
                We process your personal data on one or more of the following lawful bases recognised
                by the DPDP Act:
              </p>
              <ul className="list-none mt-3 flex flex-col gap-2">
                {[
                  { term: 'Consent', detail: 'When you voluntarily submit a contact form or enquiry, you consent to us using your details to respond to that enquiry.' },
                  { term: 'Legitimate Use', detail: 'To respond to communications you initiate, manage institutional supply relationships, maintain records of business correspondence, and ensure the security of this Website.' },
                  { term: 'Legal Obligation', detail: 'To comply with the Drugs and Cosmetics Act, 1940, GST requirements, and other applicable Indian regulations.' },
                ].map((item) => (
                  <li key={item.term} className="flex gap-3">
                    <span style={{ color: '#1E56A0', fontWeight: 700, flexShrink: 0 }}>→</span>
                    <span><strong>{item.term}:</strong> {item.detail}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="4. How We Use Your Information">
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
                We do not sell, rent, or trade your personal information. We do not use your details
                for unrelated marketing without your consent.
              </p>
            </Section>

            <Section title="5. Information Sharing">
              <p>
                We do not share your personal information with third parties except in the following
                limited circumstances, in which the recipients act as Data Processors or independently
                regulated entities:
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
                retained as required under the Drugs and Cosmetics Act and GST regulations, after
                which data is deleted or anonymised.
              </p>
            </Section>

            <Section title="7. Data Security">
              <p>
                We implement reasonable technical and organisational measures to protect your
                personal information against unauthorised access, disclosure, alteration, or
                destruction — HTTPS encryption in transit, access controls on our inbox, and
                security headers on every page. However, no method of transmission over the
                internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </Section>

            <Section title="8. Your Rights as a Data Principal">
              <p>
                Under the DPDP Act, you (as a <strong>Data Principal</strong>) have the right to:
              </p>
              <ul className="list-none mt-3 flex flex-col gap-2">
                {[
                  'Access the personal data we hold about you',
                  'Request correction or updating of inaccurate or incomplete data',
                  'Request erasure of your personal data (subject to legal retention obligations)',
                  'Withdraw consent at any time, where consent is our lawful basis',
                  'Nominate another individual to exercise your rights in the event of your death or incapacity',
                  'Raise a grievance with our Grievance Officer (see section 12)',
                  'Approach the Data Protection Board of India if your grievance is not satisfactorily resolved',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span style={{ color: '#1E56A0', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3">
                To exercise any of these rights, email{' '}
                <a href="mailto:info@akpharmagroup.com" style={{ color: '#1E56A0' }}>
                  info@akpharmagroup.com
                </a>{' '}
                with the subject &ldquo;Privacy request&rdquo;. We will respond within a reasonable
                timeframe and in any case within the statutory period.
              </p>
            </Section>

            <Section title="9. Cookies and Tracking">
              <p>
                Our Website uses only cookies that are strictly necessary for the Website to
                function. We do not use advertising cookies, third-party analytics cookies, or
                tracking pixels that share data with external parties. Where consent is required
                for any non-essential cookies, you will see a banner inviting you to accept or
                decline. You may also configure your browser to refuse cookies at any time, but
                this may affect certain Website functionality.
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

            <Section title="12. Grievance Officer">
              <p>
                In accordance with the DPDP Act and the Information Technology Act, 2000, the
                following officer is designated to receive privacy-related grievances:
              </p>
              <div
                className="mt-4 p-5 rounded"
                style={{ backgroundColor: '#F4F8FC', border: '1px solid #C9DAEA' }}
              >
                <p style={{ fontWeight: 600, color: '#0B1F3A', marginBottom: '8px' }}>
                  Grievance Officer — AK Pharma Group
                </p>
                <p>
                  Email:{' '}
                  <a href="mailto:info@akpharmagroup.com" style={{ color: '#1E56A0' }}>
                    info@akpharmagroup.com
                  </a>
                </p>
                <p>Subject line: &ldquo;Privacy grievance&rdquo;</p>
              </div>
              <p className="mt-3">
                We will acknowledge grievances within 7 working days and aim to resolve them
                within 30 days, in line with statutory expectations.
              </p>
            </Section>

            <Section title="13. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. The revised version will
                be posted on this page with an updated &ldquo;last updated&rdquo; date, and material
                changes will be highlighted at the top of the page. Continued use of our Website
                after changes constitutes acceptance of the revised Policy.
              </p>
            </Section>

            <Section title="14. Governing Law">
              <p>
                This Privacy Policy is governed by the laws of India, including the Digital
                Personal Data Protection Act, 2023 and the Information Technology Act, 2000.
                Any disputes shall be subject to the exclusive jurisdiction of the courts of
                West Bengal, India.
              </p>
            </Section>

            <Section title="15. Contact Us">
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
