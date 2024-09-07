import React from 'react';
import './Title.scss';

export default function Title({ logement }) {
  return (
    <div className="logement-title-location">
      <h2>{logement.title}</h2> {/* Affiche le titre du logement */}
      <p>{logement.location}</p> {/* Affiche la localisation du logement */}
    </div>
  );
}