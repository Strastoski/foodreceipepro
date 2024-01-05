import React from "react";
import bgRecipe from "../Image/food.png";
import bgSearch from "../Image/search.png";
import Nav from "../components/Nav";
import bgBanana from "../Image/Banana.png";
import bgBurger2 from "../Image/burger2.png";
import bgCake from "../Image/cake.png";
import bgDimsum from "../Image/dimsum.png";
import bgIndian from "../Image/indian.png";
import bgSalmon from "../Image/salmon.png";
import bgSoup from "../Image/soup.png";
import bgBread from "../Image/bread.png";

const Home = () => {
  return (
    <div className="page">
      {/* Nav */}
      <Nav></Nav>
      {/* End Nav */}

      <div className="hero">
        <div className="left-hero-landing">
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
        <div className="right-hero-landing"></div>
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

      {/* second page */}
      <div className="pop">
        <div className="header-popular-container">
          <div className="ract"></div>
          <h1 className="title-pop">Popular For You!</h1>
        </div>
        <div className="popular-img-container">
          <div className="pop-img-container">
            <div className="left-recepe-yellow2"></div>
            <div
              style={{
                position: "absolute",
                top: 20,
                left: 70,
                display: "flex",
                justifyContent: "space-evenly",
                backgroundImage: `url(${bgBread})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: 410,
                height: 410,
                zIndex: 1,
              }}
            />
          </div>

          <div className="new-recipe-container">
            <div className="right-recipe2">
              <h1>Healty Bone Broth</h1>
              <h1 className="ramen-text">Ramen (Quick & Easy)</h1>
              <div className="line-ramen"></div>
              <p className="p-color">
                Quick + Easy Chicken Bone Broth Ramen -{" "}
              </p>
              <p className="p-color ramen-text-p">
                Healthy chicken ramen in hurry? That's right!
              </p>
              <button className="new-recipe-button">Learn More</button>
            </div>
          </div>
          <div className="middle-popular-container"></div>

          <div className="pop-img-container"></div>
        </div>
      </div>
      {/* NEXT PAGE */}
      <div className="pop">
        <div className="header-popular-container">
          <div className="ract"></div>
          <h1 className="title-pop">New Recipe</h1>
        </div>
        <div className="popular-img-container2">
          <div className="pop-img-container">
            <div className="left-recepe-yellow"></div>
            <div
              style={{
                position: "absolute",
                top: 20,
                left: 70,
                display: "flex",
                justifyContent: "space-evenly",
                backgroundImage: `url(${bgBurger2})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: 410,
                height: 410,
                zIndex: 1,
              }}
            />
          </div>

          <div className="new-recipe-container">
            <div className="right-recipe2">
              <h1>Healty Bone Broth</h1>
              <h1 className="ramen-text">Ramen (Quick & Easy)</h1>
              <div className="line-ramen"></div>
              <p className="p-color">
                Quick + Easy Chicken Bone Broth Ramen -{" "}
              </p>
              <p className="p-color ramen-text-p">
                Healthy chicken ramen in hurry? That's right!
              </p>
              <button className="new-recipe-button">Learn More</button>
            </div>
          </div>
          <div className="middle-popular-container"></div>

          <div className="pop-img-container"></div>
        </div>
      </div>
      {/* 3rd PAGE */}
      <div className="pop2">
        <div className="ract2"></div>
        <h1 className="title-pop2">Popular Recipe</h1>
        <div className="popre">
          <div
            style={{
              backgroundImage: `url(${bgSoup})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: 380,
              height: 380,
              borderRadius: 10,
            }}
          />

          <h1 className="soup-text">
            <span>Chicken</span>
            <span>Kare</span>
          </h1>

          <div
            style={{
              backgroundImage: `url(${bgDimsum})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: 380,
              height: 380,
              borderRadius: 10,
            }}
          >
            <h1 className="bomb-text">
              <span>Bomb</span>
              <span>Chicken</span>
            </h1>
          </div>

          <div
            style={{
              backgroundImage: `url(${bgBanana})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: 380,
              height: 380,
              borderRadius: 10,
            }}
          >
            <h1 className="banana-text">
              <span>Banana</span>
              <span>Smoothie Pop</span>
            </h1>
          </div>
        </div>

        <div className="popre">
          <div
            style={{
              backgroundImage: `url(${bgCake})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: 380,
              height: 380,
              borderRadius: 10,
            }}
          >
            <h1 className="cake-text">
              <span>Coffe Lava</span>
              <span>Cake</span>
            </h1>
          </div>
          <div
            style={{
              backgroundImage: `url(${bgSalmon})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: 380,
              height: 380,
              borderRadius: 10,
            }}
          >
            <h1 className="salmon-text">
              <span>Sugar</span>
              <span>Salmon</span>
            </h1>
          </div>
          <div
            style={{
              backgroundImage: `url(${bgIndian})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: 380,
              height: 380,
              borderRadius: 10,
            }}
          >
            <h1 className="indian-text">
              <span>Indian</span>
              <span>Salad</span>
            </h1>
          </div>
        </div>
      </div>
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
export default Home;
