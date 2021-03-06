import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import CartContext from "./cartContext";
import DispatchContext from "./dispatchContext";

function ProductDetails () {

  const { allProducts } = useContext(CartContext)
  const { item } = useParams()

  function findIn(allProducts, item) {
    for (let key in allProducts) {
        if(allProducts[key].name===item) {
          return allProducts[key]
        }
      }
  }

  const dispatch = useContext(DispatchContext)
  const {name, image_url, description, price} = findIn(allProducts, item);
  
  function addToCart() {
    dispatch({type: "addToCart", cart: {...item}});
  }

  function removeFromCart() {
    dispatch({type: "removeFromCart", name:name});
  }
  
  return (
    <div>
      <div className="card" style={{width: "25rem"}}>
        <img src={`${image_url}`} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{price}</h6>
          <p className="card-text">{description}</p>
          <button className="btn btn-success" onClick={addToCart}>Add to cart</button>
          <button className="btn btn-danger" onClick={removeFromCart}>Remove from cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails;