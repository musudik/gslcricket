import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Teams from './pages/Teams'
import TeamDetail from './pages/TeamDetail'
import Matches from './pages/Matches'
import PointsTable from './pages/PointsTable'
import Impressum from './pages/Impressum'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Cookies from './pages/Cookies'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:stateId" element={<Teams />} />
        <Route path="/teams/:stateId/:teamId" element={<TeamDetail />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/points-table" element={<PointsTable />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookies" element={<Cookies />} />
      </Route>
    </Routes>
  )
}
