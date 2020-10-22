import React from 'react'
import linkedin from "../../../assets/images/linkedin.png"
import twitter from "../../../assets/images/twitter.png"

const TeamMember = ({ picture, name, role,linked }) => {
  return (
    <div className='section-three__card  large-6'>
      <div className="section-three__card__content">
        <img src={picture} alt={name.toLowerCase()} />
        <h2 className="content-name">{name}</h2>
        <div className="content-icons">
        <h3 className="content-role">{role}</h3>
         <a href={linked} target="_blank">
          <img src={linkedin} alt="linked in" className="linkedin" />
          </a>
        </div>
        
      </div>
    </div>
  )
}

export default TeamMember