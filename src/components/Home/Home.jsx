// Home.jsx
// Home.jsx
import React from 'react';
import './home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="intro">
          <h1>Bienvenue sur Mon Portfolio</h1>
          <p>Je suis JULIEN LEGER, un développeur web et web mobile. Je cherche actuellement à la recherche d'une alternance pour le CDA (Concepteur Développeur d'Applications) </p>
        </div>
        <div className="cta">
          <a href="#projects" className="btn">Voir Mes Projets</a>
          <a href="#resume" className="btn">CV</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
