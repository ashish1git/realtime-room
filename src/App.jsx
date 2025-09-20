import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import VideoRoom from './pages/VideoRoom'
import Navbar from './pages/Navbar'

function App() {
  const location = useLocation();

  return (
    <div>
      {/* Show Navbar on all pages except Home ("/") */}
      {location.pathname !== "/" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomID" element={<VideoRoom />} />
      </Routes>
    </div>
  )
}

export default App
