/* eslint-disable react/prop-types */

const Experience = ({resume}) => {
  return (
    <div className="experience">
      <h2>{resume.title}</h2>
      <p><strong>Company:</strong> {resume.company}</p>
      <p><strong>Location:</strong> {resume.location}</p>
      <p><strong>Dates:</strong> {resume.dates}</p>
      <div>
        <h3>Responsibilities:</h3>
        <ul>
          {resume.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Environment:</h3>
        <ul>
          {resume.environment?.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
