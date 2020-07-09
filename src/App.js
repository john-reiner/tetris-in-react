import React, { useEffect, useState } from 'react'
import {Button, Modal, Form} from 'react-bootstrap'

import './App.css';
import Tetris from './components/Tetris';
import LogIn from './components/LogIn';




const App = () =>  {

  const [users, setUsers] = useState([])
  const [userId, setUserId] = useState('')
  const [show, setShow] = useState(true);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="App">
      <LogIn handleClose={handleClose} show={show}/>
      <Tetris  />
    </div>
  )
}

export default App
