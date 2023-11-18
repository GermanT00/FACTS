import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ProductDetail from './components/ProductDetail';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar /> {/* Navbar siempre visible */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/cart" component={CartWidget} />
          <Route path="/products" component={ItemListContainer} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
