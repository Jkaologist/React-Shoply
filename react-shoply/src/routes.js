import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import ProductDetails from "./productDetails";
import ProductList from "./productList";

function Routes() {
return (
  <Switch>
    <Route exact path="/">
      <ProductList />
    </Route>
    <Route path="/products/:item">
      <ProductDetails />
    </Route>
    <Redirect to="/" />
  </Switch>
  )
}

export default Routes;