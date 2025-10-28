import React from "react";
import "./HeroSection.css";
import Navbar from "./Navbar";

function HeroSection() {
  return (
    <div
      className="w-full h-[80vh] bg-center bg-cover"
      style={{
        backgroundImage: "url('/media/images/backgroundImage.jpg')",
        height: "1800px",
      }}
    >
      <Navbar />
      <div className="flex flex-wrap mx-4">
        <div className="w-8/12 hero">
          <h1>Earth's Exhale</h1>
          <p className="hero-text">
            "Earth Exhale" symbolizes the purity and vitality of the Earth's
            natural <br />
            environment and its essential role in sustaining life.
          </p>
          <div className="buttonss">
            <button className="cta-buttons">
              <p>Buy Now</p>
            </button>
            <button className="watch-btn">
              <img src="/media/images/playbutton.svg" alt="playbutton"></img>
            </button>
            <p className="live">Live Demo...</p>
          </div>
        </div>

        <div className="w-4/12 floating-card">
          <div className="card-image-wrapper ">
            <img
              src="/media/images/firstplant.png"
              alt="plant"
              className="plantImage"
            ></img>
          </div>

          <div className="content-card">
            <p>Indoor plants</p>
            <h3>Aglaoneme plant</h3>
            <button className="card-button">Buy Now</button>
          </div>
        </div>
      </div>
      <h2 className="mainHeading">Our Trendy plants</h2>
      <div className="second-card flex flex-wrap mx-4">
        <img
          src="/media/images/second-card.png"
          alt="deskPlant"
          className="plantImages"
        ></img>
        <div className="Second-content">
          <h3>For Your Desks Decorations</h3>
        <p>
          I recently added a beautiful desk decoration plant to my workspace,
          and it has made such a positive difference!
        </p>
        <h4>Rs.&nbsp;599/-</h4>
        <div className="cartButton">
        <button className="card-button">Explore</button>
        <img src="/media/images/cart.png" alt="cart-png" className="newCart"></img>
        </div>
        </div>
      </div>
      
      
      
    </div>
  );
}

export default HeroSection;
