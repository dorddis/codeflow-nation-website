import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | CodeFlow',
  description:
    'How CodeFlow collects, uses, and protects your data. We keep it minimal, we do not sell your data, and analytics only run with your consent.',
  alternates: {
    canonical: 'https://codeflownation.com/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | CodeFlow',
    description:
      'How CodeFlow collects, uses, and protects your data. We do not sell your data.',
    url: 'https://codeflownation.com/privacy-policy',
    siteName: 'CodeFlow',
    type: 'website',
  },
};

const lastUpdated = 'June 2026';

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto py-24 md:py-32 px-[6%] md:px-[5%]">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Privacy Policy
        </h1>
        <p className="text-steel">Last updated: {lastUpdated}</p>
      </div>

      <div className="space-y-12 text-steel leading-relaxed">
        <section>
          <p className="text-lg leading-relaxed">
            CodeFlow (codeflownation.com) is operated by Siddharth Rodrigues. This
            page explains what data the site collects, why, and what control you
            have over it. The short version: the site collects as little as
            possible, analytics only run if you opt in, and your data is never
            sold.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">
            What Data We Collect
          </h2>
          <ul className="space-y-3 list-disc pl-5">
            <li>
              <span className="text-primary font-medium">
                Information you send us.
              </span>{' '}
              If you email or book a call, we receive whatever you choose to
              share: your name, email address, and any details about your project.
            </li>
            <li>
              <span className="text-primary font-medium">
                Usage and device data.
              </span>{' '}
              If you accept analytics cookies, we collect aggregate, anonymized
              data such as pages visited, approximate location (country/region),
              browser type, and referring site. This is used to understand what
              content is useful, not to identify you.
            </li>
            <li>
              <span className="text-primary font-medium">
                Cookies for consent.
              </span>{' '}
              A small cookie records your cookie preference so we do not ask again
              on every visit.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">
            Analytics and Cookies
          </h2>
          <p className="mb-4">
            This site uses Google Analytics to measure traffic. Analytics cookies
            are only set after you click &ldquo;Accept All&rdquo; in the cookie
            banner. If you choose &ldquo;Necessary Only,&rdquo; analytics and
            advertising storage stay disabled and no tracking cookies are written.
          </p>
          <p>
            You can change your choice at any time by clearing the
            site&apos;s cookies in your browser, which brings the consent banner
            back on your next visit. Most browsers also let you block or delete
            cookies entirely through their settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">
            How We Use Your Data
          </h2>
          <p>
            We use the information you send us solely to respond to your inquiry,
            scope potential work, and follow up about a project. Aggregate
            analytics data is used to improve the site and decide what to write
            about. We do not use your data for automated decision-making or
            profiling.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">
            What We Do Not Do
          </h2>
          <ul className="space-y-3 list-disc pl-5">
            <li>We do not sell, rent, or trade your personal data to anyone.</li>
            <li>We do not share your data with third parties for their own marketing.</li>
            <li>We do not run advertising trackers unless you explicitly accept them.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">
            Third-Party Services
          </h2>
          <p>
            A few trusted providers process data on our behalf: Google Analytics
            (traffic measurement), our scheduling provider for the &ldquo;Book a
            Call&rdquo; widget, and standard hosting infrastructure. Each only
            receives what it needs to do its job and is bound by its own privacy
            terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">Your Rights</h2>
          <p>
            You can ask us what data we hold about you, request a correction, or
            ask us to delete it. Email the address below and we will action it.
            There is no charge, and we will not require you to create an account to
            exercise these rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">Contact</h2>
          <p>
            Questions about this policy or your data? Reach out at{' '}
            <a
              href="mailto:siddharth@codeflownation.com"
              className="text-accent hover:underline"
            >
              siddharth@codeflownation.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">Changes</h2>
          <p>
            If this policy changes, the updated version will be posted here with a
            new &ldquo;last updated&rdquo; date. Material changes will be reflected
            on this page.
          </p>
        </section>
      </div>
    </main>
  );
}
