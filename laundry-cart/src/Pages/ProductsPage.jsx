import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import search from "./search.png";
import Product from "../components/Product/Product";
import { contextProvider } from "../Context/Context";
import { useNavigate } from "react-router-dom";

const ProductsPage = () => {
  const navigate = useNavigate();
  const {
    fetchAllAddresses,
    fetchUserAddresses,
    getAllPastOrders,
    PastOrders,
  } = contextProvider();
  const [display, setdisplay] = useState(true);
  const handleDisplay = () => {
    setdisplay(false);
  };
  useEffect(() => {
    fetchUserAddresses();
    fetchAllAddresses();
    getAllPastOrders();
  }, []);

  return (
    <div className="products">
      <Sidebar />
      <div className="top">
        <span>Orders | 0</span>

        <input type="search" />
        <img src={search} alt="" className="serch" />
      </div>
      <div id="middle">
        {display ? (
          <>
            <div className="middle">
              <span>No Orders avaialble</span>
              <button onClick={handleDisplay}>Create</button>
            </div>
          </>
        ) : (
          <>
            <div className="products">
              <Product />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
