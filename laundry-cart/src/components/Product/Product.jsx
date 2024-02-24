import React from "react";
import { contextProvider } from "../../Context/Context";
import washingMachine from "./washing-machine.png";
import ironing from "./ironing.png";
import bleach from "./bleach.png";
import towel from "./towel.png";
import "./product.css";

const Product = () => {
  const { Products } = contextProvider();

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
                {products.product_name} {products.description}
              </td>
              <td>
                <input type="number" value={0} />
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
