import React from "react";
import { Link } from "react-router-dom";
import "../styles/checkout.css";

function Checkout({ cart, deleteItem, check, addSub, total }) {
  const cartView = cart.map(item => {
    return (
      <div key={item.id} className="checkout-cart">
        <p className="remove-product">
          Remove{" "}
          <span id={item.id} onClick={deleteItem}>
            X
          </span>
        </p>
        <img className="product-cart" src={item.pic} alt="pot pic" />
        <p>${item.price}</p>
        <div id = {item.id} className="quant-button">
          <button className="increment" onClick={addSub}>-</button>
          <p>{item.quantity}</p>
          <button className="increment" onClick={addSub}>+</button>
        </div>
      </div>
    );
  });

  return (
    <div className="center-buy">
      {cart.length > 0 ? cartView : "NO ITEMS IN YOUR CART"}
      {cart.length > 0 && <p>TOTAL: ${total}</p>}
      {cart.length > 0 ? <button className="checkout-btn" onClick={check}>
        CHECKOUT
      </button> : <Link to="/shop"><button className="goshop-btn">Go Shopping</button></Link>}
    </div>
  );
}

export default Checkout;
