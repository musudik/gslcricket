import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import states from '../data/states.json'
import teamsData from '../data/teams.json'
import StateCard from '../components/StateCard'
import TeamCard from '../components/TeamCard'
import EmptyState from '../components/EmptyState'
import type { Team } from '../types'

const allTeams = teamsData as Team[]

export default function Teams() {
  const { stateId } = useParams()

  // If a state is selected, show its teams
  if (stateId) {
    const state = states.find((s) => s.id === stateId)
    const stateTeams = allTeams.filter((t) => t.stateId === stateId)

    return (
      <>
        <Helmet>
          <title>{state?.name ?? 'State'} Teams – GSLC</title>
        </Helmet>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded bg-gslc-gold/10 text-gslc-gold font-display text-sm tracking-wider">
                {state?.code}
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl tracking-wide text-white m-0">
              {state?.name ?? 'Unknown State'}
            </h1>
            <p className="text-gslc-muted mt-2">{stateTeams.length} of 12 teams registered</p>
          </div>

          {stateTeams.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {stateTeams.map((team) => (
                <TeamCard key={team.id} team={team} stateId={stateId} />
              ))}
            </div>
          ) : (
            <EmptyState
              icon="🏏"
              title="No Teams Yet"
              message="Teams for this state haven't been registered yet. Check back soon!"
            />
          )}
        </div>
      </>
    )
  }

  // Default: show all states
  return (
    <>
      <Helmet>
        <title>Teams – GSLC</title>
        <meta name="description" content="Browse cricket teams across all 16 German states in the GSLC." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="font-display text-4xl sm:text-5xl tracking-wide text-white m-0">Teams</h1>
          <p className="text-gslc-muted mt-2">Select a state to view its teams</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {states.map((state, i) => (
            <StateCard key={state.id} state={state} index={i} />
          ))}
        </div>
      </div>
    </>
  )
}
