import React from 'react';
import { FormattedMessage } from 'react-intl';

const SectionSix = (props) => {
  return (
    <section className="why_fuse_better">
      <div className="why_fuse_better__wrapper grid-x align-middle">
        <div className="why_fuse_better__content">
          <div>
            <h1 className="title">
              <FormattedMessage
                defaultMessage="Why open {newLine} source{newLine} payments on{newLine} <span>Fuse</span> are A {newLine} better cash{newLine} Alternative?"
                values={{
                  newLine: <br />,
                  span: chunks => <span>{chunks}</span>
                }}
              />
            </h1>
          </div>
          <div className="items">
            <div className="item">
              <div className="image">
                <img src="./images/network_world.png" alt="network_world" />
              </div>
              <div className="line"></div>
              <div className="text">
                <FormattedMessage defaultMessage="It has a very low entry barrier so this technology can reach anywhere across the world" />

              </div>
            </div>
            <div className="item">
              <div className="image">
                <img src="./images/network_wallet.png" alt="network_wallet" />
              </div>
              <div className="line"></div>
              <div className="text">
                <FormattedMessage defaultMessage="Connect to decentralized finance so you have more things to do with your money" />
              </div>
            </div>
            <div className="item">
              <div className="image grid-x align-center align-middle">
                <img style={{ width: '75px', height: '75px' }} src="./images/network_coin.png" alt="network_coin.png" />
              </div>
              <div className="line"></div>
              <div className="text">
                <FormattedMessage
                  defaultMessage="Pay a fixed fee of up to 1 cent per transaction to move money instantly without any hidden fees and inefficiencies"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSix;