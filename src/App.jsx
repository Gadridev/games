import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Games from './pages/Games'
<<<<<<< HEAD
// import GameDetail from './pages/GameDetail'
// import GameDevelopers from './pages/GameDevelopers'
=======
import GameDetail from './pages/GameDetail'
>>>>>>> 2d457be (the file structure of pages ischanged)
import './App.css'
import Creators from './pages/Creators'
import CreatorDetails from './pages/CreatorDetails'

function App() {
  return (
    <div className="app-content">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<Games />} />
<<<<<<< HEAD
        {/* <Route path="/games/:game_id" element={<GameDetail />} /> */}
        {/* <Route path="/games/:game_id/developers-team" element={<GameDevelopers />} /> */}
=======
        <Route path="/creators" element={<Creators />} />
        <Route path="/games/:game_id" element={<GameDetail />} />
        <Route path="/creator/:creatorId" element={<CreatorDetails />} />
>>>>>>> 2d457be (the file structure of pages ischanged)
      </Routes>
    </div>
  )
}

export default App