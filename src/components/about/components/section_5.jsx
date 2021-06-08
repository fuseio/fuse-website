import React from 'react'
import { FormattedMessage } from 'react-intl'

const SectionThree = () => {
  return (
    <section className='hiring grid-container'>
      <div className='hiring__wrapper'>
        <div className='hiring'>
          <div className='title'>
            <FormattedMessage defaultMessage='We are hiring!🎉' />
          </div>
          <a
            className='text'
            rel='noopener noreferrer'
            href='https://www.linkedin.com/company/fuseio/jobs/'
            target='_blank'
          >
            <FormattedMessage defaultMessage='Check out open positions to join our global or Tel Aviv team' />
          </a>
        </div>
      </div>
    </section>
  )
}

export default SectionThree
