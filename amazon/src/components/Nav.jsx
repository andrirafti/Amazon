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
      <div className="nav" >
        <Profile />
      <Link className="amazon" to='/'>amazon</Link>
      <input placeholder="search" className="search"type="text"></input>
        <LoginButton/>
        <Link className="cart" to='/MyCart'>Cart </Link>
        <LogOut />
    </div>)
  )
}

export default Nav
