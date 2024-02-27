import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Orders from "../components/PastOrders/Orders";

const OrdersPage = () => {
  return (
    <div>
      <Sidebar />
      <div>
        <Orders />
      </div>
    </div>
  );
};

export default OrdersPage;
