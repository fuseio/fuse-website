import React from 'react'
import "../about.css"
import aleph from "../../../assets/images/aleph.png"
import collider from "../../../assets/images/collider.png"
import spark from "../../../assets/images/spark.png"
import blackedge from "../../../assets/images/blackedge.png"

import defi from "../../../assets/images/defi.png"
import wings from "../../../assets/images/wings.png"
import trg from "../../../assets/images/trg.png"
import faculty from "../../../assets/images/faculty.png"

import techmeetstrader from "../../../assets/images/techmeetstrader.png"
import wolfedge from "../../../assets/images/wolfedge.png"

import sordex from "../../../assets/images/sordex.png"
import roost from "../../../assets/images/roost.png"
import portis from "../../../assets/images/portis.png"
import gooddollar from "../../../assets/images/gooddollar.png"

const backers = [aleph, collider, spark, blackedge, defi, wings, trg, faculty, techmeetstrader, wolfedge];
const partners = [sordex, roost, portis, gooddollar];

const SectionFour = () => {
    return (
        <section className="section-four">
            <div className='section-four__overlay grid-x'>
                <div className='section-four__wrapper small-24'>
                    <div className="grid-x">
                        <h2 className="main-title cell small-4">Our Backers</h2>
                        <div className="cell small-20 grid-x grid-padding-y">
                            {
                                backers.map((img, index) => <div key={index} className="cell small-6">
                                    <img src={img} />
                                </div>)
                            }
                        </div>
                    </div>
                    <div className="grid-x">
                        <h2 className="main-title cell small-4">Our Partners</h2>
                        <div className="cell small-20 grid-x grid-padding-y">
                            {
                                partners.map((img, index) => <div key={index} className="cell small-6">
                                    <img src={img} />
                                </div>)
                            }
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default SectionFour
