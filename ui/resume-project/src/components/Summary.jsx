/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import styles from '../assets/ReseumeComponents.module.css'; // Import CSS module


const Summary = ({ resume }) => {
  return (
    <div className={styles.summaryContainer}> 
      {
        resume.map(resumeItem => (
          <p key={resumeItem.id} className={styles.summaryText}>{resumeItem.summary}</p> 
        ))
      }
    </div>
  );
}

export default Summary