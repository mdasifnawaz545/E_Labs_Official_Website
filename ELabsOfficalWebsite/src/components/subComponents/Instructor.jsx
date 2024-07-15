import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Instructor = () => (
  <div className="instructor">
    <div className="instructor-img"></div>
    <div className="instructor-info">
      <h3>Name of Instructor</h3>
      <div className="social-icons">
        <a href="#">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faGithub} className="icon" />
          {/* Use the imported icon */}
        </a>
      </div>
    </div>
    <p className="instructor-description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
      amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.Lorem ipsum dolor sit amet,
    </p>
  </div>
);

export default Instructor;
