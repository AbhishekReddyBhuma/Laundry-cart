import { useState } from "react";
import "./SignIn.css";
import padlock from "./padlock.svg";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    phoneNumber: "",
    password: "",
  });
  const navigation = useNavigate();
  const [Token, setToken] = useState("");

  const signInApi = (data) => {
    return fetch("http://localhost:8080/users/signin", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => localStorage.setItem("token", res.token));
  };
  console.log(Token);

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
      action="/"
      onSubmit={(e) => {
        e.preventDefault();
        signInApi(credentials);
        localStorage.setItem("token", Token);
        Token?navigation("/products"):navigation("/signin")
      }}
    >
      <span className="signIn-title">SIGN IN</span>
      <input
        type="text"
        placeholder="Mobile/Email"
        value={credentials.email || credentials.phoneNumber}
        onChange={(e) => {
          (/[0-9]/.test(e.target.value))
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
