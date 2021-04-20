import React, { useContext } from "react";
import CartContext from "./cartContext";
import Item from "./Item";

function Cart() {
  const { cart } = useContext(CartContext);
  
  return (
    <div>
      {cart.map((item) => {
        return <Item key={item.name} item={item} />;
      })}
    </div>
  );
}

export default Cart;
