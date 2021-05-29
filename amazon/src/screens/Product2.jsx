import React from 'react'
import Products from '../components/Products'
import { getAllProducts } from '../services/products'
import { Link,useParams,useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react"




const Product2 = (props) => {
  const [queryProduct2, setQueryProduct2] = useState([]);
  const [loaded, setIsLoaded] = useState(false);
  const [search,setSearch]=useState("")
  const {isAuthenticated} =useAuth0()
  const history=useHistory()
  const {onAdd}=props
  

  //Sort for price High to low//
    let LowHigh = queryProduct2.map(val=>val).sort((a, b) => a.price - b.price)
    //Sort for price Low to high//
  let HighLow = queryProduct2.map(val => val).sort((a, b) => b.price - a.price)
 
// Sort Category
let Cars = queryProduct2.map(val => val).filter((val) => val.price>40000);
let Watches = queryProduct2.map(val => val).filter(val => val.name.includes("Rolex"))
let Electronics = queryProduct2.map(val => val).filter(val=>val.price<500)
  
  // handle select for our select options//
  function handleSelectChange(e) {
    e.preventDefault();
    if (e.target.value == "LowPrice") setQueryProduct2(LowHigh);
    if (e.target.value == "HighPrice") setQueryProduct2(HighLow);
    if (e.target.value == "Cars") setQueryProduct2(Cars)
    if (e.target.value == "Watches") setQueryProduct2(Watches)
    if(e.target.value== "Electronics") setQueryProduct2(Electronics)
    if (e.target.value.length<=0) setIsLoaded(false)
    
  }
  
  
  
  useEffect(()=>{
    const fetchProducts=async()=>{
      const products = await getAllProducts();
      //setQueryProduct(products);
      //the bottom STARTS the sort high price to low price.. as opposed to the top which is THE WAY i put it in through postman/// 
      setQueryProduct2(products.map(val => val).sort((a, b) => b.price - a.price));
      setIsLoaded(true)
      
    };
    fetchProducts();
  }, [setIsLoaded])
//search filter//
  const filterCategory = queryProduct2.filter((val) => {
    
    return  val.name.toLowerCase().includes(search.toLowerCase()) 
    
  
  })
  //search filter if there is nothing found!//
  if (!filterCategory.length) {
    
    return < h1 style={{"text-align":"center"}}className="block col-2"> Sorry no results found.. Search Again <div><input  className="search" placeholder="search" type="text" value={search} onChange={(e) => setSearch(e.target.value)}/></div></h1>
  }
  
  if (!setIsLoaded) {
    <div>
      <h2>LOADING . . .</h2>
    </div>

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
<label>Sort By:</label>
        <input style={{"border-radius":"10px"}} list="car-list" type="text" onChange={handleSelectChange}/>
              <datalist id="car-list">
                <option value="Cars"/>
                  
           <option value="Watches" />
           <option value="Electronics"/>
             
              
        </datalist>
            
          
         
    
         
        <div>
          
        </div>
        
    <div className="rowSide">
    
          <input className="search" placeholder="search" type="text" style={{"width":"70%"}} value={search} onChange={(e) => setSearch(e.target.value)}/>
            
    
    
    
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
