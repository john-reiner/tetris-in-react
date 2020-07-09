import React, { useState, useEffect } from 'react'
import {Button, Modal, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function LogIn(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState({})

    const handleUsernameChange = e => setUsername(e.target.value)
    const handlePasswordChange = e => setPassword(e.target.value)

    const onSubmit = e => {
        e.preventDefault()
        let user = props.users.find(user => user.username === username)
        setUser(user)
        props.handleClose()
    }

    useEffect(() => {
        props.logginUser(user.id)
    }, [user])
    
    
    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose} >
                <Modal.Header closeButton>
                <Modal.Title>Welcome to Tetris in React!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={onSubmit} id="form">
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" onChange={handleUsernameChange} value={username} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={password} />
                    </Form.Group>
                    <Form.Text className="text-muted">
                            Not registered? <Link to='/sign-up' href="#">Create an account</Link>
                    </Form.Text>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type='submit' form='form' >
                        Login
                    </Button>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Login as guest
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
            // <form>
            //     <input name="userName" placeholder='User Name' value={username} onChange={handleChange}/>
            //     <br />
            //     <input name="passWord" type="password" placeholder='Password' value={password} onChange={handleChange}/>
            //     <br />
            //     <button onClick={onSubmit}>Submit</button>
            //     <Link to='/sign-up'><button>Sign Up</button></Link>
            // </form>