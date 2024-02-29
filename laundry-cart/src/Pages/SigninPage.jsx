import React, { useState } from "react";
import SignIn from "../components/SignIn/SignIn";
import "./signinpage.css";
import Register from "../components/register/Register";

const Home = () => {
  const [registerToggle, setRegisterToggle] = useState(false);
  const [redesign, setRedesign] = useState([
    "brand-name",
    "description",
    "home-left-sub",
  ]);
  return (
    <div className="home-main">
      <div className="home-page">
        <div className="home-left">
          <div className={redesign[2]}>
            <div className={redesign[0]}>
              Laundry
              <br />
              service
            </div>
            <div className={redesign[1]}>Doorstep Wash & Dryclean Service</div>
            {!registerToggle ? (
              <>
                <div className="no-account">Don't Have An Account?</div>
                <button
                  className="register"
                  onClick={(e) => {
                    setRegisterToggle(true);
                    setRedesign([
                      "brand-name-small",
                      "description-small",
                      "home-left-sub-small",
                    ]);
                  }}
                >
                  Register
                </button>
              </>
            ) : (
              <>
                <div className="have-account">Already Have Account</div>
                <button
                  className="signIn"
                  onClick={(e) => {
                    setRegisterToggle(false);
                    setRedesign(["brand-name", "description", "home-left-sub"]);
                  }}
                >
                  Sign In
                </button>
              </>
            )}
          </div>
        </div>
        <div className="div-line"></div>
        {!registerToggle ? (
          <div className="signIn-form">
            <SignIn />
          </div>
        ) : (
          <Register />
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
