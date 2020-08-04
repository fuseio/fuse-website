import React from 'react';
import step1 from '@/assets/images/step_1.png'
import step2 from '@/assets/images/step_2.png'
import step3 from '@/assets/images/step_3.png'

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
            <div className="title">Transaction cost</div>
          </div>
          <div className="line cell shrink"></div>

          <div className="item">
            <div className="number">489K</div>
            <div className="title">Transactions</div>
            <div className='bottom_link'>
              <div><a rel="noreferrer noopener" target='_blank'
                href="http://explorer.fuse.io/">Click here for the explorer</a></div>
            </div>
          </div>
          <div className="line cell shrink"></div>

          <div className="item">
            <div className="number">250</div>
            <div className="title">communities launched</div>
            <div className='bottom_link'>
              <div><a rel="noreferrer noopener" target='_blank'
                href="http://studio.fuse.io/">Using the Fuse Studio</a></div>
            </div>
          </div>
          <div className="line cell shrink"></div>

          <div className="item">
            <div className="number">7,000</div>
            <div className="title">Contract Wallets</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionThree;