import React from 'react';
import collider from '@/assets/images/collider.svg';
import spark from '@/assets/images/spark.svg';
import blackedge from '@/assets/images/blackedge.png';
import defi from '@/assets/images/defi.svg';
import wings from '@/assets/images/wings.svg';
import trg from '@/assets/images/trg.png';
import faculty from '@/assets/images/faculty.svg';
import techmeetstrader from '@/assets/images/techmeetstrader.png';
import wolfedge from '@/assets/images/wolfedge.svg';
import block from '@/assets/images/block.png';
import sordex from '@/assets/images/sordex.png';
import roost from '@/assets/images/roost.png';
import portis from '@/assets/images/portis.svg';
import gooddollar from '@/assets/images/gooddollar.png';
import fuseprime from '@/assets/images/fuseprime.svg';
import torus from '@/assets/images/torus.svg';
import ramp from '@/assets/images/ramp.svg';
import transac from '@/assets/images/transac.svg';
import monereum from '@/assets/images/monereum.svg';
import altcoin from '@/assets/images/altcoin.png';
import crypto from '@/assets/images/crypto.png';
import bitazza from '@/assets/images/bitazza.svg';
import primedao from '@/assets/images/primedao.svg';
const ImageCell = ({ image, styles }) => {
  return (
    <div className="section_four__image cell small-12 medium-6 grid-x align-middle align-center">
      <img src={image} style={{ ...styles }} />
    </div>
  );
};

const SectionFour = () => {
  return (
    <section className="section_four">
      <div className="section_four__container grid-container">
        <div className="section_four__wrapper">
          <h2 className="title">Partners</h2>
          <div className="logos cell large-auto grid-x ">
            <div className="logos__overlay"></div>
            <ImageCell image={gooddollar} />
            <ImageCell image={roost} />
            <ImageCell image={defi} />
            <ImageCell image={portis} />
            <ImageCell image={fuseprime} />
            <ImageCell image={techmeetstrader} />
            <ImageCell image={wings} />
            <ImageCell image={sordex} />
            <ImageCell image={torus} />
            <ImageCell image={ramp} />
            <ImageCell image={transac} />
            <ImageCell image={monereum} />
            <ImageCell image={altcoin} />
            <ImageCell image={crypto} />
            <ImageCell image={bitazza} />
            <ImageCell image={primedao} />
          </div>
        </div>
        <hr />
        <div className="section_four__wrapper">
          <h2 className="title">Early Backers</h2>
          <div className="logos cell large-auto grid-x ">
          <div className="logos__overlay"></div>
            <ImageCell image={collider} />
            <ImageCell image={wolfedge} />
            <ImageCell image={trg} />
            <ImageCell image={spark} />
            <ImageCell
              image={block}
              styles={{ maxWidth: '130px', minHeight: '90px' }}
            />
            <ImageCell image={blackedge} />
            <ImageCell image={faculty} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
