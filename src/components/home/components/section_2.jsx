import React from 'react'
import Fast from '@/assets/images/fast.svg'
import Mobile from '@/assets/images/mobile.svg'
import Owned from '@/assets/images/owned.svg'
import { FormattedMessage } from 'react-intl'
import StatsBanner from './stats_banner'

const items = [
  {
    icon: Owned,
    title: <FormattedMessage defaultMessage='Community Owned' />,
    Text: () => (
      <div className='item__text'>
        <FormattedMessage
          defaultMessage='Powered by Proof of Stake (POS) enabling anyone to own a piece of the network.'
        />
      </div>
    )
  },
  {
    icon: Mobile,
    title: <FormattedMessage defaultMessage='Mobile-First' />,
    Text: () => (
      <div className='item__text'>
        <FormattedMessage
          defaultMessage='Designed to support seamless mobile experiences made for mainstream audiences.'
        />
      </div>
    )
  },
  {
    icon: Fast,
    title: <FormattedMessage defaultMessage='Fast & Low-Cost' />,
    Text: () => (
      <div className='item__text'>
        <FormattedMessage
          defaultMessage='Engineered for scale, ensuring sub 5 second block times and $0.01 transactions.  '
        />
      </div>
    )
  }
]

const Item = ({ title, Text, icon }) => {
  return (
    <div className='item'>
      <div className='item__content'>
        <div className='item__title'>
          <h4>{title}</h4>
        </div>
        <Text />
      </div>
      <div className='item__pic'>
        <img src={icon} />
      </div>
    </div>
  )
}

const SectionTwo = () => {
  return (
    <>
      <section className='section_2'>
        <StatsBanner />
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
