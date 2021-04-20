import React, { useContext } from "react";
import DispatchContext from "./dispatchContext";
import { Link } from "react-router-dom";

function Item({ item }) {
  const dispatch = useContext(DispatchContext);
  const { name, image_url, description, price } = item;

  function addToCart() {
    dispatch({ type: "addToCart", cart: { ...item } });
  }

  function removeFromCart() {
    dispatch({ type: "removeFromCart", name: item.name });
  }

  return (
    <div>
      <div className="card" style={{ width: "25rem" }}>
        <Link to={`/products/${name}`}>
          <img src={`${image_url}`} className="card-img-top" alt={name} />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{price}</h6>
          <p className="card-text">{description}</p>
          <button className="btn btn-success" onClick={addToCart}>
            Add to cart
          </button>
          <button className="btn btn-danger" onClick={removeFromCart}>
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
