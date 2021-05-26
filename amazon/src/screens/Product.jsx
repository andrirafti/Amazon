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
  //Search For CARS (USE FILTER METHOD)
  let Cars = queryProduct.map(val => val).filter((val) => val.price>40000);
  // let Porsche = queryProduct.map(val => val).filter((val) => val.name.includes("Porsche"));
  // let Mustang = queryProduct.map(val => val).filter((val) => val.name.includes("Mustang"));
  let Watches = queryProduct.map(val => val).filter(val => val.name.includes("Rolex"))
  let Electronics = queryProduct.map(val => val).filter(val=>val.price<500)

  

  
 
  
  
  
  
  
  useEffect(()=>{
    const fetchProducts=async()=>{
      const products = await getAllProducts();
      setQueryProduct(products);
      setIsLoaded(true)
      
    };
    fetchProducts();
  }, [])
  
  function handleSelectChange(e) {
    e.preventDefault();
    if (e.target.value == "Cars") setQueryProduct(Cars)
    // if (e.target.value == "Porsche") setQueryProduct(Porsche);
    // if (e.target.value == "Mustang") setQueryProduct(Mustang);
    if (e.target.value == "Watches") setQueryProduct(Watches)
    if(e.target.value== "Electronics") setQueryProduct(Electronics)
    if (e.target.value.length<=0) setQueryProduct((e)=>e.preventDefault(window.location.reload()))
  }
 
  
  
  
// Loading Page// 
  if (queryProduct.length<1) {
    
    return < h1 style={{"text-align":"center","background-color":'black',"color":"white"}}className="block col-2"> Loading... Please wait </ h1>
  }

 return (
   !isAuthenticated && (
     
     <main className="block col-2">
       <h2 className="AllProd"> All Products</h2>
       <div>
            <label>Sort By: </label>
            <input list="car-list" type="text" onChange={handleSelectChange}/>
              <datalist id="car-list">
                <option value="Cars"/>
                  
           <option value="Watches" />
           <option value="Electronics"/>
             
              
         </datalist>
         <button className='reviewBTN' onClick={(e)=>e.preventDefault(window.location.reload())}> Return</button>
          </div>
        <div className="row">
            
         
          {queryProduct.map((val) => (
        <div>
        
        <Products2
          picture={val.picture}
          name={val.name}
          price={val.price}
        />
        
        <button className="reviewBTN">
            <Link style={{"color":"black"}} to={`/products/${val.id}/reviews/NotSignedIn`}> View Reviews</Link>
            </button>
    
              </div>
      )
        
      
      )}
      
      </div>
      </main>
  ))
}

export default Product
