import React from 'react'
import Aleph from '@/assets/images/backed_aleph.png'
import Colider from '@/assets/images/backed_colider.png'
import trgc from '@/assets/images/backed_trgc.png'
import Wolf from '@/assets/images/backed_wolf.png'
import spark from '@/assets/images/spark.svg'
import { FormattedMessage } from 'react-intl'

const SectionTwo = () => {
  return (
    <section className='section_two__wrapper'>
      <div className='section_two__container'>
        <div className='section_two'>
          <div className='item'>
            <div className='title'>
              <FormattedMessage defaultMessage='Backed by' />
            </div>
          </div>
          <div className='item'>
            <img src={Aleph} />
          </div>
          <div className='item'>
            <img src={Colider} />
          </div>

          <div className='item'>
            <img src={Wolf} />
          </div>

          <div className='item'>
            <img src={trgc} />
          </div>

          <div className='item'>
            <img src={spark} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionTwo
