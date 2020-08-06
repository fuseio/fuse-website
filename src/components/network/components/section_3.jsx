import React from 'react'
import { useCountUp } from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

const formatNumber = (num) => String(num).replace(/(.)(?=(\d{3})+$)/g, '$1,')

const SectionThree = () => {
  const { countUp: transactionCounter, start: transactionCounterStart } = useCountUp({
    start: 0,
    end: 510202
  })

  const { countUp: communitiesCounter, start: communitiesCounterStart } = useCountUp({
    start: 0,
    end: 705
  })

  const { countUp: walletsCounter, start: walletsCounterStart } = useCountUp({
    start: 0,
    end: 8669
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
              <div className="number">{formatNumber(transactionCounter)}</div>
            </VisibilitySensor>
            {/* <CountUp start={0} end={510202} redraw={true}>
              {({ countUpRef, start }) => (
              )}
            </CountUp> */}
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
            <VisibilitySensor onChange={communitiesCounterStart} delayedCall>
              <div className="number">{formatNumber(communitiesCounter)}</div>
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
              <div className="number">{formatNumber(walletsCounter)}</div>
            </VisibilitySensor>
            <div className="title">Contract Wallets</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionThree