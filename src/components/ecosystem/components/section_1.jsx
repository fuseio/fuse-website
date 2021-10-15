import React from 'react'
import EcosystemMain from '@/assets/images/ecosystem_main.png'

const SectionOne = () => {
  return (
    <section className='ecosystem_main__wrapper'>
      <div className='ecosystem_main__container'>
        <div className='ecosystem_main'>
          <div className='ecosystem_main__hero_text'>
            <h1 className='ecosystem_main__title'>
              A Flourishing Ecosystem of Leading Brands Building on Fuse
            </h1>
            <p className='ecosystem_main__description'>
              From DeFi and Web3 applications to real world implementations that positively impact the lives of everyday people - browse the innovative projects building on Fuse.
            </p>
            <button type='primary' className='ecosystem_main__button main_button main_button--no-arrow main_button--bold'>
              Submit your project
            </button>
          </div>
          <div className='ecosystem_main__img'>
            <img src={EcosystemMain} alt='ecosystem_main' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionOne
