import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div className="about-page">
      <br></br>
      <h1>Über mich</h1>
      <div className="text-zone">
      <p>Die IT faziniert mich schon seit Jahren. Ich habe mich privat gerne unter anderem über KI-Entwicklungen, Sicherheitstechnologien, Mobilfunk- und Festnetzausbau in Deutschland informiert. Dies zeigte sich zum Beispiel darin, dass ich Freunden und Familienmitgliedern bei der Zusammenstellung und beim Kaufen von PCs, Laptops und Smartphones mit Rat und Tat zur Seite stand. Gerade in einer so stark wachsenden Branche, wie der IT, ist es wichtig, up-to-date zu sein und sich über neue Technologien und Entwicklungen zu informieren. Daher ist es für mich herausfordernd, als auszubildener Full-Stack Developer die Möglichkeit zu nutzen, in einer IT Firma zu arbeiten, die mit innovativen und neuen Technologien diverse Projekte entwickelt. </p>
      <p>Bisher zeichneten Zuverlässigkeit, Pünktlichkeit, Ordnungsbewusstsein und Einsatzbereitschaft meinen Arbeitseinsatz aus. Fristgerechte Fertigstellung und Abgabe meiner Hausarbeiten im Studium sowie Teamarbeit mit anderen DCI-Studenten in der Weiterbildung zum Web Developer kennzeichneten meine Berühungspunkte im agilen Projektmanagement.</p>
<p>Meine persönlichen Interessen erstrecken sich über das Wandern in der Natur mit Freunden und Familie, Fahrradfahren, campen, joggen, schwimmen und bouldern. Diese Interessen dienen meiner gesundheitlichen Balance zur Bildschirmarbeit. </p>      
        <div className="stage-cube-cont">
        <h2>Skillset</h2>
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#46b34c" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
