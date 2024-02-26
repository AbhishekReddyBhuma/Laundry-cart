import React from "react";

const OrderSummery = ({ orders }) => {
  console.log(orders);
  return (
    <div>
      {orders.map((order) => (
        <>
          <div>{console.log(order)}</div>
        </>
      ))}
    </div>
  );
};

export default OrderSummery;
