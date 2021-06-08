import React from 'react'
import mark from '@/assets/img/team/mark.png'
import andy from '@/assets/img/team/andy.png'
import ashish from '@/assets/img/team/ashish.png'
import sahara from '@/assets/img/team/sahara.png'
import isaac from '@/assets/img/team/isaac.png'
import leon from '@/assets/img/team/leon.png'
import lior from '@/assets/img/team/lior.jpg'
import mikhail from '@/assets/img/team/mikhail.png'
import rudy from '@/assets/img/team/rudy.png'
import mulenga from '@/assets/img/team/mulenga.png'
import daniil from '@/assets/img/team/daniil.png'
import robert from '@/assets/img/team/robert.png'
import mike from '@/assets/img/team/mike.png'
import linkedin from '@/assets/img/linkedin.svg'
import { FormattedMessage } from 'react-intl'

const members = [
  {
    name: 'Mark Smargon',
    role: 'Founder & CEO',
    picture: mark,
    linked: 'https://www.linkedin.com/in/marksmargon/',
    isLinkedIn: true
  },
  {
    name: 'Robert Miller',
    role: 'PR & Communications',
    picture: robert,
    linked: 'https://www.linkedin.com/in/rm16/',
    isLinkedIn: true
  },
  {
    name: 'Isaac Rodgin',
    role: 'Head of BD',
    picture: isaac,
    linked: 'https://www.linkedin.com/in/isaac-rodgin-58a8897a/',
    isLinkedIn: true
  },
  {
    name: 'Leon Prouger',
    role: 'Tech Lead',
    picture: leon,
    linked: 'https://www.linkedin.com/in/leon-prouger-60646540/',
    isLinkedIn: true
  },
  {
    name: 'Lior Agnin',
    role: 'Fullstack & Moble Developer',
    picture: lior,
    linked: 'https://www.linkedin.com/in/lioragnin/',
    isLinkedIn: true
  },
  {
    name: 'Mikhail Nekrasov',
    role: 'Head of Product',
    picture: mike,
    linked: 'https://www.linkedin.com/in/nekrasovmikhail/',
    isLinkedIn: true
  },
  {
    name: 'Andy Pohl',
    role: 'Backend Developer',
    picture: andy,
    linked: 'https://www.linkedin.com/in/andrew-pohl-4b52959b/',
    isLinkedIn: true
  },
  {
    name: 'Mulenga Bowa',
    role: 'Fullstack Developer',
    picture: mulenga,
    isLinkedIn: false
  },
  {
    name: 'Rudolf Podkrivacky',
    role: 'Front-End Developer',
    picture: rudy,
    isLinkedIn: true,
    linkedin: 'https://www.linkedin.com/in/rudolfpod/'
  },
  {
    name: 'Mikhail Dubodel',
    role: 'Social Media',
    picture: mikhail,
    linked: 'https://www.linkedin.com/in/mikhaildubodel/',
    isLinkedIn: true
  },
  {
    name: 'Ashish Ram',
    role: 'Community Manager',
    picture: ashish,
    linked: 'https://www.linkedin.com/in/ashish-ram/',
    isLinkedIn: true
  },
  {
    name: 'Sahara Sittie',
    role: 'Communications and design',
    picture: sahara,
    linked: 'https://www.linkedin.com/in/saharasittie/',
    isLinkedIn: true
  },
  {
    name: 'Daniil Gorbatenko',
    role: 'Partnerships and Content',
    picture: daniil,
    linked: 'https://www.linkedin.com/in/daniil-gorbatenko-4a33133/',
    isLinkedIn: true
  }
]

const TeamMember = ({ picture, name, role, linked, isLinkedIn }) => {
  return (
    <div className='card cell medium-6 small-24'>
      <div className='card__content'>
        <img src={picture} alt={name.toLowerCase()} />
        <h2 className='name'>{name}</h2>
        <div className='icons'>
          <h3 className='role'>{role}</h3>
        </div>
        {
          isLinkedIn && (
            <a href={linked} rel='noreferrer noopener' target='_blank'>
              <img src={linkedin} alt='linked in' className='linkedin' />
            </a>
          )
        }
      </div>
    </div>
  )
}

const SectionThree = () => {
  return (
    <section className='section_three__wrapper'>
      <div className='section_three__container'>
        <div className='section_three'>
          <h1 className='title'>
            <FormattedMessage defaultMessage='Meet the Team' />
          </h1>
          <div className='grid-x align-middle items'>
            {
              members.map((member, index) => <TeamMember key={index} {...member} />)
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionThree
