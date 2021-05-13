import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const LogOut = () => {
  const {logout,isAuthenticated} =useAuth0()
  return (
    isAuthenticated&&(
    <div>
    <button class="login"onClick={() => logout()}>
        Sign Out 
    </button>
      
      </div>
  ))
}

export default LogOut
