import React from 'react'
import Products from '../components/Products'
import { getAllProducts } from '../services/products'
import { Link,useParams,useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import Select from "react-select"



const Product2 = (props) => {
  const [queryProduct, setQueryProduct] = useState([]);
  const [loaded, setIsLoaded] = useState(false);
  const [search,setSearch]=useState("")
  const {isAuthenticated} =useAuth0()
  const {onAdd}=props
  

  //Sort for price High to low//
    let LowHigh = queryProduct.map(val=>val).sort((a, b) => a.price - b.price)
    //Sort for price Low to high//
  let HighLow = queryProduct.map(val => val).sort((a, b) => b.price - a.price)
  //
  function handleSelectChange(e) {
    e.preventDefault();
   
    if (e.target.value == "LowPrice") setQueryProduct(LowHigh);
    if (e.target.value == "HighPrice") setQueryProduct(HighLow);
 
  }
  
  
  
  useEffect(()=>{
    const fetchProducts=async()=>{
      const products = await getAllProducts();
      //setQueryProduct(products);
      //the bottom STARTS the sort high price to low price.. as opposed to the top which is THE WAY i put it in through postman/// 
      setQueryProduct(products.map(val => val).sort((a, b) => b.price - a.price));
      setIsLoaded(true)
      
    };
    fetchProducts();
  }, [])
//search filter//
  const filterCategory = queryProduct.filter((val) => {
    
    return  val.name.toLowerCase().includes(search.toLowerCase()) 
    
  
  })
  //search filter if there is nothing found!//
  if (filterCategory.length <= 0) {
   
    return < h1 style={{"text-align":"center"}}className="block col-2"> Sorry no results found.. Search Again <div><input  className="search" placeholder="search" type="text" value={search} onChange={(e) => setSearch(e.target.value)}/></div></h1>
  }
  
  
  if (!setIsLoaded) {
    return <h1>LOADING</h1>
  }
  
  return (
    isAuthenticated && (
      

      <main className="block col-2">
        <h2 className="AllProd"> All Products</h2>
        <label>Price:
        <select style={{"border-radius":"10px"}} onChange={handleSelectChange}>
          <option value="HighPrice">High To Low</option>
          <option value="LowPrice" >Low To High</option>
          </select>
          </label>
         
    
         
          
    <div className="rowSide">
    
          <input list="product-list" className="search" placeholder="search" type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
            
    
    
    
      {filterCategory.map((val) => (
       <div>
        <Products
          // picture={val.picture}
          // name={val.name}
          // price={val.price}
          onAdd={onAdd}
          val={val}
          
          // description={val.description}
          // price={val.price}
          />
          
          <div >
          <button className="reviewBTN">
            <Link className="ReviewC" to={`/products/${val.id}/reviews`}>Customer Reviews </Link>
            </button>
            </div>
          <hr></hr>
          </div>
    
      )
      
            )}
            
            
           
          
          


        </div>
        
      </main>

  ))
}
        

export default Product2
