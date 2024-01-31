 import burgerImage from '../assets/burgershot.jpg';
 import deezifyImage from '../assets/deezify.jpg';
 import weatherImage from '../assets/weather-app.jpg';
 import budgetImage from '../assets/budget-tracker.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Burgershot",
      description: "Erstes Teamprojekt ist eine vollständige Restaurantwebsite",
      image: burgerImage,
      link: "https://burger-shot-5378ezzpg-na5ty.vercel.app/"
    },
    {
      id: 2,
      title: "Spotify-Klon Deezify",
      description: "Zweites Teamprojekt ist eine Musikbibliothek",
      image: deezifyImage,
      link: "https://github.com/Marcel0906/Spotify-Klon-Deezify"
    },
    {
      id: 3,
      title: "Weather-App",
      description: "Soloprojekt mit Wetterdaten von OpenWeatherMap",
      image: weatherImage,
      link: "https://github.com/Marcel0906/Weather-App"
    },
    {
      id: 4,
      title: "Budget-Tracker App",
      description: "Verschiedene Single Page Applications",
      image: budgetImage,
      link: "https://github.com/Marcel0906/different-spa-projects-with-cra"
    },
  ];
  return (
    <div>
      <br></br> <h1>Einige ausgewählte Projekte</h1>
      <section>
        
        <ul>
          
          {projects.map((project) => (
            <li key={project.id}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3> <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer">
                <button className="btn">Zum Projekt</button>
              </a>
            </li>
          ))}
        </ul>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias vel quos asperiores fuga explicabo, quas, maxime quisquam aliquam provident tenetur nulla tempore deleniti laboriosam repellendus temporibus eius odio quaerat, placeat molestiae accusantium quae dicta? Animi, fugiat dolore? Velit impedit unde animi nihil veniam iste id harum adipisci nulla, exercitationem suscipit optio autem consequuntur neque iusto placeat alias maxime mollitia. Ratione fugit pariatur aliquam laudantium at inventore optio hic exercitationem accusamus debitis unde, quidem asperiores dolorum animi minus eligendi mollitia ut alias recusandae? Fugit debitis vitae rerum sapiente quidem nulla dicta, rem illo saepe aut beatae quod nostrum! Assumenda, odit deserunt.

        </p>
      </section>
    </div>
    
  );
};

export default Projects;
