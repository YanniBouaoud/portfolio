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
          experience in React, Java, and SQL. I have obtained a diploma in
          application design and development at level 6 (Bac+4). Learning new
          tech is key for me. As a web development enthusiast, I'm always
          adapting to stay on the cutting edge of innovation.
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
          <li style={{ "--index": 4 }} className="tools">
            Tools
            <div className="tools-list">
              <ul>
                <li>
                  <span>IDE:</span> Visual Studio Code, Visual Studio, Microsoft
                  Studio Notepad Dbeaver, Eclipse
                </li>
                <li>
                  <span>CI/CD:</span> Github, Gitlab, Docker, Docker Compose
                </li>
                <li>
                  <span>Conception:</span> Maquettage, UML, DevOps, CI/CD,
                  github, Scrum/Agile, Test fonctionnels
                </li>
                <li>
                  <span>Design:</span> Figma, LucidChart
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </section>

      <section ref={cvRef} className="cv">
        <h3>My resume</h3>
        <div className="cv-content">
          <p>Discover my background and my skills in detail in my resume :</p>
          <div className="cv-actions">
            <a
              href="cv_Yanni_Bouaoud.pdf"
              target="_blank"
              className="cv-button view"
            >
              📄 Check out my resume
            </a>
            <a
              href="cv_Yanni_Bouaoud.pdf"
              download
              className="cv-button download"
            >
              ⬇️ Download my resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
