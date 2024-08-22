import burgerImage from "../assets/burgershot.jpg";
import deezifyImage from "../assets/deezify.jpg";
import weatherImage from "../assets/weather-app.jpg";
import budgetImage from "../assets/budget-tracker.jpg";
import spiceImage from "../assets/spice.jpg"
import bookshelfImage from "../assets/bookshelf.jpg"
import movethekImage from "../assets/movethek2.jpg"
import jobfinderImage from "../assets/job-project.jpg"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Burgershot",
      description: "Erstes Teamprojekt ist eine vollständige Restaurantwebsite",
      image: burgerImage,
      link: "https://burger-shot-5378ezzpg-na5ty.vercel.app/",
    },
    {
      id: 2,
      title: "Spotify-Klon Deezify",
      description: "Zweites Teamprojekt ist eine Musikbibliothek",
      image: deezifyImage,
      link: "https://github.com/Marcel0906/Spotify-Klon-Deezify",
    },
    {
      id: 3,
      title: "Weather-App",
      description: "Solo-Projekt mit Wetterdaten von OpenWeatherMap",
      image: weatherImage,
      link: "https://github.com/Marcel0906/Weather-App",
    },
    {
      id: 4,
      title: "Budget-Tracker App",
      description: "Verschiedene Single Page Applications",
      image: budgetImage,
      link: "https://github.com/Marcel0906/different-spa-projects-with-cra",
    },
    {
      id: 5,
      title: "Spice Shop",
      description: "Drittes Teamprojekt ist ein an Amazon orientierter Einkaufsshop",
      image: spiceImage,
      link: "https://github.com/BulletStormXT/amazon-clone",
    },
    {
      id: 6,
      title: "Bookshelf",
      description: "Erstes Backend Teamprojekt ist ein digitales Bücherregal mit Such-, Lösch- und Filterfunktion", 
      image: bookshelfImage,
      link: "https://github.com/Marcel0906/Bookshelf-API",
    },
    {
      id: 8,
      title: "Mov-E-Thek",
      description: "Finales Teamprojekt ist eine Online-Videothek und E-Commerce-Plattform", 
      image: movethekImage,
      link: "https://github.com/BulletStormXT/movi-e-thek",
    },
    {
      id: 9,
      title: "Jobfinder",
      description: "Privates Solo-Projekt ist eine React-Jobsuche für Webentwickler und eine Job Erstellung", 
      image: jobfinderImage ,
      link: "https://github.com/Marcel0906/react-jobfinder",
    },
  ];
  return (
    <div className="projects">
      <h1>Projekte</h1>
        <div className="projects-container">
          
            {projects.map((project) => (
              <div className="project-preview"
              key={project.id}>
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3> <h4> {project.description}</h4>
                <a href={project.link} target="_blank" rel="noreferrer">
                  <button className="btn">Zum Projekt</button>
                </a>
                </div>
            ))}
            
          </div>
          <p>
            Diese Projekte zeichnen meinen Werdegang als DCI-Student zum Web
            Developer von der Anfangszeit im Juli 2023 bis jetzt (Stand: August
            2024) nach. Zukünftige Projekte werden folgen.{" "}
          </p>
    </div>
  );
};

export default Projects;
