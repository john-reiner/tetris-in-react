import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function LogIn() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // state = {
    //     userName: '',
    //     passWord: '',
    // }

    const handleUsernameChange = e => setUsername(e.target.value)
    const handlePasswordChange = e => setPassword(e.target.value)

    const handleChange = e => {
        // setState({
        //     [e.target.name]: e.target.value
        // })
    }

    const onSubmit = e => {
        e.preventDefault()
    }

    console.log("somthing")
    

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
            <form>
                <input name="userName" placeholder='User Name' value={username} onChange={handleChange}/>
                <br />
                <input name="passWord" type="password" placeholder='Password' value={password} onChange={handleChange}/>
                <br />
                <button onClick={onSubmit}>Submit</button>
                <Link to='/sign-up'><button>Sign Up</button></Link>
            </form>