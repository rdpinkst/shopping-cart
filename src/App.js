import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import FootersProject from "./components/FootersProject";
import HomePage from "./components/HomePage";
import Shop from "./components/Shop";
import Checkout from "./components/Checkout";
import data from "./data";
import "./app.css";

function App() {
  const [storeInfo, setStoreInfo] = useState(data);
  const [shopCart, setShopCart] = useState([]);

  function clickAdd(e) {
    const indexBuy = parseInt(e.target.id);
    setStoreInfo((prevInfo) => {
      return prevInfo.map((info, index) => {
        if (index === indexBuy) {
          return {
            ...info,
            quantity: info.quantity + 1,
          };
        } else {
          return info;
        }
      });
    });
    setShopCart((prevCart) => {
      if (shopCart.length > 0) {
        return [...prevCart, { ...storeInfo[indexBuy], quantity: storeInfo[indexBuy].quantity + 1 }];
      } else {
        return [storeInfo[indexBuy]];
      }
    });
  }

  function incrementQuant(e){
    console.log(e.target.parentElement.id)
    const indexIncrement = parseInt(e.target.parentElement.id);

    setStoreInfo(prevInfo => {
      return prevInfo.map(info => {
        if(info.id === indexIncrement && e.target.textContent === '+'){
          return (
            {
              ...info,
              quantity: info.quantity + 1
            }
          )
        } else if (info.id === indexIncrement && e.target.textContent === '-'){
          return (
            {
              ...info,
              quantity: info.quantity - 1
            }
          )
        } else{
          return info;
        }
      })
    })

  }

  function deleteItem(e) {
    const indexDelete = parseInt(e.target.id);
    console.log(indexDelete);
    setShopCart((prevCart) => {
      return prevCart.filter((item) => indexDelete !== item.id);
    });
    setStoreInfo((prevInfo) => {
      return prevInfo.map((info) => {
        if (indexDelete === info.id) {
          return {
            ...info,
            quantity: 1,
          };
        } else {
          return info;
        }
      });
    });
  }

  function shoppingComplete() {
    alert("Order Processing...");
    setStoreInfo((prevInfo) => {
      return prevInfo.map((info) => ({
        ...info,
        quantity: 1,
      }));
    });
    setShopCart([]);
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar cart={shopCart} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/shop"
            element={<Shop click={clickAdd} infoStore={storeInfo} />}
          />
          <Route
            path="/checkout"
            element={
              <Checkout
                cart={shopCart}
                deleteItem={deleteItem}
                check={shoppingComplete}
                addSub = {incrementQuant}
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
