import React, { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Assurez-vous que cet import est présent
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import "./App.css";

function App() {
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 5000); // Durée totale de l'animation en secondes

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {/* Animation de la ligne */}
      {isTransitioning && (
        <div className="line"></div>
      )}

      {/* Main Site Content */}
      <div className={`site-content ${isTransitioning ? "hidden" : ""}`}>
        {/* Navigation */}
        <nav>

             {/* Icônes de réseaux sociaux */}
             <a href="https://github.com/YanniBouaoud" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} style={{ marginLeft: "15px", color: "#ffffff" }} />
          </a>
          <a href="https://www.linkedin.com/in/yannilille/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} style={{ marginLeft: "15px", color: "#ffffff" }} />
          </a>
          <a href="#home">Home</a>
          <a href="#about">À Propos</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
           
        </nav>


        {/* Sections */}
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>

        {/* Footer */}
        <footer>
<div className="social-links">
        
            <a
              
          href="https://github.com/YanniBouaoud/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faCode} size="2x" />
        </a>
      </div>        </footer>
      </div>
    </div>
  );
}

export default App;
