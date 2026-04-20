import { Link } from 'react-router-dom'
import type { Team } from '../types'

interface Props {
  team: Team
  stateId: string
}

export default function TeamCard({ team, stateId }: Props) {
  return (
    <Link
      to={`/teams/${stateId}/${team.id}`}
      className="group relative overflow-hidden rounded-xl border border-gslc-border bg-gslc-card p-5 no-underline transition-all hover:border-gslc-gold/40"
    >
      {/* Team color accent bar */}
      <div
        className="absolute top-0 left-0 w-1 h-full"
        style={{ background: team.primaryColor || '#FFCC00' }}
      />

      <div className="pl-3">
        <div className="flex items-center gap-3 mb-2">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-gslc-black font-display text-lg"
            style={{ background: team.primaryColor || '#FFCC00' }}
          >
            {team.shortName.slice(0, 2)}
          </div>
          <div>
            <h3 className="font-display text-lg tracking-wide text-gslc-gold group-hover:text-gslc-red transition-colors m-0">
              {team.name}
            </h3>
            <span className="text-xs text-gslc-muted">{team.shortName}</span>
          </div>
        </div>
        <p className="text-xs text-gslc-muted">
          {team.players.length} player{team.players.length !== 1 ? 's' : ''}
        </p>
      </div>
    </Link>
  )
}
