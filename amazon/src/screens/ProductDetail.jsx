import React, { useState, useEffect } from 'react';
import { getOneProduct} from '../services/products'
import { useParams, useHistory,Link } from 'react-router-dom';
import {useAuth0} from "@auth0/auth0-react"
//Never USED//

const ProductDetail = () => {
  const {isAuthenticated} =useAuth0()
  const { isLoading } = useAuth0();
  const [product, setProduct] = useState([])
  const { id } = useParams();
  const history=useHistory()
 
 
  useEffect(()=>{
    const fetchProduct=async()=>{
      const theproduct=await getOneProduct(id);
      setProduct(theproduct);
    };
    fetchProduct();
  },[id])
  const handleClick = (e) => {
    e.preventDefault()
    alert("Must be signed in")
  }

  if (isLoading) return <div>Loading...</div>
  
  return (
    !isAuthenticated&&(
    <div>
   
        <h1 className="film" >
           {product.name}
        </h1>
        <img className="img" src={product.picture} />
        <label> Description:
        <p className="film">{product.description}</p>
        </label>
        <label> Price:
        <p className="film">{product.price}</p>
        </label>
    <Link to ={(`products/${id}/reviews`)}> Reviews </Link>
    <button  onClick={handleClick}>Add To Cart</button>
      </div>
    )
  )
}

export default ProductDetail
