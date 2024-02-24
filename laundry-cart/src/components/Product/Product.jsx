import React, { useState } from "react";
import { contextProvider } from "../../Context/Context";
import washingMachine from "./washing-machine.png";
import ironing from "./ironing.png";
import bleach from "./bleach.png";
import towel from "./towel.png";
import shirts from "./shirts.jpg";
import tshirts from "./tshirts.jpg";
import jeans from "./jeans.jpg";
import jogers from "./jogers.jpg";
import boxers from "./boxers.jpg";
import trousers from "./trousers.jpg";
import others from "./others.jpg";
import "./product.css";

const Product = () => {
  const { Products } = contextProvider();
  const produts = [shirts, jeans, tshirts, boxers, jogers, trousers, others];
  const [Quantity, setQuantity] = useState();

  const handleChange = (e) => {
    setQuantity(e.target.value);
  };
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
          {Products.map((products) => (
            <tr key={products._id}>
              <td>
                {produts.map((img, index) => {
                  return <img className="pimg" src={img} alt="" key={index} />;
                })}
                {products.product_name} {products.description}
              </td>
              <td>
                <input type="number" value={0} onChange={handleChange} />
              </td>
              <td className="washType">
                <img src={washingMachine} alt="20/RS" />
                <img src={ironing} alt="" />
                <img src={towel} alt="" />
                <img src={bleach} alt="" />
              </td>
              <td></td>
            </tr>
          ))}
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
