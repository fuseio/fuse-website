import React from 'react'
import { FormattedMessage } from 'react-intl'

const SectionFour = () => {
  return (
    <section className='section_four__wrapper'>
      <div className='section_four__mission'>
        <div className='section_four__container'>
          <div className='section_four'>
            <div className='title'>
              <FormattedMessage defaultMessage='Mission' />
            </div>
            <div className='text'>
              <FormattedMessage defaultMessage='Fuse was founded in 2019 with a mission to bring the power of mobile payments to communities around the world.' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionFour
