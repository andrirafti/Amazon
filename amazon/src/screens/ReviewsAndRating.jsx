import React from 'react'
import Reviews from '../components/Reviews'
import { getAllReviews } from '../services/reviews'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react"

const ReviewsAndRating = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  const {isAuthenticated} =useAuth0()


  useEffect(()=>{
    const fetchReview=async()=>{
      const rating = await getAllReviews(id);
      setReviews(rating);
      
      
    };
    fetchReview();
  }, [])
  
  if ( isAuthenticated && reviews.length <= 0) {
    return <h1>No Reviews/Ratings Found ... Please Leave a review! <Link to={ `/products/${id}/reviews/create`}><button> Leave A Review</button></Link> </h1>
  
  
    
  }
  //Average Rating//
  let AVG = reviews.map((val) => val.rating).reduce((a, b) => a + b) / reviews.length.toFixed(1)
  console.log(AVG.toFixed(2))
  // Sort By Rating Low High//
  let LowRating = reviews.map((val) => val).sort((a,b)=>a.rating-b.rating)
  //Sort By Rating High Low 
  let HighRating = reviews.map((val) => val).sort((a,b)=>b.rating-a.rating)

  return (
    isAuthenticated &&(
      <div className="block col-2">
        
      <Link to={`/`}><button className="reviewBTN">Return</button></Link>
        <h1>Total Reviews: 
        <button className="badge">{reviews.length}</button>
        </h1>
        <hr></hr>
        <h1>
          Average Rating:
           <button className="badge">{AVG.toFixed(1)}</button>
        </h1>
        <select multiple >
          <option disabled>Sort By: </option>
          <option onClick={(e)=>e.preventDefault(setReviews(LowRating))}>Rating: Lowest To Highest</option>
          <option onClick={(e)=>e.preventDefault(setReviews(HighRating))}>Rating: Highest To Lowest</option>

          </select>
        <hr></hr>
     
      {reviews.map((val) => (
        <div className="Ratings">
          <hr></hr>

        <Reviews 
          comment={val.comment}
            rating={val.rating}
            
          />
          </div>
      ))}
      
        <Link  to={`/products/${id}/reviews/create`}><button className="reviewBTN"> Leave A Review</button></Link>
        <hr></hr>

      
      </div>
    )
  )
}

export default ReviewsAndRating
