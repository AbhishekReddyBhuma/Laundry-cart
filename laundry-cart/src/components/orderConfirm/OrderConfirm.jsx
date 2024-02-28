import React from "react";
import "./cnfOrder.css";
import singTick from "./signtick.png";

const OrderConfirm = () => {
  return (
    <div className="maindiv">
      <div className="container">
        <div className="rounded">
          <img src={singTick} alt="" />
        </div>
        <div className="tholder">
          <span>Your order is successfully.</span>
        </div>
        <div className="text">
          <span>You can track the delivery in the "Orders" section.</span>
        </div>
        <div className="btn">
          <button>
            <a href="/orders">Go to orders</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirm;
