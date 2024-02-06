import React from "react";
import Nav from "../components/NavNonLog";
import bgProfilepic from "../Image/profilepic.png";

const Profile = () => {
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
        <div className="3options-container"></div>
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

export default Profile;
