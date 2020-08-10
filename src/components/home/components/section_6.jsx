import React from 'react';

const SectionSix = () => {
  return (
    <section className="why_fuse_better">
      <div className="why_fuse_better__wrapper grid-x align-middle">
        <div className="why_fuse_better__content">
          <div>
            <h1 className="title">Why open <br /> source<br /> payments on<br /> <span>Fuse</span> are A <br /> better
              cash<br /> Alternative?</h1>
          </div>
          <div className="items">
            <div className="item">
              <div className="image">
                <img src="./images/network_world.png" alt="network_world" />
              </div>
              <div className="line"></div>
              <div className="text">
                It has a very low entry barrier so this technology can reach anywhere across the world
              </div>
            </div>
            <div className="item">
              <div className="image">
                <img src="./images/network_wallet.png" alt="network_wallet" />
              </div>
              <div className="line"></div>
              <div className="text">
                Connect to decentralized finance so you have more things to do with your money
              </div>
            </div>
            <div className="item">
              <div className="image grid-x align-center align-middle">
                <img style={{ width: '75px', height: '75px' }} src="./images/network_coin.png" alt="network_coin.png" />
              </div>
              <div className="line"></div>
              <div className="text">
                Pay a fixed fee of up to 1 cent per transaction to move money instantly without any hidden fees and
                inefficiencies
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSix;