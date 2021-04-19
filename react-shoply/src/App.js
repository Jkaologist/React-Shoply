import React, { useReducer } from "react";
import "./App.css";
import data from "./data.json";
import DispatchContext from "./dispatchContext";
import CartContext from "./cartContext";
import rootReducer from "./rootReducer";
import Item from "./Item";

function App() {
  const InitialState = {
    allProducts: data.products,
    cart: [],
    cartTotal: 0
  };

  const [state, dispatch] = useReducer(rootReducer, InitialState);

  const arrayOfProds = Object.values(state.allProducts);

  (state.cart.length)
    ? state.cartTotal = state.cart.reduce((sum, i) => sum += i.price, 0)
    : state.cartTotal = 0;


  console.log("cartotal!", state.cartTotal)
  console.log("cart!", state.cart)
  return (
    <div className="App">
      <DispatchContext.Provider value={dispatch}>
        <CartContext.Provider value={state}>
          <div>
            <h1>You have {state.cart.length} items in your cart</h1>
            <h3>Your total price is {state.cartTotal}</h3>
          </div>
          {arrayOfProds.map((item) => {
            return <Item key={item.name} item={item} />;
          })}
        </CartContext.Provider>
      </DispatchContext.Provider>
    </div>
  );
}

export default App;
