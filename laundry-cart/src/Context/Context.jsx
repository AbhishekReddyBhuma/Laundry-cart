import { createContext, useContext, useEffect, useState } from "react";

const ContextApi = createContext();

const Context = ({ children }) => {
  const [PastOrders, setPastOrders] = useState([]);
  const [summaryToggle, setSummaryToggle] = useState(false);
  const [pastOrderSummaryToggle,setPastOrderSummaryToggle] = useState(false);
  // const [viewOrder,setViewOrder] = useState({});
  const [OrderConfimation, setOrderConfimation] = useState(false);
  const [cancelToggle,setCanceltoggle] = useState(false);
  const [Id,setId] = useState("");
  let userAddress = [];

  // console.log(localStorage.getItem("token"));

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

    // console.log(userAddress);
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

    // console.log(userAddress);
    // console.log("hello ");
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
    storeLocation,
    address,
    city,
    phone,
    selectAddress,
    finalQuantity
  ) => {
    const respose = await fetch("http://localhost:8080/orders/create/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Token: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        order: product,
        storeLocation: storeLocation,
        storeAddress:address,
        storeCity: city,
        storePhoneNumber: phone,
        userAddress: selectAddress,
        finalQuantity,
      }),
    });
    // console.log(await respose.json());
    const result = await respose.json();
    // console.log(result);
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
    setPastOrders([...finalResult]);
  };
  // console.log(PastOrders);

  // const FilteredPastOrder = async (id) => {
  //   // console.log(id)
  //   const response = await fetch(`http://localhost:8080/orders/${id}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Token: localStorage.getItem("token"),
  //     },
  //   });
  //   const result = await response.json();
  //   // setViewOrder(result);
  // };



  const cancelPastOrder = async (id) => {
    // console.log(id)
    const response = await fetch(`http://localhost:8080/orders/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Token: localStorage.getItem("token"),
      },
      body:JSON.stringify({
        status : "Cancelled"
      })
    });
    const result = await response.json();
    console.log(result);
    getAllPastOrders();
  };

  useEffect(() => {
    // fetchUserAddresses();
    // fetchAllAddresses();
    getAllPastOrders();
    // FilterdPastOrder("65df6d6800adcb043ae7c2dd");
  }, []);

  return (
    <ContextApi.Provider
      value={{
        PastOrders,
        createNewOrder,
        userAddress,
        addNewAddress,
        fetchAllAddresses,
        fetchUserAddresses,
        OrderConfimation,
        setOrderConfimation,
        summaryToggle,
        setSummaryToggle,
        FilteredPastOrder,
        pastOrderSummaryToggle,
        setPastOrderSummaryToggle,
        // viewOrder,
        getAllPastOrders,
        cancelToggle,
        setCanceltoggle,
        cancelPastOrder,
        Id,
        setId
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
