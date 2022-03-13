import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const positions = [
  {
    id: 1,
    title: 'Full-Stack Developer',
    type: 'Full - time',
    location: 'Tel Aviv, IL',
    details: [
      {
        'What we look for frontend dev:': [
          '2 years experience with JS using ReactJS/VueJS. Working with state management is a plus',
          '1 year of experience with NodeJS/Python/Ruby',
          'Crypto knowledge an advantage (not mandatory)',
          'Mobile experience in general and with Flutter in particular is an advantage',
          'We are primarily looking for an individual residing in Tel Aviv area but we are also prepared to consider remote candidates'
        ]
      },
      {
        'What we look for backend dev': [
          '2 year of experience with NodeJS/Python/Java',
          'Knowledge of working with databases, (MongoDB is advantage)',
          "Experience with developing API's is an advantage.",
          'Experience working with Queues and async processes is an advantage',
          'Working in a cloud, AWS especially is an advantage.',
          'Crypto knowledge an advantage (not mandatory)',
          'Developing front end with React/VueJS - advantage'
        ]
      },
      {
        'What we offer you:': [
          'Flexible work with a high degree of autonomy in a dynamic, fast growth startup',
          'An opportunity to leverage bleeding edge technology and industry-leading development practices',
          'Close collaboration with leading projects in the space, e.g.',
          'A competitive salary and other potential arrangements. Details depend on ability and experience.'
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Full-Stack Developer',
    type: 'Remote',
    location: 'Tel Aviv, IL',
    details: [
      'Fuse Network is a project and ecosystem featuring a fast and low-cost Ethereum-compatible blockchain and a robust plug-and-play mobile-centric crypto payment infrastructure.',
      {
        'About the Role':
          'As a full-stack developer, you will be working directly with the CEO and his team of experienced engineers on product development. You’ll have an opportunity to work across frontend + web3 integrations as well as backend applications (such as building SDKs).'
      },
      {
        'Responsibilities:': [
          'Build frontend components for Fuse business tools and mobile wallet infrastructure.',
          'Link frontend components to our smart contracts using web3 libraries.',
          'Integrating projects into Fuse ecosystem.',
          'Work in close collaboration with the team on product architecture and design.'
        ]
      },
      {
        'Minimum qualifications:': [
          'Senior-level React/Redux (or another front-end library) development experience.',
          'Familiarity with databases and full-stack frameworks (NodeJS/Express, CSS, HTML, Typescript)..',
          'Knowledge of Web3 tech stack: front end libraries, Solidity, EVM.',
          'Passion for learning new technologies and tackling novel technical problems.',
          'Excellent English communication skill'
        ]
      },
      {
        'Nice to have:': [
          'Experience working with Figma and UI/ UX experience more generally.',
          'General knowledge about DeFi.',
          'Bachelor’s degree in Computer Science or similar working experience.'
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Solidity Developer',
    type: 'Remote',
    location: 'Tel Aviv, IL',
    details: [
      'Voltage Finance is a leading all-in-one decentralized finance (DeFi) platform on the rapidly growing payment-focused layer-one Fuse Network blockchain aimed at promoting mass adoption through consumer-friendly UX and focus on mobile.',
      {
        'About the Role':
          'As a Solidity developer, you will be working directly with the CEO and his team of experienced engineers on the development of the Voltage Finance DeFi suite.'
      },
      {
        'By working with the Voltage Finance team, you will:': [
          'Contribute to a leading protocol in a cutting edge area of technology and finance.',
          'Be valued for your contributions, in a results-driven way.',
          'Be eligible for an attractive compensation package including token allocation and the option of getting paid in digital currency.'
        ]
      },
      {
        'About you': [
          'You’re passionate about Blockchain and continually keep at the forefront of cryptocurrency & DeFi.',
          'You care about writing secure, quality, maintainable Solidity.',
          'You have a knack for solving difficult problems.',
          'You contribute effectively as part of a lean, fast-moving team.'
        ]
      },
      {
        Responsibilities: [
          'Find solutions to tough problems by designing incentive mechanisms, protocol optimisations and governance mechanics in a fast moving DeFi ecosystem.',
          'Architect, develop, test and deploy smart contracts across the array of domains that make up Voltage Finance.',
          'Develop high-quality code that is maintainable, performant and accessible.'
        ]
      },
      {
        Qualifications: [
          'At least two years of provable experience delivering high quality, functional code running on EVM.',
          'General knowledge of DeFi.'
        ]
      },
      {
        'Nice to have': [
          'A Bachelor’s degree in Computer Science or higher.',
          'Experience in Financial Engineering in the DeFi ecosystem.',
          'Experience contributing to open source projects.'
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Office Administrator',
    type: 'Full - time',
    location: 'Tel Aviv, IL',
    details: [
      'Fuse is a fast-growing crypto fintech company based in Tel Aviv. We\'re looking for an Office Administrator who is self-motivated, with a can-do attitude to work in our Israeli office.',
      {
        'About the company:': 'Fuse is a decentralized blockchain-powered platform and technology stack whose goal is to enable genuine mass adoption of crypto payments and decentralized finance (DeFi).'
      },
      {
        'About the team:': 'Our team is distributed all over the world: Israel, US, France, Denmark, Russia, India and other countries. We all speak different languages, but the main working language is English.'
      },
      {
        'Responsibilities:': [
          'Imagine that our office is a project for which you are responsible',
          'Support in day-to-day office bookkeeping, setting up payments, invoices, refunds, and expenses',
          'Be the point-person for employees on any issue like maintenance, mailing, shipping, office supplies, office equipment, and administrative bills',
          'Assist with HR activities and other administrative tasks'
        ]
      },
      {
        'Requirements:': [
          'Experience in solving basic financial tasks: paying bills, payroll, preparing reports',
          'Administrative work experience',
          'People-oriented person with excellent communication skills',
          'Service-oriented, strong organizational, time management skills, ability to multitask and prioritize work',
          'English - high level'
        ]
      }
    ]
  }
]

const SectionOne = () => {
  const { id } = useParams()
  const [position, setPosition] = useState({})
  useEffect(() => {
    setPosition(positions.find(p => p.id == id))
  }, [])
  const { title, type, location, details = [] } = position
  return (
    <section className='position'>
      <div className='position__wrapper'>
        <div className='position__container'>
          <div className='position__main'>
            <h1 className='main_title'>
              {title}
            </h1>
            <div className='position__details'>
              <p className='position__type position-bullet'>{type}</p>
              <p className='position__location position-bullet'>{location}</p>
              <a
                rel='noreferrer noopener'
                className='main_button main_button--no-arrow'
                href={`mailto:support@example.com?subject=${title}`}
              >
                Apply to this job
              </a>
            </div>
            <div className='position__description'>
              {details.map((detail, index) => <Details key={index} detail={detail} />)}
            </div>
            <a
              rel='noreferrer noopener'
              className='main_button_mobile main_button--no-arrow'
              href={`mailto:support@example.com?subject=${title}`}
            >
              Apply to this job
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

const Details = ({ detail }) => {
  if (typeof detail === 'string') {
    return <p className='position__detail_p'>{detail}</p>
  }

  const [key, value] = Object.entries(detail)[0]
  return (
    <div className='position__detail position__detail_p'>
      <h2 className='position__detail_title'>{key}</h2>
      {
        Array.isArray(value)
          ? <ul className='position__detail_list'>
            {Object.values(detail)[0].map((item, index) => {
              return <li key={index}>{item}</li>
            })}
            </ul>
          : <p>{value}</p>
      }
    </div>
  )
}

export default SectionOne
