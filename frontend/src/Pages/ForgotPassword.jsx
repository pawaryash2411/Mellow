import React from "react";
import "../Styling/Login.css";
import forgotImage from "../assets/forgot.jpg";
import { NavLink } from "react-router-dom";

const forgotPassword = () => {
  return (
    <>
      <div className="container p-5">
        <div className="row d-flex justify-content-start align-items-center login-container">
          <div className="col-lg-5 col-10">
            <div id="circle"></div>
            <div className="pb-5">
              <img src={forgotImage} alt="" className="login-image mt-5" />
            </div>
          </div>
          <div className="col-lg-4 offset-lg-2 col-md-6 offset-md-3">
            <div className="mt-1 mt-md-5">
              <h1 className="login-system">Forgot Password</h1>
              <form className="pt-4">
                <div className="d-flex flex-column pb-3">
                  <label for="email" className="login-text">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="emailId"
                    placeholder="Enter your Email Address"
                    className="login-input"
                  />
                </div>
                <button className="login-button mt-3">
                  <span>Send Mail</span>
                </button>

                <div className="register mt-5">
                  <p>
                    Don't have an account?
                    <NavLink to="/register" className="register-account">
                      {" "}
                      Create an account
                    </NavLink>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default forgotPassword;
