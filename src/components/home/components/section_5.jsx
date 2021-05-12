import React, { useRef, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import classNames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import paywiseBg from '@/assets/images/paywise-background.png'
import digitalrandeBg from '@/assets/images/digitalrand-image.png'
import loclaPayBg from '@/assets/images/Local-pay-background.png'
import roostBg from '@/assets/images/roots-background.png'
import wepyBg from '@/assets/images/wepy-background.png'
import seedbedBg from '@/assets/images/seedbed-splesh.png'
import wikibankBg from '@/assets/images/wikibank-background.png'
import localChamionsBg from '@/assets/images/splesh-local.png'
import valleyBg from '@/assets/images/vally-background.png'
import FuseLogo from '@/assets/img/use_cases/fuse-logo.svg'
import Link from '@/assets/img/use_cases/link.svg'
import PeeplLogo from '@/assets/img/use_cases/peepleat/peepl.eat.svg'
import PeeplIphone from '@/assets/img/use_cases/peepleat/peepl-iphone.png'
import PeeplBg from '@/assets/img/use_cases/peepleat/image-peepl.png'
import FusecashLogo from '@/assets/img/use_cases/fusecash/fuse.cash-logo.png'
import FusecashBg from '@/assets/img/use_cases/fusecash/image-fuse.cash.png'

import GoodDollarLogo from '@/assets/img/use_cases/gooddollar/gooddollar-logo.png'
import GoodDollarhBg from '@/assets/img/use_cases/gooddollar/image-gooddollar.png'
import GoodDollarIphone from '@/assets/img/use_cases/gooddollar/iphone-gooddollar.png'

import ComunitariaLogo from '@/assets/img/use_cases/comunitaria/comunitaria-logo.png'
import ComunitariahBg from '@/assets/img/use_cases/comunitaria/comunitaria-image.png'
import ComunitariaIphone from '@/assets/img/use_cases/comunitaria/comunitaria-iphon.png'

import KolektivoLogo from '@/assets/img/use_cases/kolectivolabs/kolektivo-labs.png'
import KolektivohBg from '@/assets/img/use_cases/kolectivolabs/kolektivo-image.png'
import KolektivoIphone from '@/assets/img/use_cases/kolectivolabs/kolectivo-wallet.png'

import MysticLogo from '@/assets/img/use_cases/mysticvalley/mystic-valley-logo.png'
import MystichBg from '@/assets/img/use_cases/mysticvalley/mystic-valley-image.png'
import MysticIphone from '@/assets/img/use_cases/mysticvalley/mystic-valley-wallet.png'

SwiperCore.use([Navigation, Pagination])

const backgroundImages = [
  PeeplBg,
  FusecashBg,
  GoodDollarhBg,
  ComunitariahBg,
  KolektivohBg,
  MystichBg
]

const SectionFive = () => {
  const [currentIndex, setIndex] = useState(0)
  const paginationRef = useRef(null)
  const nextRef = useRef(null)
  const prevRef = useRef(null)
  return (
    <section className='communities' id='communities'>
      {backgroundImages.map((image, index) => (
        <img
          key={index}
          className={classNames({ opaque: index === currentIndex })}
          src={image}
        />
      ))}
      <div className='communities__content grid-container'>
        <div className='grid-x communities__items communities-swiper-container'>
          <Swiper
            slidesPerView={1}
            loop
            speed={1000}
            setWrapperSize
            navigation={{
              nextEl: '.communities__button--next',
              prevEl: '.communities__button--prev'
            }}
            autoplay={{
              reverseDirection: true,
              delay: 5000
            }}
            pagination={{
              clickable: true,
              el: paginationRef.current
            }}
            onTransitionStart={(swiper) => {
              setIndex(swiper.realIndex)
            }}
          >
            <div slot='container-start'>
              <div className='title'>
                <div className='powered grid-x align-middle'>
                  <img src={FuseLogo} />&nbsp;
                  <span>Powered by Fuse</span>
                </div>
                <h1 className='main-title'>Real world implementations used by everyday people.</h1>
              </div>
            </div>
            <SwiperSlide>
              <div className='community'>
                <div className='content'>
                  <div className='content__logo'>
                    <img alt='peepl' src={PeeplLogo} />
                  </div>
                  <div className='content__text'>
                    Sustainable local economy project in the United Kingdom to decentralize take away food ordering.
                  </div>
                  <div className='content__metadata'>
                    <div className='grid-x align-middle link_icon'>
                      <img src={Link} />
                      <a
                        rel='noreferrer noopener'
                        target='_blank'
                        href='https://itsaboutpeepl.com/'
                      >
                        Learn more about Peepl Eat
                      </a>
                    </div>
                    <div className='grid-x align-middle link_icon'>
                      <img src={Link} />
                      <a
                        rel='noreferrer noopener'
                        target='_blank'
                        href='https://itsaboutpeepl.com/'
                      >
                        Learn more about GBPX token
                      </a>
                    </div>
                  </div>
                </div>
                <div className='image'>
                  <img alt='peepl' src={PeeplIphone} />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='community'>
                <div className='content'>
                  <div className='content__logo'>
                    <img alt='peepl' src={FusecashLogo} />
                  </div>
                  <div className='content__text'>
                    It is a long established fact that a reader will be distracted bu the readable content of a page when looking ay its layout
                  </div>
                  <div className='content__metadata'>
                    <div className='grid-x align-middle link_icon'>
                      <img src={Link} />
                      <a
                        rel='noreferrer noopener'
                        target='_blank'
                        href='https://itsaboutpeepl.com/'
                      >
                        Learn more about Fuse Dollar
                      </a>
                    </div>
                    <div className='grid-x align-middle link_icon'>
                      <img src={Link} />
                      <a
                        rel='noreferrer noopener'
                        target='_blank'
                        href='https://itsaboutpeepl.com/'
                      >
                        Learn more about Fuse Dollar token
                      </a>
                    </div>
                  </div>
                </div>
                <div className='image'>
                  <img alt='peepl' src={PeeplIphone} />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='community'>
                <div className='content'>
                  <div className='content__logo'>
                    <img alt='peepl' src={GoodDollarLogo} />
                  </div>
                  <div className='content__text'>
                    It is a long established fact that a reader will be distracted bu the readable content of a page when looking ay its layout
                  </div>
                  <div className='content__metadata'>
                    <div className='grid-x align-middle link_icon'>
                      <img src={Link} />
                      <a
                        rel='noreferrer noopener'
                        target='_blank'
                        href='https://www.gooddollar.org/'
                      >
                        Learn more about Good Dollar
                      </a>
                    </div>
                    <div className='grid-x align-middle link_icon'>
                      <img src={Link} />
                      <a
                        rel='noreferrer noopener'
                        target='_blank'
                        href='https://whitepaper.gooddollar.org/'
                      >
                        Learn more about GoodDollar token
                      </a>
                    </div>
                  </div>
                </div>
                <div className='image'>
                  <img alt='GoodDollarIphone' src={GoodDollarIphone} />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='community'>
                <div className='content'>
                  <div className='content__logo'>
                    <img alt='peepl' src={ComunitariaLogo} />
                  </div>
                  <div className='content__text'>
                    It is a long established fact that a reader will be distracted bu the readable content of a page when looking ay its layout
                  </div>
                  <div className='content__metadata'>
                    <div className='grid-x align-middle link_icon'>
                      <img src={Link} />
                      <a
                        rel='noreferrer noopener'
                        target='_blank'
                        href='https://comunitaria.com/'
                      >
                        Learn more about Comunitaria
                      </a>
                    </div>
                    <div className='grid-x align-middle link_icon'>
                      <img src={Link} />
                      <a
                        rel='noreferrer noopener'
                        target='_blank'
                        href='https://comunitaria.com/en/about-wikibank/'
                      >
                        Learn more about ILLA token
                      </a>
                    </div>
                  </div>
                </div>
                <div className='image'>
                  <img alt='ComunitariaIphone' src={ComunitariaIphone} />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='community'>
                <div className='content'>
                  <div className='content__logo'>
                    <img alt='peepl' src={KolektivoLogo} />
                  </div>
                  <div className='content__text'>
                    It is a long established fact that a reader will be distracted bu the readable content of a page when looking ay its layout
                  </div>
                  <div className='content__metadata'>
                    <div className='grid-x align-middle link_icon'>
                      <img src={Link} />
                      <a
                        rel='noreferrer noopener'
                        target='_blank'
                        href='https://kolektivo.co/'
                      >
                        Learn more about Kolektivo labs
                      </a>
                    </div>
                    <div className='grid-x align-middle link_icon'>
                      <img src={Link} />
                      <a
                        rel='noreferrer noopener'
                        target='_blank'
                        href='https://kolektivo.co/'
                      >
                        Learn more about KOK token
                      </a>
                    </div>
                  </div>
                </div>
                <div className='image'>
                  <img alt='ComunitariaIphone' src={KolektivoIphone} />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='community'>
                <div className='content'>
                  <div className='content__logo'>
                    <img alt='peepl' src={MysticLogo} />
                  </div>
                  <div className='content__text'>
                    It is a long established fact that a reader will be distracted bu the readable content of a page when looking ay its layout
                  </div>
                  <div className='content__metadata'>
                    <div className='grid-x align-middle link_icon'>
                      <img src={Link} />
                      <a
                        rel='noreferrer noopener'
                        target='_blank'
                        href='https://kolektivo.co/'
                      >
                        Learn more about Kolektivo labs
                      </a>
                    </div>
                    <div className='grid-x align-middle link_icon'>
                      <img src={Link} />
                      <a
                        rel='noreferrer noopener'
                        target='_blank'
                        href='https://kolektivo.co/'
                      >
                        Learn more about KOK token
                      </a>
                    </div>
                  </div>
                </div>
                <div className='image'>
                  <img alt='ComunitariaIphone' src={MysticIphone} />
                </div>
              </div>
            </SwiperSlide>

            {/* <div ref={paginationRef} className='communities__pagination' /> */}
            <div ref={nextRef} className='communities__button communities__button--next'>Next</div>
            <div ref={prevRef} className='communities__button communities__button--prev'>Previous</div>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default SectionFive
