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

      <div className="ingredients-text-container">
        <h1 className="gried-title">Ingredients</h1>
        <div className="ing-text">
          <p>- 2 eggs</p>
          <p>- 2 tbsp mayonnaise</p>
          <p>- 3 slices bread</p>
          <p>- a little butter</p>
          <p>- ⅓ carton of cress</p>
          <p>
            - 2-3 slices of tomato or a lettuce leaf and a slice of ham or
            cheese
          </p>
          <p>- crisps, to serve</p>
        </div>
        <h1 className="videostep-title">Video Step</h1>
        <div className="playbut"></div>
        <div className="playbut"></div>
        <div className="playbut"></div>
        <div className="playbut"></div>

        <input type="text" placeholder="Comment:" className="comments" />
        <div className="send">Send</div>
      </div>
    </div>
  );
};

export default DetailRecipe;
