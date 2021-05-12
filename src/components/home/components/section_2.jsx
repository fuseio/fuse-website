import React from 'react'
// import { FormattedMessage } from 'react-intl'
import Mobile from '@/assets/img/mobile_money.png'
import MobileSmall from '@/assets/img/mobile_money_small.svg'
import Business from '@/assets/img/business_tools.png'
import BusinessSmall from '@/assets/img/business_tools_small.svg'
import PaymentsNetwork from '@/assets/img/paymets_network.png'
import PaymentsNetworkSmall from '@/assets/img/payments_network_small.svg'
import Communities from '@/assets/img/communities.svg'
import Transactions from '@/assets/img/transactions.svg'
import Wallet from '@/assets/img/wallets.svg'

const items = [
  {
    icon: MobileSmall,
    image: Mobile,
    title: 'Mobile money',
    Text: () => (
      <div className='item__text'>An open-source, <span>mobile alternative</span> to legacy payments that allows anyone anywhere in the world to access digital payments and decentralized finance</div>
    )
  },
  {
    icon: BusinessSmall,
    image: Business,
    title: 'Business tools',
    Text: () => (
      <div className='item__text'>
        A <span>no-code</span> platform for communities and business to build new economic models, leveraging powerful tools and APIs in a low entry sandbox
      </div>
    )
  },
  {
    icon: PaymentsNetworkSmall,
    image: PaymentsNetwork,
    title: 'Payments network',
    Text: () => (
      <div className='item__text'>
        A <span>fast, decentralized</span> payment network that offers Ethereum smart contract capabilities and enables anyone to have ownership in the infrastructure
      </div>
    )
  }
]

const bannerItems = [
  {
    icon: Transactions,
    value: '1,00',
    text: 'Transactions'
  },
  {
    icon: Communities,
    value: '695',
    text: 'Communities'
  },
  {
    icon: Wallet,
    value: '100,00',
    text: 'Wallets'
  }
]

const Item = ({ image, Text, icon }) => {
  return (
    <div className='item'>
      <img className='item__image' src={image} />
      <div className='item__title grid-x align-middle'>
        <img src={icon} />
        <h4>Mobile money</h4>
      </div>
      <Text />
    </div>
  )
}

const BannerItem = ({
  icon,
  value,
  text
}) => {
  return (
    <div className='item grid-x align-middle cell small-8 align-center'>
      <img src={icon} />&nbsp;&nbsp;
      <div className='title'>
        <span>{value}</span>
        &nbsp;{text}
      </div>
    </div>
  )
}

const Banner = () => {
  return (
    <div className='info_banner'>
      <div className='info_banner__items grid-x align-middle align-center'>
        {bannerItems.map((item, index) => <BannerItem key={index} {...item} />)}
      </div>
    </div>
  )
}

const SectionTwo = () => {
  return (
    <>
      <Banner />
      <section className='section_2'>
        <h2 className='section_2__title'>Turning communities into economies</h2>
        <div className='section_2__items'>
          {
            items.map((item, index) => <Item key={index} {...item} />)
          }
        </div>
      </section>
    </>
  )
}

export default SectionTwo
