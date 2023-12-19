import React from "react";
import { ReactComponent as MySVGIcon } from "./logo.svg";
import myImage from "../Image/background.png";

const ForgotPass = () => {
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
        <h1 className="Head">Forgot Password?</h1>
        <h6 className="title" />
        <div className="forp">
          We just need your registered e-mail address to send your password
          resend
        </div>

        <div className="line"></div>

        <div className="email">E-mail</div>
        <input
          type="text"
          placeholder="exmaplexxx@gmail.com"
          className="border"
        />

        <div className="login">Send E-mail</div>

        <div className="parentline">
          <div className="line1"></div>

          <div className="line1"></div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
