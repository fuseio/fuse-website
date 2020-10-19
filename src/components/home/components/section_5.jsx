import React, { useRef, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import paywiseBg from '@/assets/images/paywise-background.png';
import digitalrandeBg from '@/assets/images/digitalrand-image.png';
import loclaPayBg from '@/assets/images/Local-pay-background.png';
import roostBg from '@/assets/images/roots-background.png';
import wepyBg from '@/assets/images/wepy-background.png';
import seedbedBg from '@/assets/images/seedbed-splesh.png';
import wikibankBg from '@/assets/images/wikibank-background.png';
import localChamionsBg from '@/assets/images/splesh-local.png';

SwiperCore.use([Navigation, Pagination]);

const backgroundImages = [
  paywiseBg,
  digitalrandeBg,
  loclaPayBg,
  roostBg,
  wepyBg,
  wikibankBg,
  seedbedBg,
  localChamionsBg
]

const SectionFive = () => {
  const [currentIndex, setIndex] = useState(0)
  const paginationRef = useRef(null)
  const nextRef = useRef(null)
  const prevRef = useRef(null)
  return (
    <section className="communities" id='communities'>
      {backgroundImages.map((image, index) => <img key={index} className={classNames({ 'opaque': index == currentIndex })} src={image} />)}
      <div className="communities__content grid-container">
        <div className="grid-x communities__items communities-swiper-container">
          <Swiper
            slidesPerView={1}
            loop
            setWrapperSize
            navigation={{
              nextEl: '.communities__button--next',
              prevEl: '.communities__button--prev',
            }}
            autoplay={{
              reverseDirection: true,
              delay: 5000,
            }}
            pagination={{
              clickable: true,
              el: paginationRef.current,
            }}
            onTransitionStart={(swiper) => {
              setIndex(swiper.realIndex)
            }}
          >
            <div slot="container-start">
              <div className="title">
                <h1 className="communities__title"><FormattedMessage defaultMessage="Local economies on fuse" />
                </h1>
              </div>
            </div>
            <SwiperSlide>
              <div className="community grid-x align-justify">
                <div className="content cell large-10 small-24 grid-y align-center">
                  <div>
                    <div className="content__logo">
                      <img alt="paywise" src="./images/paywise-logo.png" />
                    </div>
                    <div>
                      <div className="content__text">
                        <FormattedMessage defaultMessage="Loyalty wallet in Trinidad that lets you buy using PPP (Pay Wise Points Programme) Users can get
                        PPP, send it to friends or discover places to shop around the island. The PPP is operated by Pay Wise a local payments provider in Trinidad." />
                      </div>
                    </div>
                    <div className="content__metadata grid-x align-middle">
                      <img className="app_icon" alt="play-store" src="./images/google_play_mini.png" />
                      <div className="grid-x currency">
                        <a rel="noreferrer noopener" target='_blank' href="https://app.fuse.io/bc6s1HYyi3">Paywise
                          app</a>
                      </div>
                      <div className="grid-x align-middle">
                        <img alt="link-icon" className="link_icon" src="./images/link-icon.svg" />
                        <a rel="noreferrer noopener" target='_blank' href="https://www.paywise.co/">Paywise.co</a>
                      </div>
                    </div>
                  </div>
                  <div className="content__geo grid-x align-center">
                    <div className="tooltip">
                      <div><img alt="paywise" src="./images/trinidad-flag.png" /></div>
                      <span><FormattedMessage defaultMessage="Trinidad & Tobago" />
                      </span>
                    </div>
                    <img className="planet" alt="image" src="./images/paywise-world.png" />
                  </div>
                </div>
                <div className="image cell large-12 small-24 grid-y align-middle">
                  <img alt="paywise" src="./images/paywise-iphone.png" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="community grid-x align-justify">
                <div className="content cell large-10 small-24 grid-y align-center">
                  <div>
                    <div className="content__logo">
                      <img alt="DigitalRand" src="./images/digitalrand-logo.jpg" />
                    </div>
                    <div className="content__text">
                      <FormattedMessage defaultMessage="Use the South African rand stablecoin DZAR to easily on board mainstream users that don’t have an
                      easy access to decentralized finance. Using the DZAR wallet they can fund, store and trade with ease
                      and without technical knowledge." />

                    </div>
                    <div className="content__metadata grid-x align-middle">
                      <div className="grid-x cell shrink align-middle">
                        <img className="app_icon" alt="play-store" src="./images/google_play_mini.png" />
                        <div className="grid-x currency">
                          <a rel="noreferrer noopener" target='_blank' href="https://app.fuse.io/TTfvd34X37">DigitalRand
                            app</a>
                        </div>
                      </div>
                      <div className="grid-x cell shrink align-middle">
                        <img className="app_icon" alt="apple-store" src="./images/apple-mini.svg" />
                        <div className="grid-x currency">
                          <a rel="noreferrer noopener" target='_blank'
                            href="https://apps.apple.com/us/app/id1518540902">DigitalRand
                            app</a>
                        </div>
                      </div>
                      <div className="grid-x align-middle cell large-auto">
                        <img alt="link-icon" className="link_icon" src="./images/link-icon.svg" />
                        <a rel="noreferrer noopener" target='_blank'
                          href="https://digitalrand.co.za/">Digitalrand.co.za</a>
                      </div>
                    </div>
                  </div>
                  <div className="content__geo grid-x align-center">
                    <div className="tooltip">
                      <div><img alt="DigitalRand" src="./images/digitalrand-fleg.png" />
                      </div>
                      <span><FormattedMessage defaultMessage="Johannesburg" />
                      </span>
                    </div>
                    <img className="planet" alt="image" src="./images/digitalrand-world.png" />
                  </div>
                </div>
                <div className="image cell large-12 small-24 grid-y align-middle">
                  <img alt="paywise" src="./images/digitalrand-phone.png" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="community grid-x align-justify">
                <div className="content cell large-10 small-24 grid-y align-center">
                  <div>
                    <div className="content__logo">
                      <img alt="LocalPay" src="./images/Local-pay-logo.png" />
                    </div>
                    <div className="content__text">
                      <FormattedMessage defaultMessage="Cash handouts is an outdated and expensive way to provide charity in some communities which is
                      what
                      LocalPay is trying to fix. Operated in Sardinia by Sardex, the LocalPay initiative provides a cash
                      substitute for mainstream audiences in a fraction of the cost" />

                    </div>
                    <div className="content__metadata grid-x align-middle">
                      <div className="grid-x align-middle">
                        <img alt="link-icon" className="link_icon" src="./images/link-icon.svg" />
                        <a rel="noreferrer noopener" target='_blank' href="https://localpay.it/">Localpay.it</a>
                      </div>
                    </div>
                  </div>
                  <div className="content__geo grid-x align-center">
                    <div className="tooltip">
                      <div><img alt="tooltip" src="./images/Italy-flag.png" /></div>
                      <span><FormattedMessage defaultMessage="Sardinia" />
                      </span>
                    </div>
                    <img className="planet" alt="image" src="./images/Local-pay-world.png" />
                  </div>
                </div>
                <div className="image cell large-12 small-24 grid-y align-middle">
                  <img alt="Sardinia" src="./images/Local-pay-lphone.png" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="community grid-x align-justify">
                <div className="content cell large-10 small-24 grid-y align-center">
                  <div>
                    <div className="content__logo">
                      <img alt="Roost" src="./images/roots-logo.png" />
                    </div>
                    <div className="content__text">
                      <FormattedMessage defaultMessage="In the age of digital payments, Roost is reinventing rental payments and using economic incentives
                      to drive good outcomes. Launching a pilot soon in Liverpool, UK." />

                    </div>

                    <div className="content__metadata grid-x">
                      <div className="grid-x cell shrink align-middle">
                        <img className="app_icon" alt="play-store" src="./images/google_play_mini.png" />
                        <div className="grid-x currency">
                          <a rel="noreferrer noopener" target='_blank' href="https://app.fuse.io/GgbjSaVri6">Roost
                            app</a>
                        </div>
                      </div>
                      <div className="grid-x cell shrink align-middle">
                        <img className="app_icon" alt="apple-store" src="./images/apple-mini.svg" />
                        <div className="grid-x currency">
                          <a rel="noreferrer noopener" target='_blank'
                            href="https://apps.apple.com/us/app/id1502904211">Roost
                            app</a>
                        </div>
                      </div>
                      <div className="grid-x align-middle">
                        <img alt="link-icon" className="link_icon" src="./images/link-icon.svg" />
                        <a rel="noreferrer noopener" target='_blank' href="https://RoostNow.co.uk">RoostNow.co.uk</a>
                      </div>
                    </div>
                  </div>
                  <div className="content__geo grid-x align-center">
                    <div className="tooltip">
                      <div><img alt="uk" src="./images/uk-flag.png" /></div>
                      <span><FormattedMessage defaultMessage="Liverpool" />
                      </span>
                    </div>
                    <img className="planet" alt="image" src="./images/roots-world.png" />
                  </div>
                </div>
                <div className="image cell large-12 small-24 grid-y align-middle">
                  <img alt="Roost" src="./images/roots-iphone.png" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="community grid-x align-justify">
                <div className="content cell large-10 small-24 grid-y align-center">
                  <div>
                    <div className="content__logo">
                      <img alt="Wepy" src="./images/wepy-logo.png" />
                    </div>
                    <div className="content__text">
                      <FormattedMessage defaultMessage="Why is building a group payment app for the Brazilian market, the Wepy app allows users to top up
                      using a stablecoin pegged to brazilian Real. And to send it to friends or family members for free.
                      We will soon be Introducing group insurance for it's consumers." />

                    </div>
                    <div className="content__metadata grid-x align-middle">
                      <img className="app_icon" alt="play-store" src="./images/google_play_mini.png" />
                      <div className="grid-x currency">
                        <a rel="noreferrer noopener" target='_blank' href="https://app.fuse.io/Lbaqzl3ri6">Wepy
                          app</a>
                      </div>
                      <div className="grid-x align-middle">
                        <img alt="link-icon" className="link_icon" src="./images/link-icon.svg" />
                        <a rel="noreferrer noopener" target='_blank' href="https://wepy.io">Wepy.io</a>
                      </div>
                    </div>
                  </div>
                  <div className="content__geo grid-x align-center">
                    <div className="tooltip">
                      <div><img alt="Brazil" src="./images/brazil-flag.png" /></div>
                      <span><FormattedMessage defaultMessage="São Paulo" />
                      </span>
                    </div>
                    <img className="planet" alt="image" src="./images/wepy-world.png" />
                  </div>
                </div>
                <div className="image cell large-12 small-24 grid-y align-middle">
                  <img alt="paywise" src="./images/wepy-iphone.png" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="community grid-x align-justify">
                <div className="content cell large-10 small-24 grid-y align-center">
                  <div>
                    <div className="content__logo">
                      <img alt="wikibank" src="./images/wikibank-logo.png" />
                    </div>
                    <div className="content__text">
                      <FormattedMessage
                        defaultMessage="Wikibank is distributing local cash handouts in Seville, Spain. Consumers can use the app to pay at local stores and enjoy a local savings account intended to incentivize the local economy."
                      />

                    </div>
                    <div className="content__metadata grid-x align-middle">
                      <div className="grid-x cell shrink align-middle">
                        <img className="app_icon" alt="play-store" src="./images/google_play_mini.png" />
                        <div className="grid-x currency">
                          <a rel="noreferrer noopener" target='_blank' href="https://app.fuse.io/z0iCvOom65">Wikibank
                            app</a>
                        </div>
                      </div>
                      <div className="grid-x cell shrink align-middle">
                        <img className="app_icon" alt="apple-store" src="./images/apple-mini.svg" />
                        <div className="grid-x currency">
                          <a rel="noreferrer noopener" target='_blank'
                            href="https://apps.apple.com/us/app/wikibank-eu/id1509481908?ls=1">Wikibank
                            app</a>
                        </div>
                      </div>
                      <div className="grid-x align-middle cell large-auto">
                        <img alt="link-icon" className="link_icon" src="./images/link-icon.svg" />
                        <a rel="noreferrer noopener" target='_blank' href="https://wikibank.eu">WikiBank.eu</a>
                      </div>
                    </div>
                  </div>
                  <div className="content__geo grid-x align-center">
                    <div className="tooltip">
                      <div><img alt="wikibank" src="./images/wikibank-fleg.png" /></div>
                      <span><FormattedMessage defaultMessage="Seville" />
                      </span>
                    </div>
                    <img className="planet" alt="image" src="./images/wikibank-world.png" />
                  </div>
                </div>
                <div className="image cell large-12 small-24 grid-y align-middle">
                  <img alt="paywise" src="./images/wikibank-iphone.png" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="community grid-x align-justify">
                <div className="content cell large-10 small-24 grid-y align-center">
                  <div>
                    <div className="content__logo">
                      <img alt="SeedBed" src="./images/seedbed-logo.jpg" />
                    </div>
                    <div className="content__text">
                      <FormattedMessage
                        defaultMessage="Seedbed is reimagining how savings groups work using a non-custodial app. Using the Seedbed app,
                      community managers can manage local savings groups that improve access to credit and powered by
                      smart-contracts behind the scenes."
                      />

                    </div>
                    <div className="content__metadata grid-x align-middle">
                      <div className="grid-x cell shrink align-middle">
                        <img className="app_icon" alt="play-store" src="./images/google_play_mini.png" />
                        <div className="grid-x currency">
                          <a rel="noreferrer noopener" target='_blank' href="https://app.fuse.io/1uBjztEBo6">SeedBed
                            app</a>
                        </div>
                      </div>
                      <div className="grid-x cell shrink align-middle">
                        <img className="app_icon" alt="apple-store" src="./images/apple-mini.svg" />
                        <div className="grid-x currency">
                          <a rel="noreferrer noopener" target='_blank'
                            href="https://apps.apple.com/us/app/id1491139261">SeedBed
                            app</a>
                        </div>
                      </div>
                      <div className="grid-x align-middle">
                        <img alt="link-icon" className="link_icon" src="./images/link-icon.svg" />
                        <a rel="noreferrer noopener" target='_blank' href="https://www.seedbed.io/">SeedBed.io</a>
                      </div>
                    </div>
                  </div>
                  <div className="content__geo grid-x align-center">
                    <div className="tooltip">
                      <div><img alt="seedbed" src="./images/israel-fleg.png" /></div>
                      <span><FormattedMessage defaultMessage="Tel aviv" />
                      </span>
                    </div>
                    <img className="planet" alt="image" src="./images/world-sedbed.png" />
                  </div>
                </div>
                <div className="image cell large-12 small-24 grid-y align-middle">
                  <img alt="paywise" src="./images/Iphone-sedbed.png" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="community grid-x align-justify">
                <div className="content cell large-10 small-24 grid-y align-center">
                  <div>
                    <div className="content__logo">
                      <img alt="Wepy" src="./images/Local champtions-logo.jpg" />
                    </div>
                    <div className="content__text">
                      <FormattedMessage defaultMessage="LocalChampions allows users to buy fresh produce from local urban manufacturers in Berlin. It’s
                      purpose is increase awareness for local supply chains and incentivize consumers to support those
                      supply chains using the “Local Voucher”." />

                    </div>
                    <div className="content__metadata grid-x align-middle">
                      <img className="app_icon" alt="play-store" src="./images/google_play_mini.png" />
                      <div className="grid-x currency">
                        <a rel="noreferrer noopener" target='_blank'
                          href="https://app.fuse.io/ParPbwisi6">LocalChampions app</a>
                      </div>
                      <div className="grid-x align-middle">
                        <img alt="link-icon" className="link_icon" src="./images/link-icon.svg" />
                        <a rel="noreferrer noopener" target='_blank'
                          href="https://localchampions.de/">LocalChampions.de</a>
                      </div>
                    </div>
                  </div>
                  <div className="content__geo grid-x align-center">
                    <div className="tooltip">
                      <div><img alt="LocalChamions" src="./images/germany-fleg.png" />
                      </div>
                      <span><FormattedMessage defaultMessage="Berlin" />
                      </span>
                    </div>
                    <img className="planet" alt="image" src="./images/world.png" />
                  </div>
                </div>
                <div className="image cell large-12 small-24 grid-y align-middle">
                  <img alt="paywise" src="./images/Iphone-local-iphone.png" />
                </div>
              </div>
            </SwiperSlide>
            <div ref={paginationRef} className="communities__pagination" />
            <div ref={nextRef} className="communities__button communities__button--next" />
            <div ref={prevRef} className="communities__button communities__button--prev" />

          </Swiper>
        </div>
      </div>
    </section >
  );
}

export default SectionFive;