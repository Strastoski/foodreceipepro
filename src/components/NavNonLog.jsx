import React from "react";
import { Link } from "react-router-dom";

const NavNonLog = () => {
  return (
    <div className="nav-container">
      <div className="nav-bar">
        <div
          style={{
            display: "flex",
            gap: 96,
            padding: "30px 0px",
          }}
        >
          <Link
            style={{
              textDecoration: "none",
              color: "rgba(46, 38, 111, 1)",
            }}
            to="/"
          >
            Home
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "rgba(46, 38, 111, 1)",
            }}
            to="/addrecipe"
          >
            Add Recipe
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "rgba(46, 38, 111, 1)",
            }}
            to="/profile"
          >
            Profile
          </Link>
        </div>

        <div
          style={{
            width: 514,
            padding: "30px 0px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              justifyContent: "end",
              marginRight: 95,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default NavNonLog;
