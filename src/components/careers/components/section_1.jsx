import React from 'react'
import joinUs from '@/assets/img/join_us.png'

const SectionOne = () => {
  return (
    <section className='careers'>
      <div className='careers__wrapper'>
        <div className='careers__container'>
          <div className='careers__main'>
            <h1 className='main_title'>
              Join us
            </h1>
            <br />
            <p className='careers__text'>
              We're on a mission to build the most business and consumer-friendly ecosystem for mainstream adoption of web3 payments.
              <br />
              <br />
              Positions are available for brilliant, passionate people at our headquarters in Tel-Aviv and remotely
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
