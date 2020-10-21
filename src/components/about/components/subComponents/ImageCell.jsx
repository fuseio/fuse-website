import React from 'react'

const ImageCell = ({image}) => {
    return (
        <div className="section-four__image cell small-6">
            <img src={image}/>
        </div>
    )
}

export default ImageCell
