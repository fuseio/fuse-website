import React, { useMemo } from 'react'
import Table from './Table'
import TableHeader from '@/components/token/components/Table/TableHeader'
import Ether from '@/assets/img/table/Ether.svg'
import BSC from '@/assets/img/table/BSC.svg'
import FUSE from '@/assets/img/table/fuse2.svg'
import LINK from '@/assets/img/table/link.svg'
import { addressShortener } from '@/utils/format'

const SectionThree = () => {
  const columns = useMemo(() => [
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
    }], [])

  const data = useMemo(() => [{
    ether: '1,555',
    bsc: '131',
    fuse: '357,053'
  },
  {
    ether: '18567954',
    bsc: '18567954',
    fuse: '18567954'
  },
  {
    ether: '18567954',
    bsc: '18567954',
    fuse: '18567954'
  },
  {
    ether: <div className='contract'>{addressShortener('0x970b9bb2c0444f5e81e9d0efb84c8ccdcdcaf84d')}<img src={LINK} /></div>,
    bsc: <div className='contract'>{addressShortener('0x5857c96dae9cf8511b08cb07f85753c472d36ea3')}<img src={LINK} /></div>,
    fuse: <div className='contract'>Native token<img src={LINK} /></div>
  }], [])

  return (
    <section className='figures__wrapper'>
      <div className='figures__container'>
        <div className='figures'>
          <h2 className='figures__title'>Important figures</h2>
          <div className='figures__items'>
            <div className='item'>
              <h1 className='title'>300M</h1>
              <p className='text'>Genesis token supply</p>
            </div>

            <div className='item'>
              <h1 className='title'>21M FUSE</h1>
              <p className='text'>current total staked</p>
            </div>

            <div className='item'>
              <h1 className='title'>$0.0015$</h1>
              <p className='text'>Current transaction fee</p>
            </div>

          </div>

          <div className='figures__table'>
            <Table
              columns={columns}
              data={data}
              count={0}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionThree