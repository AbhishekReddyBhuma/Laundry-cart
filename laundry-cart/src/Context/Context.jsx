import { createContext, useContext, useEffect, useState } from "react";

const ContextApi = createContext();

const Context = ({ children }) => {
  const [PastOrders, setPastOrders] = useState([]);
  const [summaryToggle, setSummaryToggle] = useState(false);
  const [pastOrderSummaryToggle, setPastOrderSummaryToggle] = useState(false);
  const [viewOrder, setViewOrder] = useState({});
  const [OrderConfimation, setOrderConfimation] = useState(false);
  const [cancelToggle, setCanceltoggle] = useState(false);
  const [userName, setUserName] = useState("");

  let userAddress = [];

  const fetchUserAddresses = async () => {
    const response = await fetch("https://laundry-cart-backend-jg3q.onrender.com/users/fetchaddress", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Token: localStorage.getItem("token"),
      },
    });
    const result = await response.json();

    // setUserAddresses(result)
    userAddress.push(result.address);
  };

  const fetchAllAddresses = async () => {
    const response = await fetch("https://laundry-cart-backend-jg3q.onrender.com/api/getaddress", {
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
  };

  const addNewAddress = async (address) => {
    const response = await fetch("https://laundry-cart-backend-jg3q.onrender.com/api/add", {
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
    const respose = await fetch("https://laundry-cart-backend-jg3q.onrender.com/orders/create/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Token: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        order: product,
        storeLocation: storeLocation,
        storeAddress: address,
        storeCity: city,
        storePhoneNumber: phone,
        userAddress: selectAddress,
        finalQuantity,
      }),
    });

    const result = await respose.json();
  };
  const getAllPastOrders = async () => {
    const response = await fetch("https://laundry-cart-backend-jg3q.onrender.com/orders/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Token: localStorage.getItem("token"),
      },
    });
    const result = await response.json();

    const finalResult = result.pastOrders;

    setPastOrders([...finalResult]);
  };

  const FilterdPastOrder = async (id) => {
    const response = await fetch(`https://laundry-cart-backend-jg3q.onrender.com/orders/orders/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Token: localStorage.getItem("token"),
      },
    });
    const result = await response.json();
    setViewOrder(result);
  };

  const cancelPastOrder = async (id) => {
    const response = await fetch(`https://laundry-cart-backend-jg3q.onrender.com/orders/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Token: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        status: "Cancelled",
      }),
    });
    const result = await response.json();

    getAllPastOrders();
  };

  useEffect(() => {
    // fetchUserAddresses();
    // fetchAllAddresses();
    getAllPastOrders();
    // FilterdPastOrder("65e062a583d25daac0522642");
  }, []);

  return (
    <ContextApi.Provider
      value={{
        userName,
        setUserName,
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
        FilterdPastOrder,
        pastOrderSummaryToggle,
        setPastOrderSummaryToggle,
        viewOrder,
        setViewOrder,
        getAllPastOrders,
        cancelToggle,
        setCanceltoggle,
        cancelPastOrder,
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
