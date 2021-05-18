import React from 'react'
import ReviewsNotLoggedin from '../components/ReviewsNotLoggedin'
import { getAllReviews } from '../services/reviews'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react"



const ReviewsAndRating = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  const { isAuthenticated } = useAuth0()
  

  useEffect(()=>{
    const fetchReview=async()=>{
      const rating = await getAllReviews(id);
      setReviews(rating);
      
      
    };
    fetchReview();
  }, [])
  if ( !isAuthenticated && reviews.length <= 0) {
    return <h1>No Reviews/Ratings Found ... Please Sign in to leave a review</h1>
  
  
    
  }

 
  let AVG = reviews.map((val) => val.rating).reduce((a, b) => a + b) / reviews.length.toFixed(1)
 


  return (
    !isAuthenticated && (
      <div>
        <Link to={`/`}><button>Return</button></Link>
        <h1>Total Reviews: 
        <button className="badge">{reviews.length}</button>
        </h1>
       
        <h1>
          Average Rating:
           <button className="badge">{AVG.toFixed(1)}</button>
             </h1>
        <hr></hr>
        <h2 style={{"text-align":"center"}}>Sign in for more details!!!</h2>
      {reviews.map((val) => (
        <div className="Ratings">

          <ReviewsNotLoggedin
           
          comment={val.comment}
            rating= {val.rating}
          />
          </div>
      ))}

      
      </div>
    )
  )
}

export default ReviewsAndRating
