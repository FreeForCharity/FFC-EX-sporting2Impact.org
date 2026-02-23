import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Donation Policy | Sporting2Impact',
  description: 'Donation Policy for Sporting2Impact website',
}

export default function DonationPolicy() {
  return (
    <main className="ffc-container py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-[var(--font-faustina)] text-[48px] leading-[60px] mb-8">
          Donation Policy
        </h1>

        <div className="prose max-w-none font-[var(--font-lato)] text-[18px] leading-[28px]">
          <p>
            <strong>Effective Date:</strong> Jan 1, 2026
          </p>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">
            Tax Deductibility
          </h2>
          <p>
            Sporting2Impact is a qualified 501(c)(3) nonprofit organization (EIN: 33-4148206).
            Donations are tax-deductible to the full extent allowed by law.
          </p>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">
            Use of Donations
          </h2>
          <p>
            Donations support our mission to reduce costs and increase revenues for nonprofits by
            providing:
          </p>
          <ul>
            <li>Free Fitness Sessions</li>
            <li>Free Health Talks by Doctors</li>
            <li>Conducting Sports Touraments</li>
            <li>Donate the necessary people in the community</li>
          </ul>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">
            Donation Processing
          </h2>
          <p>
            Donations are processed securely through our payment partners. You will receive a
            receipt for tax purposes via email after your donation is processed.
          </p>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">
            Refund Policy
          </h2>
          <p>
            We generally do not provide refunds for donations. However, if you believe an error has
            occurred, please contact us within 30 days of your donation.
          </p>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">
            Privacy
          </h2>
          <p>
            Donor information is kept confidential and will not be shared with third parties except
            as required by law.
          </p>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">
            Contact Us
          </h2>
          <p>For questions about donations or this policy, please contact us at:</p>
          <p>
            Email:{' '}
            <a href="mailto:info@sporting2impact.org" className="text-primary hover:underline">
              info@sporting2impact.org
            </a>
            <br />
            Phone: +1 (667) 479-2048
          </p>
        </div>
      </div>
    </main>
  )
}
