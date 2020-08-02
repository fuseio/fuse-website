import React, { useRef, useEffect } from 'react'
import lottie from 'lottie-web'
import { PopupText } from 'react-calendly'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import Header from '@/components/header'
import whiteArrow from '@/assets/images/white_arrow.svg'
import blueArrow from '@/assets/images/blue_arrow.svg'
import animationData from '@/assets/lottie/home_page/data.json'

const SectionOne = ({ push }) => {
  const lottieRef = useRef(null)

  useEffect(() => {
    if (lottieRef.current)
      lottie.loadAnimation({
        animationData,
        container: lottieRef.current,
        renderer: 'svg',
        loop: true,
      })
  }, [lottieRef])
  return (
    <section className="section-A">
      <Header />
      <div className='section-A__overlay grid-x'>
        <div className='section-A__wrapper cell grid-x align-middle'>
          <div className='section-A__main'>
            <h1 className='main_title'>
              Turning communities into thriving economies
            </h1>
            <p className='section-A__text'>
              Allowing companies and communities to enable secure and <br />friction-less mobile payments with ease.
            </p>
            <div className="grid-x buttons">
              <a rel="noopener noreferrer" href='https://studio.fuse.io' target="_blank" role="button" className='cell medium-10 small-12'>
                <button data-event="Launch an economy"
                  className='section-A__launch__button section-A__launch__button--blue'>
                  <span>Launch an economy</span>
                  <span className='section-A__arrow'>
                    <img alt='image' src={whiteArrow} />
                  </span>
                </button>
              </a>
              <div className='cell medium-10 small-12'>
                <button
                  className='section-A__launch__button section-A__launch__button--transparent'>
                  <span><PopupText text='Book a demo' url='https://calendly.com/mark-fuse' /></span>
                  <a className='section-A__arrow'>
                    <img alt='image' src={blueArrow} />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="lottie" ref={lottieRef} className="wow slideInRight section-A__image large-12 small-24" />
    </section>
  )
}

export default connect(null, {
  push
})(SectionOne)

// export default SectionOne