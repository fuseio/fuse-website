import React from 'react'
import { FormattedMessage } from 'react-intl'
import { useCountUp } from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import useFetch from 'use-http'
import arow from '@/assets/images/arow.svg'
const formatNumber = (num) => String(num).replace(/(.)(?=(\d{3})+$)/g, '$1,')

const SectionThree = () => {
  const { data = { data: 0 } } = useFetch('https://studio.fuse.io/api/v1/communities/count', {}, [])

  const { countUp: transactionCounter, start: transactionCounterStart } = useCountUp({
    start: 0,
    formattingFn: formatNumber,
    end: 10392350
  })

  const { countUp: communitiesCounter, start: communitiesCounterStart, update: updateCommunities } = useCountUp({
    start: 0,
    redraw: true,
    formattingFn: formatNumber,
    end: data.data
  })

  const { countUp: walletsCounter, start: walletsCounterStart } = useCountUp({
    start: 0,
    formattingFn: formatNumber,
    end: 358909
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
                <img src={arow} alt='network_arrow' />
              </div>
            </div>
          </div>
          <div className='line cell shrink' />
          <div className='item'>
            <VisibilitySensor
              onChange={() => {
                communitiesCounterStart()
                updateCommunities(data.data)
              }} delayedCall
            >
              <div className='number'>{communitiesCounter}</div>
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
                <img src={arow} alt='network_arrow' />
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
