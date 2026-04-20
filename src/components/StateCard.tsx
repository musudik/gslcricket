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
      className="group relative overflow-hidden rounded-xl border-2 border-gslc-border bg-gslc-card p-5 no-underline transition-all duration-300 hover:border-gslc-red hover:-translate-y-1"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      {/* Diagonal accent */}
      <div className="absolute -top-8 -right-8 w-24 h-24 bg-gslc-red/10 rotate-45 group-hover:bg-gslc-red/30 transition-all duration-300" />

      <div className="relative">
        <span className="inline-block px-2.5 py-0.5 rounded bg-gslc-red text-gslc-gold font-display text-sm tracking-wider mb-3">
          {state.code}
        </span>
        <h3 className="font-display text-xl tracking-wide text-gslc-gold group-hover:text-white transition-colors m-0">
          {state.name}
        </h3>
        <p className="text-xs text-gslc-muted mt-2">12 Teams</p>
      </div>
    </Link>
  )
}
