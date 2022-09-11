import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'

import BitazzaIPhone from '@/assets/images/use_cases/bitazza_phone.png'
import ChromePayIPhone from '@/assets/images/use_cases/chromePay_phone.png'
import ComunitariaIPhone from '@/assets/images/use_cases/comunitaria_phone.png'
import FlambuIPhone from '@/assets/images/use_cases/Flambu_phone.png'
import GoodDollarIPhone from '@/assets/images/use_cases/gooddollar_phone.png'
import PeeplIPhone from '@/assets/images/use_cases/peepl_phone.png'

import BitazzaLogo from '@/assets/images/use_cases/bitazza1.svg'
import FlambuLogo from '@/assets/images/use_cases/flambu.svg'
import PeeplLogo from '@/assets/images/use_cases/peepl1.svg'
import ComunitariaLogo from '@/assets/images/use_cases/wiki1.svg'
import GoodDollar1Logo from '@/assets/images/use_cases/gooddollar1.svg'
import { isMobileOnly } from 'react-device-detect'

SwiperCore.use([Navigation, Pagination])

const items = [
  {
    logo: PeeplLogo,
    phoneImage: PeeplIPhone,
    description: 'Payments and rewards platform that helps keep more money flowing within local economies.'
  },
  {
    logo: FlambuLogo,
    phoneImage: FlambuIPhone,
    description: 'Enhanced peer-to-peer renting of anything, leveraging decentralized trust and fast, low-cost payments.'
  },
  {
    logo: FlambuLogo,
    phoneImage: ChromePayIPhone,
    description: 'A borderless ecosystem of financial services for the unbanked of Africa leveraging powerful digital identity solutions.'
  },
  {
    logo: GoodDollar1Logo,
    phoneImage: GoodDollarIPhone,
    description: 'Leading Digital Basic Income platform that uses free market forces and the principles of social investing to create a stream of free digital currency.'
  },
  {
    logo: BitazzaLogo,
    phoneImage: BitazzaIPhone,
    description: 'A suite of products including the Freedom Wallet and Freedom Card; empowering businesses to leverage crypto payments and rewards to gain a competitive advantage.'
  },
  {
    logo: ComunitariaLogo,
    phoneImage: ComunitariaIPhone,
    description: 'Decentralized social currency app that efficiently targets food donations to those in need whilst simultaneously promoting disadvantaged neighborhood recovery.  '
  }
]

function Item ({
  logo,
  phoneImage,
  description
}) {
  return (
    <div className='swiper_item'>
      <div className='content'>
        <img src={logo} />
        <p className='content__description'>{description}</p>
        <a rel='noreferrer noopener' target='_blank' className='content__button'>Learn more</a>
      </div>
      <div className='image'>
        <img src={phoneImage} />
      </div>
    </div>
  )
}

function SectionSeven () {
  return (
    <section className='section_7'>
      <div className='section_7__title'>Live business use cases on Fuse</div>
      <div className='section_7__swiper'>
        <Swiper
          autoplay={{
            reverseDirection: true,
            delay: 5000
          }}
          loop={!!isMobileOnly}
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

export default SectionSeven
