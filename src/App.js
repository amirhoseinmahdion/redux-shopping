import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';

// Components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';

// Redux
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
        <Navbar />
        <Switch>
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products" component={Store} />
          <Route path="/cart" component={ShopCart} />
          <Redirect to="/products" />
        </Switch>
    </Provider>
  );
}

export default App;
