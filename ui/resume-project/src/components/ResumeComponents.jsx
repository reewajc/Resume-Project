/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import styles from '../assets/ReseumeComponents.module.css' // Import CSS module

// Import your components
import PersonalInfo from './PersonalInfo';
import Experiences from './Experiences';
import Skills from './Skills';
import Summary from './Summary';
import useResumeService from '../hook/useResumeService';

const ResumeComponents = ({ url }) => {
  const { isPending, error, data, isFetching } = useResumeService(url);

  if (isPending) return <div className={styles.error}>Loading...</div>;
  if (error) return <div className={styles.error}>Error: {error.message}</div>;
  if (isFetching) return <div className={styles.error}>Fetching...</div>;

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.sectionHeader}>Personal Information</h2>
        <PersonalInfo resume={data} />
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionHeader}>Experiences</h2>
        <Experiences resume={data} />
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionHeader}>Skills</h2>
        <Skills resume={data} />
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionHeader}>Summary</h2>
        <Summary resume={data} />
      </section>
    </div>
  );
};

export default ResumeComponents;
