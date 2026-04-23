import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const links = [
  { to: '/', label: 'Home' },
  { to: '/teams', label: 'Teams' },
  { to: '/matches', label: 'Matches' },
  { to: '/points-table', label: 'Points Table' },
]

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isGerman = theme === 'german'

  return (
    <button
      onClick={() => setTheme(isGerman ? 'classic' : 'german')}
      title={isGerman ? 'Switch to Classic theme' : 'Switch to German Metallic theme'}
      aria-label="Toggle color theme"
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all duration-300 text-xs font-display tracking-wider select-none cursor-pointer"
      style={{
        borderColor: 'var(--color-gslc-gold)',
        background: 'var(--color-gslc-black)',
        color: 'var(--color-gslc-gold-hot)',
      }}
    >
      {/* German flag stripes icon */}
      {isGerman ? (
        <>
          <span className="flex flex-col gap-px w-4 h-3.5 rounded-sm overflow-hidden shrink-0">
            <span className="flex-1 block" style={{ background: 'var(--color-gslc-black)' }} />
            <span className="flex-1 block" style={{ background: 'var(--color-gslc-red)' }} />
            <span className="flex-1 block" style={{ background: 'var(--color-gslc-gold)' }} />
          </span>
          <span>Metallic</span>
        </>
      ) : (
        <>
          <span className="flex flex-col gap-px w-4 h-3.5 rounded-sm overflow-hidden shrink-0">
            <span className="flex-1 block" style={{ background: 'var(--color-gslc-black)' }} />
            <span className="flex-1 block" style={{ background: 'var(--color-gslc-red)' }} />
            <span className="flex-1 block" style={{ background: 'var(--color-gslc-gold)' }} />
          </span>
          <span>Classic</span>
        </>
      )}
    </button>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50">
      {/* Main bar: Logo + Navigation */}
      <div className="bg-gslc-black/95 backdrop-blur-xl border-b-2 border-gslc-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Site Logo — 3x bigger */}
            <Link to="/" className="shrink-0 no-underline">
              <img
                src="/logo.png"
                alt="GSLC"
                className="h-20 w-auto object-contain"
              />
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-2">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `px-5 py-1.5 font-display text-base tracking-widest transition-colors no-underline border-b-2 ${
                      isActive
                        ? 'border-gslc-gold text-gslc-gold'
                        : 'border-transparent text-gslc-muted hover:text-gslc-gold hover:border-gslc-red'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="ml-3 border-l border-gslc-border pl-3">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-gslc-muted hover:text-gslc-gold"
              aria-label="Toggle navigation"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {open && (
            <div className="md:hidden pb-4 space-y-1">
              <div className="px-4 pt-2 pb-1">
                <ThemeToggle />
              </div>
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-md font-display text-sm tracking-widest no-underline ${
                      isActive
                        ? 'bg-gslc-red text-gslc-gold'
                        : 'text-gslc-muted hover:text-gslc-gold hover:bg-gslc-red/20'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
