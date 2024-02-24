import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <div>Laundry</div>
      </div>
      <div className="nav-menu">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div>Home</div>
        </Link>
        <div>Pricing</div>
        <div>Career</div>
        <Link to="/signin" style={{ textDecoration: "none" }}>
          <div>Sign In</div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
