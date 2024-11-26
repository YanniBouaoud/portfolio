import React, { useEffect, useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [active, setActive] = useState(false);

  // Trigger the active class after the component mounts
  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <div className={`contact ${active ? "active" : ""}`}>
      <h2>Contactez-moi</h2>
      <form>
        <label>Nom :</label>
        <input type="text" name="name" />
        <label>Email :</label>
        <input type="email" name="email" />
        <label>Message :</label>
        <textarea name="message" />
        <button type="submit">Envoyer</button>
      </form>
      <div className="social-links">
        <a href="https://linkedin.com/in/yannilille" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/YanniBouaoud" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
};

export default Contact;
