import React from "react";
import { RxCross2 } from "react-icons/rx";
import { FaTriangleExclamation } from "react-icons/fa6";
const Alert = () => {
  return (
    <div>
      <div className="primery">
        <span>Alert</span>
        <RxCross2 />
      </div>
      <div className="secondary">
        <FaTriangleExclamation />
        <div>
          <span>Are you sure want to cancel the oreder No: OR1213</span>
          <button>Proceed</button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
