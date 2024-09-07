import React from "react";
import "./AboutBanner.scss"; 
import aboutBannerImage from "../images/moutain.png"; 

function AboutBanner() {
  return (
    <div className="about-banner">
      <img src={aboutBannerImage} alt="Bannière à propos" className="about-banner__image" />
    </div>
  );
}

export default AboutBanner;
