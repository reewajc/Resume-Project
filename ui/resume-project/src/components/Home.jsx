import profileImage from '../assets/profile.png'; // Import your profile image
import ParticleComponent from './ParticleComponent';
import './Home.css'; // Import your CSS file
import SocialLinks from './SocialLinks';

const Home = () => {

  const greeting = new Date().getHours() < 12 ? 'Good Morning' : 'Good Afternoon';

  return (
    <> 
    <ParticleComponent/>
     <div className="home-container">
      <div className="greeting-container">
        <h1 className="greeting">👋🏻 {greeting}</h1>
        <p>
          Hi, I am  Ram ! I am a passionate Software Engineer with experience in AWS and Web Development. Welcome to my portfolio
          website. Here, you can learn more about my background, skills, and projects.
        </p>
        <SocialLinks/>
      </div>
      <img src={profileImage} alt="Profile" className="profile-image" />
    </div>
    </>
  
  );
};

export default Home;
