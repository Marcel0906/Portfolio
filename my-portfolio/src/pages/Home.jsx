import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <br></br>
      <h1>Hallo, ich bin Marcel Kubetin</h1>
      <p>
        DCI Student zum Full Stack Web Developer aus Bielefeld.
        <Link to="/contact">
          <button className="btn">Contact me</button>
        </Link>
      </p>
      <div className="icon-list">
        <div className="icon1">
          <a
            href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="icon2">
          <a href="https://github.com/Marcel0906" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
