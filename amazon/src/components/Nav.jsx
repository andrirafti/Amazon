import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import Profile from '../SignIn/Profile'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import "./Nav.css"
import LoginButton from '../SignIn/LoginButton'
import LogOut from '../SignIn/LogOut'
import '../SignIn/Log.css'
import {useAuth0} from "@auth0/auth0-react"
const Nav = () => {
  const {isAuthenticated} =useAuth0()
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>
  return (
    !isAuthenticated&&(
      <div className="row block center " >
        <Profile />
      <Link  to='/'>RainForest</Link>
      {/* <input placeholder="search" className="search"type="text"></input> */}
        <Link  to='/MyCartLoggedOut'>Cart </Link>
        <LoginButton/>
        <LogOut />
    </div>)
  )
}

export default Nav
