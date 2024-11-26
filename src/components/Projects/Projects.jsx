import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Gestion de données Pokémon",
      description: "Application web pour gérer les entités Pokémon.",
      link: "https://github.com/YanniBouaoud",
    },
    {
      title: "Plateforme de commandes de pizza",
      description: "Création de comptes clients et gestion des commandes.",
      link: "https://github.com/YanniBouaoud",
    },
    // Ajoute d'autres projets ici.
  ];

  return (
    <div className="projects">
      <h2>Mes Projets</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Voir sur GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
