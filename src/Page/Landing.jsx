import React from "react";
import bgRecipe from "../Image/food2.png";
import bgLetuce from "../Image/lettuce.png";
import bgDot from "../Image/dot.png";
import Nav from "../components/Nav";

const Landing = () => {
  return (
    <div className="hero">
      {/* Nav */}
      <Nav></Nav>
      {/* End Nav */}

      <div className="left-hero-landing">
        <div className="left-hero-content">
          <h1 className="hero-title">Discover Recipe</h1>
          <h1 className="hero-title hero-title-bottom">& Delicious Food</h1>
          <input
            type="text"
            placeholder="Search Recipe"
            className="hero-input"
          />
        </div>
      </div>

      <div className="yellow-hero"></div>

      <div
        style={{
          position: "absolute",
          top: 110,
          right: 120,
          display: "flex",
          justifyContent: "space-evenly",
          backgroundImage: `url(${bgRecipe})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: 350,
          height: 350,
          zIndex: 10,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 30,
          right: 120,
          display: "flex",
          justifyContent: "space-evenly",
          backgroundImage: `url(${bgLetuce})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: 300,
          height: 400,
          zIndex: 5,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 120,
          right: 270,
          display: "flex",
          justifyContent: "space-evenly",
          backgroundImage: `url(${bgDot})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: 200,
          height: 200,
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 228,
          right: 270,
          display: "flex",
          justifyContent: "space-evenly",
          backgroundImage: `url(${bgDot})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: 200,
          height: 200,
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default Landing;
