import { createContext, useContext, useEffect, useState } from "react";

const ContextApi = createContext();

const Context = ({ children }) => {
  const [Products, setProducts] = useState([]);

  const fetchPoduct = async (order) => {
    console.log(order);
    const respose = await fetch("http://localhost:8080/orders/create/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Token: localStorage.getItem("token"),
      },
      body: JSON.stringify(order),
    });
    // console.log(await respose.json());
    const result = await respose.json();
    console.log(result);
  };
  // useEffect(() => {
  //   fetchPoduct();
  // }, []);
  // console.log(Products);

  return (
    <ContextApi.Provider value={{ Products, fetchPoduct }}>
      {children}
    </ContextApi.Provider>
  );
};

export const contextProvider = () => {
  return useContext(ContextApi);
};
export default Context;
