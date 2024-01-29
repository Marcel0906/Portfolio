import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./Home.css";


const Home = () => {
  return (
    <div>
      <br></br>
      <h1>Hallo, ich bin Marcel Kubetin</h1>{" "}
      <p>DCI Student zum Full Stack Web Developer aus Bielefeld.  <Link to="/contact">
          <button className="btn">Contact me</button>
        </Link>
        <div className="icon-list">
        <div className="icon1">
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
        <div className="icon2">
          <FontAwesomeIcon icon={faGithub} />
        </div>
      </div>
        </p>
      
      
      
    </div>
  );
};

export default Home;

// {/* <a href="/">Go to home</a> */} old version
