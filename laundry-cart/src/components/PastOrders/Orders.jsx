import React, { useEffect, useState } from "react";
import { contextProvider } from "../../Context/Context";

const Orders = () => {
  const { pastOrders } = contextProvider();
  const [orders, setorders] = useState([]);

  console.log(pastOrders);
  let order = [];
  order.push(...pastOrders);
  const setorder = () => {
    for (let i = 0; i < pastOrders.length; i++) {
      setorders(pastOrders[i]);
    }
  };
  useEffect(() => {
    setorder();
  }, []);
  console.log(orders);

  return <div>hello from past orders</div>;
};

export default Orders;
