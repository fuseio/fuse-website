import React from 'react'
import "../about.css"
import mark from "../../../assets/images/mark.png"
import adar from "../../../assets/images/adar.png"
import andy from "../../../assets/images/andy.png"
import ashish from "../../../assets/images/ashish.png"
import gilat from "../../../assets/images/gilat.png"
import isaac from "../../../assets/images/isaac.png"
import leon from "../../../assets/images/leon.png"
import lior from "../../../assets/images/lior.png"
import mikhail from "../../../assets/images/mikhail.png"
import mulenga from "../../../assets/images/mulenga.png"
import robert from "../../../assets/images/robert.png"
import TeamMember from "./team_member";

const members = [
  {
    name: "Mark Smargon",
    role: "Founder & CEO",
    picture: mark,
  },
  {
    name: "Leon Prouger",
    role: "Tech Lead",
    picture: leon,
  },
  {
    name: "Lior Agnin",
    role: "Fullstack & Moble Developer",
    picture: lior,
  },
  {
    name: "Gilat Reiss",
    role: "UI/UX Designer",
    picture: gilat,
  },
  {
    name: "Isaac Rodgin",
    role: "Head of BD",
    picture: isaac,
  },
  {
    name: "Adar Weinreib",
    role: "Head of Product",
    picture: adar,
  },
  {
    name: "Mikhail Dubodel",
    role: "Social Media",
    picture: mikhail,
  },
  {
    name: "Ashish",
    role: "Community Manager",
    picture: ashish,
  },
  {
    name: "Robert Miller",
    role: "PR & Communications",
    picture: robert,
  },
  {
    name: "Mulenga Bowa",
    role: "Position",
    picture: mulenga,
  },
  {
    name: "Andy Pohl",
    role: "Position",
    picture: andy,
  },
]

const SectionThree = () => {
  return (
    <section className="section-three">
      <div className='section-three__overlay grid-x'>
        <div className='section-three__wrapper small-24'>
          <h1 className='main-title'>
            Meet the Team
            </h1>
          <div className="grid-x">
            {members.map((member, index) => <TeamMember key={index} {...member} />)}
          </div>
        </div>

      </div>
    </section>
  )
}

export default SectionThree
