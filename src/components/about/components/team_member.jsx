import React from 'react'
import linkedin from "../../../assets/images/linkedin.png"
import twitter from "../../../assets/images/twitter.png"

const TeamMember = ({ picture, name, role }) => {
  return (
    <div className='section-three__card  large-6'>
      <div className="section-three__card__content">
        <img src={picture} alt={name.toLowerCase()} />
        <h2 className="content-name">{name}</h2>
        <h3 className="content-role">{role}</h3>
        <div className="content-icons">
          <img src={linkedin} alt="linked in" className="linkedin" />
          <img src={twitter} alt="twitter" />
        </div>
      </div>
    </div>
  )
}

export default TeamMember