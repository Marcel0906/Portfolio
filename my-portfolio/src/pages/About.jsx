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
      <h1>About me</h1>
      <div className="text-zone">
      <p>Die IT faziniert mich schon seit langer Zeit. Ich habe mich privat sehr gerne über KI-Entwicklungen, Sicherheitstechnologien, Mobilfunk- und Festnetzausbau in Deutschland informiert. Dies zeigte sich zum Beispiel darin, dass ich Freunden und Familienmitgliedern bei der Zusammenstellung und Käufen von PCs, Laptops und Smartphones mit Rat und Tat zur Seite stand. Gerade in einer so stark wachsenden Branche wie der IT ist es wichtig up-to-date zu sein und sich über neue Technologien und Entwicklungen zu informieren. Daher wäre es für mich etwas ganz besonderes, als auszubildener Full-Stack Developer die Möglichkeit zu haben, in einer IT Firma zu arbeiten, die mit innovativen und neuen Technologien herausfordernde und diverse Projekte entwickeln möchte. </p>
      <p>In meinem bisherigen Werdegang haben Arbeitskollegen, Familie und Freunde stets meine Zuverlässigkeit, Pünktlichkeit, Ordnungsbewusstsein und Einsatzbereitschaft positiv hervorgehoben. In meinem Studium äußerte sich zum Beispiel diese Zuverlässigkeit, dass ich stets fristgerecht meine Hausarbeiten fertiggestellt und abgegeben habe. Im Web Development habe ich erste Berühungspunkte im agilen Projektmanagement gesammelt, wo ich diese Fähigkeiten gut einsetzen konnte und kann.</p>
<p>Meine Hobbies und persönlichen Interessen beinhalten eine richtige gesundheitliche Balance zur Bildschirmarbeit als Web Developer herzustellen. So fasziniert mich besonders das Wandern in der Natur mit guten Freunden, Fahrradfahren, campen, joggen, schwimmen und bouldern. Wichtig ist mir diese Passion mit Freunden und Familienmitgliedern zu teilen.</p>      
        <div className="stage-cube-cont">
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
