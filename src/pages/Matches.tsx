import { useState, useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import matchesData from '../data/matches.json'
import teamsData from '../data/teams.json'
import states from '../data/states.json'
import MatchCard from '../components/MatchCard'
import EmptyState from '../components/EmptyState'
import type { Match, Team } from '../types'

const matches = matchesData as Match[]
const teams = teamsData as Team[]

type StatusFilter = 'all' | 'upcoming' | 'live' | 'completed'

export default function Matches() {
  const [stateFilter, setStateFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all')

  const filtered = useMemo(() => {
    return matches.filter((m) => {
      if (stateFilter !== 'all' && m.stateId !== stateFilter) return false
      if (statusFilter !== 'all' && m.status !== statusFilter) return false
      return true
    })
  }, [stateFilter, statusFilter])

  return (
    <>
      <Helmet>
        <title>Matches – GSLC</title>
        <meta name="description" content="View all cricket match fixtures and results across German states." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-display text-4xl sm:text-5xl tracking-wide text-gslc-gold m-0 mb-8">Matches</h1>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <select
            value={stateFilter}
            onChange={(e) => setStateFilter(e.target.value)}
            className="bg-gslc-black border-2 border-gslc-gold rounded-lg px-3 py-2 text-sm text-gslc-text focus:outline-none focus:border-gslc-red"
          >
            <option value="all">All States</option>
            {states.map((s) => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>

          <div className="flex rounded-lg border-2 border-gslc-red overflow-hidden">
            {(['all', 'upcoming', 'live', 'completed'] as StatusFilter[]).map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-4 py-2 text-sm capitalize cursor-pointer transition-colors ${
                  statusFilter === status
                    ? 'bg-gslc-red text-gslc-gold font-bold'
                    : 'bg-gslc-black text-gslc-muted hover:text-gslc-gold'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Match grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((match) => (
              <MatchCard key={match.id} match={match} teams={teams} />
            ))}
          </div>
        ) : matches.length === 0 ? (
          <EmptyState
            icon="📅"
            title="No Matches Scheduled"
            message="Match fixtures haven't been added yet. Check back when the season begins!"
          />
        ) : (
          <EmptyState
            icon="🔍"
            title="No Results"
            message="No matches found for the selected filters. Try adjusting your criteria."
          />
        )}
      </div>
    </>
  )
}
