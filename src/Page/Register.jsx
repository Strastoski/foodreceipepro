import React from "react";
import { ReactComponent as MySVGIcon } from "./logo.svg";
import myImage from "../Image/background.png";

const Register = () => {
  return (
    <div className="loginflex">
      <div className="left-container">
        <img
          src={myImage}
          alt="My Image"
          style={{ height: "100%", width: "100%" }}
        />

        <div className="Yellowlayer"></div>

        <div className="svg-container">
          <MySVGIcon></MySVGIcon>
        </div>
      </div>
      {/* kiri */}

      <div className="right-container">
        <h1 className="Head">Let's Get Started !</h1>
        <h6 className="title">Create new account to access all features</h6>
        <div className="line"></div>

        <div className="name">Name</div>
        <input type="text" placeholder="Name" className="border" />

        <div className="email">Email address*</div>
        <input type="Password" placeholder="Password" className="border" />

        <div className="phone">Phone Number</div>
        <input type="Password" placeholder="08xxxxxxxxxx" className="border" />

        <div className="createpass">Create New Password</div>
        <input
          type="Password"
          placeholder="Create New Password"
          className="border"
        />

        <div className="createnew">New Password</div>
        <input
          type="Password"
          placeholder="Create New Password"
          className="border"
        />

        <div className="checkbox">
          <input type="checkbox" name="terms" id="" />
          <p> I agree to terms & conditions </p>
        </div>

        <div className="login">Register Account</div>

        <div className="forgot">Forgot Password?</div>

        <div className="signup">
          Already have account?{" "}
          <a href="/" className="signreg">
            Log in Here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
