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

const Product = () => {
  const { Products } = contextProvider();
  const initals = {
    shitsQuantity: 0,
    tshitsQuantity: 0,
    jeansQuantity: 0,
    trousersQuantity: 0,
    joggersQuantity: 0,
    boxersQuantity: 0,
    othersQuantity: 0,
  };

  const [Quantity, setQuantity] = useState(initals);
  const [ProdutsName, setProdutsName] = useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
    p5: "",
    p6: "",
    p7: "",
  });

  const [Price, setPrice] = useState();

  const handleChange = (e) => {
    setQuantity({ ...Quantity, [e.target.name]: e.target.value });
  };
  console.log(Products);
  return (
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
                <span>
                  Shirts <br />
                  Cotton shirt suitable for everyday wear
                </span>
              </div>
            </td>
            <td>
              <input
                type="number"
                onChange={handleChange}
                name="shitsQuantity"
              />
            </td>
            <td className="washType">
              <img src={washingMachine} alt="20/RS" />
              <img src={ironing} alt="" />
              <img src={towel} alt="" />
              <img src={bleach} alt="" />
            </td>
            <td>{Quantity.shitsQuantity}</td>
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
                name="jeansQuantity"
              />
            </td>
            <td className="washType">
              <img src={washingMachine} alt="20/RS" />
              <img src={ironing} alt="" />
              <img src={towel} alt="" />
              <img src={bleach} alt="" />
            </td>
            <td>{Quantity.jeansQuantity}</td>
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
                name="tshitsQuantity"
              />
            </td>
            <td className="washType">
              <img src={washingMachine} alt="20/RS" />
              <img src={ironing} alt="" />
              <img src={towel} alt="" />
              <img src={bleach} alt="" />
            </td>
            <td>{Quantity.tshitsQuantity}</td>
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
                name="boxersQuantity"
              />
            </td>
            <td className="washType">
              <img src={washingMachine} alt="20/RS" />
              <img src={ironing} alt="" />
              <img src={towel} alt="" />
              <img src={bleach} alt="" />
            </td>
            <td>{Quantity.boxersQuantity}</td>
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
                name="joggersQuantity"
              />
            </td>
            <td className="washType">
              <img src={washingMachine} alt="20/RS" />
              <img src={ironing} alt="" />
              <img src={towel} alt="" />
              <img src={bleach} alt="" />
            </td>
            <td>{Quantity.joggersQuantity}</td>
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
                name="trousersQuantity"
              />
            </td>
            <td className="washType">
              <img src={washingMachine} alt="20/RS" />
              <img src={ironing} alt="" />
              <img src={towel} alt="" />
              <img src={bleach} alt="" />
            </td>
            <td>{Quantity.trousersQuantity}</td>
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
                name="othersQuantity"
              />
            </td>
            <td className="washType">
              <img src={washingMachine} alt="20/RS" />
              <img src={ironing} alt="" />
              <img src={towel} alt="" />
              <img src={bleach} alt="" />
            </td>
            <td>
              {Quantity.othersQuantity} x {} = {}
            </td>
          </tr>
        </tbody>
      </table>

      <div className="btns">
        <button className="cancle">Cancle</button>

        <button className="proceed">Proceed</button>
      </div>
    </div>
  );
};

export default Product;
