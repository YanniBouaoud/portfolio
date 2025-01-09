import React, { useEffect, useRef, useState } from "react";
import { AiOutlineGithub } from "react-icons/ai"; // Importer une icône de GitHub depuis React Icons

import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Suiss French Group",
      description: "Application web pour gérer les entités Pokémon.",
      link: "https://github.com/YanniBouaoud",
      imageSrc: "/SFG-iphone1.png", // Image à gauche
      rightImageSrc: "/SFG-iphone2.png", // Image à droite
    },
    {
      title: "NFS Location",
      description: "Page gestion location de véhicules",
      link: "https://github.com/YanniBouaoud",
      imageSrc: "/NfsLocation1.png", // Image à gauche
      rightImageSrc: "/NfsLocation2.png", // Image à droite
    },
  ];

  const timelineSteps = [
    {
      icon: "🖌️",
      label: "Design",
      tools: "Maquettage, UML, Wireframes/Wireflow",
    },
    {
      icon: "💻",
      label: "Development",
      tools: "React, Node.js, Spring Boot, Java 17",
    },
    {
      icon: "🧪",
      label: "Testing",
      tools: "JUnit, Test fonctionnels, Checkstyle",
    },
    { icon: "🔗", label: "Integration", tools: "GitHub" },
    {
      icon: "🚀",
      label: "Continuous Deployment",
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
      <h2>HOW DO I WORK ON MY PROJECTS ?</h2>

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
          <React.Fragment key={index}>
            {/* Carte du projet */}
            <div
              className="project-card"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="source-code-link">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineGithub size={24} /> {/* Icône GitHub */}
                  <span className="source-code-text"></span> {/* Annotation */}
                </a>
              </div>
            </div>
            {/* Image du projet à gauche */}
            {hoveredProject === index && (
              <div className="project-image-outside left">
                <img
                  src={project.imageSrc}
                  alt={`Aperçu du projet ${project.title} - gauche`}
                  className="project-screenshot"
                />
              </div>
            )}

            {/* Image différente à droite */}
            {hoveredProject === index && (
              <div className="project-image-outside right">
                <img
                  src={project.rightImageSrc}
                  alt={`Aperçu différent du projet ${project.title} - droite`}
                  className="project-screenshot"
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Projects;
