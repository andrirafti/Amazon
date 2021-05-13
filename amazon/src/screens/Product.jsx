import React from 'react'
import Products from '../components/Products'
import { getAllProducts,getOneProduct } from '../services/products'
import { Link,useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'

const Product = () => {
  const [queryProduct, setQueryProduct] = useState([]);
  const [loaded, setIsLoaded] = useState(false);
 


  useEffect(()=>{
    const fetchProducts=async()=>{
      const products = await getAllProducts();
      setQueryProduct(products);
      setIsLoaded(true)
      
    };
    fetchProducts();
  }, [])

 
  

  if (!setIsLoaded) {
   return <h1>LOADING</h1>
 }

  return (
    <div>
     
      {queryProduct.map((val) => (
        <Link to={`/products/${val.id}`}>
        <Products
          picture={val.picture}
          name={val.name}
          // description={val.description}
          // price={val.price}
          />
          </Link>
      
      ))}
      
    </div>
  )
}

export default Product
