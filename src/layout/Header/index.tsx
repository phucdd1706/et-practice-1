import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      <h1 className="text-2xl logo">Entry Test</h1>
      <div className="menu">
        <a href="/" className="menu-item text-lg">
          About
        </a>
        <a href="/" className="menu-item text-lg">
          Projects
        </a>
        <a href="/" className="menu-item text-lg">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Header;
