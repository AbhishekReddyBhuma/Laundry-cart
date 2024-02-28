import React, { useEffect, useState } from "react";
import { contextProvider } from "../../Context/Context";

const Orders = () => {
  const { pastOrders } = contextProvider();
  const [orders, setorders] = useState([]);

  console.log(pastOrders);

  return <div>hello from past orders</div>;
};

export default Orders;
