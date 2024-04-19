import React from 'react';  // Import the React library
import './FooterStyles.css';  // Import the CSS file for styling
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';  // Import icons from react-icons library

// Functional component for the Footer section
function Footer() {
    return (
        <div className='footer'>  {/* Main footer section */}
            <div className="container">  {/* Container for content */}
                <div className="top">  {/* Top section of the footer */}
                    <h3>AraboScripto.</h3>  {/* Footer heading */}
                    <div className="social">  {/* Social media icons */}
                        <FaFacebook className='icon' />  {/* Facebook icon */}
                        <FaInstagram className='icon' />  {/* Instagram icon */}
                        <FaTwitter className='icon' />  {/* Twitter icon */}
                    </div>
                </div>
                <div className="bottom">  {/* Bottom section of the footer */}
                    <div className="left">  {/* Left side of the bottom section */}
                    </div>
                    <div className="right">  {/* Right side of the bottom section */}
                        <ul>  {/* Unordered list */}
                            <li>Terms</li>  {/* List item for Terms */}
                            <li>Policy</li>  {/* List item for Policy */}
                            <li>Privacy</li>  {/* List item for Privacy */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;  // Export the Footer component
