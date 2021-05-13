import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav'
import Nav2 from './components/Nav2'
import Carts from './screens/Carts'
import Carts2 from './screens/Carts2'

import Product from './screens/Product'

function App() {
  return (
    <div >
      <Nav />
      <Nav2/>
      <Switch>
        <Route exact path='/products/:id'><h1>Testing</h1></Route>
        <Route  path="/MyCartLoggedIn"><Carts2/></Route>
      <Route  path="/MyCartLoggedOut"><Carts/></Route>
        <Route exact path="/"><Product/></Route>
        </Switch>
    </div>
  );
}

export default App;
