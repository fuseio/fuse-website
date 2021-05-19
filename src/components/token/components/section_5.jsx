import React from 'react'
import Pie from '@/assets/img/pie.png'

const items = [
  {
    title: 'Future dev pool',
    text: '65 million FUSE',
    color: '#37556a'
  },
  {
    title: 'Bootstrap poll',
    text: '130 million FUSE',
    color: '#0d263c'
  },
  {
    title: 'ETOP',
    text: '25 million FUSE',
    color: '#b8f9b6'
  },
  {
    title: 'Early investors & adisors & team',
    text: '40 million FUSE',
    color: '#fff16d'
  },
  {
    title: 'Mesa + private sale',
    text: '40 million FUSE',
    color: '#d8dde6'
  }
]

const SectionFive = () => {
  return (
    <section className='token_distribution__wrapper'>
      <div className='token_distribution__container'>
        <h1 className='title'>Token distribution</h1>
        <div className='token_distribution'>
          <div className='token_distribution__content'>
            <ul className='items'>
              {
                items.map(({ title, text, color }, index) => {
                  return (
                    <li key={index}>
                      <div className='bullet' style={{ backgroundColor: color }} />
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
