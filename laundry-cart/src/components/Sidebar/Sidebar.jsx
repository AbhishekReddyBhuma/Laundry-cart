import React from "react";
import "./sidebar.css";
import home from "./home-run (1).png";
import more from "./more@2x.png";
import list from "./list.png";

const Sidebar = () => {
  return (
    <>
      <div className="main">
        <div className="menu ">
          <img className="home" src={home} alt="" />
        </div>
        <div className="menu  " id="more">
          <img className="more" src={more} alt="" />
        </div>
        <div className="menu ">
          <img className="lists" src={list} alt="" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
