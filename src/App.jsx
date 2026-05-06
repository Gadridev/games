import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import GameDevelopers from './pages/GameDevelopers'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const location = useLocation()
  
  const hideNavbar = location.pathname === "/"

  return (
    <div className="app-content">
      {!hideNavbar && <Navbar />} 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games/developers-team" element={<GameDevelopers />} />
      </Routes>
    </div>
  )
}

export default App