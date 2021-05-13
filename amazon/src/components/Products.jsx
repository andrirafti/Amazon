import React from 'react';


export default function Products(props) {
  const {name, picture,price,description, } = props;
  
  



  return (
    
    <div >
     
      
      <img src={picture}/>
      <div>
        <p >{name}</p>
        </div>
        <p >{price}</p>
        <p >{description}</p>
        
      </div>
     
     
      
     
   
  )
}
