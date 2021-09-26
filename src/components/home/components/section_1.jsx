import React from 'react'
import { FormattedMessage } from 'react-intl'
import Globe from './globe'

const SectionOne = () => {
  return (
    <section className='section-A'>
      <div className='section-A__wrapper'>
        <div className='section-A__container'>
          <div className='section-A__main'>
            <h1 className='main_title'>
              <FormattedMessage defaultMessage='The Infrastructure for Open-Source Money' />
            </h1>
            <p className='section-A__text'>
              <FormattedMessage
                defaultMessage='Build community-centric, mobile-first {newLine} payment systems with <b>zero coding</b>{newLine} <b>experience</b> on a low-cost, DeFi platform.'
                values={{
                  newLine: <br />,
                  b: (chunks) => <b>{chunks}</b>
                }}
              />
            </p>
          </div>
          <div className='canvas grid-x align-right'>
            <Globe />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionOne
