import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { FaTriangleExclamation } from "react-icons/fa6";
import "./alert.css";
import { contextProvider } from "../../Context/Context";
const Alert = ({ id }) => {
  const { cancelToggle, setCanceltoggle, cancelPastOrder } = contextProvider();

  const navigate = useNavigate();
  return (
    <div className="alert">
      <div className="primery">
        <span className="span">Alert</span>
        <RxCross2
          className="icon1"
          onClick={() => {
            setCanceltoggle(!cancelToggle);
            navigate("/orders");
          }}
        />
      </div>
      <div className="secondary">
        <FaTriangleExclamation className="icon2" />
        <div className="secondary-child">
          <span className="span2">
            Are you sure want to cancel the oreder No: OR1213
          </span>
          <button
            className="btn"
            onClick={() => {
              setCanceltoggle(!cancelToggle);
              cancelPastOrder(id);
              navigate("/orders");
            }}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
