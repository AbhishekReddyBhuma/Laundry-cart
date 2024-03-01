import React, { useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { contextProvider } from "../Context/Context";
const Protected = (props) => {
  const { Components } = props;
  const { getAllPastOrders, PastOrders } = contextProvider;

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    }
  });
  return (
    <div>
      <Components />
    </div>
  );
};

export default Protected;
