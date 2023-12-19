import React from "react";
import { ReactComponent as MySVGIcon } from "./logo.svg";
import myImage from "../Image/background.png";

const CodeReset = () => {
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
        <div className="line3"></div>

        <div className="cnp">Code 6 Digit</div>
        <input type="cnp" className="border" />

        <div className="resetpassword">Reset Password</div>

        <div className="line5"></div>

        <div className="line1"></div>
      </div>
    </div>
  );
};

export default CodeReset;
