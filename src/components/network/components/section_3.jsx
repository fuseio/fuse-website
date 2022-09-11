import React from 'react'
import { FormattedMessage } from 'react-intl'
import { useCountUp } from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import Arrow from '@/assets/images/arow.svg'
import { formatNumber } from '@/utils/format'

const SectionThree = () => {
  const { countUp: transactionCounter, start: transactionCounterStart } = useCountUp({
    start: 0,
    formattingFn: formatNumber,
    end: 110168275
  })

  const { countUp: totalFuseStakedCounter, start: totalFuseStakedCounterStart } = useCountUp({
    start: 0,
    redraw: true,
    formattingFn: formatNumber,
    end: 94863358
  })

  const { countUp: walletsCounter, start: walletsCounterStart } = useCountUp({
    start: 0,
    formattingFn: formatNumber,
    end: 1266786
  })

  return (
    <section className='network_in_numbers'>
      <div className='network_in_numbers__content'>
        <div className='items'>
          <div className='item'>
            <div className='up_to'>
              <div>Up to:</div>
            </div>
            <div className='number'>0.01$</div>
            <div className='title'><FormattedMessage defaultMessage='Transaction Cost' /></div>
          </div>
          <div className='line cell shrink' />
          <div className='item'>
            <VisibilitySensor onChange={transactionCounterStart} delayedCall>
              <div className='number'>{transactionCounter}</div>
            </VisibilitySensor>
            <div className='title'><FormattedMessage defaultMessage='Transactions' /></div>
            <div className='bottom_link'>
              <div>
                <a
                  rel='noreferrer noopener' target='_blank'
                  href='http://explorer.fuse.io/'
                >
                  <FormattedMessage defaultMessage='Click here for the explorer' />
                </a>
                <img src={Arrow} alt='network_arrow' />
              </div>
            </div>
          </div>
          <div className='line cell shrink' />
          <div className='item'>
            <VisibilitySensor onChange={totalFuseStakedCounterStart} delayedCall>
              <div className='number'>{totalFuseStakedCounter}</div>
            </VisibilitySensor>
            <div className='title'><FormattedMessage defaultMessage='Communities Launched' /></div>
            <div className='bottom_link'>
              <div>
                <a
                  rel='noreferrer noopener' target='_blank'
                  href='http://studio.fuse.io/'
                >
                  <FormattedMessage defaultMessage='Using the Fuse Studio' />
                </a>
                <img src={Arrow} alt='network_arrow' />
              </div>
            </div>
          </div>
          <div className='line cell shrink' />
          <div className='item'>
            <VisibilitySensor onChange={walletsCounterStart} delayedCall>
              <div className='number'>{walletsCounter}</div>
            </VisibilitySensor>
            <div className='title'><FormattedMessage defaultMessage='Contract Wallets' /></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionThree
