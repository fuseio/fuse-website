import React from 'react';
import step1 from '@/assets/images/step_1.png'
import step2 from '@/assets/images/step_2.png'
import step3 from '@/assets/images/step_3.png'

const SectionThree = () => {
  return (
    <section className="network_in_numbers">
      <div className="network_in_numbers__content">
        <div className="grid-x items">
          <div className="item grid-y cell medium-6 align-spaced">
            <div className="number">0.01$</div>
            <div className="title">Transaction cost</div>
          </div>
          <div className="line cell shrink"></div>

          <div className="item grid-y cell medium-6 align-spaced">
            <div className="number">489K</div>
            <div className="title">Transactions</div>
          </div>
          <div className="line cell shrink"></div>

          <div className="item grid-y cell medium-6 align-spaced">
            <div className="number">250</div>
            <div className="title">communities launched</div>
          </div>
          <div className="line cell shrink"></div>

          <div className="item grid-y cell medium-6 align-spaced">
            <div className="number">7,000</div>
            <div className="title">Contract Wallets</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionThree;