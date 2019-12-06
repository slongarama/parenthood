import React from 'react';
import { Redirect, BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component"
import LandingPage from "./components/landing-page.component"
import ProductsList from "./components/products-list.component";
import ProductCard from "./components/product-card.component";
import EditProduct from "./components/edit-product.component";
import CreateProduct from "./components/create-product.component";
import CreateUser from "./components/create-user.component";
import StickyFooter from "./components/sticky-footer.component"
import AboutUs from './components/about-us.component'
import FAQ from './components/faq.component'

function App() {
  return (
    <Router>
      <div className="container" style={{
        marginLeft: 0,
        marginRight: 0,
        maxWidth: 'initial',
        paddingLeft: 0,
        paddingRight: 0,
        backgroundColor: 'white',
      }}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/shop" component={ProductsList} />
          <Route path="/view/:id" component={ProductCard} />
          <Route path="/edit/:id" component={EditProduct} />
          <Route path="/add" component={CreateProduct} />
          <Route path="/user" component={CreateUser} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/faq" component={FAQ} />
          <Redirect to="/" />
        </Switch>
        <StickyFooter />
      </div>
    </Router >
  );
}

export default App;
