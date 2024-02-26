import React, { useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";

const Protected = (props) => {
  const { Components } = props;
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
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
