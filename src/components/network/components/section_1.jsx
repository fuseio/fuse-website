import React, { useRef, useEffect } from 'react'
import lottie from 'lottie-web'
import Header from '@/components/header'
import whiteArrow from '@/assets/images/white_arrow.svg'
import blueArrow from '@/assets/images/blue_arrow.svg'
import animationData from '@/assets/lottie/network_page/data.json'

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
  }, [])
  return (
    <section className="network_main">
      <div className='lottie' ref={lottieRef} />
      <Header isNetworkHeader />
      <div className='network_main__wrapper'>
        <div>
          <div className='network_main__top'>
            <div className='title'>Fuse network</div>
            <div className='text'>A fast, decentralised and low cost <br /> alternative to existing digital payments.</div>
          </div>
          <div className='network_main__bottom'>
            <div className='text text--dark'>Helping power day-to-day mobile payments <br /> Free of intermediaries and powered by a <br /> global network of local operators </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionOne
