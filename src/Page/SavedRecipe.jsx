import React from "react";
import Nav from "../components/NavNonLog";
import bgProfilepic from "../Image/profilepic.png";

const SavedRecipe = () => {
  return (
    <div className="page">
      {/* Nav */}
      <Nav></Nav>
      {/* End Nav */}

      <div className="profile-container">
        <div className="profilepic">
          <div
            style={{
              backgroundImage: `url(${bgProfilepic})`,
              backgroundPosition: "Center",
              backgroundSize: "cover",
              width: 100,
              height: 100,
              borderRadius: 10,
            }}
          />
        </div>
        <h1 className="proname">Garneta Sharina</h1>
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
        <footer className="footer">
          <div className="footer-text">
            <p className="footer-text-first">Eat, Cook, Repeat</p>
            <p className="footer-text-second">
              Share Your Best Recipe By Uploading Here !
            </p>
          </div>
          <div className="footer3">
            <a href="/">Product</a>
            <a href="/">Company</a>
            <a href="/">Learn More</a>
            <a href="/">Get In Touch</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SavedRecipe;
