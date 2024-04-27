/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from '../assets/ReseumeComponents.module.css'; // Import CSS module

// Import your components
import PersonalInfo from './PersonalInfo';
import Experiences from './Experiences';
import Skills from './Skills';
import Summary from './Summary';
import useResumeService from '../hook/useResumeService';
import ParticleComponent from './ParticleComponent';

const ResumeComponents = ({ url }) => {
  const { isPending, error, data, isFetching } = useResumeService(url);
  const [activeSection, setActiveSection] = useState(null);

  if (isPending) return <div className={styles.error}>Loading...</div>;
  if (error) return <div className={styles.error}>Error: {error.message}</div>;
  if (isFetching) return <div className={styles.error}>Fetching...</div>;

  const handleSectionClick = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <>
    <ParticleComponent/>
    <div className={styles.container}>
      <section
        className={`${styles.section} ${activeSection === 'personalInfo' && styles.active}`}
        onClick={() => handleSectionClick('personalInfo')}
      >
        <h2 className={styles.sectionHeader}>Personal Information</h2>
        {activeSection === 'personalInfo' && <PersonalInfo resume={data} />}
      </section>

      <section
        className={`${styles.section} ${activeSection === 'experiences' && styles.active}`}
        onClick={() => handleSectionClick('experiences')}
      >
        <h2 className={styles.sectionHeader}>Experiences</h2>
        {activeSection === 'experiences' && <Experiences resume={data} />}
      </section>

      <section
        className={`${styles.section} ${activeSection === 'skills' && styles.active}`}
        onClick={() => handleSectionClick('skills')}
      >
        <h2 className={styles.sectionHeader}>Skills</h2>
        {activeSection === 'skills' && <Skills resume={data} />}
      </section>

      <section
        className={`${styles.section} ${activeSection === 'summary' && styles.active}`}
        onClick={() => handleSectionClick('summary')}
      >
        <h2 className={styles.sectionHeader}>Summary</h2>
        {activeSection === 'summary' && <Summary resume={data} />}
      </section>
    </div>
    </>
  );
};

export default ResumeComponents;
