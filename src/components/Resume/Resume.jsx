// Resume.jsx
import React from "react";
import "./resume.css";

const Resume = () => {
  const formations = [
    { year: 2023, description: "Formation 'Développeur web et web mobile' avec Elan Formation à Strasbourg" },
    // mettre à jour les formations ici
  ];

  const certifications = [
    { year: 2023, description: "Autres certifications à venir" },
    { year: 2023, description: "OCR Découvrez le fonctionnement des algorithmes" },
    { year: 2021, description: "OCR Apprenez les bases du langage Python" },
    // mettre à jour les certifications ici
  ];

  const ListItem = ({ item }) => (
    <li>
      {item.year}: {item.description}
    </li>
  );

  return (
    <section id="resume">
      <h1>Curriculum vitae</h1>
      <div id="container-cv">
        <div className="formations">
          <h2>Formations</h2>
          <ul>
            {formations.map((formation, index) => (
              <ListItem key={index} item={formation} />
            ))}
          </ul>
        </div>
        <div className="certifications">
          <h2>Certifications</h2>
          <ul>
            {certifications.map((certification, index) => (
              <ListItem key={index} item={certification} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;

