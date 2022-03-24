import React from 'react'
import EcosystemMain from '@/assets/images/ecosystem_main.png'
import ArrowDown from '@/assets/images/arrow-down.svg'

const SectionOne = () => {
  return (
    <>
      <div className='ecosystem'>
        <div className='ecosystem__hero_text'>
          <h1 className='ecosystem__title'>The best companies that built on Fuse Network</h1>
          <p className='ecosystem__description'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className='ecosystem__img'>
          <img src={EcosystemMain} alt='ecosystem' />
        </div>
      </div>
      <div className='ecosystem__arrow-wrapper'>
        <img className='' src={ArrowDown} alt='arrow-down' />
      </div>
    </>
  )
}

export default SectionOne
