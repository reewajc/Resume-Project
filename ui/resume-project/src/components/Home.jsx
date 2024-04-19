import profileImage from '../assets/profile.png'; // Import your profile image
import ParticleComponent from './ParticleComponent';

const Home = () => {
  return (
    <> 
    <ParticleComponent/>
     <div>
      <h1>Welcome to My Portfolio</h1>
      <img src={profileImage} alt="Profile" style={{ width: '200px', borderRadius: '50%' }} />
      <p>
        Hi, I am  Ram ! I am a passionate Software Engineer with experience in AWS and Web Development. Welcome to my portfolio
        website. Here, you can learn more about my background, skills, and projects.
      </p>
    </div>
    </>
  
  );
};

export default Home;
