import React from 'react'
import { FormattedMessage } from 'react-intl'
import yahoofin from '@/assets/images/yahoofin.png'
import hackernoon from '@/assets/images/hackernoon.png'
import cointelegraph from '@/assets/images/cointelegraph.png'
import insider from '@/assets/images/insider.png'

const publicationsData = [
  {
    image: cointelegraph,
    link: 'https://cointelegraph.com/news/thai-music-festival-to-use-its-own-token-for-a-cashless-event'
  },
  {
    image: yahoofin,
    link: 'https://finance.yahoo.com/news/mystic-valley-partners-payments-startup-150000227.html'
  },
  {
    image: hackernoon,
    link: 'https://hackernoon.com/sustainable-communities-through-digital-economies-with-mark-smargon-h7183teg'
  },
  {
    image: insider,
    link: 'https://markets.businessinsider.com/news/stocks/mystic-valley-partners-with-payments-startup-fuse-io-to-mint-crypto-token-for-first-cashless-event-1029821554'
  }
]

const Publication = ({ image, link }) => {
  return (
    <a rel='noreferrer noopener' target='_blank' href={link}>
      <img src={image} alt='cointelegraph' />
    </a>
  )
}

const SectionTwo = () => {
  return (
    <section className='studio__wrapper'>
      <div className='publications__container grid-container'>
        <div className='publications'>
          {
            publicationsData.map((item, index) => <Publication key={index} {...item} />)
          }
        </div>
      </div>
      <div className='studio'>
        <h1 className='studio__title'>
          <FormattedMessage defaultMessage='Customize your own wallet and currency' />
        </h1>
        <div className='studio__text'>
          <FormattedMessage
            defaultMessage='The Fuse Studio allows you to build your own wallet and mint your own custom branded
        currency for your company/community. We handle all the heavy lifting, allowing you to reward and grow your
        user base by easily integrating a sophisticated payment solution.'
          />
        </div>
        <div className='dapp_image'>
          <a
            rel='noopener noreferrer'
            href='https://studio.fuse.io'
            target='_blank'
            role='button'
            className='button__wrapper'
          >
            <button data-event='Start now with the studio' className='button'>
              <FormattedMessage defaultMessage='Start now with the studio' />
              <img alt='image' src='./images/blue_arrow.svg' />
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default SectionTwo
