import React, { useEffect, useRef } from "react";
import "./About.css";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active"); // Ajoute la classe quand visible
          } else {
            entry.target.classList.remove("active"); // Retire la classe quand invisible
          }
        });
      },
      {
        threshold: 0.2, // Le déclenchement se produit lorsque 20% de l'élément sont visibles
      }
    );

    const section = aboutRef.current;

    if (section) {
      observer.observe(section);
    }

    // Cleanup
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section ref={aboutRef} className="about">
      <h2>À propos de moi</h2>
      <p>
        Passionné par le développement, je suis titulaire d’un Bac+4 en
        conception et développement d’applications, avec expérience en React,
        Java, et SQL.
      </p>
      <ul>
        <li style={{ "--index": 1 }}>Frontend : React.js, Material UI, TypeScript</li>
        <li style={{ "--index": 2 }}>Backend : Java, Spring Boot</li>
        <li style={{ "--index": 3 }}>Bases de données : MySQL, MongoDB</li>
      </ul>

      <h2>Mon CV</h2>
  <p>Vous pouvez télécharger ou visualiser mon CV ici.</p>
  <a href="cv_Yanni_Bouaoud.pdf" target="_blank" class="cv-button">
    Télécharger mon CV
  </a>
    </section>
    
  );
};

export default About;
