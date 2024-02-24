import React, { useState } from "react";
import SignIn from "../components/SignIn/SignIn";
import "./signinpage.css";
import Register from "../components/register/Register";

const Home = () => {
  const [registerToggle, setRegisterToggle] = useState(false);
  const [BtnText, setBtnText] = useState("Register");
  const hanldeBtnText = () => {
    setRegisterToggle(!registerToggle);
    registerToggle ? setBtnText("Register") : setBtnText("Sign In");
  };

  return (
    <div className="home-main">
      <div className="home-page">
        <div className="home-left">
          <div className="brand-name">
            Laundry
            <br />
            service
          </div>
          <div className="description">Doorstep Wash & Dryclean Service</div>
          <div className="no-account">
            {!registerToggle ? (
              <>Don't Have An Account?</>
            ) : (
              <>Already Have an account !</>
            )}
          </div>
          <button className="register" onClick={hanldeBtnText}>
            {BtnText}
          </button>
        </div>
        <div className="div-line"></div>
        {!registerToggle ? (
          <div className="signIn-form">
            <SignIn />
          </div>
        ) : (
          <div className="registration-form">
            <Register />
          </div>
        )}
      </div>
      <div className="home-bottom">
        <div className="home-bottom-1">
          <p className="line-1">Now Refer & Earn ₹500 for every referral*</p>
          <p className="line-2">* Terms and conditions will be applied</p>
        </div>
        <div className="home-bottom-2">
          <img />
          <div className="line-1">
            <p className="begin">ABOUT US</p>
            <p className="middle">Home</p>
            <p className="middle">Pricing</p>
            <p className="middle">Career</p>
            <p className="middle">Contact</p>
            <p className="end">SOCIAL MEDIA</p>
          </div>
          <div className="line-2">
            <p className="begin">Doorstep Wash & Dryclean Service</p>
            <p className="middle">Sign In</p>
            <p className="middle">Blogs</p>
            <img className="facebook" />
            <img className="instagram" />
            <img className="linkedIn" />
          </div>
          <div className="line-3">
            <p className="begin">Register</p>
            <p className="end">Create</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
