import React from "react";
import Nav from "../components/NavNonLog";
// import bgImg from "../Image/imageicon.png.png";

const AddRecipe = () => {
  return (
    <div className="page">
      {/* Nav */}
      <Nav></Nav>
      {/* End Nav */}

      <input type="text" className="addphoto" />

      <input type="text" placeholder="Title" className="titleadd" />

      <input type="text" placeholder="Ingredients" className="ingadd" />

      <input type="text" placeholder="Video" className="titleadd" />

      <div className="postadd">Post</div>

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
  );
};

export default AddRecipe;
