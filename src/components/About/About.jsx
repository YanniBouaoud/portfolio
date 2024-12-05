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
        <h2>About me</h2>
        <p style={{ fontSize: "19px", marginBottom: "25px" }}>
          Passionate about development, I design and develop applications, with
          experience in React, Java and SQL. Learning new tech is key for me. As
          a web dev enthusiast, I'm always adapting to stay on the cutting edge
          of innovation.
        </p>
        <ul>
          <li style={{ "--index": 1 }}>
            Frontend : &nbsp;React js, native, npm, npx, html, css, material ui,
            typescript, javascript
          </li>
          <li style={{ "--index": 2 }}>
            Backend : &nbsp;Java 17, Spring, hibernate, checkstyle, JUnit,
            Spotbug, API REST
          </li>
          <li style={{ "--index": 3 }}>Databases :&nbsp; MySQL, MongoDB</li>
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
