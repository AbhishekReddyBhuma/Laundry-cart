import React, { useEffect, useState } from "react";
import { contextProvider } from "../../Context/Context";
import "./PastOrderSummary.css";
import Alert from "../Alert/Alert";

const PastOrderSummary = () => {
  const {
    pastOrderSummaryToggle,
    setPastOrderSummaryToggle,
    viewOrder,
    cancelToggle,
    setCanceltoggle,
  } = contextProvider();

  const product = viewOrder.order;

  let subTotal = 0;
  let pickUpCharges = 0;

  for (let i = 0; i < product.length; i++) {
    subTotal += product[i][4];
    pickUpCharges += product[i][1] * 6;
  }

  return (
    <div className="pastOrdersummary-container">
      <div className="pastOrderSummary-title">
        <p className="pos-title">Summary</p>
      </div>
      <div
        className="pastOrderSummary-close"
        onClick={() => setPastOrderSummaryToggle(!pastOrderSummaryToggle)}
      >
        x
      </div>
      <div className="storeDetails-container">
        <div className="store-location">{viewOrder.storeLocation}</div>
        <div className="store-address">
          <div className="storeAddress-title">Store Address:</div>
          <div className="address">{viewOrder.storeAddress}</div>
        </div>
        <div className="store-phone">
          <div className="storePhone-title">Phone:</div>
          <div className="phone">{viewOrder.storePhoneNumber}</div>
        </div>
      </div>
      <div className="pastOrdersList-title">Order Details</div>
      <div className="pastOrderSummary-middle">
        <table className="pastOrderSummary-list">
          <thead>
            <tr>
              <th className="head">Product</th>
              <th className="head">Wash-type</th>
              <th className="head">Quantity</th>
              <th className="head">Amount</th>
            </tr>
          </thead>
          <tbody>
            {product.map((itemOrder, id) => {
              return (
                <tr className="item-order" key={id}>
                  <td className="Product">{itemOrder[0]}</td>
                  <td className="Wash-type">
                    {itemOrder[2].map((type, i) => {
                      if (i < itemOrder[2].length - 1) {
                        return type + ",";
                      } else {
                        return type;
                      }
                    })}
                  </td>
                  <td className="Quantity">
                    {itemOrder[1]} X {itemOrder[3]} =
                  </td>
                  <td className="Amount">{itemOrder[4]}</td>
                </tr>
              );
            })}
            <tr className="item-order">
              <td className="Product"></td>
              <td className="Wash-type"></td>
              <td className="subTotal-label">Sub total:</td>
              <td className="sub-total">{subTotal}</td>
            </tr>
            <tr className="item-order">
              <td className="Product"></td>
              <td className="Wash-type"></td>
              <td className="pickUpCharges-label">Pickup Charges:</td>
              <td className="pickup-charges">{pickUpCharges}</td>
            </tr>
            <tr className="total-container">
              <td className="Product"></td>
              <td className="Wash-type"></td>
              <td className="total-label">Total:</td>
              <td className="total">Rs.{subTotal + pickUpCharges}</td>
            </tr>
          </tbody>
        </table>

        <div className="userAddresses">
          <div className="userAddress-label">Address</div>
          <div className="addresses-container">
            <div className="userAddress">
              <div className="user-address">{viewOrder.userAddress}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="pastOrderSummary-footer">
        <button
          className="cancel-order"
          onClick={() => {
            setCanceltoggle(!cancelToggle);
            setPastOrderSummaryToggle(!pastOrderSummaryToggle);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PastOrderSummary;
