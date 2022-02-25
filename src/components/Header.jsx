import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <input type="text" placeholder="Search for your next movie"></input>
      </nav>
    </div>
  );
};

export default Header;