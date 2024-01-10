import React from "react";
import Nav from "../components/NavNonLog";
import bgfood from "../Image/food.png";

const DetailRecipe = () => {
  return (
    <div className="page">
      {/* Nav */}
      <Nav></Nav>
      {/* End Nav */}

      <h1 className="detail-title">LOREAM SANDWICH</h1>

      <div className="pict-container">
        <div
          style={{
            position: "absolute",
            top: 240,
            left: auto,
            display: "flex",
            justifyContent: "space-evenly",
            backgroundImage: `url(${bgfood})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: 380,
            height: 380,
            zIndex: 1,
          }}
        />
      </div>
    </div>
  );
};

export default DetailRecipe;
