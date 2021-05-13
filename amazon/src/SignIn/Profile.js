import React from 'react'
import { useAuth0 } from "@auth0/auth0-react"


const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
 
 
  return (

    isAuthenticated && (
      <div>
      <img class="image"src={user.picture} alt={user.name} />
          <p class='image2'>Welcome,{user.name}</p>
          
    </div>)
  )
}

export default Profile