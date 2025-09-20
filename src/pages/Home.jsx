import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  let navigate = useNavigate()
  let [input, setInput] = useState("")

  function handleJoin() {
    if (input.trim()) {
      navigate(`/room/${input}`)
    } else {
      alert("Please enter a room ID")
    }
  }

  return (
    <div id="home">

      <input 
        type="text" 
        placeholder="Enter Your Room ID" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button onClick={handleJoin}>Join the Room</button>
    </div>
  )
}

export default Home
