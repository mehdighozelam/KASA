import React from "react";
import { useNavigate } from "react-router-dom"; // Importer useNavigate
import "./Cards.scss";

function Cards({ properties }) {
  const navigate = useNavigate(); // Initialiser useNavigate

  // Fonction pour gérer le clic sur une carte
  const handleCardClick = (id) => {
    navigate(`/logement/${id}`); // Redirige vers la page de détail du logement
  };

  return (
    <div className="card_container">
      <div className="card_wrapper">
        {properties.map((property) => (
          <div
            key={property.id}
            className="card"
            onClick={() => handleCardClick(property.id)} // Ajout du gestionnaire de clic
          >
            <img src={property.cover} alt={property.title} />
            <div className="card_text_overlay">
              <p>{property.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
