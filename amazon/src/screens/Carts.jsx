import React from 'react'
import {useAuth0} from "@auth0/auth0-react"
const Carts = () => {
  const {isAuthenticated} =useAuth0()
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>
  return (
    !isAuthenticated&&(
    <div>
      <h1>You must be signed in to view items in your cart..</h1>
      <p>Please sign in above</p>
      
      
      </div>
    )
  )
}

export default Carts
