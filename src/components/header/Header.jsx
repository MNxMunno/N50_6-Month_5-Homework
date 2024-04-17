import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  const items = [
    "Shop",
    "All",
    "Mobile",
    "TV & Audio",
    "Appliance",
    "Computing",
    "Displays",
    "Accessories",
    "SmartThings",
  ];

  let item = items?.map((item, inx) => (
    <a className="links" key={inx} href="#">
      {item}
    </a>
  ));

  //////////////////////////////////////

  const btnItems = ["Explore", "Support", "For Business"];
  let btnItem = btnItems?.map((el, inx) => (
    <a key={inx} href="#">
      {el}
    </a>
  ));
  return (
    <header>
      <div className="container">
        <nav>
          <a href="#" className="logo">
            <h1>SAMSUNG</h1>
          </a>
          <div className="nav__items">{item}</div>
          <div className="nav__btns">
            {btnItem}
            <button>
              <IoMdSearch className="search" />
            </button>
            <button>
              <FiShoppingCart />
            </button>
            <button>
              <FaRegUser />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
