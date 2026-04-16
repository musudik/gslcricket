import { Link } from 'react-router-dom'
import type { State } from '../types'

interface Props {
  state: State
  index: number
}

export default function StateCard({ state, index }: Props) {
  return (
    <Link
      to={`/teams/${state.id}`}
      className="group relative overflow-hidden rounded-xl border border-gslc-border bg-gslc-card p-5 no-underline transition-all duration-300 hover:border-gslc-gold/60 hover:shadow-[0_0_40px_rgba(255,215,0,0.15)] hover:-translate-y-1"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      {/* Diagonal accent */}
      <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-gslc-gold/5 to-gslc-red/5 rotate-45 group-hover:from-gslc-gold/20 group-hover:to-gslc-red/10 transition-all duration-300" />

      <div className="relative">
        <span className="inline-block px-2.5 py-0.5 rounded bg-gslc-gold/10 text-gslc-gold font-display text-sm tracking-wider mb-3">
          {state.code}
        </span>
        <h3 className="font-display text-xl tracking-wide text-white group-hover:text-gslc-gold transition-colors m-0">
          {state.name}
        </h3>
        <p className="text-xs text-gslc-muted mt-2">12 Teams</p>
      </div>
    </Link>
  )
}
