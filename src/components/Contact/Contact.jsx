import React, { useEffect, useState } from "react";
import "./Contact.css";
import LetsChatService from "../../services/LetsChatService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [active, setActive] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    setActive(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await LetsChatService.save(formData);
      console.log("Message sent successfully:", response);
      setSuccessMessage("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setError(null); // Clear any previous errors
    } catch (err) {
      console.error("Error sending message:", err);
      setError("Failed to send the message. Please try again later.");
      setSuccessMessage(null); // Clear any previous success messages
    }
  };

  return (
    <div className={`contact ${active ? "active" : ""}`}>
      <h2>Let's Chat</h2>
      <form onSubmit={handleSubmit}>
        <label>Name :</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label>Email :</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label>Message :</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Contact;
