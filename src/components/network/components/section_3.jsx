import React, { useEffect } from 'react'
import { useCountUp } from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import useFetch from 'use-http'

const formatNumber = (num) => String(num).replace(/(.)(?=(\d{3})+$)/g, '$1,')

const SectionThree = () => {
  const { data = { data: 0 } } = useFetch('https://studio.fuse.io/api/v1/communities/count', {}, [])

  const { countUp: transactionCounter, start: transactionCounterStart } = useCountUp({
    start: 0,
    formattingFn: formatNumber,
    end: 1026576
  })

  const { countUp: communitiesCounter, start: communitiesCounterStart, update: updateCommunities } = useCountUp({
    start: 0,
    redraw: true,
    formattingFn: formatNumber,
    end: data.data,
  })

  const { countUp: walletsCounter, start: walletsCounterStart } = useCountUp({
    start: 0,
    formattingFn: formatNumber,
    end: 78444
  })

  return (
    <section className="network_in_numbers">
      <div className="network_in_numbers__content">
        <div className="items">
          <div className="item">
            <div className='up_to'>
              <div>Up to:</div>
            </div>
            <div className="number">0.01$</div>
            <div className="title">Transaction Cost</div>
          </div>
          <div className="line cell shrink"></div>
          <div className="item">
            <VisibilitySensor onChange={transactionCounterStart} delayedCall>
              <div className="number">{transactionCounter}</div>
            </VisibilitySensor>
            <div className="title">Transactions</div>
            <div className='bottom_link'>
              <div><a rel="noreferrer noopener" target='_blank'
                href="http://explorer.fuse.io/">Click here for the explorer</a>
                <img src="./images/arow.svg" alt="network_arrow" />
              </div>
            </div>
          </div>
          <div className="line cell shrink"></div>
          <div className="item">
            <VisibilitySensor onChange={() => {
              communitiesCounterStart()
              updateCommunities(data.data)
            }} delayedCall>
              <div className="number">{communitiesCounter}</div>
            </VisibilitySensor>
            <div className="title">Communities Launched</div>
            <div className='bottom_link'>
              <div><a rel="noreferrer noopener" target='_blank'
                href="http://studio.fuse.io/">Using the Fuse Studio</a>
                <img src="./images/arow.svg" alt="network_arrow" />
              </div>
            </div>
          </div>
          <div className="line cell shrink"></div>
          <div className="item">
            <VisibilitySensor onChange={walletsCounterStart} delayedCall>
              <div className="number">{walletsCounter}</div>
            </VisibilitySensor>
            <div className="title">Contract Wallets</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionThree