import React, { useState } from "react";
import './Collapse.scss';
import collapseimg from "../images/arrow-icon.svg";

// Composant Collapse
export default function Collapse({ data, containerStyle }) {
  // État local pour gérer l'ouverture/la fermeture de chaque section
  const [isOpen, setIsOpen] = useState(Array(data.length).fill(false));

  // Fonction pour basculer l'état d'une section
  const toggleSection = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);

    const images = document.querySelectorAll('.collapse-img');
    images[index].classList.toggle('rotate'); // Ajoute ou supprime la classe 'rotate'
  };

  return (
    <div className="collapse-container" style={containerStyle}>
      {data.map((item, index) => (
        <div key={index} className="collapse-section">
          <div className="section-header" onClick={() => toggleSection(index)}>
            <h3>{item.title}</h3>
            <img className="collapse-img" src={collapseimg} alt="flèche d'indication" />
          </div>
          {isOpen[index] && (
            <div className="section-content">
              <p>{item.text}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}