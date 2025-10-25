import React from "react";
import "./HeroSection.css";
import Navbar from "./Navbar";

function HeroSection() {
  return (
    <>
      <Navbar />
      <div
        className="w-full h-[80vh] bg-center bg-cover"
        style={{
          backgroundImage: "url('/media/images/backgroundImage.jpg')",
          height: "2100px",
        }}
      >
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
              <button className="watch-btn" >
                <img src="/media/images/playbutton.svg" alt="playbutton"></img>
              </button>
              <p className="live">Live Demo...</p>
            </div>
          </div>
            
          <div className="w-4/12 floating-card ">
        <div className="card-image-wrapper ">
            <img src="/media/images/firstplant.png" alt="plant" className="plantImage"></img>
            </div>
        
            <div className="content-card">
              </div>
      
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
