import React from 'react';
import './techCard.css'; // Assurez-vous d'avoir un fichier CSS pour ce composant

const TechCard = ({ name, image, isLearning }) => {
  return (
    <div className={`tech-card ${isLearning ? 'learning' : ''}`}>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default TechCard;
