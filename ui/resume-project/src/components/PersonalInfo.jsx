/* eslint-disable react/prop-types */
const PersonalInfo = ({resume}) => {

  return (
    <>
      {resume.map(resume => {
        return (
          <>
            <p>{resume.personal_info.name}</p>
            <p>{resume.personal_info.email}</p>
            <p>{resume.personal_info.phone}</p>
            <p>{resume.personal_info.address}</p>
            <p>{resume.personal_info.linkedin}</p>
            <p>{resume.personal_info.github}</p>
          </>
        ) 
      })}
    </>

  )
}


export default PersonalInfo;
