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
    linked: "https://www.linkedin.com/in/marksmargon/",
    isLinkedIn: true
  },
  {
    name: "Leon Prouger",
    role: "Tech Lead",
    picture: leon,
    linked: "https://www.linkedin.com/in/leon-prouger-60646540/",
    isLinkedIn: true
  },
  {
    name: "Lior Agnin",
    role: "Fullstack & Moble Developer",
    picture: lior,
    linked: "https://www.linkedin.com/in/lioragnin/",
    isLinkedIn: true
  },
  {
    name: "Mulenga Bowa",
    role: "Front-End Developer",
    picture: mulenga,
    isLinkedIn: false
  },
  {
    name: "Isaac Rodgin",
    role: "Head of BD",
    picture: isaac,
    linked: "https://www.linkedin.com/in/isaac-rodgin-58a8897a/",
    isLinkedIn: true
  },
  {
    name: "Gilat Reiss",
    role: "UI/UX Designer",
    picture: gilat,
    linked: "https://www.linkedin.com/in/gilat-reiss-b6086b162/",
    isLinkedIn: true
  },
  {
    name: "Andy Pohl",
    role: "Backend Dev",
    picture: andy,
    linked: "https://www.linkedin.com/in/andrew-pohl-4b52959b/",
    isLinkedIn: true
  },
  {
    name: "Adar Weinreb",
    role: "Head of Product",
    picture: adar,
    linked: "https://www.linkedin.com/in/adar-weinreb-aa630660/",
    isLinkedIn: true
  },
  {
    name: "Mikhail Dubodel",
    role: "Social Media",
    picture: mikhail,
    linked: "https://www.linkedin.com/in/mikhaildubodel/",
    isLinkedIn: true
  },
  {
    name: "Ashish Ram",
    role: "Community Manager",
    picture: ashish,
    linked: "https://www.linkedin.com/in/ashish-ram/",
    isLinkedIn: true
  },
  {
    name: "Robert Miller",
    role: "PR & Communications",
    picture: robert,
    linked: "https://www.linkedin.com/in/rm16/",
    isLinkedIn: true
  }
]

const SectionThree = () => {
  return (
    <section className="section-three">
      <div className='section-three__overlay grid-x'>
        <div className='section-three__wrapper small-24'>
          <h1 className='main-title'>
            Core Team
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
