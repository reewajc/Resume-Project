/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import Experience from "./Experience";

const Experiences = ({resume}) => { 
  return (
      <div>
          {resume.map(resume => {
          return resume.experience.map(experience => {
            return  <Experience resume={experience}/>
             })
          })}
      </div>
  );
};

export default Experiences;

