import React from "react";
import { Link } from "react-router-dom";
import userPanel from "../Image/User icon.svg";

const Nav = () => {
  return (
    // <div
    //   style={{
    //     display: "flex",
    //     justifyContent: "space-between",
    //     height: "100%",
    //     paddingLeft: "40px",
    //   }}
    // >
    //   <div
    //     style={{
    //       display: "flex",
    //       gap: 96,
    //       padding: "56px 0px",
    //     }}
    //   >
    //     <Link
    //       style={{
    //         textDecoration: "none",
    //         color: "black",
    //       }}
    //       to="/"
    //     >
    //       Home
    //     </Link>
    //     <Link
    //       style={{
    //         textDecoration: "none",
    //         color: "black",
    //       }}
    //       to="/addrecipe"
    //     >
    //       Add Recipe
    //     </Link>
    //     <Link
    //       style={{
    //         textDecoration: "none",
    //         color: "black",
    //       }}
    //       to="/profile"
    //     >
    //       Profile
    //     </Link>
    //   </div>

    //   <div
    //     style={{
    //       width: 514,
    //       backgroundColor: "#efc81a",
    //       padding: "56px 0px",
    //     }}
    //   >
    //     <div
    //       style={{
    //         display: "flex",
    //         alignItems: "center",
    //         gap: 16,
    //         justifyContent: "end",
    //         marginRight: 128,
    //       }}
    //     >
    //       <img src={userPanel} width={52} height={52} alt="" />
    //       <Link
    //         style={{
    //           textDecoration: "none",
    //           color: "black",
    //         }}
    //         to="/login"
    //       >
    //         Login
    //       </Link>
    //     </div>
    //   </div>
    // </div>

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
            color: "black",
          }}
          to="/"
        >
          Home
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
          }}
          to="/addrecipe"
        >
          Add Recipe
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
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
        >
          <img src={userPanel} width={32} height={32} alt="" />
          <Link
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to="/login"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
