/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const Summary = ({resume}) => {

  return (
    <div>{
      resume.map(resume => {
        return <p>{resume.summary}</p>
        
      })
      }
      </div>
  )
}

export default Summary