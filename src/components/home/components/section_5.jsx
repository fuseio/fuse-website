import React, { useRef, useState } from 'react';
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
                <h1 className="communities__title">Fuse在当地的经济应用场景</h1>
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
                       特立尼达的Loyalty wallet钱包可以让你使用PPP(支付智慧积分计划)购物。用户可以获得PPP，将其发送给朋友，或者用来发现岛上可以购物的地方。PPP是由特立尼达岛的当地支付提供商Pay Wise运营的。
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
                      <span>特立尼达和多巴哥</span>
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
                      使用南非的稳定币stablecoin--DZAR，可以很方便的接触到当地那些不容易接触去中心化金融的主流用户群体。使用DZAR钱包的话，他们不需要任何技术知识也可以可以轻松地进行融资、存储和交易。
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
                      <span>约翰内斯堡</span>
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
                     在一些地方社区中，现金救济是一种过时而且昂贵的慈善方式，这正是LocalPay试图解决的问题。由Sardex在撒丁岛运营的LocalPay项目，尝试以很小的成本为主流用户群体提供一个现金替代品
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
                      <span>撒丁岛</span>
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
                     在这个数字支付的时代，Roost正在重新发明租金支付方式，并利用经济激励来产生一个更好的结果。不久将在英国利物浦进行试点。
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
                      <span>利物浦</span>
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
                     Wepy是一款针对巴西市场的支付应用app，它允许用户使用与巴西雷亚尔法币挂钩的stablecoin进行充值，并可以免费发送给朋友或家人。我们将很快为其消费者推出团体保险。
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
                      <span>圣保罗</span>
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
                     维基银行正在西班牙塞维利亚地区发放本地现金。消费者可以使用该应用程序在当地商店付款，并享受当地储蓄账户，以刺激当地经济。
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
                      <span>塞维利亚</span>
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
                     Seedbed正在重新设计一种app, 让储蓄群体的人使用非托管应用程序的运作方式。通过使用Seedbed应用程序，社区管理者可以管理当地的储蓄群体，这些储蓄群体可以提高信贷的资格，并且这些都是智能合约在幕后运作的基础下实现的。
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
                      <span>特拉维夫</span>
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
                     LocalChampions允许用户从柏林本地市区制造商购买新鲜农产品。其目的是提高对本地供应链的认知和了解，鼓励消费者使用“本地代金券”支持当地的供应链。
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
                      <span>柏林</span>
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