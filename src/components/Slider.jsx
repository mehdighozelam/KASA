import React, { useState } from "react";
import "./Slider.scss"; 

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    );
  };

  return (
    <div className="slideshow">
      {pictures.length > 1 && (
        <button onClick={prevSlide} className="prev">
          &#10094;
        </button>
      )}
      <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      {pictures.length > 1 && (
        <button onClick={nextSlide} className="next">
          &#10095;
        </button>
      )}
      {/* Afficher la numérotation uniquement s'il y a plus d'une image */}
      {pictures.length > 1 && (
        <div className="slide-counter">
          {currentIndex + 1}/{pictures.length}
        </div>
      )}
    </div>
  );
}

export default Slideshow;