import React from 'react'
import Mobile from '@/assets/img/mobile_money.png'
import MobileSmall from '@/assets/img/mobile_money_small.svg'
import Business from '@/assets/img/business_tools.png'
import BusinessSmall from '@/assets/img/business_tools_small.svg'
import PaymentsNetwork from '@/assets/img/paymets_network.png'
import PaymentsNetworkSmall from '@/assets/img/payments_network_small.svg'
import VisibilitySensor from 'react-visibility-sensor'
import useFetch from 'use-http'
import { FormattedMessage } from 'react-intl'
import useCounter from '@/hooks/useCounter'

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

const Banner = () => {
  const { data = { data: 0 } } = useFetch('https://studio.fuse.io/api/v1/communities/count', {}, [])
  const transactionCounter = useCounter(18612709)
  const communitiesCounter = useCounter(data.data)
  const walletsCounter = useCounter(502516)

  return (
    <section className='info_banner__wrapper'>
      <div className='info_banner__container'>
        <div className='info_banner'>
          <div className='item grid-x align-middle'>
            &nbsp;&nbsp;
            <div className='title'>
              <VisibilitySensor delayedCall>
                <span>{transactionCounter}</span>
              </VisibilitySensor>
              &nbsp;
              <FormattedMessage defaultMessage='Transactions' />
            </div>
          </div>
          <div className='item grid-x align-middle'>
            &nbsp;&nbsp;
            <div className='title'>
              <VisibilitySensor delayedCall>
                <span>{communitiesCounter}</span>
              </VisibilitySensor>
              &nbsp;
              <FormattedMessage defaultMessage='Communities' />
            </div>
          </div>
          <div className='item grid-x align-middle'>
            &nbsp;&nbsp;
            <div className='title'>
              <VisibilitySensor delayedCall>
                <span>{walletsCounter}</span>
              </VisibilitySensor>
              &nbsp;
              <FormattedMessage defaultMessage='Wallets' />
            </div>
          </div>
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
