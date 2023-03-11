import React from "react";
import MenuIcon from "~/assets/img/menu-icon.svg";

const Header = () => {
  return (
    <div className="header-container">
      <a href="/" className="text-2xl logo">
        Entry Test
      </a>
      <div className="menu">
        <a href="#About" className="menu-item text-lg">
          About
        </a>
        <a href="#Projects" className="menu-item text-lg">
          Projects
        </a>
        <a href="#Contact" className="menu-item text-lg">
          Contact
        </a>
        <button className="btn-menu" type="button">
          <div className="btn-container">
            <span className="text-lg">Menu</span>
            <img className="menu-icon" src={MenuIcon} alt="menu icon" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
