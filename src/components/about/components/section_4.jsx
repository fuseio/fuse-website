import React from 'react';
import aleph from '@/assets/images/aleph.png';
import collider from '@/assets/images/collider.png';
import spark from '@/assets/images/spark.png';
import blackedge from '@/assets/images/blackedge.png';
import defi from '@/assets/images/defi.png';
import wings from '@/assets/images/wings.png';
import trg from '@/assets/images/trg.png';
import faculty from '@/assets/images/faculty.png';
import techmeetstrader from '@/assets/images/techmeetstrader.png';
import wolfedge from '@/assets/images/wolfedge.png';
import block from '@/assets/images/block1.png';
import sordex from '@/assets/images/sordex.png';
import roost from '@/assets/images/roost.png';
import portis from '@/assets/images/portis.png';
import gooddollar from '@/assets/images/gooddollar.png';
import fuseprime from '@/assets/images/fuseprime.png';
import torus from '@/assets/images/torus.png';
import ramp from '@/assets/images/ramp.png';
import transac from '@/assets/images/transak.png';
import monereum from '@/assets/images/monereum.png';
import altcoin from '@/assets/images/altcoin.png';
import crypto from '@/assets/images/crypto.png';
import bitazza from '@/assets/images/bitazza.png';
import primedao from '@/assets/images/primedao.png';
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
      <div className="section_four__container">
        <div className="section_four__wrapper">
          <h2 className="title">Partners</h2>
          <div className="logos cell large-auto grid-x ">
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
