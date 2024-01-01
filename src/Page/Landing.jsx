import React from "react";
import bgRecipe from "../Image/food2.png";
import bgLetuce from "../Image/lettuce.png";
import bgDot from "../Image/dot.png";
import Nav from "../components/Nav";
import bgSearch from "../Image/search.png";
import bgPizza from "../Image/pizza.png";
import bgBurger from "../Image/burger.png";
import bgBurger2 from "../Image/burger2.png";
import bgSoup from "../Image/soup.png";
import bgDimsum from "../Image/dimsum.png";
import bgBanana from "../Image/Banana.png";
import bgCake from "../Image/cake.png";
import bgSalmon from "../Image/salmon.png";
import bgIndian from "../Image/indian.png";

const Landing = () => {
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

      {/* second page */}
      <div className="pop">
        <div className="header-popular-container">
          <div className="ract"></div>
          <h1 className="title-pop">Popular For You!</h1>
        </div>
        <div className="popular-img-container">
          <div className="pop-img-container">
            <div
              style={{
                borderRadius: 10,
                gridArea: "left",
                backgroundImage: `url(${bgPizza})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: 356,
                height: 350,
                zIndex: 5,
              }}
            />
            <h1 className="pizza-text">
              <span>Pizza</span>
              <span>Lamoa</span>
            </h1>
          </div>
          <div
            style={{
              position: "absolute",
              top: 110,
              left: 10,
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

          <div className="pop-img-container">
            <div
              style={{
                borderRadius: 10,
                gridArea: "middle",
                backgroundImage: `url(${bgBurger})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: 356,
                height: 350,
                zIndex: 5,
              }}
            />
            <h1 className="pizza-text">
              <span>King</span>
              <span>Burger</span>
            </h1>
          </div>
          <div
            style={{
              position: "absolute",
              top: 320,
              left: 598,
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
      </div>
      {/* NEXT PAGE */}
      <div className="pop">
        <div className="header-popular-container">
          <div className="ract"></div>
          <h1 className="title-pop">New Recipe</h1>
          <div
            style={{
              position: "absolute",
              top: 150,
              left: 50,
              display: "flex",
              justifyContent: "space-evenly",
              backgroundImage: `url(${bgBurger2})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: 380,
              height: 380,
              zIndex: 1,
            }}
          />
        </div>
        <div className="new-recipe-container">
          <div className="left-recepe-yellow"></div>
          <div className="right-recipe">
            <h1>Healty Bone Broth</h1>
            <h1 className="ramen-text">Ramen (Quick & Easy)</h1>
            <div className="line-ramen"></div>
            <p className="p-color">Quick + Easy Chicken Bone Broth Ramen - </p>
            <p className="p-color ramen-text-p">
              Healty chicken ramen in hurry? That's right!
            </p>
            <button className="new-recipe-button">Learn More</button>
          </div>
        </div>
        {/* 
            3rd PAGE */}
        <div className="pop">
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
            <div
              style={{
                backgroundImage: `url(${bgDimsum})`,
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
                backgroundImage: `url(${bgBanana})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: 380,
                height: 380,
                borderRadius: 10,
              }}
            />
            <h1 className="soup-text">
              {/* <span>Bomb</span>
              <span>Chicken</span> */}
            </h1>
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
            />
            <div
              style={{
                backgroundImage: `url(${bgSalmon})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: 380,
                height: 380,
                borderRadius: 10,
              }}
            />
            <div
              style={{
                backgroundImage: `url(${bgIndian})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: 380,
                height: 380,
                borderRadius: 10,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
