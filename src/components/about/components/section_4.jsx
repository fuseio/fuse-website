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

const imgs = [aleph, collider, spark, blackedge, defi, wings, trg, faculty, techmeetstrader, wolfedge];

const SectionFour = () => {
    return (
        <section className="section-four">
            <div className='section-four__overlay grid-x'>
                <div className='section-four__wrapper small-24'>
                    <div className="grid-x">
                        <h2 className="main-title cell small-4">Our Backers</h2>
                        <div className="cell small-20 grid-x grid-padding-y">
                            {
                                imgs.map((img, index) => <div key={index} className="cell small-6">
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
