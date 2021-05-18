import React from 'react';
import { useAuth0 } from "@auth0/auth0-react"
 
export default function Products(props) {
  const {val,onAdd } = props;
  const {isAuthenticated} =useAuth0()

// By just destructuring my thing to val i can do val.____ 
  //as seen below then in Product2.jsx i can call everything in here with 1 command// 

  return (
    isAuthenticated&&(
    
    <div >
     
      
      <img src={val.picture}/>
      
        <h3>{val.name}</h3>
      
        <div>${val.price}</div>
      <p >{val.description}</p>
      
      <div>
          <button className="reviewBTN"onClick={() => onAdd(val)}>Add to cart</button>
      </div>
        
      </div>
     
    )
      
     
   
  )
}
