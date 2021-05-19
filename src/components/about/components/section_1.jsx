import React from 'react'
import about from '@/assets/img/stack_about.png'

const SectionOne = () => {
  return (
    <section className='about_main__wrapper'>
      <div className='about_main__container'>
        <div className='about_main'>
          <div className='grid-x'>
            <div className='about_main__content medium-10 small-24 grid-y align-center'>
              <h1 className='title'>The future of money <br /> is open–source.</h1>
              <p className='text'>
                What was once a concept is now emerging as a reality, with ever-increasing transactional flow being captured by peer–to–peer networks. With Fuse, anyone can launch and manage these new networks, empowered by simple, easy to use tools.
                <br />
                <br />
                A highly-skilled, diverse team of blockchain and web–based technology experts has been assembled in order to execute on our ambitious vision of putting truly democratized and borderless money into the hands of millions.
              </p>
            </div>
            <div className='about_main__image medium-12 small-24 grid-x align-right'>
              <img src={about} alt='about-image' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionOne
