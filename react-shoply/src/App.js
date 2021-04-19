import React, { useReducer } from "react";
import './App.css';
import data from "./data.json";
import DispatchContext from "./dispatchContext";
import CartContext from "./cartContext";
import rootReducer from "./rootReducer";

function App() {

  const InitialState = {
    allProducts: data.products
  }

  console.log("ALL PRODUCTS: ", InitialState)

  const [state, dispatch] = useReducer(rootReducer, InitialState);

  return (
    <div className="App">
      <DispatchContext.Provider value={dispatch}>
        <CartContext.Provider value={state}>
          <div>HELLLOOOOOOO BUY MY STUFFS</div>
        </CartContext.Provider>
      </DispatchContext.Provider>
    </div>
  );
}

export default App;
