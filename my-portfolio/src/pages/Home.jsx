import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <br></br>
      <h1>Hallo, ich bin Marcel Kubetin.</h1>
      <p>
        DCI Student zum <span>Full Stack Web Developer aus Bielefeld.</span>
        <Link to="/contact">
          <button className="btn">Contact me</button>
        </Link>
      </p>

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
        <img src={require("../assets/me-small.JPG")} alt="" />
      </div>
    </div>
  );
};

export default Home;
