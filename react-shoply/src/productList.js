import React, {useContext} from "react";
import Item from "./Item";
import CartContext from "./cartContext";

function ProductList() {
  const state = useContext(CartContext)
  const arrayOfProds = Object.values(state.allProducts);

  return (
    <div>
      {arrayOfProds.map((item) => {
        return <Item key={item.name} item={item} />;
      })}
    </div>
  )
}

export default ProductList;