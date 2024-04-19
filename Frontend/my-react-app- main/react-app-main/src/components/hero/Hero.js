import React from 'react';
import './HeroStyles.css';
import Video from '../../assets/ArabicWriting.mp4';
import Features from '../Features/Features';

function Hero() {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="content">
                <Features />
            </div>
        </div>
    )
}

export default Hero; 

