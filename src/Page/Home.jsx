import React from "react";
import { Link } from "react-router-dom";
import userPanel from "../Image/User icon.svg";
import bgRecipe from "../Image/food.png";

const Home = () => {
  return (
    <div style={{ margin: 0, height: "100vh", position: "relative" }}>
      {/* Nav */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "100%",
          paddingLeft: "40px",
        }}
      >
        <div style={{ display: "flex", gap: 96, padding: "56px 0px" }}>
          <Link to="/">Home</Link>
          <Link to="addrecipe">Add Recipe</Link>
          <Link to="/profile">Profile</Link>
        </div>

        <div
          style={{
            width: 514,
            backgroundColor: "#efc81a",
            padding: "56px 0px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              justifyContent: "end",
              marginRight: 128,
            }}
          >
            <img src={userPanel} width={52} height={52} alt="" />
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
      {/* End Nav */}

      <div
        style={{
          position: "absolute",
          top: 160,
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div style={{ display: "grid" }}>
          <div className="">
            <p>Discover Recipe</p>
            <p>& Delicious Food</p>
          </div>

          <input type="text" style={{ width: 200, height: 60 }} />
        </div>

        <div
          style={{
            backgroundImage: `url(${bgRecipe})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: 350,
            height: 350,
          }}
        />
      </div>
    </div>
  );
};

export default Home;
