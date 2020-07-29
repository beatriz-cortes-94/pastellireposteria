import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Products from "./components/Products/products";
import ProductDetails from "./components/Product/product-details";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/products/:productId" component={ProductDetails} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
