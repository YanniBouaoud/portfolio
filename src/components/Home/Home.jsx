import React from "react";
import "./Home.css";

const Home = () => (
  <header id="home">
    <p>
      Yanni Bouaoud, Full Stack Developer passionate about creating modern
      solutions.
    </p>
    <h1>FULL STACK DEVELOPPER</h1>
    <div className="about">
      <p style={{ fontSize: "20px", marginBottom: "15px" }}>
        Code weaves itself line by line, connecting logic to experience.
      </p>
      <p style={{ fontSize: "20px", marginBottom: "10px" }}>
        It creates digital worlds where every detail matters.
      </p>
      <p style={{ fontSize: "18px", marginTop: "10px", fontStyle: "italic" }}>
        - Yanni Bouaoud
      </p>
    </div>
  </header>
);

export default Home;
