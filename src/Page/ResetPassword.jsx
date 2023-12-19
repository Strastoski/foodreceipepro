import React from "react";
import { ReactComponent as MySVGIcon } from "./logo.svg";
import myImage from "../Image/background.png";

const ResetPassword = () => {
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
        <div className="line"></div>

        <div className="cnp">Create New Password</div>
        <input className="border" />

        <div className="cnp">New Password</div>
        <input type="Password" className="border" />

        <div className="checkbox">
          <input type="checkbox" id="myCheckbox" />
          <label htmlFor="myCheckbox"> I agree to term and conditions</label>
        </div>

        <div className="resetp">Reset Password</div>

        <div className="parentline">
          <div className="line1"></div>

          <div className="line1"></div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
