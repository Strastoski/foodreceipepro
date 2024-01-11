import React from "react";
import Nav from "../components/NavNonLog";
import bgFood from "../Image/food.png";

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
            backgroundImage: `url(${bgFood})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: 650,
            height: 400,
            borderRadius: 10,
          }}
        />
      </div>
    </div>
  );
};

export default DetailRecipe;
