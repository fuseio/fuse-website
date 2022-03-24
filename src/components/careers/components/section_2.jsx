import React, { useEffect, useState } from 'react'
import { filter, groupBy, capitalize, lowerCase } from 'lodash'

const colors = [
  '#3AD889',
  '#E0AAFF',
  '#3AD889',
  '#E0AAFF'
]

const SectionTwo = () => {
  const [roles, setRoles] = useState([])
  useEffect(() => {
    (async () => {
      const myHeaders = new Headers()
      console.log({ apiKey: CONFIG?.freshteam?.apiKey })
      myHeaders.append('Authorization', `Bearer ${CONFIG?.freshteam?.apiKey}`)
      const jobPostings = await fetch('https://fuse.freshteam.com/api/job_postings', {
        headers: myHeaders
      }).then((res) => res.json())
      const data = filter(jobPostings, ['deleted', false])
      const roles = Object.entries(groupBy(data, (item) => item.department.name)).reduce((prev, [key, value], index) => ([
        ...prev, {
          title: key,
          color: colors[index],
          positions: [
            ...value.map((item) => ({
              title: item.title,
              applyLink: item.applicant_apply_link,
              type: capitalize(lowerCase(item.type)),
              location: item.remote ? 'Remote' : item.branch.city
            }))
          ]
        }
      ]), [])
      setRoles(roles)
    })()
  }, [])

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
        <div className='role__line' style={{ backgroundColor: color }} />
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
  const { title, type, location, applyLink } = props
  return (
    <a
      rel='noreferrer noopener'
      target='_blank'
      className='position-card'
      href={applyLink}
    >
      <h3 className='position-card__position'>{title}</h3>
      <div className='position-card__details'>
        <p className='position-card__location'>{location}</p>
        <p className='position-card__type'>{type}</p>
      </div>
    </a>
  )
}

export default SectionTwo
