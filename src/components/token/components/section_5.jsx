import React from 'react'
import Pie from '@/assets/img/pie.png'
import { FormattedMessage } from 'react-intl'

const items = [
  {
    title: <FormattedMessage defaultMessage='Future dev pool' />,
    text: <FormattedMessage defaultMessage='65 million FUSE' />,
    color: '#37556a'
  },
  {
    title: <FormattedMessage defaultMessage='Bootstrap poll' />,
    text: <FormattedMessage defaultMessage='130 million FUSE' />,
    color: '#0d263c'
  },
  {
    title: <FormattedMessage defaultMessage='ETOP' />,
    text: <FormattedMessage defaultMessage='25 million FUSE' />,
    color: '#b8f9b6'
  },
  {
    title: (
      <FormattedMessage defaultMessage='Early investors & advisors & team' />
    ),
    text: <FormattedMessage defaultMessage='40 million FUSE' />,
    color: '#fff16d'
  },
  {
    title: <FormattedMessage defaultMessage='Mesa + private sale' />,
    text: <FormattedMessage defaultMessage='40 million FUSE' />,
    color: '#d8dde6'
  }
]

const SectionFive = () => {
  return (
    <section className='token_distribution__wrapper'>
      <div className='token_distribution__container'>
        <h1 className='title'>
          <FormattedMessage defaultMessage='Token distribution' />
        </h1>
        <div className='token_distribution'>
          <div className='token_distribution__content'>
            <ul className='items'>
              {
                items.map(({ title, text, color }, index) => {
                  return (
                    <li key={index}>
                      <div
                        className='bullet'
                        style={{ backgroundColor: color }}
                      />
                      <div className='content'>
                        <h2>{title}</h2>
                        <h4>{text}</h4>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>

          <div className='image'>
            <img src={Pie} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionFive
