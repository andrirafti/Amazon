import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import Profile from '../SignIn/Profile'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import "./Nav.css"
// import LoginButton from '../SignIn/LoginButton'
import LogOut from '../SignIn/LogOut'
import '../SignIn/Log.css'
// import Product2 from '../screens/Product2'

import { useAuth0 } from "@auth0/auth0-react"



const Nav2 = (props) => {
  const { isAuthenticated } = useAuth0()
  const { countCartItems } = props;



  
  
  return (
    isAuthenticated&&(
      <div className="row block center " >
        <Profile />
      <Link  to='/'>RainForest</Link>
        <Link  to='/MyCartLoggedIn'>Cart:{countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ): " "} </Link>
       
        <LogOut />
        
    </div>)
  )
}

export default Nav2
