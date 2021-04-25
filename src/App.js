
import './App.css';
//pages
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Product from './pages/Product';

//router
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

//components
import CartIcon from './components/CartIcon'

//redux store
import store from './store/store'
import {Provider} from 'react-redux';




function App() {
  return (
    //<Provider>
    <Router>
    <div>
<nav  className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">car store</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
       
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/products'>Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/cart'>Cart</Link>
        </li>
      
      </ul>
      
    </div>
    <CartIcon />
  </div>
 
</nav>

<Route path='/'  component={Home} exact/>
<Route path='/products'  component={Products} exact />
<Route path='/products/:id'  component={Product} />
<Route path='/cart'  component={Cart} />


</div>

</Router>
//</Provider> or create a component like shown below
  );
}

function AppWithStore(){
  return <Provider store={store}>
    <App />
  </Provider>
}

export default AppWithStore;
