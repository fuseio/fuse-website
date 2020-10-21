import React from 'react'
import Header from '@/components/header'
import about from "../../../assets/images/about-first.png"
import "../about.css"
const SectionOne = () => {
    return (
       <section className="section-one">
      <Header/>
      <div className='section-one__overlay grid-x '>
        <div className='section-one__wrapper medium-12 small-24'>
          <div className='section-one__main'>
            <h1 className='main_title'>
             Fuse Mission
            </h1>
            <p className='section-one__text'>
             Fuse was founded in 2019 with a mission to bring the power of mobile payments to communities around the world.
            </p>
         
          </div>
        </div>
        <div className='section-one__image medium-12 small-24'>
          <img src={about} alt="about-image"/>
        </div>
      </div>
    </section>
    )
}

export default SectionOne
