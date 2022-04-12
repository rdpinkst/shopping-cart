import React from "react";
import "../styles/shop.css";

function Shop({ infoStore, click }) {
  const picPots = infoStore.map((pict, index) => (
    <div key={index} className="product-card">
      <img className="picture-product" src={pict.pic} alt="pots for sale" />
      <p>{pict.description}</p>
      <p>${pict.price}</p>
      <button id = {index} className="add-item" onClick={click}>Add to Cart</button>
    </div>
  ));
  return (
    <div className="store-center">
      <div className="store-layout">{picPots}</div>
    </div>
  );
}

export default Shop;
