import React from 'react'
import Products2 from '../components/Products2'
import { getAllProducts } from '../services/products'
import { Link,useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import {useAuth0} from "@auth0/auth0-react"

const Product = () => {
  const [queryProduct, setQueryProduct] = useState([]);
  const [loaded, setIsLoaded] = useState(false);
  const { isAuthenticated } = useAuth0()
  
 


  useEffect(()=>{
    const fetchProducts=async()=>{
      const products = await getAllProducts();
      setQueryProduct(products);
      setIsLoaded(true)
      
    };
    fetchProducts();
  }, [])

 
  
  
  

  if (queryProduct.length<1) {
    
    return < h1 style={{"text-align":"center"}}className="block col-2"> Loading... Please wait </ h1>
  }

 return (
   !isAuthenticated && (
     
     <main className="block col-2">
      <h2 className="AllProd"> All Products</h2>
        <div className="row">
            
         
          {queryProduct.map((val) => (
        <div>
        
        <Products2
          picture={val.picture}
          name={val.name}
          price={val.price}
          // description={val.description}
          // price={val.price}
        />
        
        <button className="Review">
            <Link to={`/products/${val.id}/reviews/NotSignedIn`}> View Reviews</Link>
            </button>
    
              </div>
      )
        
      
      )}
      
      </div>
      </main>
  ))
}

export default Product
