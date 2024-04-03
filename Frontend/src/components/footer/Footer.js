import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'


function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <h3>AraboScripto.</h3>
                    <div className="social">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                    </div>
                    <div className="right">
                        <ul>
                            <li>Terms</li>
                            <li>Policy</li>
                            <li>Privacy</li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
