import React from "react";
import { contextProvider } from "../../Context/Context";

const Product = () => {
  const { Products } = contextProvider();
  console.log(Products);
  return (
    <div>
      {Products.map((products) => (
        <h2>{products.description}</h2>
      ))}
    </div>
  );
};

export default Product;
