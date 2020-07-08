import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function LogIn() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
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
            <form>
                <input name="userName" placeholder='User Name' value={username} onChange={handleChange}/>
                <br />
                <input name="passWord" type="password" placeholder='Password' value={password} onChange={handleChange}/>
                <br />
                <button onClick={onSubmit}>Submit</button>
                <Link to='/sign-up'><button>Sign Up</button></Link>
            </form>
        </div>
    )
}
