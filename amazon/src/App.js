import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav'
import Carts from './screens/Carts'
import Product from './screens/Product'

function App() {
  return (
    <div >
      <Nav />
      <Switch>
      <Route exact path="/MyCart"><Carts/></Route>
        <Route exact path="/"><Product/></Route>
        </Switch>
    </div>
  );
}

export default App;
