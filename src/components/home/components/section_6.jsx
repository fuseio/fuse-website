import React from 'react'
import StackImage from '@/assets/images/stack.png'

const items = [
  {
    title: 'Participate',
    text: 'Fuse Token holders participate decisions about the network future.',
    links: [
      {
        text: 'Buy Fuse token',
        link: ''
      },
      {
        text: 'Stake fuse',
        link: ''
      }
    ]
  },
  {
    title: 'Integrate',
    text: 'Provide services on the Fuse network or become an operator such as a payment processor, Fiat ramp, wallet provider and more.',
    links: [
      {
        text: 'Join the eco-system',
        link: ''
      }
    ]
  },
  {
    title: 'Validate',
    text: "Validators are network participants that are running the network nodes and receive Fuse rewards for maintaining the network and it's governance",
    links: [
      {
        text: 'Become a Validator',
        link: ''
      }
    ]
  }
]

function Item ({
  title,
  text,
  links
}) {
  return (
    <div className='item'>
      <div className='title'>{title}</div>
      <div className='text'>{text}</div>
      <div className='links'>
        {
          links.map(({ text, link }, index) => {
            return (
              <a rel='noreferrer noopener' target='_blank' key={index} href={link}>{text}</a>
            )
          })
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
