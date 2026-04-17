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
      style={
        isGerman
          ? {
              borderColor: 'rgba(255,206,0,0.4)',
              background: 'rgba(255,206,0,0.06)',
              color: '#FFCE00',
            }
          : {
              borderColor: 'rgba(255,215,0,0.3)',
              background: 'rgba(255,215,0,0.05)',
              color: '#FFD700',
            }
      }
    >
      {/* German flag stripes icon */}
      {isGerman ? (
        <>
          <span className="flex flex-col gap-px w-4 h-3.5 rounded-sm overflow-hidden shrink-0">
            <span className="flex-1 block" style={{ background: '#000' }} />
            <span className="flex-1 block" style={{ background: '#CC0000' }} />
            <span className="flex-1 block" style={{ background: '#FFCE00' }} />
          </span>
          <span>Metallic</span>
        </>
      ) : (
        <>
          <span
            className="w-4 h-3.5 rounded-sm shrink-0"
            style={{
              background: 'conic-gradient(#0a0b14 0 25%, #FF003C 25% 75%, #FFD700 75%)',
            }}
          />
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
      <div className="bg-gslc-black/95 backdrop-blur-xl border-b border-gslc-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Site Logo — 3x bigger */}
            <Link to="/" className="shrink-0 no-underline">
              <img
                src="/logo.png"
                alt="GSLC"
                className="h-20 w-auto object-contain drop-shadow-[0_0_16px_rgba(255,215,0,0.35)]"
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
                        : 'border-transparent text-gslc-muted hover:text-white hover:border-white/30'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="ml-3 border-l border-white/10 pl-3">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-gslc-muted hover:text-white"
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
                        ? 'bg-gslc-gold/15 text-gslc-gold'
                        : 'text-gslc-muted hover:text-white hover:bg-white/5'
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
