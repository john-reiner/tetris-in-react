import React, { useEffect, useState } from 'react'
// import {Button, Modal, Form} from 'react-bootstrap'

import './App.css';
import Tetris from './components/Tetris';
import LogIn from './components/LogIn';
import NavBar from './components/NavBar';




const App = () =>  {

  const [users, setUsers] = useState([])
  const [userId, setUserId] = useState('')
  const [show, setShow] = useState(true);
  const [username, setUsername] = useState('')

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const logginUser = id => {
    setUserId(id)
  }

  useEffect(() => {
    if (users.length > 0) {
      let user = users.find(user => user.id === userId)
      let username = user.username
      setUsername(username)      
    }
  }, [userId])

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/users')
    .then(response => response.json())
    .then(users => setUsers(users))
  }, [])

  return (
    <div className="App">
      <NavBar username={username}/>
      <LogIn logginUser={logginUser} users={users} handleClose={handleClose} show={show}/>
      <Tetris  />
    </div>
  )
}

export default App
