import React, { useEffect, useState } from "react";
import './OrderSummery.css';
import tick from './tick.svg';

const OrderSummery = ({ orders }) => {
  //console.log(orders.length)
  const products = [];
  const product = [];
  const [address,setAddress] = useState("");
  const [phone,setPhone] = useState("");
  //const [userAddresses,setUserAddresses] = useState([]);
  //const [style,setStyle] = useState("summaryPage-container");

  for (let i = 0; i < orders.length; i++) {
    let temp = [];
    temp.push(orders[i].ProductName);
    temp.push(orders[i].Quantity);
    temp.push(orders[i].washType);
    temp.push(orders[i].initialAmount);
    temp.push(orders[i].Quantity*orders[i].initialAmount)
    products.push(temp);
  }
  products.filter(itemOrder => {
    if (!(itemOrder[0] === "")) {
      product.push(itemOrder)
    }
  })
  let subTotal = 0;
  let pickUpCharges = 0;

  for (let i = 0; i < product.length; i++) {
    subTotal+=product[i][4];
    pickUpCharges+=(product[i][1]*6)
  }

  // useEffect("",{
  //   method:"GET",
  //   headers:{
  //     'accept' : "application/json",
  //     'content-type' : "application/json"
  // },
  // body: JSON.stringify(
  //     data
  // )}).then(res => res.json())
  //       .then(setUserAddresses(res.address))
  
  
  //console.log(product)

  const handlelocationChange = (e) => {
    if(e.target.value === ""){
      setAddress("");
      setPhone("")
    }
    else if(e.target.value === "Gachibowli"){
      setAddress("Plot.No-11,Near AMB mall");
      setPhone("91 9923837113")
    }
    else if(e.target.value === "Kukatpally"){
      setAddress("Plot.No-45,Near JNTUH");
      setPhone("91 9923837143")
    }
    else if(e.target.value === "Dilsukhnagar"){
      setAddress("Plot.No-6,Near Bus stand");
      setPhone("91 9923837173")
    }
    else if(e.target.value === "Nampally"){
      setAddress("Plot.No-21,Near metro station");
      setPhone("91 9923837153")
    } 
  }
  
  return <div className="summaryPage-container">
    <div className="summary-title">
      <p className="title">Summary</p></div>
    <div className="summary-close">x</div>
    <div className="storeDetails-container">
      <select className="store-location" onChange={handlelocationChange}>
        <option id="none"></option>
        <option id="Gachibowli">Gachibowli</option>
        <option id="Kukatpally">Kukatpally</option>
        <option id="Dilsukhnagar">Dilsukhnagar</option>
        <option id="Nampally">Nampally</option>
      </select>
      <div className="store-address">
        <div className="storeAddress-title">Store Address:</div>
        <div className="address">
          {address}
        </div>
      </div>
      <div className="store-phone">
        <div className="storePhone-title">Phone:</div>
        <div className="phone">
          {phone}
        </div>
      </div>
    </div>
    <div className="ordersList-title">Order Details</div>
    <div className="summary-middle">
      <table className="order-list">
        <thead>
          <tr>
            <th className="head">Product</th>
            <th className="head">Wash-type</th>
            <th className="head">Quantity</th>
            <th className="head">Amount</th>
          </tr>
        </thead>
        <tbody>
          {product.map(itemOrder => {
            return <tr className="item-order">
              <td className="Product">{itemOrder[0]}</td>
              <td className="Wash-type">{itemOrder[2].map((type, i) => {
                if (i < itemOrder[2].length - 1) { return type + "," }
                else { return type }
              })}</td>
              <td className="Quantity">{itemOrder[1]} X {itemOrder[3]} =</td>
              <td className="Amount">{itemOrder[4]}</td>
            </tr>
          })
          }
          <tr className="item-order">
            <td className="Product"></td>
            <td className="Wash-type"></td>
            <td className="subTotal-label">Sub total:</td>
            <td className="sub-total">
              {subTotal}
            </td>
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
        <div id="1" className="userAddress">
          <img src={tick} />
        </div>
        <div id="2" className="userAddress">
          <img src={tick} />
        </div>
      </div>
    </div>
    <div className="summary-footer">
      <button className="confirm">Confirm</button>
    </div>
  </div>;
};

export default OrderSummery;
