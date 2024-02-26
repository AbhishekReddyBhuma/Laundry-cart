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

const Product = () => {
  const { fetchPoduct } = contextProvider();
  const initals = {
    shirtsQuantity: 0,
    tshirtsQuantity: 0,
    jeansQuantity: 0,
    trousersQuantity: 0,
    joggersQuantity: 0,
    boxersQuantity: 0,
    othersQuantity: 0,
  };
  const [ProductName, setProductName] = useState("");

  const [Quantity, setQuantity] = useState(initals);

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
    if (e.target.name === "shirts") {
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
    } else if (e.target.name === "jeans") {
      setjeansOrder({
        ...jeansOrder,
        ProductName: e.target.name,
        Quantity: e.target.value,
      });
    } else if (e.target.name === "boxers") {
      setboxersOrder({
        ...boxersOrder,
        ProductName: e.target.name,
        Quantity: e.target.value,
      });
    } else if (e.target.name === "trousers") {
      settrousersOrder({
        ...trousersOrder,
        ProductName: e.target.name,
        Quantity: e.target.value,
      });
    } else if (e.target.name === "joggers") {
      setjogersOrder({
        ...jogersOrder,
        ProductName: e.target.name,
        Quantity: e.target.value,
      });
    } else if (e.target.name === "others") {
      setothersOrder({
        ...othersOrder,
        ProductName: e.target.name,
        Quantity: e.target.value,
      });
    }
  };
  console.log(shirtsOrder);

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
    fetchPoduct(Orders);
  };
  console.log(Orders);
  const handleClick = (e) => {
    console.log(e.target.id);

    if (e.target.name === "shirts") {
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
    } else if (e.target.name === "jeans") {
      setjeansOrder({
        ...jeansOrder,
        washType: [...jeansOrder.washType, e.target.id],
        initialAmount: jeansOrder.initialAmount + parseInt(e.target.alt),
      });
    } else if (e.target.name === "joggers") {
      setjogersOrder({
        ...jogersOrder,
        washType: [...jogersOrder.washType, e.target.id],
        initialAmount: jogersOrder.initialAmount + parseInt(e.target.alt),
      });
    } else if (e.target.name === "trousers") {
      settrousersOrder({
        ...trousersOrder,
        washType: [...trousersOrder.washType, e.target.id],
        initialAmount: trousersOrder.initialAmount + parseInt(e.target.alt),
      });
    } else if (e.target.name === "boxers") {
      setboxersOrder({
        ...boxersOrder,
        washType: [...boxersOrder.washType, e.target.id],
        initialAmount: boxersOrder.initialAmount + parseInt(e.target.alt),
      });
    } else if (e.target.name === "others") {
      setothersOrder({
        ...othersOrder,
        washType: [...othersOrder.washType, e.target.id],
        initialAmount: othersOrder.initialAmount + parseInt(e.target.alt),
      });
    }
  };
  console.log(Orders);

  const handleReset = (e) => {
    if (e.target.name === "others") {
      setothersOrder({
        ProductName: "",
        Quantity: 0,
        washType: [],
        initialAmount: 0,
      });
    } else if (e.target.name === "shirts") {
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
    } else if (e.target.name === "trousers") {
      settrousersOrder({
        ProductName: "",
        Quantity: 0,
        washType: [],
        initialAmount: 0,
      });
    } else if (e.target.name === "boxers") {
      setboxersOrder({
        ProductName: "",
        Quantity: 0,
        washType: [],
        initialAmount: 0,
      });
    } else if (e.target.name === "joggers") {
      setjogersOrder({
        ProductName: "",
        Quantity: 0,
        washType: [],
        initialAmount: 0,
      });
    } else if (e.target.name === "jeans") {
      setjeansOrder({
        ProductName: "",
        Quantity: 0,
        washType: [],
        initialAmount: 0,
      });
    }
  };

  return (
    <div id="products">
      <OrderSummery orders={Orders} />
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
                <span name="shirts">
                  Shirts <br />
                  Cotton shirt suitable for everyday wear
                </span>
              </div>
            </td>
            <td>
              <input
                type="number"
                onChange={handleChange}
                name="shirts"
                value={shirtsOrder.Quantity}
              />
            </td>
            <td className="washType">
              <img
                src={washingMachine}
                alt="30"
                name="shirts"
                id="washing"
                onClick={handleClick}
              />
              <img
                src={ironing}
                alt="10"
                id="ironing"
                name="shirts"
                onClick={handleClick}
              />
              <img
                src={towel}
                alt="20"
                id="towel"
                name="shirts"
                onClick={handleClick}
              />
              <img
                src={bleach}
                alt="15/RS"
                id="bleach"
                name="shirts"
                onClick={handleClick}
              />
            </td>
            <td>
              <div className="resetbtn">
                <span>
                  {shirtsOrder.Quantity} X {shirtsOrder.initialAmount}=
                  {shirtsOrder.Quantity * shirtsOrder.initialAmount}
                </span>
                <button name="shirts" onClick={handleReset}>
                  Reset
                </button>
              </div>
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
                name="jeans"
                value={jeansOrder.Quantity}
              />
            </td>
            <td className="washType">
              <img
                src={washingMachine}
                alt="30"
                name="jeans"
                id="washing"
                onClick={handleClick}
              />
              <img
                src={ironing}
                alt="10"
                id="ironing"
                name="jeans"
                onClick={handleClick}
              />
              <img
                src={towel}
                alt="20"
                id="towel"
                name="jeans"
                onClick={handleClick}
              />
              <img
                src={bleach}
                alt="15"
                id="bleach"
                name="jeans"
                onClick={handleClick}
              />
            </td>
            <td>
              <div className="resetbtn">
                <span>
                  {jeansOrder.Quantity} X {jeansOrder.initialAmount}=
                  {jeansOrder.Quantity * jeansOrder.initialAmount}
                </span>
                <button name="jeans" onClick={handleReset}>
                  Reset
                </button>
              </div>
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
                id="washing"
                onClick={handleClick}
              />
              <img
                src={ironing}
                alt="10"
                id="ironing"
                name="Tshirts"
                onClick={handleClick}
              />
              <img
                src={towel}
                alt="20"
                id="towel"
                name="Tshirts"
                onClick={handleClick}
              />
              <img
                src={bleach}
                alt="15"
                id="bleach"
                name="Tshirts"
                onClick={handleClick}
              />
            </td>
            <td>
              <div className="resetbtn">
                <span>
                  {TshirtsOrder.Quantity} X {TshirtsOrder.initialAmount}=
                  {TshirtsOrder.Quantity * TshirtsOrder.initialAmount}
                </span>
                <button name="jeans" onClick={handleReset}>
                  Reset
                </button>
              </div>
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
                name="boxers"
                value={boxersOrder.Quantity}
              />
            </td>
            <td className="washType">
              <img
                src={washingMachine}
                alt="30"
                name="boxers"
                id="washing"
                onClick={handleClick}
              />
              <img
                src={ironing}
                alt="10"
                id="ironing"
                name="boxers"
                onClick={handleClick}
              />
              <img
                src={towel}
                alt="20"
                id="towel"
                name="boxers"
                onClick={handleClick}
              />
              <img
                src={bleach}
                alt="15/RS"
                id="bleach"
                name="boxers"
                onClick={handleClick}
              />
            </td>
            <td>
              <div className="resetbtn">
                <span>
                  {boxersOrder.Quantity} X {boxersOrder.initialAmount}=
                  {boxersOrder.Quantity * boxersOrder.initialAmount}
                </span>
                <button name="jeans" onClick={handleReset}>
                  Reset
                </button>
              </div>
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
                name="joggers"
                value={jogersOrder.Quantity}
              />
            </td>
            <td className="washType">
              <img
                src={washingMachine}
                alt="30"
                name="joggers"
                id="washing"
                onClick={handleClick}
              />
              <img
                src={ironing}
                alt="10"
                id="ironing"
                name="joggers"
                onClick={handleClick}
              />
              <img
                src={towel}
                alt="20"
                id="towel"
                name="joggers"
                onClick={handleClick}
              />
              <img
                src={bleach}
                alt="15/RS"
                id="bleach"
                name="joggers"
                onClick={handleClick}
              />
            </td>
            <td>
              <div className="resetbtn">
                <span>
                  {jogersOrder.Quantity} X {jogersOrder.initialAmount}=
                  {jogersOrder.Quantity * jogersOrder.initialAmount}
                </span>
                <button name="jeans" onClick={handleReset}>
                  Reset
                </button>
              </div>
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
                name="trousers"
                value={trousersOrder.Quantity}
              />
            </td>
            <td className="washType">
              <img
                src={washingMachine}
                alt="30"
                name="trousers"
                id="washing"
                onClick={handleClick}
              />
              <img
                src={ironing}
                alt="10"
                id="ironing"
                name="trousers"
                onClick={handleClick}
              />
              <img
                src={towel}
                alt="20"
                id="towel"
                name="trousers"
                onClick={handleClick}
              />
              <img
                src={bleach}
                alt="15"
                id="bleach"
                name="trousers"
                onClick={handleClick}
              />
            </td>
            <td>
              <div className="resetbtn">
                <span>
                  {trousersOrder.Quantity} X {trousersOrder.initialAmount}=
                  {trousersOrder.Quantity * trousersOrder.initialAmount}
                </span>
                <button name="jeans" onClick={handleReset}>
                  Reset
                </button>
              </div>
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
                name="others"
                value={othersOrder.Quantity}
              />
            </td>
            <td className="washType">
              <img
                src={washingMachine}
                alt="30"
                name="others"
                id="washing"
                onClick={handleClick}
              />
              <img
                src={ironing}
                alt="10"
                id="ironing"
                name="others"
                onClick={handleClick}
              />
              <img
                src={towel}
                alt="20"
                id="towel"
                name="others"
                onClick={handleClick}
              />
              <img
                src={bleach}
                alt="15"
                id="bleach"
                name="others"
                onClick={handleClick}
              />
            </td>
            <td>
              <div className="resetbtn">
                <span>
                  {othersOrder.Quantity} X {othersOrder.initialAmount}=
                  {othersOrder.Quantity * othersOrder.initialAmount}
                </span>
                <button name="jeans" onClick={handleReset}>
                  Reset
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="btns">
        <button className="cancle">Cancle</button>

        <button className="proceed" onClick={handleProceed}>
          Proceed
        </button>
      </div>
    </div>
  );
};

export default Product;
