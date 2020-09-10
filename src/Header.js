import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon"
        />
      </Link>

      <div className="header_search">
        <input className="header_search_input" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_nav_options">
          <span className="header_option_top">Hello Guest</span>
          <span className="header_option_bottom"> Sign in</span>
        </div>
        <div className="header_nav_options">
          <span className="header_option_top">Returns</span>
          <span className="header_option_bottom"> & Orders</span>
        </div>
        <div className="header_nav_options">
          <span className="header_option_top">Try</span>
          <span className="header_option_bottom">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_nav_basket">
            <ShoppingCartIcon />
            <span className="header_basket_count">0</span>
            <span className="header_basket_text">Cart</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
