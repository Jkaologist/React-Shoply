import React, { useReducer } from "react";
import "./App.css";
import data from "./data.json";
import DispatchContext from "./dispatchContext";
import CartContext from "./cartContext";
import rootReducer from "./rootReducer";
import ProductList from "./productList";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  const InitialState = {
    allProducts: data.products,
    cart: [],
    cartTotal: 0,
  };

  const [state, dispatch] = useReducer(rootReducer, InitialState);

  state.cart.length
    ? (state.cartTotal = state.cart.reduce((sum, i) => (sum += i.price), 0))
    : (state.cartTotal = 0);

  return (
    <div className="App">
      <BrowserRouter>
        <DispatchContext.Provider value={dispatch}>
          <CartContext.Provider value={state}>
            <div>
              <h1>You have {state.cart.length} items in your cart</h1>
              <h3>Your total price is {state.cartTotal}</h3>
            </div>
            <Routes />
          </CartContext.Provider>
        </DispatchContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
