import { createContext, useContext, useEffect, useState } from "react";

const ContextApi = createContext();

const Context = ({ children }) => {
  const [Products, setProducts] = useState([]);
  const fetchPoduct = async () => {
    const respose = await fetch("http://localhost:8080/api/fetchproducts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(await respose.json());
    const result = await respose.json();
    setProducts(result);
  };
  useEffect(() => {
    fetchPoduct();
  },[]);
  //   console.log(Products);

  return (
    <ContextApi.Provider value={{ Products }}>{children}</ContextApi.Provider>
  );
};

export const contextProvider = () => {
  return useContext(ContextApi);
};
export default Context;
