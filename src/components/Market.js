import { React, useState } from "react";
import { Link } from "react-router-dom";
import MarketSearch from "./MarketSearch";

function Market() {
  const [scrollActive, setScrollActive] = useState(false);
  function isScroll() {
    if (window.scrollY > 0) setScrollActive(true);
    else setScrollActive(false);
  }
  window.addEventListener("scroll", isScroll);
  return (
    <div className="market-container">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <div
        className={
          scrollActive ? "navbar-container navbar-scroll" : "navbar-container"
        }
      >
        <h1 className="logo">
          {"</INV"}
          <span className="green">$</span>
          {"T/>"}
        </h1>
        <div className="nav-options-container">
          <span>Services</span>
          <span>Market Overview</span>
          <span>About Us</span>
        </div>
        <div className="nav-button-container">
          <Link to="/login">
            <button className="sign-up">
              Login<span class="material-symbols-outlined green">login</span>
            </button>
          </Link>
          <button className="log-in">Start Free</button>
        </div>
      </div>


      <div className="searchbar">
        <h1>Search for a Entity</h1>
        <div className="stock_input">
          <form>
            <input type="ticker" placeholder="Search for a Stock" />
          </form>
          <button>Search</button>
        </div>
      </div>
      
    </div>
  );
}

export default Market;

