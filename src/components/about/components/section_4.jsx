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
import block from "../../../assets/images/block.png"
import sordex from "../../../assets/images/sordex.png"
import roost from "../../../assets/images/roost.png"
import portis from "../../../assets/images/portis.png"
import gooddollar from "../../../assets/images/gooddollar.png"
import "../about.css"
import ImageCell from './subComponents/ImageCell'

const SectionFour = () => {
    return (
        <section className="section-four">
            <div className='section-four__overlay grid-x'>
                <div className='section-four__wrapper small-24'>
                    <div className="grid-x">
                        <h2 className="main-title cell small-4">Partners and Backers</h2>
                        <div className="cell small-20 grid-x section-four__images-container">
                         
                            <div className="grid-x small-24 special_images">
                                 <ImageCell image={collider}/>
                                <ImageCell image={aleph}/>
                                <ImageCell image={blackedge}/>
                                <ImageCell image={spark}/>
                               
                            </div>
                             <div className="grid-x small-24">
                                <ImageCell image={defi}/>
                                <ImageCell image={wings}/>
                                <ImageCell image={trg}/>
                                <ImageCell image={faculty}/>
                            </div>
                             <div className="grid-x small-24">
                                <ImageCell image={techmeetstrader}/>
                                <ImageCell image={block}/>
                                <ImageCell image={wolfedge}/>
                                
                            </div>
                            <div className="grid-x small-24">
                                <ImageCell image={sordex}/>
                                <ImageCell image={roost}/>
                                <ImageCell image={portis}/>
                                <ImageCell image={gooddollar}/>
                            </div>
                        </div>
                    </div>
                </div>
                          
             
            </div>
        </section>
    )
}

export default SectionFour
