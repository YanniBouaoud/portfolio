import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Gestion de données Pokémon",
      description: "Application web pour gérer les entités Pokémon.",
      link: "https://github.com/YanniBouaoud",
      imageSrc: "/SFG-iphone1.png", // Chemin relatif à partir de la racine
    },
    {
      title: "Plateforme de commandes de pizza",
      description: "Création de comptes clients et gestion des commandes.",
      link: "https://github.com/YanniBouaoud",
      imageSrc: "/images/pizza.png", // Capture d'écran du projet
    },
  ];

  const timelineSteps = [
    {
      icon: "🖌️",
      label: "Conception",
      tools: "Maquettage, UML, Wireframes/Wireflow",
    },
    {
      icon: "💻",
      label: "Développement",
      tools: "React, Node.js, Spring Boot, Java 17",
    },
    {
      icon: "🧪",
      label: "Tests",
      tools: "JUnit, Test fonctionnels, Checkstyle",
    },
    { icon: "🔗", label: "Intégration", tools: "GitHub" },
    {
      icon: "🚀",
      label: "Déploiement Continu",
      tools: "Firebase, Docker",
    },
  ];

  const timelineRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStep, setHoveredStep] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  return (
    <div className="projects">
      <h2>Mes Projets</h2>

      {/* Frise chronologique */}
      <div
        className={`timeline ${isVisible ? "animate" : ""}`}
        ref={timelineRef}
      >
        {timelineSteps.map((step, index) => (
          <React.Fragment key={index}>
            <div
              className="timeline-step"
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <span className="step-icon">{step.icon}</span>
              <p className="step-label">{step.label}</p>
              {hoveredStep === index && (
                <div className="tooltip">{step.tools}</div>
              )}
            </div>
            {index < timelineSteps.length - 1 && (
              <div className="timeline-arrow">→</div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Liste des projets */}
      <div className="project-list">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Voir sur GitHub
            </a>
            {/* Affichage de l'image lorsque la souris est sur la carte */}
            {hoveredProject === index && (
              <div className="project-image-overlay">
                <img
                  src={project.imageSrc}
                  alt={`Aperçu du projet ${project.title}`}
                  className="project-screenshot"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
