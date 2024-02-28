import React, { useState } from "react";
import { contextProvider } from "../../Context/Context";
import washingMachine from "./washing-machine.png";
import ironing from "./ironing.png";
import bleach from "./bleach.png";
import towel from "./towel.png";
import shirts from "./images/shirts.jpg";
import tshirts from "./images/tshirts.jpg";
import jeans from "./images/jeans.jpg";
import jogers from "./images/jogers.jpg";
import boxers from "./images/boxers.jpg";
import trousers from "./images/trousers.jpg";
import others from "./images/others.jpg";

import "./product.css";
import OrderSummery from "../OrderSummery/OrderSummery";
import { Outlet } from "react-router-dom";
import OrderConfirm from "../orderConfirm/OrderConfirm";

const Product = () => {
  const {
    userAddress,
    createNewOrder,
    fetchAllAddresses,
    fetchUserAddresses,
    OrderConfimation,
    summaryToggle,
    setSummaryToggle,
  } = contextProvider();
  const initals = {
    shirtsQuantity: 0,
    tshirtsQuantity: 0,
    jeansQuantity: 0,
    trousersQuantity: 0,
    joggersQuantity: 0,
    boxersQuantity: 0,
    othersQuantity: 0,
  };

  const [Orders, setOrders] = useState([]);
  // order should have objects to store { product name quantity {wash-type with price} and final price}
  const [shirtsOrder, setshirtsOrder] = useState({
    ProductName: "",
    Quantity: 0,
    washType: [],
    initialAmount: 0,
  });

  const [TshirtsOrder, setTshirtsOrder] = useState({
    ProductName: "",
    Quantity: 0,
    washType: [],
    initialAmount: 0,
  });
  const [jeansOrder, setjeansOrder] = useState({
    ProductName: "",
    Quantity: 0,
    washType: [],
    initialAmount: 0,
  });
  const [trousersOrder, settrousersOrder] = useState({
    ProductName: "",
    Quantity: 0,
    washType: [],
    initialAmount: 0,
  });
  const [boxersOrder, setboxersOrder] = useState({
    ProductName: "",
    Quantity: 0,
    washType: [],
    initialAmount: 0,
  });
  const [othersOrder, setothersOrder] = useState({
    ProductName: "",
    Quantity: 0,
    washType: [],
    initialAmount: 0,
  });
  const [jogersOrder, setjogersOrder] = useState({
    ProductName: "",
    Quantity: 0,
    washType: [],
    initialAmount: 0,
  });

  const handleChange = (e) => {
    if (e.target.name === "Shirts") {
      setshirtsOrder({
        ...shirtsOrder,
        ProductName: e.target.name,
        Quantity: e.target.value,
      });
    } else if (e.target.name === "Tshirts") {
      setTshirtsOrder({
        ...TshirtsOrder,
        ProductName: e.target.name,
        Quantity: e.target.value,
      });
    } else if (e.target.name === "Jeans") {
      setjeansOrder({
        ...jeansOrder,
        ProductName: e.target.name,
        Quantity: e.target.value,
      });
    } else if (e.target.name === "Boxers") {
      setboxersOrder({
        ...boxersOrder,
        ProductName: e.target.name,
        Quantity: e.target.value,
      });
    } else if (e.target.name === "Trousers") {
      settrousersOrder({
        ...trousersOrder,
        ProductName: e.target.name,
        Quantity: e.target.value,
      });
    } else if (e.target.name === "Joggers") {
      setjogersOrder({
        ...jogersOrder,
        ProductName: e.target.name,
        Quantity: e.target.value,
      });
    } else if (e.target.name === "Others") {
      setothersOrder({
        ...othersOrder,
        ProductName: e.target.name,
        Quantity: e.target.value,
      });
    }
  };

  const handleProceed = () => {
    setOrders([
      shirtsOrder,
      TshirtsOrder,
      jeansOrder,
      trousersOrder,
      boxersOrder,
      othersOrder,
      jogersOrder,
    ]);
    setSummaryToggle(!summaryToggle);
    fetchAllAddresses();
    fetchUserAddresses();
  };
  console.log(summaryToggle);
  const handleClick = (e) => {
    if (e.target.name === "Shirts") {
      setshirtsOrder({
        ...shirtsOrder,
        washType: [...shirtsOrder.washType, e.target.id],
        initialAmount: shirtsOrder.initialAmount + parseInt(e.target.alt),
      });
    } else if (e.target.name === "Tshirts") {
      setTshirtsOrder({
        ...TshirtsOrder,
        washType: [...TshirtsOrder.washType, e.target.id],
        initialAmount: TshirtsOrder.initialAmount + parseInt(e.target.alt),
      });
    } else if (e.target.name === "Jeans") {
      setjeansOrder({
        ...jeansOrder,
        washType: [...jeansOrder.washType, e.target.id],
        initialAmount: jeansOrder.initialAmount + parseInt(e.target.alt),
      });
    } else if (e.target.name === "Joggers") {
      setjogersOrder({
        ...jogersOrder,
        washType: [...jogersOrder.washType, e.target.id],
        initialAmount: jogersOrder.initialAmount + parseInt(e.target.alt),
      });
    } else if (e.target.name === "Trousers") {
      settrousersOrder({
        ...trousersOrder,
        washType: [...trousersOrder.washType, e.target.id],
        initialAmount: trousersOrder.initialAmount + parseInt(e.target.alt),
      });
    } else if (e.target.name === "Boxers") {
      setboxersOrder({
        ...boxersOrder,
        washType: [...boxersOrder.washType, e.target.id],
        initialAmount: boxersOrder.initialAmount + parseInt(e.target.alt),
      });
    } else if (e.target.name === "Others") {
      setothersOrder({
        ...othersOrder,
        washType: [...othersOrder.washType, e.target.id],
        initialAmount: othersOrder.initialAmount + parseInt(e.target.alt),
      });
    }
  };

  const handleReset = (e) => {
    if (e.target.name === "Others") {
      setothersOrder({
        ProductName: "",
        Quantity: 0,
        washType: [],
        initialAmount: 0,
      });
    } else if (e.target.name === "Shirts") {
      setshirtsOrder({
        ProductName: "",
        Quantity: 0,
        washType: [],
        initialAmount: 0,
      });
    } else if (e.target.name === "Tshirts") {
      setTshirtsOrder({
        ProductName: "",
        Quantity: 0,
        washType: [],
        initialAmount: 0,
      });
    } else if (e.target.name === "Trousers") {
      settrousersOrder({
        ProductName: "",
        Quantity: 0,
        washType: [],
        initialAmount: 0,
      });
    } else if (e.target.name === "Boxers") {
      setboxersOrder({
        ProductName: "",
        Quantity: 0,
        washType: [],
        initialAmount: 0,
      });
    } else if (e.target.name === "Joggers") {
      setjogersOrder({
        ProductName: "",
        Quantity: 0,
        washType: [],
        initialAmount: 0,
      });
    } else if (e.target.name === "Jeans") {
      setjeansOrder({
        ProductName: "",
        Quantity: 0,
        washType: [],
        initialAmount: 0,
      });
    }
  };

  return (
    <div>
      {summaryToggle && (
        <OrderSummery
          orders={Orders}
          summaryToggle={summaryToggle}
          setSummaryToggle={setSummaryToggle}
        />
      )}
      {OrderConfimation && <OrderConfirm />}
      <Outlet />
      <div id="products">
        <table>
          <thead>
            <tr>
              <th>Produt Types</th>
              <th>Quantity</th>
              <th>Wash Type</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div style={{ display: "flex", gap: "10px" }}>
                  <img className="pimg" src={shirts} alt="" />
                  <span name="Shirts">
                    Shirts <br />
                    Cotton shirt suitable for everyday wear
                  </span>
                </div>
              </td>
              <td>
                <input
                  type="number"
                  onChange={handleChange}
                  name="Shirts"
                  value={shirtsOrder.Quantity}
                />
              </td>
              <td className="washType">
                <img
                  src={washingMachine}
                  alt="30"
                  name="Shirts"
                  id="Washing"
                  onClick={handleClick}
                />
                <img
                  src={ironing}
                  alt="10"
                  id="Ironing"
                  name="Shirts"
                  onClick={handleClick}
                />
                <img
                  src={towel}
                  alt="20"
                  id="Towel"
                  name="Shirts"
                  onClick={handleClick}
                />
                <img
                  src={bleach}
                  alt="15"
                  id="Bleach"
                  name="Shirts"
                  onClick={handleClick}
                />
              </td>
              <td>
                {shirtsOrder.Quantity} X {shirtsOrder.initialAmount}=
                {shirtsOrder.Quantity * shirtsOrder.initialAmount}
                <button name="Shirts" onClick={handleReset}>
                  Reset
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div style={{ display: "flex", gap: "10px" }}>
                  <img className="pimg" src={jeans} alt="" />
                  <span>
                    Jeans <br />
                    Denim jeans for casual attire
                  </span>
                </div>
              </td>
              <td>
                <input
                  type="number"
                  onChange={handleChange}
                  name="Jeans"
                  value={jeansOrder.Quantity}
                />
              </td>
              <td className="washType">
                <img
                  src={washingMachine}
                  alt="30"
                  name="Jeans"
                  id="Washing"
                  onClick={handleClick}
                />
                <img
                  src={ironing}
                  alt="10"
                  id="Ironing"
                  name="Jeans"
                  onClick={handleClick}
                />
                <img
                  src={towel}
                  alt="20"
                  id="Towel"
                  name="Jeans"
                  onClick={handleClick}
                />
                <img
                  src={bleach}
                  alt="15"
                  id="Bleach"
                  name="Jeans"
                  onClick={handleClick}
                />
              </td>
              <td>
                {jeansOrder.Quantity} X {jeansOrder.initialAmount}=
                {jeansOrder.Quantity * jeansOrder.initialAmount}
                <button name="Jeans" onClick={handleReset}>
                  Reset
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div style={{ display: "flex", gap: "10px" }}>
                  <img className="pimg" src={tshirts} alt="" />
                  <span>
                    T-Shirts <br />
                    Casual daily wear
                  </span>
                </div>
              </td>
              <td>
                <input
                  type="number"
                  onChange={handleChange}
                  name="Tshirts"
                  value={TshirtsOrder.Quantity}
                />
              </td>
              <td className="washType">
                <img
                  src={washingMachine}
                  alt="30"
                  name="Tshirts"
                  id="Washing"
                  onClick={handleClick}
                />
                <img
                  src={ironing}
                  alt="10"
                  id="Ironing"
                  name="Tshirts"
                  onClick={handleClick}
                />
                <img
                  src={towel}
                  alt="20"
                  id="Towel"
                  name="Tshirts"
                  onClick={handleClick}
                />
                <img
                  src={bleach}
                  alt="15"
                  id="Bleach"
                  name="Tshirts"
                  onClick={handleClick}
                />
              </td>
              <td>
                {TshirtsOrder.Quantity} X {TshirtsOrder.initialAmount}=
                {TshirtsOrder.Quantity * TshirtsOrder.initialAmount}
                <button name="Tshirts" onClick={handleReset}>
                  Reset
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div style={{ display: "flex", gap: "10px" }}>
                  <img className="pimg" src={boxers} alt="" />
                  <span>
                    Boxers <br />
                    Comfort attire
                  </span>
                </div>
              </td>
              <td>
                <input
                  type="number"
                  onChange={handleChange}
                  name="Boxers"
                  value={boxersOrder.Quantity}
                />
              </td>
              <td className="washType">
                <img
                  src={washingMachine}
                  alt="30"
                  name="Boxers"
                  id="Washing"
                  onClick={handleClick}
                />
                <img
                  src={ironing}
                  alt="10"
                  id="Ironing"
                  name="Boxers"
                  onClick={handleClick}
                />
                <img
                  src={towel}
                  alt="20"
                  id="Towel"
                  name="Boxers"
                  onClick={handleClick}
                />
                <img
                  src={bleach}
                  alt="15"
                  id="Bleach"
                  name="Boxers"
                  onClick={handleClick}
                />
              </td>
              <td>
                {boxersOrder.Quantity} X {boxersOrder.initialAmount}=
                {boxersOrder.Quantity * boxersOrder.initialAmount}
                <button name="Boxers" onClick={handleReset}>
                  Reste
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div style={{ display: "flex", gap: "10px" }}>
                  <img className="pimg" src={jogers} alt="" />
                  <span>
                    Joggers <br />
                    Athleisure bottom
                  </span>
                </div>
              </td>
              <td>
                <input
                  type="number"
                  onChange={handleChange}
                  name="Joggers"
                  value={jogersOrder.Quantity}
                />
              </td>
              <td className="washType">
                <img
                  src={washingMachine}
                  alt="30"
                  name="Joggers"
                  id="Washing"
                  onClick={handleClick}
                />
                <img
                  src={ironing}
                  alt="10"
                  id="Ironing"
                  name="Joggers"
                  onClick={handleClick}
                />
                <img
                  src={towel}
                  alt="20"
                  id="Towel"
                  name="Joggers"
                  onClick={handleClick}
                />
                <img
                  src={bleach}
                  alt="15"
                  id="Bleach"
                  name="Joggers"
                  onClick={handleClick}
                />
              </td>
              <td>
                {jogersOrder.Quantity} X {jogersOrder.initialAmount}=
                {jogersOrder.Quantity * jogersOrder.initialAmount}
                <button name="Joggers" onClick={handleReset}>
                  Reset
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div style={{ display: "flex", gap: "10px" }}>
                  <img className="pimg" src={trousers} alt="" />
                  <span>
                    Trousers <br />
                    Casual bottoms for shirts
                  </span>
                </div>
              </td>
              <td>
                <input
                  type="number"
                  onChange={handleChange}
                  name="Trousers"
                  value={trousersOrder.Quantity}
                />
              </td>
              <td className="washType">
                <img
                  src={washingMachine}
                  alt="30"
                  name="Trousers"
                  id="Washing"
                  onClick={handleClick}
                />
                <img
                  src={ironing}
                  alt="10"
                  id="Ironing"
                  name="Trousers"
                  onClick={handleClick}
                />
                <img
                  src={towel}
                  alt="20"
                  id="Towel"
                  name="Trousers"
                  onClick={handleClick}
                />
                <img
                  src={bleach}
                  alt="15"
                  id="Bleach"
                  name="Trousers"
                  onClick={handleClick}
                />
              </td>
              <td>
                {trousersOrder.Quantity} X {trousersOrder.initialAmount}=
                {trousersOrder.Quantity * trousersOrder.initialAmount}
                <button name="Trousers" onClick={handleReset}>
                  Reset
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div style={{ display: "flex", gap: "10px" }}>
                  <img className="pimg" src={others} alt="" />
                  <span>
                    Others <br />
                    Something else
                  </span>
                </div>
              </td>
              <td>
                <input
                  type="number"
                  onChange={handleChange}
                  name="Others"
                  value={othersOrder.Quantity}
                />
              </td>
              <td className="washType">
                <img
                  src={washingMachine}
                  alt="30"
                  name="Others"
                  id="Washing"
                  onClick={handleClick}
                />
                <img
                  src={ironing}
                  alt="10"
                  id="Ironing"
                  name="Others"
                  onClick={handleClick}
                />
                <img
                  src={towel}
                  alt="20"
                  id="Towel"
                  name="Others"
                  onClick={handleClick}
                />
                <img
                  src={bleach}
                  alt="15"
                  id="Bleach"
                  name="Others"
                  onClick={handleClick}
                />
              </td>
              <td>
                {othersOrder.Quantity} X {othersOrder.initialAmount}=
                {othersOrder.Quantity * othersOrder.initialAmount}
                <button name="Others" onClick={handleReset}>
                  Reset
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="btns">
          <button className="cancle">Cancel</button>
          <button className="proceed" onClick={handleProceed}>
            Proceed
          </button>
        </div>
        {summaryToggle && <div className="hidden"></div>}
      </div>
    </div>
  );
};

export default Product;
