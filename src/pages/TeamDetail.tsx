import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import teamsData from '../data/teams.json'
import states from '../data/states.json'
import EmptyState from '../components/EmptyState'
import type { Team } from '../types'

const allTeams = teamsData as Team[]

export default function TeamDetail() {
  const { stateId, teamId } = useParams()
  const team = allTeams.find((t) => t.id === teamId && t.stateId === stateId)
  const state = states.find((s) => s.id === stateId)

  if (!team) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <EmptyState
          icon="❓"
          title="Team Not Found"
          message="This team doesn't exist or hasn't been registered yet."
        />
        <div className="text-center mt-4">
          <Link to={`/teams/${stateId ?? ''}`} className="text-sm text-gslc-gold hover:underline no-underline">
            ← Back to teams
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>{team.name} – GSLC</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gslc-muted mb-6">
          <Link to="/teams" className="hover:text-gslc-gold transition-colors no-underline text-gslc-muted">Teams</Link>
          <span>/</span>
          <Link to={`/teams/${stateId}`} className="hover:text-gslc-gold transition-colors no-underline text-gslc-muted">
            {state?.name}
          </Link>
          <span>/</span>
          <span className="text-gslc-gold">{team.shortName}</span>
        </div>

        {/* Team header */}
        <div className="flex items-center gap-5 mb-10">
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center font-display text-3xl text-gslc-black shrink-0"
            style={{ background: team.primaryColor }}
          >
            {team.shortName.slice(0, 2)}
          </div>
          <div>
            <h1 className="font-display text-4xl sm:text-5xl tracking-wide text-gslc-gold m-0">{team.name}</h1>
            <p className="text-gslc-muted mt-1">{team.shortName} · {state?.name}</p>
          </div>
        </div>

        {/* Roster */}
        <h2 className="font-display text-2xl tracking-wide text-gslc-red mb-4">Squad</h2>

        {team.players.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gslc-border text-gslc-muted">
                  <th className="py-3 pr-4 font-medium">Player</th>
                  <th className="py-3 pr-4 font-medium">Role</th>
                  <th className="py-3 pr-4 font-medium text-right">M</th>
                  <th className="py-3 pr-4 font-medium text-right">Runs</th>
                  <th className="py-3 pr-4 font-medium text-right">Wkts</th>
                  <th className="py-3 font-medium text-right">SR</th>
                </tr>
              </thead>
              <tbody>
                {team.players.map((p) => (
                  <tr key={p.id} className="border-b border-gslc-border/50 hover:bg-gslc-gold/[0.03]">
                    <td className="py-3 pr-4 text-gslc-gold font-medium">{p.name}</td>
                    <td className="py-3 pr-4">
                      <span className="capitalize text-gslc-muted">{p.role}</span>
                    </td>
                    <td className="py-3 pr-4 text-right text-gslc-muted">{p.stats.matches}</td>
                    <td className="py-3 pr-4 text-right text-gslc-gold">{p.stats.runs}</td>
                    <td className="py-3 pr-4 text-right text-gslc-gold">{p.stats.wickets}</td>
                    <td className="py-3 text-right text-gslc-muted">{p.stats.strikeRate.toFixed(1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <EmptyState
            icon="👥"
            title="No Players Registered"
            message="Player data for this team hasn't been added yet."
          />
        )}
      </div>
    </>
  )
}
