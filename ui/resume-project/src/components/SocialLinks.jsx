import { FaFacebook, FaLinkedin, FaTiktok, FaYoutube, FaGithub } from 'react-icons/fa';
import './SocialLinks.css'; // Import your CSS file

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://www.facebook.com/ramchapagain/" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="social-icon facebook" />
      </a>
      <a href="https://www.linkedin.com/in/ram-chapagai-713226173/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="social-icon linkedin" />
      </a>
      <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
        <FaTiktok className="social-icon tiktok" />
      </a>
      <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
        <FaYoutube className="social-icon youtube" />
      </a>
      <a href="https://github.com/reewajc" target="_blank" rel="noopener noreferrer">
        <FaGithub className="social-icon github" />
      </a>
    </div>
  );
};

export default SocialLinks;
