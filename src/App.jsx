import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Games from './pages/Games'

import GameDetail from './pages/GameDetail'
import Creators from './pages/Creators'

import Navbar from './components/Navbar'
import CreatorDetail from './pages/CreatorDetails'

function App() {

  


  return (
    <div className="app-content">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<Games />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/games/:game_id" element={<GameDetail />} />
        <Route path="/creator/:creatorId" element={<CreatorDetail />} />
      </Routes>
    </div>
  )
}

export default App