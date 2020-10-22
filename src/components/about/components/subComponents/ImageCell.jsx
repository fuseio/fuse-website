import React from 'react'

const ImageCell = ({image,resized}) => {
    return (
        <div className="section-four__image cell small-6">
            <img src={image} className={resized}/>
        </div>
    )
}

export default ImageCell
