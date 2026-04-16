import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import states from '../data/states.json'
import matchesData from '../data/matches.json'
import teamsData from '../data/teams.json'
import StateCard from '../components/StateCard'
import MatchCard from '../components/MatchCard'
import type { Match, Team } from '../types'

const heroVideo = '/GERMAN SUPER LEAGUE.mp4'
const teaser = '/MUNICH SIXERS.mp4'

const matches = matchesData as Match[]
const teams = teamsData as Team[]

export default function Home() {
  const upcoming = matches
    .filter((m) => m.status === 'upcoming')
    .slice(0, 3)

  const [heroLoaded, setHeroLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <>
      <Helmet>
        <title>GSLC – German Super League Cricket</title>
        <meta name="description" content="The home of cricket in Germany. Explore state leagues, fixtures, and team standings." />
      </Helmet>

      {/* ═══ FULLSCREEN VIDEO HERO ═══ */}
      <section className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center">
        {/* Video background */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setHeroLoaded(true)}
        />

        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-gslc-black/70 via-gslc-black/40 to-gslc-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-gslc-black/80 via-transparent to-transparent" />
        {/* Hot streak accents */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gslc-red via-gslc-gold-hot to-gslc-red" />
        <div className="absolute bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-gslc-gold/50 to-transparent animate-pulse-glow" />

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-gslc-gold/30 m-6" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-gslc-red/30 m-6" />

        {/* Content */}
        <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full transition-all duration-1000 ${heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-4xl">
            {/* Season badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gslc-gold/30 bg-gslc-black/50 backdrop-blur-sm mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="flex gap-1">
                <div className="w-4 h-2.5 bg-black rounded-sm border border-white/10" />
                <div className="w-4 h-2.5 bg-gslc-red rounded-sm shadow-[0_0_8px_rgba(255,0,60,0.5)]" />
                <div className="w-4 h-2.5 bg-gslc-gold rounded-sm shadow-[0_0_8px_rgba(255,215,0,0.5)]" />
              </div>
              <span className="text-xs font-bold text-gslc-gold tracking-[0.25em] uppercase">Season 2026</span>
              <div className="w-1.5 h-1.5 rounded-full bg-gslc-lime animate-pulse" />
            </div>

            <h1 className="font-display text-6xl sm:text-8xl lg:text-9xl tracking-wider text-white leading-[0.9] mb-6 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              GERMAN
              <br />
              <span className="bg-gradient-to-r from-gslc-red via-gslc-gold-hot to-gslc-gold bg-clip-text text-transparent text-glow-gold">
                SUPER LEAGUE
              </span>
              <br />
              CRICKET
            </h1>

            <p className="text-lg sm:text-2xl text-white/70 max-w-xl mb-10 leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              16 states. 192 teams. One champion.
              <br />
              <span className="text-gslc-gold font-medium">The biggest cricket league in Germany.</span>
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
              <Link
                to="/teams"
                className="group px-8 py-4 bg-gradient-to-r from-gslc-gold to-gslc-gold-hot text-gslc-black font-bold rounded-lg transition-all no-underline text-sm uppercase tracking-wider glow-gold hover:scale-105"
              >
                Explore Teams
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/matches"
                className="px-8 py-4 border-2 border-gslc-red/60 text-white rounded-lg hover:bg-gslc-red/10 hover:border-gslc-red transition-all no-underline text-sm uppercase tracking-wider hover:glow-red"
              >
                View Fixtures
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1200ms' }}>
          <span className="text-[10px] uppercase tracking-[0.3em] text-gslc-muted">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gslc-gold to-transparent animate-pulse-glow" />
        </div>
      </section>

      {/* ═══ TEASER VIDEO SECTION ═══ */}
      <section className="relative py-20 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-gslc-black via-gslc-dark to-gslc-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gslc-red/5 rounded-full blur-[120px]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-gslc-red">Featured</span>
            <h2 className="font-display text-4xl sm:text-5xl tracking-wider text-white mt-2 mb-0">
              MUNICH <span className="text-gslc-gold text-glow-gold">SIXERS</span>
            </h2>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-gslc-border/50 shadow-[0_0_80px_rgba(255,0,60,0.1)]">
            {/* Accent corners */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gslc-gold/50 z-10 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gslc-red/50 z-10 rounded-br-2xl" />

            <video
              className="w-full aspect-video object-cover"
              src={teaser}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </section>

      {/* ═══ UPCOMING MATCHES ═══ */}
      {upcoming.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-gslc-red to-gslc-gold rounded-full" />
              <h2 className="font-display text-3xl tracking-wider text-white m-0">Upcoming Fixtures</h2>
            </div>
            <Link to="/matches" className="text-sm text-gslc-gold hover:text-gslc-gold-hot transition-colors no-underline font-medium">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {upcoming.map((match) => (
              <MatchCard key={match.id} match={match} teams={teams} />
            ))}
          </div>
        </section>
      )}

      {/* ═══ STATE LEAGUES ═══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-gslc-gold to-gslc-electric rounded-full" />
            <h2 className="font-display text-3xl tracking-wider text-white m-0">State Leagues</h2>
          </div>
          <span className="text-sm text-gslc-muted font-medium">{states.length} States</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {states.map((state, i) => (
            <StateCard key={state.id} state={state} index={i} />
          ))}
        </div>
      </section>

      {/* ═══ STATS BANNER ═══ */}
      <section className="relative border-y border-gslc-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gslc-red/5 via-gslc-dark to-gslc-gold/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '16', label: 'States', color: 'text-gslc-gold' },
            { value: '192', label: 'Teams', color: 'text-gslc-red-light' },
            { value: '12', label: 'Teams per State', color: 'text-gslc-electric' },
            { value: '2026', label: 'Season', color: 'text-gslc-lime' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className={`font-display text-5xl ${stat.color}`}>{stat.value}</div>
              <div className="text-sm text-gslc-muted mt-2 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
