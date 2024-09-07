import React from "react";
import "./Banner.scss";
import bannerImage from "../images/shoreline.png";

function Banner() {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Bannière d'accueil" className="banner__image" />
      <h1 className="banner__text">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;

