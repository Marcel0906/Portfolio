import burgerImage from "../assets/burgershot.jpg";
import deezifyImage from "../assets/deezify.jpg";
import weatherImage from "../assets/weather-app.jpg";
import budgetImage from "../assets/budget-tracker.jpg";

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
      description: "Soloprojekt mit Wetterdaten von OpenWeatherMap",
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
  ];
  return (
    <div className="Projects">
      <br></br> <h1>Projekte</h1>
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
            Developer von der Anfangszeit im Juli 2023 bis jetzt (Stand: Februar
            2024) nach. Zukünftige Projekte werden folgen.{" "}
          </p>
          <br></br>
        
    
    </div>
  );
};

export default Projects;
