import {postReview} from '../services/reviews'
import {useState} from 'react'
import {useHistory,useParams} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react"




const MakeAReview=()=>{
  const [isCreated, setCreated] = useState(false);
  const { user, isAuthenticated } = useAuth0();
  const {id}=useParams();
  const history=useHistory();
  //the below is an easier way to do const [name,setName] const [goal,setGoal] make all useState into one big one
  const [review,setReview]=useState({
    comment:"",
    rating: "",
  })
  //handleChange for the above// its the shorter way of doing const [name,setName]=useState([]) do all at once instead of indivually 
  
  const handleChange=(e)=>{
    //name,value as special values used in our form so that what we will target.
    const {name,value}=e.target;
    setReview({
      ...review,
      //we are making our client.. aka name,goal become name:value
      [name]:value
    })
  }
  // Now we need our handleSubmit which brings in the axios call to submit everyting properly from the handleChange input fields//
    const handleSubmit=async(e)=>{
      e.preventDefault();
      const clientadded = await postReview(id,review);
      setCreated(clientadded);
    };
    if (isCreated){
      history.push(`/products/${id}/reviews/`)
    }
  
  return (
    isAuthenticated&&(
    <div className="block col-2">
        <form onSubmit={handleSubmit}>
          
   
          <h1 style={{"textAlign":"center"}}>Like Our Product? 
          Leave Us A Review!</h1>
          <hr></hr>
          <div style={{"textAlign":"center"}}>
            <aside>
              <label> Comment:
        <input type="text" name="comment" value={review.comment} required onChange={handleChange} /></label>
            </aside>
        </div>
        <div style={{"textAlign":"center"}} className="goal">
            <label> Rating : </label>
            <select onChange={handleChange} required name="rating" value={review.rating} >
            <option>Select an option Below</option>
            <option value= "1">1</option>
            <option value="2">2</option>
            <option  value="3">3</option>
                <option value="4">4</option>
                <option  value="5">5</option>
            </select>
          </div>
          
        <button style={{"display": "block",
    "margin-left": "auto",
            "margin-right": "auto",
          "marginTop":"15px"}} type="submit">Submit Review</button>
          </form>

      




      </div>
    )
  );
  

}
export default MakeAReview