import burgerImage from "../assets/burgershot.jpg";
import deezifyImage from "../assets/deezify.jpg";
import weatherImage from "../assets/weather-app.jpg";
import budgetImage from "../assets/budget-tracker.jpg";
import spiceImage from "../assets/spice.jpg";
import bookshelfImage from "../assets/bookshelf.jpg";
import movethekImage from "../assets/movethek4.jpg";
import jobfinderImage from "../assets/job-project.jpg";
import typo3Image from "../assets/typo3.jpg";

import React, { useState, useEffect } from "react";

const Projects = () => {
  const [language, setLanguage] = useState("de");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "de" ? "en" : "de"));
  };

  useEffect(() => {}, [language]);

  const projects = [
    {
      id: 1,
      title: "Burgershot",
      description:
        language === "de"
          ? "Erstes Teamprojekt ist eine vollständige Restaurantwebsite"
          : " First team project is a full restaurant website",
         
      image: burgerImage,
      link: "https://burger-shot-5378ezzpg-na5ty.vercel.app/",
    },
    {
      id: 2,
      title: "Spotify-Klon Deezify",
      description:
        language === "de"
          ? "Zweites Teamprojekt ist eine Musikbibliothek"
          : "Second team project is a music library",
      image: deezifyImage,
      link: "https://github.com/Marcel0906/Spotify-Klon-Deezify",
    },
    {
      id: 3,
      title: "Weather-App",
      description:
        language === "de"
          ? "Solo-Projekt mit Wetterdaten von OpenWeatherMap"
          : "Solo project with weather data from OpenWeatherMap",
      image: weatherImage,
      link: "https://github.com/Marcel0906/Weather-App",
    },
    {
      id: 4,
      title: "Budget-Tracker App",
      description:
        language === "de"
          ? "Verschiedene Single Page Applications"
          : "Various single page applications",
      image: budgetImage,
      link: "https://github.com/Marcel0906/different-spa-projects-with-cra",
    },
    {
      id: 5,
      title: "Spice Shop",
      description:
        language === "de"
          ? "Drittes Teamprojekt ist ein an Amazon orientierter Einkaufsshop"
          : "Third team project is an Amazon-like shopping site",
      image: spiceImage,
      link: "https://github.com/BulletStormXT/amazon-clone",
    },
    {
      id: 6,
      title: "Bookshelf",
      description:
        language === "de"
          ? "Erstes Backend Teamprojekt ist ein digitales Bücherregal mit Such-, Lösch- und Filterfunktion"
          : "First backend team project is a digital bookshelf with search, delete and filter function",
      image: bookshelfImage,
      link: "https://github.com/Marcel0906/Bookshelf-API",
    },
    {
      id: 7,
      title: "Mov-E-Thek",
      description:
        language === "de"
          ? "Finales Teamprojekt ist eine Online-Videothek und E-Commerce-Plattform"
          : "Final team project is an online video store and e-commerce platform",
      image: movethekImage,
      link: "https://github.com/BulletStormXT/movi-e-thek",
    },
    {
      id: 8,
      title: "Jobfinder",
      description:
        language === "de"
          ? "Privates Solo-Projekt ist eine React-Jobsuche für Webentwickler und eine Job Erstellung"
          : "Private solo project is a React job search for web developers and a job creation",
      image: jobfinderImage,
      link: "https://github.com/Marcel0906/react-jobfinder",
    },
    {
      id: 9,
      title: "Typo3 internship project",
      description:
        language === "de"
          ? "Typo3 Portfolio Projekt in Kooperation mit der Web-Kon Internetagentur"
          : "Typo3 portfolio project in cooperation with Web-Kon Internet agency",
      image: typo3Image,
      link: "https://github.com/Marcel0906/typo3-project",
    },
  ];
  return (
    <div className="projects">
      <div className="language-btn-container">
        <button className="language-btn" onClick={toggleLanguage}>
          {language === "de" ? "Switch to English" : "Wechsel zu Deutsch"}
        </button>
      </div>
      <h1>{language === "de" ? "Projekte" : "Projects"}</h1>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-preview" key={project.id}>
            <img className="image-project" src={project.image} alt={project.title} />
            <h3>{project.title}</h3> <h4> {project.description}</h4>
            <a href={project.link} target="_blank" rel="noreferrer">
              <button className="btn">
                {language === "de" ? "Zum Projekt" : "View Project"}
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
