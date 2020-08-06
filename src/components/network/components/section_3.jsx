import React from 'react';
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

const SectionThree = () => {
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
            <CountUp start={0} end={510202} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <div ref={countUpRef} className="number" />
                </VisibilitySensor>
              )}
            </CountUp>
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
            <CountUp start={0} end={705} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <div ref={countUpRef} className="number" />
                </VisibilitySensor>
              )}
            </CountUp>
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
            <CountUp start={0} end={8669} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <div ref={countUpRef} className="number" />
                </VisibilitySensor>
              )}
            </CountUp>
            <div className="title">Contract Wallets</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionThree;