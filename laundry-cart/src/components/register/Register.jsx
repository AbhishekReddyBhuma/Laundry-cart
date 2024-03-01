import React, { useState } from "react";
import "./Register.css";

const states = [
  "",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Maharashtra",
  "Madhya Pradesh",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Tripura",
  "Telangana",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman & Nicobar (UT)",
  "Chandigarh (UT)",
  "Dadra & Nagar Haveli and Daman & Diu (UT)",
  "Delhi (NCT)",
  "Jammu & Kashmir (UT)",
  "Ladakh (UT)",
  "Lakshadweep (UT)",
  "Puducherry (UT)",
];

const Register = () => {
  const [address, setaddress] = useState({
    address: "",
    state: "",
    district: "",
    pinCode: "",
  });

  const [details, setdetails] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const registerApi = (data, address) => {
    return fetch("https://laundry-cart-backend-jg3q.onrender.com/users/register", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({ data, address: address }),
    })
      .then((res) => res.json())
      .then((res) => alert(res.message));
  };

  function getInputChangeHandler(key) {
    return (e) => {
      const val = e.target.value;
      setdetails((details) => {
        return {
          ...details,
          [key]: val,
        };
      });
    };
  }

  const handleAddressChange = (e) => {
    setaddress({ ...address, [e.target.name]: e.target.value });
  };
  console.log(address);
  return (
    <div className="register-form">
      <span className="register-title">REGISTER</span>
      <form
        method="POST"
        action='"/users/register'
        onSubmit={(e) => {
          e.preventDefault();
          registerApi(details, address);
        }}
      >
        <div className="form-grid">
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={getInputChangeHandler("name")}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={getInputChangeHandler("email")}
          />
          <input
            type="text"
            placeholder="Phone"
            name="phoneNumber"
            onChange={getInputChangeHandler("phoneNumber")}
          />
          <select
            type="text"
            placeholder="State"
            name="state"
            onChange={handleAddressChange}
          >
            {states.map((state, key) => {
              return (
                <option key={key} value={state}>
                  {state}
                </option>
              );
            })}
          </select>
          <input
            type="text"
            placeholder="District"
            name="district"
            onChange={handleAddressChange}
          />
          <input
            type="text"
            placeholder="Address"
            name="address"
            onChange={handleAddressChange}
          />
          <input
            type="text"
            placeholder="Pincode"
            name="pinCode"
            onChange={handleAddressChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={getInputChangeHandler("password")}
          />
          <input type="password" placeholder="Confirm Password" />
        </div>
        <div className="terms">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            I agree to Terms & Condition receiving marketing and promotional
            materials
          </label>
        </div>
        <button type="Submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
