import React from 'react'
import { withRouter } from 'react-router'
import FuseLogo from '@/assets/images/fuse_loog.svg'
import Settings from '@/assets/images/settings.svg'
import Validate from '@/assets/images/validate.svg'

const items = [
  {
    logo: FuseLogo,
    title: 'Participate',
    text: 'Fuse Token holders participate decisions about the network future.',
    links: [
      {
        text: 'Buy Fuse token',
        link: 'https://app.voltage.finance/'
      },
      {
        text: 'Stake fuse',
        link: 'https://staking.fuse.io/'
      }
    ]
  },
  {
    logo: Settings,
    title: 'Integrate',
    text: 'Provide services on the Fuse network or become an operator such as a payment processor, Fiat ramp, wallet provider and more.',
    links: [
      {
        text: 'Join the eco-system',
        route: '/ecosystem'
      }
    ]
  },
  {
    logo: Validate,
    title: 'Validate',
    text: "Validators are network participants that are running the network nodes and receive Fuse rewards for maintaining the network and it's governance",
    links: [
      {
        text: 'Become a Validator',
        link: 'https://docs.fuse.io/general-1/how-to-become-a-validator'
      }
    ]
  }
]

const Link = withRouter(({ route, link, text, history }) => {
  return route
    ? (
      <a onClick={() => history.push(route)}>{text}</a>
      )
    : (
      <a rel='noreferrer noopener' target='_blank' href={link}>{text}</a>
      )
})

function Item ({
  logo,
  title,
  text,
  links
}) {
  return (
    <div className='item'>
      <img src={logo} />
      <div className='title'>{title}</div>
      <div className='text'>{text}</div>
      <div className='links'>
        {
          links.map((item, index) => <Link key={index} {...item} />)
        }
      </div>
    </div>
  )
}

function SectionSix () {
  return (
    <section className='section_6__wrapper'>
      <div className='section_6'>
        <div className='section_6__title'>Own the platform you are building on</div>
        <div className='section_6__text'>Powered by the Fuse Token, Fuse enables community participants including consumers, clients, service providers and operators to align interests around a common goal - the growth of the network.</div>
        <div className='section_6__boxs'>
          {
            items.map((item, index) => <Item {...item} key={index} />)
          }
        </div>
      </div>
    </section>
  )
}

export default SectionSix
