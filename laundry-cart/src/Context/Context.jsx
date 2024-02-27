import { createContext, useContext, useEffect, useState } from "react";

const ContextApi = createContext();

const Context = ({ children }) => {
  const [Products, setProducts] = useState([]);
  // const [userAddresses,setUserAddresses] = useState([]);
  let userAddress = [];

  console.log(localStorage.getItem("token"));
  const fetchUserAddresses = async () => {
    const response = await fetch("http://localhost:8080/users/fetchaddress", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Token: localStorage.getItem("token"),
      },
    });
    const result = await response.json();
    console.log(result);
    // setUserAddresses(result)
    userAddress.push(result);
    console.log(userAddress);
  };

  const addNewAddress = async (address) => {
    const response = await fetch("http://localhost:8080/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Token: localStorage.getItem("token"),
      },
      body: JSON.stringify(address),
    });
    const result = await response.json();
    console.log(result);
  };

  const createNewOrdrer = async (order) => {
    const respose = await fetch("http://localhost:8080/orders/create/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Token: localStorage.getItem("token"),
      },
      body: JSON.stringify({ order }),
    });
    // console.log(await respose.json());
    const result = await respose.json();
    console.log(result);
  };
  const getAllPastOrders = async () => {
    const response = await fetch("http://localhost:8080/orders/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Token: localStorage.getItem("token"),
      },
    });
    const result = await response.json();
    console.log(result.pastOrders);
  };

  useEffect(() => {
    fetchUserAddresses();
    getAllPastOrders();
  }, []);

  return (
    <ContextApi.Provider
      value={{ Products, createNewOrdrer, userAddress, addNewAddress }}
    >
      {children}
    </ContextApi.Provider>
  );
};

export const contextProvider = () => {
  return useContext(ContextApi);
};
export default Context;
