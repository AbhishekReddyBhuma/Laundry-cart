import { createContext, useContext, useEffect, useState } from "react";

const ContextApi = createContext();

const Context = ({ children }) => {
  const [Products, setProducts] = useState([]);
  const [summaryToggle, setSummaryToggle] = useState(false);
  const [OrderConfimation, setOrderConfimation] = useState(false);

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
    userAddress.push(result.address);

    console.log(userAddress);
  };

  const fetchAllAddresses = async () => {
    const response = await fetch("http://localhost:8080/api/getaddress", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Token: localStorage.getItem("token"),
      },
    });
    const result = await response.json();
    // setUserAddresses(result)
    for (let i = 0; i < result.length; i++) {
      userAddress.push(result[i].address);
    }

    console.log(userAddress);
    console.log("hello ");
  };

  const addNewAddress = async (address) => {
    const response = await fetch("http://localhost:8080/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Token: localStorage.getItem("token"),
      },
      body: JSON.stringify({ address }),
    });
    const result = await response.json();
  };

  const createNewOrder = async (
    product,
    address,
    city,
    phone,
    selectAddress
  ) => {
    const respose = await fetch("http://localhost:8080/orders/create/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Token: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        order: product,
        storeLocation: address,
        storeCity: city,
        storePhoneNumber: phone,
        userAddress: selectAddress,
      }),
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
    const finalResult = result.pastOrders;
    console.log(finalResult);
    Products.push(...finalResult);
    for (let i = 0; i < Products.length; i++) {
      pastOrders.push(Products[i].order);
    }
  };

  useEffect(() => {
    fetchUserAddresses();
    fetchAllAddresses();
  }, []);

  return (
    <ContextApi.Provider
      value={{
        Products,
        createNewOrder,
        userAddress,
        addNewAddress,
        fetchAllAddresses,
        fetchUserAddresses,
        OrderConfimation,
        setOrderConfimation,
        summaryToggle,
        setSummaryToggle,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};

export const contextProvider = () => {
  return useContext(ContextApi);
};
export default Context;
