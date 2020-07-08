import React, { useEffect, useState } from 'react'
import {Button, Modal, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './App.css';
import Tetris from './components/Tetris';




const App = () =>  {

  const [users, setUsers] = useState([])
  const [userId, setUserId] = useState('')
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/users')
    .then(response => response.json())
    .then(users => setUsers(users))
  }, [])
  
  return (
    <div className="App">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Welcome to React-Tetris!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="email" placeholder="Enter username" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Form.Text className="text-muted">
              Not registered? <Link to='/sign-up' href="#">Create an account</Link>
            </Form.Text>
            </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Play as Guest
        </Button>
        <Button variant="primary" onClick={handleClose}>
            Login
        </Button>
        </Modal.Footer>
      </Modal>
      <Tetris  />
    </div>
  )
}

export default App
