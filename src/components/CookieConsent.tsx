import { useState, useEffect } from 'react'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('gslc-cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('gslc-cookie-consent', 'accepted')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4">
      <div className="max-w-3xl mx-auto bg-gslc-card border border-gslc-border rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-2xl">
        <p className="text-sm text-gslc-muted flex-1">
          We use essential cookies to ensure this site works properly. No tracking cookies are used.
        </p>
        <button
          onClick={accept}
          className="px-5 py-2 bg-gslc-gold text-gslc-black text-sm font-semibold rounded-lg hover:brightness-110 transition-all cursor-pointer shrink-0"
        >
          Got it
        </button>
      </div>
    </div>
  )
}
