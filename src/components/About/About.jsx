import React, { useEffect, useRef } from "react";
import "./About.css";

const About = () => {
  const aboutRef = useRef(null);
  const cvRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    const aboutSection = aboutRef.current;
    const cvSection = cvRef.current;

    if (aboutSection) observer.observe(aboutSection);
    if (cvSection) observer.observe(cvSection);

    return () => {
      if (aboutSection) observer.unobserve(aboutSection);
      if (cvSection) observer.unobserve(cvSection);
    };
  }, []);

  return (
    <>
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
      </section>

      <section ref={cvRef} className="cv">
        <h3>Mon CV</h3>
        <div className="cv-content">
          <p>
            Découvrez mon parcours et mes compétences en détail dans mon CV :
          </p>
          <div className="cv-actions">
            <a
              href="cv_Yanni_Bouaoud.pdf"
              target="_blank"
              className="cv-button view"
            >
              📄 Visualiser le CV
            </a>
            <a
              href="cv_Yanni_Bouaoud.pdf"
              download
              className="cv-button download"
            >
              ⬇️ Télécharger le CV
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
