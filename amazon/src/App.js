import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav'
import Nav2 from './components/Nav2'
import Carts from './screens/Carts'
import {useState,useEffect} from 'react'
import Product from './screens/Product'
import Product2 from './screens/Product2'
// import ProductDetail from './screens/ProductDetail';
// import ProductDetail2 from './screens/ProductDetail2';
import Basket from './components/Basket'
import Reccomend from "./screens/Reccomend"
import ReviewsAndRating from "./screens/ReviewsAndRating"
import ReviewsNotSignedIn from "./screens/ReviewsNotSignedIn"
import MakeAReview from './screens/MakeAReview';
import { useAuth0 } from "@auth0/auth0-react"


function App() {
  //Cart Items//
  const [cartItems, setCartItems] = useState([]);
  const {isAuthenticated} =useAuth0()
  
  
  //add for cart
  const onAdd = (val) => {
    const exist = cartItems.find((x) => x.id === val.id);
    if (exist) {
      setCartItems(cartItems.map((x) => x.id === val.id ? { ...exist, QTY: exist.QTY + 1 } : x));
    }
    else {
      setCartItems([...cartItems, { ...val, QTY: 1 }])
    }
    
  }
 
  //remove
  const onRemove = (val) => {
    const exist = cartItems.find((x) => x.id === val.id);
    if (exist.QTY === 1) {
      setCartItems(cartItems.filter((x) => x.id !== val.id));
    }
    else {
      setCartItems(cartItems.map((x) => x.id === val.id ? { ...exist, QTY: exist.QTY - 1 } : x))

    }
  }
  // the way nav is getting 1,2,3, is because of the cartItems use State length./ 
  return (
    <div className="row">
     
     
      <Nav />
      
      <Nav2 countCartItems={cartItems.length} />
     
      {/* <Basket onAdd={onAdd} cartItems={cartItems} onRemove={onRemove} /> */}
      <Route exact path="/products/:id/reviews/create"><MakeAReview/></Route>
      <Route exact path="/products/:id/reviews"><ReviewsAndRating /></Route>
      <Route exact path="/products/:id/reviews/NotSignedIn"><ReviewsNotSignedIn/></Route>
      {/* <Route exact path='/products/:id'><ProductDetail2 /></Route>
      <Route  exact path='/products/:id'><ProductDetail /></Route> */}
      <Route exact path="/MyCartLoggedIn"><Basket onAdd={onAdd} cartItems={cartItems} onRemove={onRemove} /></Route>
      <Route exact path="/MyCartLoggedOut"><Carts /></Route>
      <Route  exact path="/"><Reccomend/><Product2 onAdd={onAdd} /></Route>
      <Route   exact path="/"><Product /></Route>
      
    
    </div>
  );
}

export default App;
