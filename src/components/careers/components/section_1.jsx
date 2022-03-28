import React from 'react'
import joinUs from '@/assets/img/join_us.png'

const SectionOne = () => {
  return (
    <section className='careers'>
      <div className='careers__wrapper'>
        <div className='careers__container'>
          <div className='careers__main'>
            <h1 className='main_title'>
              Join <span>us</span>
            </h1>
            <p className='careers__text'>
              We’re searching for people who are ready to jump right in, love collaborating, and value our culture of transparency to join our team. Come join us so together we can impact how teams work across the globe.
            </p>
          </div>
          <div className='careers__img'>
            <div><img src={joinUs} /></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionOne
