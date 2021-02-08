import React, { useRef, useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import lottie from 'lottie-web'
import animationData from '@/assets/lottie/network_page/data.json'

const SectionOne = () => {
  const lottieRef = useRef(null)

  useEffect(() => {
    if (lottieRef.current) {
      lottie.loadAnimation({
        animationData,
        container: lottieRef.current,
        renderer: 'svg',
        loop: true
      })
    }
  }, [])
  return (
    <section className='network_main'>
      <div className='lottie' ref={lottieRef} />
      <div className='network_main__wrapper'>
        <div>
          <div className='network_main__top'>
            <div className='title'><FormattedMessage defaultMessage='Fuse Network' /></div>
            <div className='text'>
              <FormattedMessage
                defaultMessage='A fast, decentralised and low cost {newLine} alternative to existing digital payments.'
                values={{
                  newLine: <br />
                }}
              />
            </div>
          </div>
          <div className='network_main__bottom'>
            <div className='text text--dark'>
              <FormattedMessage
                defaultMessage='Helping power day-to-day mobile payments. {newLine} Free of intermediaries and powered by a {newLine} global network of local operators.'
                values={{
                  newLine: <br />
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionOne
