import React, { useState } from "react";
import "./SignIn.css";
import padlock from "./padlock.svg";
import { useNavigate } from "react-router-dom";
import { contextProvider } from "../../Context/Context";
const SignIn = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    phoneNumber: "",
    password: "",
  });
  const { getAllPastOrders, PastOrders, userName, setUserName } =
    contextProvider();

  const navigation = useNavigate();
  const [Token, setToken] = useState("");

  const signInApi = async (data) => {
    const response = await fetch(`${windows.location.origin}/users/signin`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    const token = result.token;
    localStorage.setItem("token", token);
    if (token) {
      navigation("/products");
    }
  };

  function getInputChangeHandler(key) {
    return (e) => {
      const val = e.target.value;
      setCredentials((credentials) => {
        return {
          ...credentials,
          [key]: val,
        };
      });
    };
  }
  return (
    <form
      method="POST"
      action="/orders"
      onSubmit={(e) => {
        e.preventDefault();
        signInApi(credentials);
        navigation("/products");
        if (localStorage.getItem("token")) {
          navigation("/products");
        }
      }}
    >
      <span className="signIn-title">SIGN IN</span>
      <input
        type="text"
        placeholder="Mobile/Email"
        // value={credentials.email || credentials.phoneNumber}
        onChange={(e) => {
          !/[a-zA-Z]/.test(e.target.value)
            ? setCredentials((credentials) => {
                return {
                  ...credentials,
                  phoneNumber: e.target.value,
                };
              })
            : setCredentials((credentials) => {
                return {
                  ...credentials,
                  email: e.target.value,
                };
              });
        }}
      />
      <input
        type="password"
        placeholder="Password"
        // value={credentials.password}
        onChange={getInputChangeHandler("password")}
      />
      <img src={padlock} />
      <span className="forgot-password">Forgot Password?</span>
      <button type="Submit">Sign In</button>
    </form>
  );
};

export default SignIn;
