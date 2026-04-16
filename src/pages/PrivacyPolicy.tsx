import { Helmet } from 'react-helmet-async'

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy – GSLC</title>
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-display text-4xl sm:text-5xl tracking-wider text-white mb-10">Privacy Policy</h1>

        <div className="space-y-8 text-gslc-text text-sm leading-relaxed">
          <section>
            <h2 className="font-display text-xl tracking-wider text-white mb-3">1. Overview</h2>
            <p>
              The following gives a simple overview of what happens to your personal information when you visit our website.
              Personal information is any data with which you could be personally identified. Detailed information can be
              found in our privacy policy listed below.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl tracking-wider text-white mb-3">2. Data Collection on Our Website</h2>
            <h3 className="text-white font-medium mt-4 mb-2">Who is responsible for data collection?</h3>
            <p>
              Data processing on this website is carried out by the website operator:<br />
              German Super League Cricket (GSLC)<br />
              Musterstraße 1, 10115 Berlin, Germany<br />
              Email: info@gslcricket.de
            </p>

            <h3 className="text-white font-medium mt-4 mb-2">How do we collect your data?</h3>
            <p>
              Some data is collected when you provide it to us (e.g., contact form data). Other data is collected
              automatically by our IT systems when you visit the website. This is mainly technical data such as the
              browser and operating system you are using or the time of your page view. This data is collected
              automatically as soon as you enter our website.
            </p>

            <h3 className="text-white font-medium mt-4 mb-2">What do we use your data for?</h3>
            <p>
              Part of the data is collected to ensure the proper functioning of the website. Other data can be used to
              analyze how visitors use the site.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl tracking-wider text-white mb-3">3. Your Rights</h2>
            <p>Under GDPR, you have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gslc-muted">
              <li>Right of access (Art. 15 GDPR)</li>
              <li>Right to rectification (Art. 16 GDPR)</li>
              <li>Right to erasure (Art. 17 GDPR)</li>
              <li>Right to restriction of processing (Art. 18 GDPR)</li>
              <li>Right to data portability (Art. 20 GDPR)</li>
              <li>Right to object (Art. 21 GDPR)</li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, please contact us at info@gslcricket.de.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl tracking-wider text-white mb-3">4. Hosting</h2>
            <p>
              This website is hosted by Vercel Inc. When you visit our website, your IP address and other data are
              transmitted to Vercel's servers. This is necessary for delivering the website to your browser. Vercel
              processes this data on our behalf under a data processing agreement.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl tracking-wider text-white mb-3">5. Cookies</h2>
            <p>
              Our website uses only essential cookies required for proper operation. We do not use tracking or
              advertising cookies. For more details, see our{' '}
              <a href="/cookies" className="text-gslc-gold hover:underline">Cookie Policy</a>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl tracking-wider text-white mb-3">6. Contact</h2>
            <p>
              If you have questions about data protection, please contact us at:<br />
              Email: info@gslcricket.de<br />
              German Super League Cricket (GSLC)<br />
              Musterstraße 1, 10115 Berlin, Germany
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
