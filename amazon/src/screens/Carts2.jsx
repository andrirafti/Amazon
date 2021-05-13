import React from 'react'
import {useAuth0} from "@auth0/auth0-react"

const Carts2 = () => {
  const {isAuthenticated} =useAuth0()
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>
  return (
    isAuthenticated&&(
    <div>
      <h1>Your Cart!</h1>
      
      
    </div>
  ))
}

export default Carts2
