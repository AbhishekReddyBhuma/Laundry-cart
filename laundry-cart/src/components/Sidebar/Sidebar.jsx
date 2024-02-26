import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import home from "./home-run (1).png";
import more from "./more@2x.png";
import list from "./list.png";

const Sidebar = () => {
  return (
    <>
      <div className="main">
        <div className="menu ">
          <Link to="/">
            <img className="home" id="" src={home} alt="" />
          </Link>
        </div>
        <div className="menu  " id="more">
          <Link to="/products">
            <img className="home" id="moreImg" src={more} alt="" />
          </Link>
        </div>
        <div className="menu ">
          <Link to="/orders">
            <img className="home" id="lists" src={list} alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
