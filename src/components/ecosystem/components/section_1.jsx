import React from 'react';
import EcosystemMain from '@/assets/images/ecosystem_main.png';
import ArrowDown from '@/assets/images/arrow-down.svg';

const SectionOne = () => {
  return (
    <section className='ecosystem_main__wrapper'>
      <div className='ecosystem_main__container'>
        <div className='ecosystem_main'>
          <div className='ecosystem_main__hero_text'>
            <h1 className='ecosystem_main__title'>The best companies that built on Fuse Network</h1>
            <p className='ecosystem_main__description'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className='ecosystem_main__img'>
            <img src={EcosystemMain} alt='ecosystem_main' />
          </div>
        </div>
        <div className='ecosystem_main__arrow-wrapper'>
          <img className='' src={ArrowDown} alt='arrow-down' />
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
