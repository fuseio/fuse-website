import React, { useRef, useState } from 'react'
import classNames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import FuseLogo from '@/assets/img/use_cases/fuse-logo.svg'
import Link from '@/assets/img/use_cases/link.svg'
import Apple from '@/assets/img/apple_fork.svg'
import Google from '@/assets/img/google_fork.svg'
import PeeplLogo from '@/assets/img/use_cases/peepleat/peepl-logo.png'
import PeeplIphone from '@/assets/img/use_cases/peepleat/peepl-iphone.png'
import PeeplBg from '@/assets/img/use_cases/peepleat/image-peepl.png'
import MobilePeepl from '@/assets/img/use_cases/peepleat/mobile_peepl.png'
import FusecashLogo from '@/assets/img/use_cases/fusecash/fuse.cash-logo.png'
import FusecashBg from '@/assets/img/use_cases/fusecash/image-fuse.cash.png'
import FusecashBgSmall from '@/assets/img/use_cases/fusecash/fusecash_mobile.png'
import FusecashIphone from '@/assets/img/use_cases/fusecash/fuse.cash_iphone.png'

import GoodDollarLogo from '@/assets/img/use_cases/gooddollar/gooddollar-logo.png'
import GoodDollarhBgSmall from '@/assets/img/use_cases/gooddollar/gooddollar_mobile.png'
import GoodDollarhBg from '@/assets/img/use_cases/gooddollar/image-gooddollar.png'
import GoodDollarIphone from '@/assets/img/use_cases/gooddollar/iphone-gooddollar.png'

import ComunitariaLogo from '@/assets/img/use_cases/comunitaria/comunitaria-logo.png'
import ComunitariaSmall from '@/assets/img/use_cases/comunitaria/communitaria_mobile.png'
import ComunitariahBg from '@/assets/img/use_cases/comunitaria/comunitaria-image.png'
import ComunitariaIphone from '@/assets/img/use_cases/comunitaria/comunitaria-iphon.png'

import KolektivoLogo from '@/assets/img/use_cases/kolectivolabs/kolektivo-labs.png'
import KolektivohBg from '@/assets/img/use_cases/kolectivolabs/kolektivo-image.png'
import KolektivohBgSmall from '@/assets/img/use_cases/kolectivolabs/kolectivolabs_mobile.png'
import KolektivoIphone from '@/assets/img/use_cases/kolectivolabs/kolectivo-wallet.png'

import MysticLogo from '@/assets/img/use_cases/mysticvalley/mystic-valley-logo.png'
import MysticBgSmall from '@/assets/img/use_cases/mysticvalley/mysticvallay_mobile.png'
import MystichBg from '@/assets/img/use_cases/mysticvalley/mystic-valley-image.png'
import MysticIphone from '@/assets/img/use_cases/mysticvalley/mystic-valley-wallet.png'

import { isMobileOnly } from 'react-device-detect'
import { FormattedMessage } from 'react-intl'

SwiperCore.use([Navigation, Pagination])

const backgroundImages = [
  isMobileOnly ? MobilePeepl : PeeplBg,
  isMobileOnly ? FusecashBgSmall : FusecashBg,
  isMobileOnly ? GoodDollarhBgSmall : GoodDollarhBg,
  isMobileOnly ? ComunitariaSmall : ComunitariahBg,
  isMobileOnly ? KolektivohBgSmall : KolektivohBg,
  isMobileOnly ? MysticBgSmall : MystichBg
]

const SectionFive = () => {
  const [currentIndex, setIndex] = useState(0)
  const nextRef = useRef(null)
  const prevRef = useRef(null)
  return (
    <section className='communities' id='communities'>
      {
        backgroundImages.map((image, index) => (
          <img
            key={index}
            className={classNames({ opaque: index === currentIndex })}
            src={image}
          />
        ))
      }
      <div className='communities__content grid-container'>
        <div className='grid-x communities__items communities-swiper-container'>
          <Swiper
            effect='cube'
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
            onTransitionStart={(swiper) => {
              setIndex(swiper.realIndex)
            }}
          >
            <div slot='container-start'>
              <div className='title'>
                <div className='powered grid-x align-middle'>
                  <img src={FuseLogo} />
                  &nbsp;
                  <span>Powered by Fuse</span>
                </div>
                <h1 className='main-title'>
                  Real world implementations used by everyday people.
                </h1>
              </div>
            </div>
            <SwiperSlide>
              <div className='community'>
                <div className='content'>
                  <div className='content__logo'>
                    <img alt='peepl' src={PeeplLogo} />
                  </div>
                  <div className='content__text'>
                    <FormattedMessage defaultMessage='Sustainable local economy project in the United Kingdom to decentralize take away food ordering.' />
                  </div>
                  <div className='content__metadata'>
                    <div className='link_icon'>
                      <img src={Link} />
                      <a
                        rel='noreferrer noopener'
                        target='_blank'
                        href='https://itsaboutpeepl.com/'
                      >
                        <FormattedMessage
                          defaultMessage='Learn more about {appName}'
                          values={{
                            appName: 'Peepl Eat'
                          }}
                        />
                      </a>
                    </div>
                    <div className='grid-x align-middle align-center link_icon'>
                      <div className='download'>
                        <FormattedMessage defaultMessage='Download the app:' />
                      </div>
                      &nbsp;
                      <a
                        rel='noreferrer noopener'
                        target='_blank'
                        href='https://apps.apple.com/gb/app/peepl-wallet/id1524643325'
                      >
                        <img className='store' src={Apple} />
                        &nbsp;
                      </a>
                      <a
                        rel='noreferrer noopener'
                        target='_blank'
                        href='https://play.google.com/store/apps/details?id=com.itsaboutpeepl.peepl/'
                      >
                        <img className='store' src={Google} />
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
                    <FormattedMessage
                      defaultMessage='A mobile wallet designed for the remaining 99%. Deposit from
                    a bank account to receive FuseDollars and ﻿earn 5% APR.
                    Send money with zero fees, anytime to anywhere in the world.
                    Trade cryptocurrencies in-app.'
                    />
                  </div>
                  <div className='content__metadata'>
                    <div className='link_icon'>
                      <img src={Link} />
                      <a
                        rel='noreferrer noopener'
                        target='_blank'
                        href='https://fuse.cash/'
                      >
                        <FormattedMessage
                          defaultMessage='Learn more about {appName}'
                          values={{
                            appName: 'fuse.cash'
                          }}
                        />
                      </a>
                    </div>
                    <div className='grid-x align-middle align-center link_icon'>
                      <div className='download'>
                        <FormattedMessage defaultMessage='Download the app:' />
                      </div>
                      &nbsp;&nbsp;
                      <a
                        rel='noreferrer noopener'
                        target='_blank'
                        href='https://apps.apple.com/us/app/fuse-cash/id1559937899/'
                      >
                        <img className='store' src={Apple} />
                        &nbsp;
                      </a>
                      <a
                        rel='noreferrer noopener'
                        target='_blank'
                        href='https://play.google.com/store/apps/details?id=io.fuse.cash'
                      >
                        <img className='store' src={Google} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='image'>
                  <img alt='peepl' src={FusecashIphone} />
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
                    <FormattedMessage
                      defaultMessage='Use yield-generating decentralized finance products and a
                    digital coin to deliver Basic Digital Income on a global
                    scale.'
                    />
                  </div>
                  <div className='content__metadata'>
                    <div className='link_icon'>
                      <img src={Link} />
                      <a
                        rel='noreferrer noopener'
                        target='_blank'
                        href='https://www.gooddollar.org/'
                      >
                        <FormattedMessage
                          defaultMessage='Learn more about {appName}'
                          values={{
                            appName: 'GoodDollar'
                          }}
                        />
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
                    <FormattedMessage
                      defaultMessage='A for-profit technology and services company that helps
                    charities efficiently target food donations to those in need
                    whilst promoting economic recoveries in local
                    neighbourhoods.'
                    />
                  </div>
                  <div className='content__metadata'>
                    <div className='link_icon'>
                      <img src={Link} />
                      <a
                        rel='noreferrer noopener'
                        target='_blank'
                        href='https://comunitaria.com/'
                      >
                        <FormattedMessage
                          defaultMessage='Learn more about {appName}'
                          values={{
                            appName: 'Comunitaria'
                          }}
                        />
                      </a>
                    </div>
                    <div className='grid-x align-middle align-center link_icon'>
                      <div className='download'>
                        <FormattedMessage defaultMessage='Download the app:' />
                      </div>
                      &nbsp;&nbsp;
                      <a
                        rel='noreferrer noopener'
                        target='_blank'
                        href='https://apps.apple.com/us/app/wikibank-eu/id1509481908/'
                      >
                        <img className='store' src={Apple} />
                        &nbsp;
                      </a>
                      <a
                        rel='noreferrer noopener'
                        target='_blank'
                        href='https://play.google.com/store/apps/details?id=io.fuse.cash'
                      >
                        <img className='store' src={Google} />
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
                    <FormattedMessage
                      defaultMessage='Regenerative economy project in Curaçao led by top DAO
                    (Decentralized Autonomous Organization) experts. Leverages
                    Fuse wallet technology for high-speed, low-fee sending and
                    receiving of the islands digital currency, CuraDAI.'
                    />
                  </div>
                  <div className='content__metadata'>
                    <div className='link_icon'>
                      <img src={Link} />
                      <a
                        rel='noreferrer noopener'
                        target='_blank'
                        href='https://kolektivo.co/'
                      >
                        <FormattedMessage
                          defaultMessage='Learn more about {appName}'
                          values={{
                            appName: 'Kolektivo labs'
                          }}
                        />{' '}
                      </a>
                    </div>
                    <div className='grid-x align-middle align-center link_icon'>
                      <div className='download'>
                        <FormattedMessage defaultMessage='Download the app:' />
                      </div>
                      &nbsp;&nbsp;
                      <a
                        rel='noreferrer noopener'
                        target='_blank'
                        href='https://apps.apple.com/us/app/curadai/id1553242607'
                      >
                        <img className='store' src={Apple} />
                        &nbsp;
                      </a>
                      <a
                        rel='noreferrer noopener'
                        target='_blank'
                        href='https://play.google.com/store/apps/details?id=io.fuse.curadai'
                      >
                        <img className='store' src={Google} />
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
                    <FormattedMessage
                      defaultMessage='Musical events organization in Thailand that exclusively
                    leverages the Fuse technology stack and wallet for payment
                    of tickets, food, beverages and activities at festivals
                    across the region.'
                    />
                  </div>
                  <div className='content__metadata'>
                    <div className='link_icon'>
                      <img src={Link} />
                      <a
                        rel='noreferrer noopener'
                        target='_blank'
                        href='https://cointelegraph.com/news/thai-music-festival-to-use-its-own-token-for-a-cashless-event'
                      >
                        <FormattedMessage
                          defaultMessage='Learn more about {appName}'
                          values={{
                            appName: 'Mystic valley'
                          }}
                        />{' '}
                      </a>
                    </div>
                    <div className='grid-x align-middle align-center link_icon'>
                      <div className='download'>
                        <FormattedMessage defaultMessage='Download the app:' />
                      </div>
                      &nbsp;&nbsp;
                      <a
                        rel='noreferrer noopener'
                        target='_blank'
                        href='https://apps.apple.com/us/app/mystic-valley/id1539136057'
                      >
                        <img className='store' src={Apple} />
                        &nbsp;
                      </a>
                      <a
                        rel='noreferrer noopener'
                        target='_blank'
                        href='https://play.google.com/store/apps/details?id=com.bitazza.wallet'
                      >
                        <img className='store' src={Google} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='image'>
                  <img alt='ComunitariaIphone' src={MysticIphone} />
                </div>
              </div>
            </SwiperSlide>

            <div
              ref={nextRef}
              className='communities__button communities__button--next'
            >
              <FormattedMessage defaultMessage='Next' />
            </div>
            <div
              ref={prevRef}
              className='communities__button communities__button--prev'
            >
              <FormattedMessage defaultMessage='Previous' />
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default SectionFive
