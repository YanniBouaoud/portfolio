import React, { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

import "./App.css";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      {/* Circle */}
      <div
        className="mouse-circle"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      ></div>

      {/* Navigation */}
      <nav>
        <a href="#home">Accueil</a>
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
        <p>© 2024 Yanni Bouaoud - Tous droits réservés</p>
      </footer>
    </div>
  );
}

export default App;
