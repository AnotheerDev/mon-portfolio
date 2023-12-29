// Projects.jsx
import React from 'react';
import './projects.css';

const Projects = () => {
    // Définition des données
    const missions = [
        "Conception du site",
        "Wireframe",
        "Maquette",
        "Création base de données",
        "Développement",
        "Mise en production"
    ];

    const fonctionnalites = [
        "Présentation de l'artiste",
        "Création d'un blog",
        "Création d'un forum",
        "Création d'une boutique",
        "Authentification",
        "Interface d'administration"
    ];

    const outils = [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "MySQL",
        "Symfony",
        "Webpack"
    ];

    return (
        <section id="projects">
            <h1>Projet(s)</h1>
            <div className="flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front atelier">
                        <img className="bg-img" src="img/image.png" alt="Projet"/>
                    </div> 
                    <div className="flip-box-back">
                        <div>
                            <h2>Conception du site de Manon Mangeol</h2>
                            <div className="global">
                                <div className="mission">
                                    <h3 className="third">Missions</h3>
                                    {missions.map((mission, index) => (
                                        <p key={index}>{mission}</p>
                                    ))}
                                </div>
                                <div className="fonctionality">
                                    <h3 className="third">Fonctionnalités</h3>
                                    {fonctionnalites.map((fonctionnalite, index) => (
                                        <p key={index}>{fonctionnalite}</p>
                                    ))}
                                </div>
                                <div className="outils">
                                    <h3 className="third">Outils</h3>
                                    {outils.map((outil, index) => (
                                        <p key={index}>{outil}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
