import React, { useMemo } from 'react'
import Table from './Table'
import TableHeader from '@/components/token/components/Table/TableHeader'
import Ether from '@/assets/images/table/Ether.svg'
import BSC from '@/assets/images/table/BSC.svg'
import FUSE from '@/assets/images/table/fuse2.svg'
import LINK from '@/assets/images/table/link.svg'
import { addressShortener, formatNumber } from '@/utils/format'
import { FormattedMessage } from 'react-intl'
import useFetch from 'use-http'

function formatHolders ({ bsc, eth, fuse }) {
  return {
    bsc: formatNumber(bsc),
    ether: formatNumber(eth),
    fuse: formatNumber(fuse)
  }
}

function formatCirculating ({ onBSCNetwork, onEtherumNetwork, onFuseNetwork }) {
  return {
    bsc: formatNumber(Math.round(onBSCNetwork)),
    ether: formatNumber(Math.round(onEtherumNetwork)),
    fuse: formatNumber(Math.round(onFuseNetwork))
  }
}

const SectionThree = () => {
  const columns = useMemo(
    () => [
      {
        accessor: 'ether',
        Header: <TableHeader name='Ethereum' icon={Ether} />
      },
      {
        accessor: 'bsc',
        Header: <TableHeader name='Binance Chain (BSC)' icon={BSC} />
      },
      {
        accessor: 'fuse',
        Header: <TableHeader name='Fuse Network' icon={FUSE} />
      }
    ],
    []
  )

  const {
    data: holdersData = {}
  } = useFetch('https://bot.fuse.io/api/v1/stats/wallets', {}, [])

  const {
    data: circulatingData = {}
  } = useFetch('https://bot.fuse.io/api/v2/stats/circulating', {}, [])
  const data = useMemo(
    () => [
      formatHolders(holdersData),
      formatCirculating(circulatingData),
      {
        ether: (
          <a
            rel='noreferrer noopener'
            target='_blank'
            href='https://etherscan.io/token/0x970b9bb2c0444f5e81e9d0efb84c8ccdcdcaf84d'
            className='contract'
          >
            {addressShortener('0x970b9bb2c0444f5e81e9d0efb84c8ccdcdcaf84d')}
            <img src={LINK} />
          </a>
        ),
        bsc: (
          <a
            className='contract'
            rel='noreferrer noopener'
            target='_blank'
            href='https://bscscan.com/token/0x5857c96dae9cf8511b08cb07f85753c472d36ea3'
          >
            {addressShortener('0x5857c96dae9cf8511b08cb07f85753c472d36ea3')}
            <img src={LINK} />
          </a>
        ),
        fuse: (
          <a className='contract'>
            <FormattedMessage defaultMessage='Native token' />
            <img src={LINK} />
          </a>
        )
      }
    ],
    [circulatingData, holdersData]
  )

  return (
    <section className='figures__wrapper'>
      <div className='figures__container'>
        <div className='figures'>
          <h2 className='figures__title'>
            <FormattedMessage defaultMessage='Important figures' />
          </h2>
          <div className='figures__items'>
            <div className='item'>
              <h1 className='title'>300M</h1>
              <p className='text'>
                <FormattedMessage defaultMessage='Genesis token supply' />
              </p>
            </div>

            <div className='item'>
              <h1 className='title'>40M FUSE</h1>
              <p className='text'>
                <FormattedMessage defaultMessage='current total staked' />
              </p>
            </div>

            <div className='item'>
              <h1 className='title'>
                <FormattedMessage defaultMessage='$0.000010 USD' />
              </h1>
              <p className='text'>
                <FormattedMessage defaultMessage='Current transaction fee' />
              </p>
            </div>
          </div>

          <div className='figures__table'>
            <Table columns={columns} data={data} count={0} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionThree
