import React from 'react'
import './SelectsImgStyles.css'
// Component for displaying an image with an overlay containing text
function SelectsImg({bgImg, text}) {
    return (
        <div className='selects-location'>
            <img src={bgImg} alt='/' />
            <div className="overlay">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default SelectsImg
