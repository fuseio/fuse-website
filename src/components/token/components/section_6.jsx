import React from 'react'
import Pie from '@/assets/img/pie.png'

const SectionSix = () => {
  return (
    <section className='token_inflation__wrapper'>
      <div className='token_inflation__container'>
        <div className='token_inflation'>
          <div className='content'>
            <div className='title'>|  Inflation</div>
          </div>
          <div className='content'>
            <div className='title'>|  Fees</div>
          </div>
          <div className='content'>
            <div className='text'>
              5% inflation in the network is distributed between the validators. Each cycle (A cycle is all transactions conducted in 48 hours) the validators with the highest amount of Fuse tokens staked will split the rewards based on their stake.
              <br />
              <br />
              A fixed inflation rate also helps with stabilization of the token price. At phase 2 of the network an upgrade to a differential inflation schedule will be proposed and voted on by the validators to optimize the inflation/fee price policy.
            </div>
          </div>
          <div className='content'>
            <div className='text'>
              Large users on Fuse can participate more closely in the governance and the operation of the network and plan ahead so instead of having high operation costs, they can become a stakeholder and benefit from the network’s growth.
              The network charges fees on every transaction that goes to the validators and is capped at 1 cent $ per transaction.
              <br />
              <br />
              While the network has unfilled blocks the cost per transaction will be lower than 1 cent.
              The fee cost per transaction in Fuse will be adjusted to be a maximum of 1 cent US dollar once the blocks start to fill up. At this stage simple transfer transactions will be moved off-chain.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionSix