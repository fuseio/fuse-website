import React from 'react'
// import step1 from '@/assets/images/step_1.png'
// import step2 from '@/assets/images/step_2.png'
// import { FormattedMessage } from 'react-intl'
import StudioIcon from '@/assets/img/studio-icon.svg'
import StudioImage from '@/assets/img/studio_img.png'
import FuseSwapImage from '@/assets/img/fuseswap_image.png'
import WalletIcon from '@/assets/img/fuse_wallet_icon.png'
import FuseswpaIcon from '@/assets/img/fuseswap_icon.png'
import Gif from '@/assets/images/send_money.gif'

const Button = ({ text = 'Launch Now' }) => {
  return (
    <a className='main_button'>
      {text}
    </a>
  )
}

const StudioFloor = () => {
  return (
    <section className='studio_floor'>
      <div className='studio_floor__container grid-x align-justify align-self-middle'>
        <div className='cell small-24 medium-12'>
          <div>
            <div className='studio_floor__sub-title grid-x align-middle'>
              <img src={StudioIcon} />&nbsp;
              <span>Fuse Studio</span>
            </div>
            <h1 className='studio_floor__title'>
              Customize your own <br /> wallet and currency
            </h1>
            <p className='studio_floor__text'>
              Zero Coding Launch Platform for Entrepreneurs <br /> and Impact Leaders.
            </p>

            <ul className='props'>
              <li>Mint your own token in minutes.</li>
              <li>Activate fiat on ramps.</li>
              <li>Grow your user base with powerful tools and plugins.</li>
            </ul>
            <div className='launch'>
              <Button />
            </div>
          </div>
        </div>
        <div className='studio_floor__image cell small-24 medium-12'>
          <img src={StudioImage} />
        </div>
      </div>
    </section>
  )
}

const FuseWalletFloor = () => {
  return (
    <section className='wallet_floor'>
      <div className='wallet_floor__container grid-x align-justify align-self-middle'>
        <div className='cell small-24 medium-12'>
          <div className='wallet_floor__sub-title grid-x align-middle'>
            <img src={WalletIcon} />&nbsp;
            <span>Fuse wallet</span>
          </div>
          <h1 className='wallet_floor__title'>
            Engage early users <br /> for rapid growth
          </h1>
          <p className='wallet_floor__text'>
            Onboard your community members with a  <br /> personalised wallet experience.
          </p>
          <ul className='props'>
            <li>Highly customizable.</li>
            <li>User-owned data.</li>
            <li>Send and receive transaction instantly.</li>
          </ul>
          <div className='wallet_floor__links hide-for-small'>
            <div className='title'>
              Download now:
            </div>
            <div className='items'>
              <a
                rel='noreferrer noopener' target='_blank'
                href='https://apps.apple.com/il/app/fuse-wallet/id1491783654'
              >
                <img alt='twitter' src='./images/apple.png' />
              </a>

              <a
                rel='noreferrer noopener' target='_blank'
                href='https://play.google.com/store/apps/details?id=io.fuse.fusecash'
              >
                <img alt='android' src='./images/playstore.png' />
              </a>

              <a rel='noreferrer noopener' target='_blank' href='https://github.com/fuseio/fuse-wallet2.0'>
                <img alt='twitter' src='./images/github_large.png' />
              </a>
            </div>
          </div>
        </div>
        <div className='wallet_floor__image cell small-24 medium-12'>
          <img src={Gif} />
        </div>
      </div>
    </section>
  )
}

const FuseSwapFloor = () => {
  return (
    <section className='fuseswap_floor'>
      <div className='fuseswap_floor__container'>
        <div className='fuseswap_floor grid-x align-justify align-self-middle'>
          <div className='fuseswap_floor__image'>
            <img src={FuseSwapImage} />
          </div>
          <div className='cell'>
            <div className='grid-y texts'>
              <div className='fuseswap_floor__sub-title grid-x align-middle'>
                <img src={FuseswpaIcon} />&nbsp;<span>Fuse Swap</span>
              </div>
              <h1 className='fuseswap_floor__title'>Trade and earn <br /> without friction</h1>
              <p className='fuseswap_floor__text'>The Defi Hub for <br /> the Fuse ecosystem</p>
              <ul className='props'>
                <li>Swap and gain exposure to assets.</li>
                <li>Back your token with pooled liquidity.</li>
                <li>Access in depth trading and token analytics.</li>
              </ul>
              <div className='launch'>
                <Button text='Swap & pool now' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const SectionThree = () => {
  return (
    <div className='blue'>
      <StudioFloor />
      <FuseWalletFloor />
      <FuseSwapFloor />
    </div>
  )
}

export default SectionThree
