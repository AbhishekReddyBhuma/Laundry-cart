import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { contextProvider } from "../../Context/Context";
const NavBar = () => {
  const token = localStorage.getItem("token");
  const [logout, setLogout] = useState(false);

  const { PastOrders } = contextProvider();

  const Navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    Navigate("/signin");
  };
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
        {!token ? (
          <Link to="/signin" style={{ textDecoration: "none" }}>
            <div>Sign In</div>
          </Link>
        ) : (
          <>
            <a onClick={handleLogout} style={{ textDecoration: "none" }}>
              Log Out
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
