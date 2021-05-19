import React from 'react'
import Fees from '@/assets/img/utilities/fees.png'
import Secure from '@/assets/img/utilities/secure.png'
import Governance from '@/assets/img/utilities/governance.png'
import Defi from '@/assets/img/utilities/defi.png'

const items = [
  {
    image: Fees,
    title: 'Transactions fees',
    text: '100% of feed are paid to network validators.'
  },
  {
    image: Secure,
    title: 'Security & consensus',
    text: 'Delegated proof-of-stake. 5% yearly inflation.'
  },
  {
    image: Governance,
    title: 'Governance',
    text: 'Proportional, stake-based voting.'
  },
  {
    image: Defi,
    title: 'DeFi',
    text: 'Token-backed stable-coin issuance. Lending and borrowing.'
  }
]

const Item = ({ image, text, title }) => {
  return (
    <div className='item'>
      <img className='item__image' src={image} />
      <div className='item__title'>
        {title}
      </div>
      <div className='item__text'>
        {text}
      </div>
    </div>
  )
}

const SectionTwo = () => {
  return (
    <section className='utilities__wrapper'>
      <div className='utilities__container'>
        <div className='utilities'>
          <h2 className='utilities__title'>Utilities</h2>
          <div className='utilities__items'>
            {
              items.map((item, index) => <Item key={index} {...item} />)
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionTwo
