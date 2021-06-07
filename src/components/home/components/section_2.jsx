import React from 'react'
import Mobile from '@/assets/img/mobile_money.png'
import MobileSmall from '@/assets/img/mobile_money_small.svg'
import Business from '@/assets/img/business_tools.png'
import BusinessSmall from '@/assets/img/business_tools_small.svg'
import PaymentsNetwork from '@/assets/img/paymets_network.png'
import PaymentsNetworkSmall from '@/assets/img/payments_network_small.svg'
import Communities from '@/assets/img/communities.svg'
import Transactions from '@/assets/img/transactions.svg'
import Wallet from '@/assets/img/wallets.svg'
import { FormattedMessage } from 'react-intl'

const items = [
  {
    icon: MobileSmall,
    image: Mobile,
    title: <FormattedMessage defaultMessage='Mobile money' />,
    Text: () => (
      <div className='item__text'>
        <FormattedMessage
          defaultMessage='An open-source, <span>mobile alternative</span> to legacy banking that
        allows anyone anywhere in the world to access digital payments and
        decentralized finance.'
          values={{
            span: (chunks) => <span>{chunks}</span>
          }}
        />
      </div>
    )
  },
  {
    icon: BusinessSmall,
    image: Business,
    title: <FormattedMessage defaultMessage="Plug 'n' Play" />,
    Text: () => (
      <div className='item__text'>
        <FormattedMessage
          defaultMessage='A <span>no-code</span> platform for communities and businesses to
          build new economic models, leveraging powerful tools and APIs in a low
          entry sandbox.'
          values={{
            span: (chunks) => <span>{chunks}</span>
          }}
        />
      </div>
    )
  },
  {
    icon: PaymentsNetworkSmall,
    image: PaymentsNetwork,
    title: <FormattedMessage defaultMessage='Built for Scale' />,
    Text: () => (
      <div className='item__text'>
        <FormattedMessage
          defaultMessage='A <span>fast, decentralized</span> payment network that offers Ethereum
          smart contract capabilities and enables anyone to have ownership in the
          infrastructure.'
          values={{
            span: (chunks) => <span>{chunks}</span>
          }}
        />
      </div>
    )
  }
]

const bannerItems = [
  {   
    value: '10,392,350',
    text: <FormattedMessage defaultMessage='Transactions' />
  },
  {   
    value: '695',
    text: <FormattedMessage defaultMessage='Communities' />
  },
  {
    value: '358,909',
    text: <FormattedMessage defaultMessage='Wallets' />
  }
]

const Item = ({ title, image, Text, icon }) => {
  return (
    <div className='item'>
      <img className='item__image' src={image} />
      <div className='item__title grid-x align-middle'>
        <img src={icon} />
        <h4>{title}</h4>
      </div>
      <Text />
    </div>
  )
}

const BannerItem = ({ value, text }) => {
  return (
    <div className='item grid-x align-middle'>
      
      &nbsp;&nbsp;
      <div className='title'>
        <span>{value}</span>
        &nbsp;
        {text}
      </div>
    </div>
  )
}

const Banner = () => {
  return (
    <section className='info_banner__wrapper'>
      <div className='info_banner__container'>
        <div className='info_banner'>
          {
            bannerItems.map((item, index) => (
              <BannerItem key={index} {...item} />
            ))
          }
          <div className='item grid-x align-middle'>
            <div className='title'>
              <a
                rel='noreferrer noopener'
                target='_blank'
                href='https://explorer.fuse.io/'
              >
                <FormattedMessage defaultMessage='View stats' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const SectionTwo = () => {
  return (
    <>
      <Banner />
      <section className='section_2'>
        <h2 className='section_2__title'>
          <FormattedMessage defaultMessage='Turning communities into economies' />
        </h2>
        <div className='section_2__items'>
          {
            items.map((item, index) => (
              <Item key={index} {...item} />
            ))
          }
        </div>
      </section>
    </>
  )
}

export default SectionTwo
