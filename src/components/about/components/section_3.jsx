import React from 'react'
import "../about.css"
import mark from "../../../assets/images/mark.png"
import linkedin from "../../../assets/images/linkedin.png"
import twitter from "../../../assets/images/twitter.png"
const SectionThree = () => {
    return (
         <section className="section-three">
      <div className='section-three__overlay grid-x'>
        <div className='section-three__wrapper small-24'>
            <h1 className='main-title'>
            Meet the Team
            </h1>
            <div className="grid-x">
             <div className='section-three__card  large-6'>
            <div className="section-three__card__content">
            <img src={mark} alt="mark smargon"/>
            <h2 className="content-name">Mark Smargon</h2>
            <h3 className="content-role">Founder & CEO</h3>
            <div className="content-icons">
                 <img src={linkedin} alt="linked in" className="linkedin"/>
                 <img src={twitter} alt="twitter"/>
            </div>
            </div> 
        </div>
          
        
        </div>
        </div>
      
      </div>
    </section>
    )
}

export default SectionThree
