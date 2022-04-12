import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import "../styles/navbar.css";

function Navbar({cart, itemsTotal}) {
  return (
    <div className="nav-all">
      <Link to="/">
        <h1 className="shop-name">Pots Shop</h1>
      </Link>
      <div className="right-nav">
        <Link to="/">HOME</Link>
        <Link to="/shop">SHOP</Link>
        <Link to="/checkout">
          <FontAwesomeIcon icon={faBagShopping} />
          {cart.length > 0 && <span>({itemsTotal})</span>}
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
