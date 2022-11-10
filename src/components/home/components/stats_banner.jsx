import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import useCounter from '@/hooks/useCounter'
import { FormattedMessage } from 'react-intl'

function StatsBanner () {
  const transactionCounter = useCounter(110168275)
  const totalFuseStakedCounter = useCounter(94863358)
  const walletsCounter = useCounter(1266786)

  return (
    <div className='info_banner__container'>
      <div className='info_banner'>
        <div className='item'>
          <div className='title'>
            <VisibilitySensor delayedCall>
              <span>{transactionCounter}</span>
            </VisibilitySensor>
            &nbsp;
            <FormattedMessage defaultMessage='Total Transactions' />
          </div>
        </div>
        <hr className='divier' />
        <div className='item'>
          <div className='title'>
            <VisibilitySensor delayedCall>
              <span>{walletsCounter}</span>
            </VisibilitySensor>
            &nbsp;
            <FormattedMessage defaultMessage='Wallets Generated' />
          </div>
        </div>
        <hr className='divier' />
        <div className='item'>
          <div className='title'>
            <VisibilitySensor delayedCall>
              <span>{totalFuseStakedCounter}</span>
            </VisibilitySensor>
            &nbsp;
            <FormattedMessage defaultMessage='Total Fuse Staked' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsBanner
