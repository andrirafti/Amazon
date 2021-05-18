import React from 'react';
import {useAuth0} from "@auth0/auth0-react"

export default function Products(props) {
  const {name, picture,price,description,onAdd } = props;
  
  const {isAuthenticated} =useAuth0()



  return (
    !isAuthenticated&&(
    
    <div >
     
      
      <img src={picture}/>
      
        <h3>{name}</h3>
      
        <div>${price}</div>
      <p >{description}</p>
      
      <div>Sign In To Purchase</div>
        
      </div>
     
    )
      
     
   
  )
}
