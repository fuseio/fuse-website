import React from 'react';
import aleph from '@/assets/images/aleph.png';
import collider from '@/assets/images/collider.jpeg';
import spark from '@/assets/images/spark.jpeg';
import blackedge from '@/assets/images/blackedge.jpeg';
import defi from '@/assets/images/defi.jpeg';
import wings from '@/assets/images/wings.jpeg';
import trg from '@/assets/images/trg.jpeg';
import faculty from '@/assets/images/faculty.jpeg';
import techmeetstrader from '@/assets/images/techmeetstrader.jpeg';
import wolfedge from '@/assets/images/wolfedge.jpeg';
import block from '@/assets/images/block.jpeg';
import sordex from '@/assets/images/sordex.jpeg';
import roost from '@/assets/images/roost.jpeg';
import portis from '@/assets/images/portis.jpeg';
import gooddollar from '@/assets/images/gooddollar.jpeg';
import fuseprime from '@/assets/images/fuseprime.jpeg';
import torus from '@/assets/images/torus.jpeg';
import ramp from '@/assets/images/ramp.jpeg';
import transac from '@/assets/images/transak.jpeg';
import monereum from '@/assets/images/monereum.jpeg';
import altcoin from '@/assets/images/altcoin.jpeg';
import crypto from '@/assets/images/crypto.jpeg';
import bitazza from '@/assets/images/bitazza.jpeg';
import primedao from '@/assets/images/primedao.jpeg';
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
