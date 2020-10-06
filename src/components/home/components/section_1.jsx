import React, { useRef, useEffect } from 'react'
import lottie from 'lottie-web'
import { PopupText } from 'react-calendly'
import Header from '@/components/header'
import whiteArrow from '@/assets/images/white_arrow.svg'
import newIcon from '@/assets/images/new_notification.png'
import arrowIcon from '@/assets/images/arrow_new.svg'
import blueArrow from '@/assets/images/blue_arrow.svg'
import animationData from '@/assets/lottie/home_page/data.json'

const SectionOne = () => {
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
      <div className='section-A__overlay grid-x grid-margin-x'>
        <div className='section-A__wrapper grid-x align-middle align-center medium-12 small-24'>
          <div className='section-A__main'>
            <div class='section-A__news'>
              <img alt="new_notification" src={newIcon} />
              <a rel="noreferrer noopener" class='link'
                href='https://medium.com/fusenet/fuse-public-release-on-mesa-decentralised-exchange-ce75c4534a60' target="_blank">
                Fuse Liquidity Release on Mesa
                Thursday, October 22nd
                </a>
              <span class="arrow"><img alt="arrow" src={arrowIcon} /></span>
            </div>
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
        <div className='section-A__image medium-12 small-24'>
          <div id="lottie" ref={lottieRef} />
        </div>
      </div>
    </section>
  )
}

export default SectionOne