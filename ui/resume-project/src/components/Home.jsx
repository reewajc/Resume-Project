import { useState, useEffect } from 'react';
import profileImage from '../assets/profile.png'; // Import your profile image
import ParticleComponent from './ParticleComponent';
import './Home.css'; // Import your CSS file
import SocialLinks from './SocialLinks';

const Home = () => {

  const [randomColor, setRandomColor] = useState(''); // State to hold random color

  // Function to generate random RGB color
  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  };

  useEffect(() => {
    // Set random color when component mounts
    setRandomColor(getRandomColor());

    // Change color during easing out
    const timeout = setTimeout(() => {
      document.querySelector('.greeting').style.color = getRandomColor(); // Change color dynamically
      document.querySelector('.greeting').classList.add('fade-out');
    }, 1500); // Adjust the timing to match the easing out duration

    return () => clearTimeout(timeout);
  }, []);

  const greeting = new Date().getHours() < 12 ? 'Good Morning' : 'Good Afternoon';

  return (
    <> 
    <ParticleComponent/>
     <div className="home-container">
      <div className="greeting-container">
        <h1 className="greeting" style={{ color: randomColor }}>👋🏻 {greeting}</h1>
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
