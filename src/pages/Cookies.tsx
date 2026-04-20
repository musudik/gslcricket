import { Helmet } from 'react-helmet-async'

export default function Cookies() {
  return (
    <>
      <Helmet>
        <title>Cookie Policy – GSLC</title>
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-display text-4xl sm:text-5xl tracking-wider text-gslc-gold mb-10">Cookie Policy</h1>

        <div className="space-y-8 text-gslc-text text-sm leading-relaxed">
          <section>
            <h2 className="font-display text-xl tracking-wider text-gslc-red mb-3">What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website.
              They are widely used to make websites work more efficiently, as well as to provide information to the
              owners of the site.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl tracking-wider text-gslc-red mb-3">Cookies We Use</h2>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gslc-border text-gslc-muted">
                    <th className="py-3 pr-4 text-left font-medium">Name</th>
                    <th className="py-3 pr-4 text-left font-medium">Purpose</th>
                    <th className="py-3 pr-4 text-left font-medium">Type</th>
                    <th className="py-3 text-left font-medium">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gslc-border/50">
                    <td className="py-3 pr-4 text-gslc-gold font-mono text-xs">gslc-cookie-consent</td>
                    <td className="py-3 pr-4 text-gslc-muted">Records your cookie consent preference</td>
                    <td className="py-3 pr-4">
                      <span className="px-2 py-0.5 rounded bg-gslc-gold/10 text-gslc-gold text-xs font-medium">Essential</span>
                    </td>
                    <td className="py-3 text-gslc-muted">Persistent</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl tracking-wider text-gslc-red mb-3">Third-Party Cookies</h2>
            <p>
              We currently do not use any third-party cookies for tracking, analytics, or advertising purposes. Should
              this change in the future, we will update this policy and request your consent accordingly.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl tracking-wider text-gslc-red mb-3">Managing Cookies</h2>
            <p>
              You can control and manage cookies in your browser settings. Please note that removing or blocking cookies
              may impact your experience on our website. Most browsers allow you to:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gslc-muted">
              <li>View what cookies are stored and delete them individually</li>
              <li>Block third-party cookies</li>
              <li>Block cookies from specific sites</li>
              <li>Block all cookies from being set</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl tracking-wider text-gslc-red mb-3">Changes to This Policy</h2>
            <p>
              We may update this cookie policy from time to time. Any changes will be posted on this page with an updated
              revision date.
            </p>
            <p className="mt-2 text-gslc-muted">Last updated: April 2026</p>
          </section>

          <section>
            <h2 className="font-display text-xl tracking-wider text-gslc-red mb-3">Contact</h2>
            <p>
              If you have questions about our use of cookies, contact us at:<br />
              Email: info@gslcricket.de
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
