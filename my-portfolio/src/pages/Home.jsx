import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Home = () => {
  const [language, setLanguage] = useState("de");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "de" ? "en" : "de"));
  };

  useEffect(() => {
    // Hier könntest du Logik hinzufügen, um die Spracheinstellungen zu speichern oder zu laden
  }, [language]);
  return (
    <div className="Home">
     <div className="language-btn-container">
      <button className="language-btn" onClick={toggleLanguage}>
        {language === "de" ? "Switch to English" : "Wechsel zu Deutsch"}
      </button>
      </div>
      <h1>{language === "de" ? "Hallo, ich bin Marcel Kubetin." : "Hello, I am Marcel Kubetin."}</h1>
      <p>
        {language === "de" ? (
          <>
            DCI Student zum <span>Full Stack Web Developer aus Bielefeld.</span>
            <Link to="/contact">
              <button className="btn">Kontaktiere mich</button>
            </Link>
          </>
        ) : (
          <>
            DCI student to <span>Full Stack Web Developer from Bielefeld.</span>
            <Link to="/contact">
              <button className="btn">Contact me</button>
            </Link>
          </>
        )}
      </p>
      {/* <h1>Hallo, ich bin Marcel Kubetin.</h1>
      <p>
        DCI Student zum <span>Full Stack Web Developer aus Bielefeld.</span>
        <Link to="/contact">
          <button className="btn">Contact me</button>
        </Link>
      </p> */}

      <div className="icon-list">
        <div className="icon1">
          <a
            href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="icon2">
          <a
            href="https://github.com/Marcel0906"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
      <br></br>
      <div className="my-image">
        <img src={require("../assets/me-actual-small.jpg")} alt="" />
      </div>
    </div>
  );
};

export default Home;
