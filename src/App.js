import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FootersProject from "./components/FootersProject";
import HomePage from "./components/HomePage";
import Shop from "./components/Shop";
import Checkout from "./components/Checkout";
import "./app.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
      </BrowserRouter>
      <FootersProject />
    </div>
  );
}

export default App;
