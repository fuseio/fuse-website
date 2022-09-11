import React from 'react'
import { isMobileOnly } from 'react-device-detect'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'

import ChargeLogo from '@/assets/images/charge_logo.svg'
import VoltageLogo from '@/assets/images/voltage_logo.svg'
import ChainstackLogo from '@/assets/images/chainstack_logo.svg'

SwiperCore.use([Navigation, Pagination])

const items = [
  {
    image: ChargeLogo,
    title: 'Build & Scale Web3 Dapps with Charge.',
    description: 'Robust APIs and powerful software that enable developers to create seamless payments experiences.',
    btnText: 'Start Building',
    link: 'https://chargeweb3.com/'
  },
  {
    image: VoltageLogo,
    title: 'Consumer-Friendly DeFi',
    description: 'Trade & earn passive income on mobile and desktop.',
    btnText: 'Go to App',
    link: 'https://app.voltage.finance/'
  },
  {
    image: ChainstackLogo,
    title: 'Chainstack now supports Fuse Network',
    description: 'Run high-performing nodes in minutes on a platform built for scale',
    btnText: 'Getting Started',
    link: 'https://chainstack.com/build-better-with-fuse/'
  }
]

function Item ({
  image,
  title,
  description,
  btnText,
  link
}) {
  return (
    <div className='swiper_item'>
      <img src={image} />
      <h2 className='swiper_item__title'>{title}</h2>
      <p className='swiper_item__description'>{description}</p>
      <a rel='noreferrer noopener' target='_blank' href={link} className='swiper_item__button'>{btnText}</a>
    </div>
  )
}

const SectionFour = () => {
  return (
    <section className='section_4'>
      <div className='section_4__title'>Featured</div>
      <div className='section_4__swiper'>
        <Swiper
          setWrapperSize
          centeredSlidesBounds
          slidesPerColumnFill='row'
          // centeredSlides
          loop={!!isMobileOnly}
          autoplay={{
            reverseDirection: true,
            delay: 5000
          }}
          pagination={{
            clickable: true
          }}
          slidesPerView={isMobileOnly ? 2 : 3}
          spaceBetween={20}
          width={isMobileOnly ? 600 : null}
        >
          {
            items.map((item, index) => (
              <SwiperSlide key={index}>
                <Item {...item} />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}

export default SectionFour
