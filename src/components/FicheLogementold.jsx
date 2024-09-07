import React from 'react';
import { useParams } from 'react-router-dom';
import properties from '../properties.json';
import Collapse from './Collapse';
import Slideshow from './Slider'; 
import activeStar from '../images/star-active.png';
import inactiveStar from '../images/star-inactive.png';
import './FicheLogement.scss';

function FicheLogement() {
  const { id } = useParams();
  const logement = properties.find((item) => item.id === id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  // Générer les étoiles en fonction de la note
  const ratingStars = Array(5)
    .fill()
    .map((_, index) =>
      index < logement.rating ? activeStar : inactiveStar
    );

  return (
    <div className="fiche-logement">
      {/* Slideshow appelé une seule fois */}
      <Slideshow pictures={logement.pictures} />
      
      <div className="logement-info">
        <div className="title-location-tags">
          <h1 className="logement-title">{logement.title}</h1>
          <p className="logement-location">{logement.location}</p>
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="host-rating">
          <div className="host">
            <p className="host-name">{logement.host.name}</p>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="host-picture"
            />
          </div>
          <div className="rating">
            {ratingStars.map((star, index) => (
              <img
                key={index}
                src={star}
                alt={star === activeStar ? 'Full star' : 'Empty star'}
                className="star"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="collapse-container">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default FicheLogement;
