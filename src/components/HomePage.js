import React from "react";
import { Link } from "react-router-dom";
import potteryPic from "../pottery-pic.jpg"
import "../styles/homePage.css"

function HomePage() {
  return (
    <div className="body-site">
      <div className="info-site">
        <h3>UNIQUE</h3>
        <h4>Hand-made</h4>
        <h3>POTS</h3>
        <Link to="/shop"><button type="button" className="start-shopping">Start Shopping</button></Link>
      </div>
      <img className="home-img" src={potteryPic} alt="pottery pic" />
    </div>
  );
}

export default HomePage;
