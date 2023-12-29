// Resume.jsx
import React from "react";
import TechCard from "../TechCard/TechCard.jsx"; // Chemin correct selon la structure du projet
import "./resume.css";

const Resume = () => {

  const formations = [
    {
      year: 2023,
      description:
        "Formation 'Développeur web et web mobile' avec Elan Formation à Strasbourg",
    },
    // mettre à jour les formations ici
  ];

  const certifications = [
    { year: 2023, description: "Autres certifications à venir" },
    {
      year: 2023,
      description: "OCR Découvrez le fonctionnement des algorithmes",
    },
    { year: 2021, description: "OCR Apprenez les bases du langage Python" },
    // mettre à jour les certifications ici
  ];

  const masteredTechs = [
    { name: "HTML5", image: "/img/html.png" },
    { name: "CSS3", image: "/img/css.png" },
    { name: "JavaScript", image: "/img/js.png" },
    { name: "PHP", image: "/img/php.png" },
    { name: "Symfony", image: "/img/symfony.png" },
    { name: "SQL", image: "/img/mysql.png" },
  ];

  const learningTechs = [
    { name: "React", image: "/img/react.png" },
    { name: "NodeJS", image: "/img/nodejs.png" },
    { name: "TailwindCSS", image: "/img/tailwindcss-icon.svg" },
    // Ajoutez d'autres technologies en apprentissage ici
  ];

  const ListItem = ({ item }) => (
    <li>
      {item.year}: {item.description}
    </li>
  );

  const outils = [
    { name: "Visual Studio Code"},
    { name: "Git"},
    { name: "Figma"},
    { name: "Trello"},
    { name: "Photoshop"},
    { name: "Illustrator"},
    { name: "Design Pattern MVC"},
    { name: "Méthode Agile"},
  ];

  return (
    <section id="resume">
      <h1>Curriculum vitae</h1>
      <div className="download-cv portfolio-experiment">
        <a href="/cv-julien-leger.pdf" download="cv-julien-leger.pdf">
        <span className="text">Télécharger mon CV</span>
        <span className="line -right"></span>
        <span className="line -top"></span>
        <span className="line -left"></span>
        <span className="line -bottom"></span>
        </a>
      </div>
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

      <div className="comp">
        <h2>Compétences</h2>
        <div className="tech-cards">
          {masteredTechs.map((tech, index) => (
            <TechCard key={index} name={tech.name} image={tech.image} />
          ))}
        </div>
      </div>

      <div className="comp">
        <h2>En apprentissage</h2>
        <div className="tech-cards">
          {learningTechs.map((tech, index) => (
            <TechCard
              key={index}
              name={tech.name}
              image={tech.image}
              isLearning
            />
          ))}
        </div>
      </div>

      <div className="outils">
        <h2>Outils</h2>
        <ul>
          {outils.map((outil, index) => (
            <li key={index}>{outil.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Resume;
