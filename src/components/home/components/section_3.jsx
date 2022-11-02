import React from 'react'
import { withRouter } from 'react-router'
import classNames from 'classnames'

import Request from '@/assets/images/request_logo.svg'
import Lifi from '@/assets/images/lifi_logo.svg'
import Unmarshel from '@/assets/images/unmarshal_logo.svg'
import Voltage from '@/assets/images/voltage_fin_logo.svg'
import Xanpool from '@/assets/images/xanpool_logo.svg'
import Charge from '@/assets/images/charge_logo_new.svg'
import Connext from '@/assets/images/connext_logo.svg'
import BullaNetwork from '@/assets/images/bulla_network_logo.svg'
import chainstack from '@/assets/images/chainstack_new.svg'
import Peepl from '@/assets/images/peepl_new.svg'
import TheGraph from '@/assets/images/thegraph_new.svg'
import Pokt from '@/assets/images/pokt_new.svg'
import OpenZeppelin from '@/assets/images/openzepplen_new.svg'
import GoodDollar from '@/assets/images/gooddollar_new.svg'
import Beefy from '@/assets/images/beefy.svg'
import Ramp from '@/assets/images/ramp_new.svg'

const items = [
  {
    image1: Request,
    image2: Lifi
  },
  {
    image1: chainstack,
    image2: Peepl
  },
  {
    image1: Ramp,
    image2: Pokt
  },
  {
    image1: OpenZeppelin,
    image2: GoodDollar
  },
  {
    image1: Beefy,
    image2: TheGraph
  }
]

const items2 = [
  {
    image1: Unmarshel,
    image2: Voltage
  },
  {
    image1: Xanpool,
    image2: Charge
  },
  {
    image1: Connext,
    image2: BullaNetwork
  }
]

const Item = ({ image1, image2, isLast }) => {
  return (
    <div className={classNames('item', { 'item--last': isLast })}>
      <img src={image1} />
      <img src={image2} />
    </div>
  )
}

const SectionThree = ({ history }) => {
  return (
    <section className='section_3__wrapper'>
      <div className='section_3'>
        <div className='section_3__title'>Explore the ecosystem</div>
        <div className='section_3__subtitle'>From next-generation startups solving real-world problems to big name <br /> infrastructure and service providers, join our journey and build in the most promising <br /> blockchain ecosystem in existence.</div>
        <div className='section_3__items'>
          {
            items.map((value, index) => <Item key={index} {...value} isLast={(items.length - 1) === index} />)
          }
        </div>
        <div className='section_3__items'>
          {
            items2.map((value, index) => <Item key={index} {...value} isLast={(items2.length - 1) === index} />)
          }
        </div>
      </div>
      <button onClick={() => history.push('/ecosystem')} className='section_3__button'>
        Explore 100+ More
      </button>

    </section>
  )
}

export default withRouter(SectionThree)
