/* eslint-disable react/prop-types */
import './Experience.css'; // Import the CSS file for styling

const Experience = ({ resume }) => {
  return (
    <div className="experience">
      <div className="header">
        <h2 className="experience-title">{resume.title}</h2>
        <div className="sub-details">
          <p><strong>Company:</strong> {resume.company}</p>
          <p><strong>Location:</strong> {resume.location}</p>
          <p><strong>Dates:</strong> {resume.dates}</p>
        </div>
      </div>
      <div className="experience-responsibilities">
        <h3>Responsibilities:</h3>
        <ul>
          {resume.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
      {resume.environment && (
        <div className="experience-environment">
          <h3>Environment:</h3>
          <ul>
            {resume.environment.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Experience;
