import React, { useEffect, useState } from 'react'
import './App.css';
import Tetris from './components/Tetris';




const App = () =>  {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/users')
    .then(response => response.json())
    .then(users => setUsers(users))
  }, [])
  
  return (
    <div className="App">
      <Tetris  />
    </div>
  )
}

export default App
