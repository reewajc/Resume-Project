/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import styles from '../assets/ReseumeComponents.module.css'; // Import CSS module

const Skills = ({ resume }) => {
  // Helper function to chunk array into smaller arrays
  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  return (
    <div>
      {chunkArray(resume[0].skills, 4).map((chunk, index) => (
        <ul key={index} className={styles.bulletList}>
          {chunk.map((skill, skillIndex) => (
            <li key={skillIndex} className={styles.listItem}>{skill}</li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default Skills;
