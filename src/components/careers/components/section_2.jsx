import React from 'react'
import { useHistory } from 'react-router'

const roles = [
  {
    title: 'R&D',
    color: '#3AD889',
    positions: [
      {
        id: 1,
        title: 'Full-Stack Developer',
        type: 'Full - time',
        location: 'Tel Aviv',
      },
      {
        id: 2,
        title: 'Full-Stack Developer',
        type: 'Remote',
        location: 'Tel Aviv',
      },
      {
        id: 3,
        title: 'Solidity Developer',
        type: 'Remote',
        location: 'Tel Aviv',
      },
    ],
  },
  {
    title: 'Administration',
    color: '#E0AAFF',
    positions: [
      {
        id: 4,
        title: 'Office Administrator',
        type: 'Full - time',
        location: 'Tel Aviv',
      },
    ],
  },
];

const SectionTwo = () => {
  return (
    <section className='career-B'>
      <div className='career-B__wrapper'>
        <div className='career-B__container'>
          <div className='career-B__main'>
            <h1 className='main_title'>
              Roles
            </h1>
            {
              roles.map((role, index) => <Role key={index} {...role} />)
            }
          </div>
        </div>
      </div>
    </section>
  )
}

const Role = ({ title, color, positions }) => {
  return (
    <div className='role'>
      <div className='role__title'>
        <div className='role__line' style={{ backgroundColor: color }}></div>
        <h2>{title}</h2>
      </div>
      <div className='positions'>
        {
          positions.map((position, index) => <PositionCard key={index} {...position} />)
        }
      </div>
    </div>
  )
}

const PositionCard = (props) => {
  const history = useHistory();
  const { title, type, location, id } = props;
  return (
    <div className='position-card' onClick={() => history.push(`/position/${id}`)}>
      <h3 className='position-card__position'>{title}</h3>
      <div className='position-card__details'>
        <p className='position-card__location'>{location}</p>
        <p className='position-card__type'>{type}</p>
      </div>
    </div>
  )
}

export default SectionTwo
