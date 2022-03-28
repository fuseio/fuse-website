import React from 'react'
import ArrowDown from '@/assets/images/arrow-down.svg'

const SectionOne = () => {
  return (
    <>
      <div className='ecosystem'>
        <div className='ecosystem__hero_text'>
          <h1 className='ecosystem__title'>The best companies that <br />built on Fuse Network</h1>
          <p className='ecosystem__description'>
            From DeFi and Web3 applications to real world<br /> implementations that positively impact the lives of<br /> everyday people - browse the innovative projects<br /> building on Fuse.
          </p>
          <button
            rel='noreferrer noopener'
            className='ecosystem__button main_button main_button--no-arrow'
            href='mailto:hello@fuse.io'
          >
            Submit your project
          </button>
        </div>
        <div className='ecosystem__circle'>
          <div className='circle__blue' />
        </div>
      </div>
      <div className='ecosystem__arrow-wrapper'>
        <img className='' src={ArrowDown} alt='arrow-down' />
      </div>
    </>
  )
}

export default SectionOne
