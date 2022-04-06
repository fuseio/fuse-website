import React from 'react'
import FuseBasics from "@/assets/images/docs/basics.png";
import Developers from "@/assets/images/docs/developers.png";
import Tutorials from "@/assets/images/docs/tutorials.png";
import Integration from "@/assets/images/docs/integration.png";
import MobileWallet from "@/assets/images/docs/mobile-wallet.png";
import Validators from "@/assets/images/docs/validators.png";

const items = [
  {
    img: FuseBasics,
    title: 'Fuse Basics',
    description: "Getting all the essential information on the Fuse network and how it works",
    link: "https://docs.fuse.io/",
  },
  {
    img: Developers,
    title: 'Developers',
    description: "All the info for developers on how to build on Fuse including API docs and code references",
    link: "https://developers.fuse.io/",
  },
  {
    img: Tutorials,
    title: 'Tutorials',
    description: "Get your walk-troughs on Fuse with technical and non technical tutorials",
    link: "https://tutorials.fuse.io/",
  },
  {
    img: Integration,
    title: 'Integration',
    description: "You one stop shop for plugging into Fuse, get everything you need for integration in one page",
    link: "https://developers.fuse.io/fuse-dev-docs/network-details",
  },
  {
    img: MobileWallet,
    title: 'Mobile Wallet',
    description: "Read more about the Fuse open source wallet stack built for the best crypto experience on mobile",
    link: "https://developers.fuse.io/fuse-dev-docs/fuse-wallet/getting-started",
  },
  {
    img: Validators,
    title: 'Validators',
    description: "Get all the info to join as a validator. Learn how staking works and behind the scenes of running Fuse",
    link: "https://developers.fuse.io/fuse-dev-docs/network/how-to-become-a-validator",
  }
]

const SectionOne = () => {
  return (
    <>
      <div className='docs'>
        <div className='docs__hero_text'>
          <h1 className='docs__title'>Getting Started</h1>
        </div>
        <div className="docs__cards">
          {items.map((item, index) => (
            <Card {...item} key={index} />
          ))}
        </div>
      </div>
    </>
  )
}

function Card({ img, title, description, link }) {
  return (
    <a className='docs__card' href={link}
      target='_blank'
      rel='noopener noreferrer'>
      <div className='docs__card__logo'>
        <img src={img} alt='card' />
      </div>
      <div className="docs__card__title">
        {title}
      </div>
      <div className='docs__card__description'>{description}</div>
    </a>
  )
}

export default SectionOne
