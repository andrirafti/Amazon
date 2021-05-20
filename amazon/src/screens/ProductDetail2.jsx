import React, { useState, useEffect } from 'react';
import { getOneProduct,getAllProducts} from '../services/products'
import { useParams, useHistory, Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react"
import Reviews from '../components/Reviews';

//Never USED//



const ProductDetail2 = () => {
  const {isAuthenticated} =useAuth0()
  const { isLoading } = useAuth0();
  const [cart, setCart] = useState(1);
  const [product, setProduct] = useState([])
  const { id } = useParams();
  const history = useHistory()

  
 // Grabs The Specefic picture// 
  useEffect(()=>{
    const fetchProduct=async()=>{
      const theproduct=await getOneProduct(id);
      setProduct(theproduct);
    };
    fetchProduct();
  }, [id])
  
  
  const FindReviews = (e) => {
    e.preventDefault();
    history.push(`products/${id}/reviews`)
    
  }
  
  
  
 
  if (isLoading) return <div>Loading...</div>
  
  return (
    isAuthenticated && (
      <div>
        
     
        {/* <button  className="Button" onClick={()=>history.push("/MyCartLoggedIn")} > Add To Cart </button> */}
       
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
        <label>
          <Link to={`products/${id}/reviews`}><p>View Reviews</p> <p>{ Reviews.length}</p></Link>

</label>

         
        {/* <label>
          <p>Quantity:  {cart}</p>
        <button onClick={() => {
          setCart(Math.max(cart + 1,0));
        }} > + </button>
        <button onClick={() => {
          setCart(Math.max(cart - 1,1));
          }} > - </button>
        </label> */}
          {/* <button >Add to Cart</button> */}
         
       
        
          

      </div>
    )
  )
}

export default ProductDetail2
