import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {

  return (
    <UserContextProvider>
     <Login></Login>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
