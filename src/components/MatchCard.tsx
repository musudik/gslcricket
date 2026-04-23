import type { Match, Team } from '../types'

interface Props {
  match: Match
  teams: Team[]
}

export default function MatchCard({ match, teams }: Props) {
  const home = teams.find((t) => t.id === match.homeTeamId)
  const away = teams.find((t) => t.id === match.awayTeamId)

  const statusColor =
    match.status === 'live'
      ? 'bg-gslc-red text-gslc-gold'
      : match.status === 'completed'
        ? 'bg-gslc-muted/20 text-gslc-muted'
        : 'bg-gslc-gold/15 text-gslc-gold'

  return (
    <div className="rounded-xl border-2 border-gslc-border bg-gslc-card p-5 transition-all duration-300 hover:border-gslc-red">
      {/* Status + Date */}
      <div className="flex items-center justify-between mb-4">
        <span className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${statusColor}`}>
          {match.status}
        </span>
        <span className="text-xs text-gslc-muted">
          {new Date(match.date).toLocaleDateString('en-DE', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </span>
      </div>

      {/* Teams */}
      <div className="flex items-center justify-between gap-4">
        <div className="text-center flex-1">
          <div
            className="w-12 h-12 rounded-lg mx-auto flex items-center justify-center font-display text-lg text-gslc-black mb-1"
            style={{ background: home?.primaryColor || 'var(--color-gslc-gold)' }}
          >
            {home?.shortName.slice(0, 2) || '??'}
          </div>
          <p className="text-sm font-medium text-gslc-gold truncate">{home?.shortName || 'TBD'}</p>
          {match.homeScore && <p className="text-lg font-display text-gslc-gold">{match.homeScore}</p>}
        </div>

        <span className="font-display text-2xl text-gslc-red">VS</span>

        <div className="text-center flex-1">
          <div
            className="w-12 h-12 rounded-lg mx-auto flex items-center justify-center font-display text-lg text-gslc-black mb-1"
            style={{ background: away?.primaryColor || 'var(--color-gslc-gold)' }}
          >
            {away?.shortName.slice(0, 2) || '??'}
          </div>
          <p className="text-sm font-medium text-gslc-gold truncate">{away?.shortName || 'TBD'}</p>
          {match.awayScore && <p className="text-lg font-display text-gslc-gold">{match.awayScore}</p>}
        </div>
      </div>

      {/* Venue + Result */}
      <div className="mt-4 pt-3 border-t border-gslc-border">
        <p className="text-xs text-gslc-muted">{match.venue}</p>
        {match.result && <p className="text-xs text-gslc-gold mt-1">{match.result}</p>}
      </div>
    </div>
  )
}
