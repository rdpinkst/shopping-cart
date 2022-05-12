import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import FootersProject from "./components/FootersProject";
import HomePage from "./components/HomePage";
import Shop from "./components/Shop";
import Checkout from "./components/Checkout";
import data from "./data";
import "./app.css";

function App() {
  const storeInfo = data;
  const [shopCart, setShopCart] = useState([]);
  const [totalItems, setTotalItems] = useState('');
  const [grandTotal, setGrandTotal] = useState('')

  //Add items to the shopping cart (shopCart)
  function clickAdd(e) {
    const indexBuy = parseInt(e.target.id);

    setShopCart((prevCart) => {
      const duplicateItem = prevCart.some((info) => info.id === indexBuy);
      if (prevCart.length > 0 && !duplicateItem) {
        return [...prevCart, storeInfo[indexBuy]];
      } else if (prevCart.length > 0 && duplicateItem) {
        return prevCart.map((cart) => {
          if (cart.id === indexBuy) {
            return {
              ...cart,
              quantity: cart.quantity + 1,
            };
          } else {
            return cart;
          }
        });
      } else {
        return [storeInfo[indexBuy]];
      }
    });
  }

  //Updates total items and checkout total when shopping cart state changes
  useEffect(() => {
    if (shopCart.length) {
      setTotalItems(total(shopCart));
      setGrandTotal(totalSpent(shopCart))
    }
  }, [shopCart]);

  //Total items in shopping cart
  function total(cart) {
    const quantityArray = cart.map((item) => item.quantity);
    return quantityArray.reduce((a, b) => a + b);
  }

  //Grand total spent on items
  function totalSpent(cart) {
    const totalArray = cart.map((item) => item.quantity * item.price);
    return totalArray.reduce((a, b) => a + b)
  }

  //Adds or subtracts one from current quanity
  function incrementQuant(e) {
    const indexIncrement = parseInt(e.target.parentElement.id);

    setShopCart((prevCart) => {
      return prevCart.map((cart) => {
        if (cart.id === indexIncrement && e.target.textContent === "+") {
          return {
            ...cart,
            quantity: cart.quantity + 1,
          };
        } else if (cart.id === indexIncrement && e.target.textContent === "-" && cart.quantity !== 0) {
          return {
            ...cart,
            quantity: cart.quantity - 1,
          };
        } else {
          return cart;
        }
      });
    });
  }

  //Deletes an item that is not wanted
  function deleteItem(e) {
    const indexDelete = parseInt(e.currentTarget.id);

    setShopCart((prevCart) => {
      return prevCart.filter((item) => indexDelete !== item.id);
    });
  }

  //Changes state empty cart
  function shoppingComplete() {
    alert("Order Processing...");
    setShopCart([]);
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar cart={shopCart} itemsTotal={totalItems} />
        <Routes>
          <Route path="/shopping-cart/" element={<HomePage />} />
          <Route
            path="/shopping-cart/shop"
            element={<Shop click={clickAdd} infoStore={storeInfo} />}
          />
          <Route
            path="/shopping-cart/checkout"
            element={
              <Checkout
                cart={shopCart}
                deleteItem={deleteItem}
                check={shoppingComplete}
                addSub={incrementQuant}
                total = {grandTotal}
              />
            }
          />
        </Routes>
      </BrowserRouter>
      <FootersProject />
    </div>
  );
}

export default App;
