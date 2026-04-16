import { Helmet } from 'react-helmet-async'

export default function Impressum() {
  return (
    <>
      <Helmet>
        <title>Impressum – GSLC</title>
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-display text-4xl sm:text-5xl tracking-wider text-white mb-10">Impressum</h1>

        <div className="space-y-8 text-gslc-text text-sm leading-relaxed">
          <section>
            <h2 className="font-display text-xl tracking-wider text-white mb-3">Information pursuant to § 5 TMG</h2>
            <p>
              German Super League Cricket (GSLC)<br />
              Musterstraße 1<br />
              10115 Berlin<br />
              Germany
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl tracking-wider text-white mb-3">Contact</h2>
            <p>
              Email: info@gslcricket.de<br />
              Phone: +49 (0) 30 123456789
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl tracking-wider text-white mb-3">Responsible for Content (§ 55 Abs. 2 RStV)</h2>
            <p>
              GSLC Management Board<br />
              Musterstraße 1<br />
              10115 Berlin
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl tracking-wider text-white mb-3">Dispute Resolution</h2>
            <p>
              The European Commission provides a platform for online dispute resolution (OS):{' '}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gslc-gold hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p className="mt-2">
              We are not obliged or willing to participate in dispute resolution proceedings before a consumer arbitration board.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl tracking-wider text-white mb-3">Liability for Content</h2>
            <p>
              As a service provider, we are responsible for our own content on these pages in accordance with § 7 Abs. 1 TMG.
              According to §§ 8 to 10 TMG, however, we are not obligated to monitor transmitted or stored third-party
              information or to investigate circumstances that indicate illegal activity.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl tracking-wider text-white mb-3">Liability for Links</h2>
            <p>
              Our website contains links to external third-party websites over whose content we have no influence.
              We therefore cannot accept any liability for this third-party content. The respective provider or operator
              is always responsible for the content of the linked pages.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
