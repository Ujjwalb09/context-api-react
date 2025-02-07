import React, {useEffect, useContext, useState} from 'react'
import UserContext from '../Context/UserContext'

function Login() {

    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username})
    }
  return (
    <div>
        <h2>Login</h2>
        <input 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text" placeholder='username' />
        <input 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="text" placeholder='password' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login