/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import styles from '../assets/ReseumeComponents.module.css'; // Import CSS module

const Skills = ({ resume }) => {
  return (
    <div>
      <ul className={styles.bulletList}>
        {resume[0].skills.map((skill, index) => (
          <li key={index} className={styles.listItem}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
