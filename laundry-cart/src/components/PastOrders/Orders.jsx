import React, { useEffect, useState } from "react";
import { contextProvider } from "../../Context/Context";
import { format } from "date-fns";
const Orders = () => {
  const { PastOrders, FilterdPastOrder } = contextProvider();
  // const [Porders, setPorders] = useState([]);
  let fialPrice = 0;

  console.log(PastOrders);
  let pOrders = [];
  {
    PastOrders.map((order) => {
      let temOrder = [];
      temOrder.push(
        order.order,
        order.createdAt,
        order.storeLocation,
        order.storePhoneNumber,
        order.userAddress,
        order.storeCity,
        order._id,
        order.finalQuantity,
        order.status
      );
      pOrders.push(temOrder);
    });
  }

  console.log(...pOrders);
  let formatedDte = format(new Date(pOrders[1][1]), "dd MMM yyyy, HH:mm");
  console.log(formatedDte);

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Order Date & Time</th>
              <th>Store Location</th>
              <th>City</th>
              <th>Store Phone</th>
              <th>Total Items</th>
              <th>Price</th>
              <th>Status</th>
              <th></th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {pOrders.map((order, index) => (
              <tr key={index}>
                <td>{order[6]} </td>
                <td>{format(new Date(order[1]), "dd MMM yyyy, HH:mm")} </td>
                <td>{order[2]}</td>
                <td>{order[3]}</td>
                <td>{order[4]}</td>
                <td>{order[7]}</td>
                <td>{order[0][4]}</td>
                <td>
                  {order[0].map((price, index) => {
                    fialPrice += price[4];
                    if (order[0].length - 1 === index) {
                      return fialPrice;
                    }
                  })}
                </td>
                <td>{order[8]}</td>
                <td>
                  <button onClick={() => FilterdPastOrder(order[6])}>
                    view
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;
