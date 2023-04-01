import "./Footer.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <div className="social-link">
        <a href="https://github.com/LeandroMatonte" target="_blank" rel="noreferrer">
          <FontAwesomeIcon size="2x" icon={faGithub} /> LeandroMatonte
        </a>
      </div>
    </footer>
  );
};

export default Footer;
