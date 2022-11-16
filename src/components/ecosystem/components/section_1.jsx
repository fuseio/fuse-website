import React from 'react'
import ArrowDown from '@/assets/images/arrow-down.svg'

const SectionOne = () => {
  return (
    <>
      <div className='ecosystem'>
        <div className='ecosystem__hero_text'>
          <h1 className='ecosystem__title'>The Fuse Ecosystem</h1>
          <p className='ecosystem__description'>
            From DeFi and Web3 applications to real world<br /> implementations that positively impact the lives of<br /> everyday people - browse the innovative projects<br /> building on Fuse.
          </p>
          <a
            className='ecosystem__button main_button main_button--no-arrow'
            rel='noreferrer noopener'
            target='_blank'
            href='https://form.typeform.com/to/sGesyjyc?utm_medium=xxxxx'
          >
            Submit your project
          </a>
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
