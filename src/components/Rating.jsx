import React from "react";
import emptyStar from "../images/star-inactive.png";
import fullStar from "../images/star-active.png";
import './Rating.scss'; 

export default function Rating({ rating }) {
  // Créez un tableau de longueur 5 rempli de true jusqu'au rating
  const stars = Array(5).fill(true, 0, rating).fill(false, rating);

  return (
    <div className="rating-container">
      {stars.map((isFull, index) => (
        <img
          key={index}
          src={isFull ? fullStar : emptyStar}
          alt={isFull ? "full-star" : "empty-star"}
          className="star-icon"
        />
      ))}
    </div>
  );
}