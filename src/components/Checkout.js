import React from "react";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiDelete } from "@mdi/js";
import "../styles/checkout.css";

function Checkout({ cart, deleteItem, check, addSub, total }) {
  const cartView = cart.map((item) => {
    return (
      <div key={item.id} className="checkout-cart">
        {/* <div className="remove-product" id={item.id} onClick={deleteItem}>
          <Icon
            path={mdiDelete}
            title="Delete"
            size={1}
            // color="red"
          />

        </div> */}
        <img className="product-cart" src={item.pic} alt="pot pic" />
        {/* <p>${item.price}</p> */}
        <div className="quant-button">
        <p className="item-price">${item.price}</p>
          <div id={item.id} className="inc-button">
            <button className="increment" onClick={addSub}>
              -
            </button>
            <p>{item.quantity}</p>
            <button className="increment" onClick={addSub}>
              +
            </button>
          </div>
          <div className="remove-product" id={item.id} onClick={deleteItem}>
            <Icon
              path={mdiDelete}
              title="Delete"
              size={1}
              // color="red"
            />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="center-buy">
      {cart.length > 0 ? cartView : "NO ITEMS IN YOUR CART"}
      {cart.length > 0 && <p>TOTAL: ${total}</p>}
      {cart.length > 0 ? (
        <button className="checkout-btn" onClick={check}>
          CHECKOUT
        </button>
      ) : (
        <Link to="/shop">
          <button className="goshop-btn">Go Shopping</button>
        </Link>
      )}
    </div>
  );
}

export default Checkout;
