/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
const Skills = ({resume}) => {
  return (
    <div>
    <h1>Skills</h1>
    {resume.map(resume => {
    return resume.skills.map(skil => {
      return (
        <ul>
          <li>{skil}</li>
        </ul>
      )
     })
    })}
    </div>
  )
}


export default Skills