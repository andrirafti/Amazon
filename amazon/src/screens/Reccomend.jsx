import React from 'react'
import { getAllProducts } from '../services/products'
import { useState, useEffect } from 'react'

const Reccomend = () => {
  
  // let date = new Date();
  // let time = date.getTime();
  // let days = Math.floor(time / (86400))
  // console.log(time)
   
  const [RandomPic, setRandomPic] = useState([]);
  useEffect(()=>{
    const fetchProducts=async()=>{
      const products = await getAllProducts();
      setRandomPic(products[Math.floor(Math.random() * products.length)]);
      return products
    };
    fetchProducts();
  }, [setInterval])
  console.log(RandomPic)

  return (
  
    <aside className="block col-1">
      Rain Forests Reccomendation of the day!
      
      <p>{RandomPic.name}</p>
      <img src={RandomPic.picture}/>
    </aside>
    

  )
}

export default Reccomend
