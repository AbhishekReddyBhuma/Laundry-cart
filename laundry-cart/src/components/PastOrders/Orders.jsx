import React, { useEffect, useState } from "react";
import { contextProvider } from "../../Context/Context";
import { format } from "date-fns";
import PastOrderSummary from "./PastOrderSummary";
import './orders.css'

const Orders = () => {
  const {FilterdPastOrder, PastOrders,  pastOrderSummaryToggle, setPastOrderSummaryToggle, viewOrder, setViewOrder} = contextProvider();
  let finalPrice;
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
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {pOrders.map((order, index) => {
              finalPrice=0;
              return(
              <tr key={index}>
                <td>{order[6]} </td>
                <td>{format(new Date(order[1]), "dd MMM yyyy, HH:mm")} </td>
                <td>{order[2]}</td>
                <td>{order[5]}</td>
                <td>{order[3]}</td>
                <td>{order[7]}</td>
                <td>
                  {order[0].map((price, index) => {
                    finalPrice += parseInt(price[4]);
                    if (order[0].length - 1 === index) {
                      return finalPrice;
                    }
                  })}
                </td>
                <td>{order[8]}</td>
                <td>
                  <button onClick={() => {
                    console.log(order[6])
                    FilterdPastOrder(order[6])
                    setPastOrderSummaryToggle(!pastOrderSummaryToggle);
                    }}>
                    view
                  </button>
                </td>
              </tr>
            )})}
          </tbody>
        </table>
        {pastOrderSummaryToggle && <PastOrderSummary/>}
      </div>
    </>
  );
};

export default Orders;
