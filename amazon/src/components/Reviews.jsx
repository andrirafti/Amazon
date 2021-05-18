import React from 'react';

import { useAuth0 } from "@auth0/auth0-react"

// This is what we want to show from the Trainer Model// (usually in the First Page AKA mapping page)
export default function Reviews(props) {
  const { comment, rating } = props;
  const { user, isAuthenticated } = useAuth0();
  
  return (
    isAuthenticated && (
    <div>
        <p>Customer: {user.name}</p>
        <img src={user.picture}/>
      <p>{comment}</p>
      <p>Rating: {rating} / 5</p>
      </div>
    )
  )
}
