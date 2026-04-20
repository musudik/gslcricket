import { useState, useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import pointsData from '../data/points.json'
import teamsData from '../data/teams.json'
import states from '../data/states.json'
import EmptyState from '../components/EmptyState'
import type { PointsTableEntry, Team } from '../types'

const points = pointsData as PointsTableEntry[]
const teams = teamsData as Team[]

export default function PointsTable() {
  const [stateFilter, setStateFilter] = useState('all')

  const filtered = useMemo(() => {
    const list = stateFilter === 'all' ? points : points.filter((p) => p.stateId === stateFilter)
    return [...list].sort((a, b) => b.points - a.points || b.nrr - a.nrr)
  }, [stateFilter])

  const getTeam = (id: string) => teams.find((t) => t.id === id)

  return (
    <>
      <Helmet>
        <title>Points Table – GSLC</title>
        <meta name="description" content="League standings and points table for all German state cricket leagues." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h1 className="font-display text-4xl sm:text-5xl tracking-wide text-gslc-gold m-0">Points Table</h1>

          <select
            value={stateFilter}
            onChange={(e) => setStateFilter(e.target.value)}
            className="bg-gslc-black border-2 border-gslc-gold rounded-lg px-3 py-2 text-sm text-gslc-text focus:outline-none focus:border-gslc-red w-fit"
          >
            <option value="all">All States</option>
            {states.map((s) => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
        </div>

        {filtered.length > 0 ? (
          <div className="overflow-x-auto rounded-xl border-2 border-gslc-red">
            <table className="w-full text-sm">
              <thead className="bg-gslc-red">
                <tr className="text-gslc-gold">
                  <th className="py-3 px-4 text-left font-medium w-10">#</th>
                  <th className="py-3 px-4 text-left font-medium">Team</th>
                  <th className="py-3 px-4 text-center font-medium">P</th>
                  <th className="py-3 px-4 text-center font-medium">W</th>
                  <th className="py-3 px-4 text-center font-medium">L</th>
                  <th className="py-3 px-4 text-center font-medium">T</th>
                  <th className="py-3 px-4 text-right font-medium">NRR</th>
                  <th className="py-3 px-4 text-right font-medium">Pts</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((entry, idx) => {
                  const team = getTeam(entry.teamId)
                  const isPlayoff = idx < 4

                  return (
                    <tr
                      key={entry.teamId}
                      className={`border-t border-gslc-border/50 hover:bg-gslc-gold/[0.03] ${
                        isPlayoff ? 'bg-gslc-gold/[0.03]' : ''
                      }`}
                    >
                      <td className="py-3 px-4">
                        <span className={`font-display text-lg ${isPlayoff ? 'text-gslc-gold' : 'text-gslc-muted'}`}>
                          {idx + 1}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-8 h-8 rounded flex items-center justify-center font-display text-sm text-gslc-black shrink-0"
                            style={{ background: team?.primaryColor || '#FFCC00' }}
                          >
                            {team?.shortName.slice(0, 2) || '??'}
                          </div>
                          <span className="text-gslc-gold font-medium">{team?.name || entry.teamId}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-center text-gslc-muted">{entry.played}</td>
                      <td className="py-3 px-4 text-center text-gslc-gold">{entry.won}</td>
                      <td className="py-3 px-4 text-center text-gslc-muted">{entry.lost}</td>
                      <td className="py-3 px-4 text-center text-gslc-muted">{entry.tied}</td>
                      <td className="py-3 px-4 text-right">
                        <span className={entry.nrr >= 0 ? 'text-gslc-gold' : 'text-gslc-red'}>
                          {entry.nrr >= 0 ? '+' : ''}{entry.nrr.toFixed(3)}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <span className="font-display text-lg text-gslc-gold">{entry.points}</span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>

            {/* Playoff zone legend */}
            <div className="px-4 py-3 border-t-2 border-gslc-red bg-gslc-black text-xs text-gslc-gold flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-gslc-gold border border-gslc-gold" />
              <span>Playoff qualification zone (Top 4)</span>
            </div>
          </div>
        ) : (
          <EmptyState
            icon="📊"
            title="No Standings Yet"
            message="Points table data will appear once the season is underway."
          />
        )}
      </div>
    </>
  )
}
