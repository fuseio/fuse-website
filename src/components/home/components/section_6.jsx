import React from "react";
import { FormattedMessage } from "react-intl";
import Bitmap from "@/assets/img/Infrastructure/bitmap.png";
import Chainlink from "@/assets/img/Infrastructure/chainlink_infra.png";
import Openzeppelin from "@/assets/img/Infrastructure/openzeppelin.png";
import Pocket from "@/assets/img/Infrastructure/pocket.png";
import TheGraph from "@/assets/img/Infrastructure/thegraph.png";
import Unmarshal from "@/assets/img/Infrastructure/unmarshal.png";
import Ramp from "@/assets/img/payments_and_liquidity/ramp_pay.png";
import Monerium from "@/assets/img/payments_and_liquidity/monerium.png";
import Kyber from "@/assets/img/payments_and_liquidity/kyber.png";
import Inch from "@/assets/img/payments_and_liquidity/1inch.png";
import Loopring from "@/assets/img/payments_and_liquidity/loopring.png";
import Orion from "@/assets/img/payments_and_liquidity/orion.png";
import Emoney from "@/assets/img/payments_and_liquidity/emoney.png";
import CoinGecko from "@/assets/img/partners/coin-gecko.png";
import Coinmarketcap from "@/assets/img/partners/coinmarketcap.png";
import Defiprime from "@/assets/img/partners/defiprime.png";
import MantraDao from "@/assets/img/partners/mantra-dao.png";
import DefiPulse from "@/assets/img/partners/defi-pulse.png";
import Oooo from "@/assets/img/partners/oooo.png";
import Uniswap from "@/assets/img/partners/uniswap.png";

const items = [
  {
    title: <FormattedMessage defaultMessage="Infrastructure" />,
    images: [Bitmap, Chainlink, Openzeppelin, Pocket, TheGraph, Unmarshal],
  },
  {
    title: <FormattedMessage defaultMessage="Payments and Liquidity" />,
    images: [Ramp, Monerium, Kyber, Uniswap, Inch, Loopring, Orion, Emoney],
  },
  {
    title: <FormattedMessage defaultMessage="Partners" />,
    images: [
      CoinGecko,
      Coinmarketcap,
      Defiprime,
      MantraDao,
      DefiPulse,
      Oooo,
      Uniswap,
    ],
  },
];

const Item = ({ title, images }) => {
  return (
    <div className="item cell small-24 medium-6">
      <h5 className="item__title">{title}</h5>
      <div className="grid-x align-middle align-justify grid-margin-x grid-margin-y">
        {images.map((img, index) => {
          return (
            <div key={index} className="cell small-10 medium-11">
              <img src={img} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const FuseEcosystem = (props) => {
  return (
    <section className="fuse_ecosysyem">
      <h3 className="fuse_ecosysyem__title">
        <FormattedMessage defaultMessage="Fuse Ecosystem" />
      </h3>
      <div className="fuse_ecosysyem__items grid-x align-justify">
        {items.map((item, index) => {
          return <Item key={index} {...item} />;
        })}
      </div>
    </section>
  );
};

export default FuseEcosystem;
