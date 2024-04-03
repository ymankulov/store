import React from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBag3Line } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <h1>ShopVerse</h1>
          <div className="header--nav">
            <Link to={"/"}>Home</Link>
            <Link to={"/product"}>Product</Link>
            <Link to={"/favorite"}>Favorite</Link>
            <Link to={"/basket"}>Basket</Link>
          </div>
          <div className="header--search">
            <div className="header--search__input">
              <input type="text" placeholder="Search for “Phones”" />
              <a>
                <IoSearch />
              </a>
            </div>
            <Link to={"/"}>
              <FaRegHeart />
            </Link>
            <Link to={"/basket"}>
              <RiShoppingBag3Line />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
