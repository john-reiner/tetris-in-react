import React, { useEffect, useState } from 'react'
// import {Button, Modal, Form} from 'react-bootstrap'

import './App.css';
// import Tetris from './components/Tetris';
import LogIn from './components/LogIn';
// import NavBar from './components/NavBar';
import MainBody from './components/MainBody';
// import LeaderBoard from './components/LeaderBoard'



const App = () =>  {

  const [users, setUsers] = useState([])
  const [scores, setScores] = useState([])
  const [userId, setUserId] = useState('')
  const [show, setShow] = useState(true);
  const [username, setUsername] = useState('')

  // const handleShow = () => setShow(true);
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

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/scores')
    .then(response => response.json())
    .then(scores => setScores(scores))
  }, [])



  return (
    <div className="App">
      
      <LogIn logginUser={logginUser} users={users} handleClose={handleClose} show={show}/>
      <MainBody username={username} userId={userId} scores={scores}/>
      {/* <Tetris userId={userId} /> */}
      {/* <LeaderBoard scores={scores}/> */}
    </div>
  )
}

export default App
