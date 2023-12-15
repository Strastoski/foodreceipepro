import React from "react";
import { ReactComponent as MySVGIcon } from "./logo.svg";

const Login = () => {
  return (
    <div className="loginflex">
      <div className="left-container">
        <img
          alt=""
          height="100%"
          width="100%"
          src={`../../assets/image15.png`}
        />

        <div className="Yellowlayer"></div>

        <div className="svg-container">
          <MySVGIcon></MySVGIcon>
        </div>
      </div>
      {/* kiri */}

      <div className="right-container">
        <h1 className="Head">Welcome</h1>
        <h6 className="title">Log in into your existing account</h6>

        <div className="line"></div>

        <div className="email">E-mail</div>
        <input
          type="text"
          placeholder="exmaplexxx@gmail.com"
          className="border"
        />

        <div className="password">Password</div>
        <input type="Password" placeholder="Password" className="border" />

        <div className="checkbox">
          <input type="checkbox" id="myCheckbox" />
          <label htmlFor="myCheckbox"> I agree to term and conditions</label>
        </div>

        <div className="login">Log in</div>

        <div className="forgot">Forgot Password?</div>

        <div className="parentline">
          <div className="line1"></div>

          <div className="line1"></div>
        </div>

        <div className="signup">
          Don't have an account?{" "}
          <a href="/" className="signreg">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
