import React from "react";
import bgRecipe from "../Image/food.png";
import bgSearch from "../Image/search.png";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div className="hero">
      {/* Nav */}
      <Nav></Nav>
      {/* End Nav */}

      <div className="left-hero">
        <div className="left-hero-content">
          <h1 className="hero-title">Discover Recipe</h1>
          <h1 className="hero-title hero-title-bottom">& Delicious Food</h1>
          <div className="input-wrapper">
            <div
              className="search"
              style={{
                backgroundImage: `url(${bgSearch})`,
                width: 20,
                height: 20,
                position: "absolute",
                top: 13,
                left: 19,
                zIndex: 20,
              }}
            />
            <input
              type="text"
              placeholder="Search Recipe"
              className="hero-input"
            />
          </div>
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
        }}
      />
    </div>
  );
};

export default Home;
