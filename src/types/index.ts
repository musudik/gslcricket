export interface State {
  id: string;
  name: string;
  code: string;
}

export interface Team {
  id: string;
  name: string;
  shortName: string;
  stateId: string;
  logo?: string;
  primaryColor: string;
  players: Player[];
}

export interface Player {
  id: string;
  name: string;
  role: 'batsman' | 'bowler' | 'allrounder' | 'keeper';
  teamId: string;
  stats: PlayerStats;
}

export interface PlayerStats {
  matches: number;
  runs: number;
  wickets: number;
  average: number;
  strikeRate: number;
  economy: number;
}

export interface Match {
  id: string;
  homeTeamId: string;
  awayTeamId: string;
  stateId: string;
  date: string;
  venue: string;
  status: 'upcoming' | 'live' | 'completed';
  homeScore?: string;
  awayScore?: string;
  result?: string;
}

export interface PointsTableEntry {
  teamId: string;
  stateId: string;
  played: number;
  won: number;
  lost: number;
  tied: number;
  nrr: number;
  points: number;
}
