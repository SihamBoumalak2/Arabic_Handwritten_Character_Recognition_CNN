import React from 'react';
import './LearnMore.css'; 
import Navbar from '../navbar/Navbar';

function LearnMore() {
  return (
  <div>
    <Navbar />

    <div className="learn-more-container">
      <h1>Arabic Handwriting Recognition:  Explore the technology that identifies your handwritten Arabic characters.</h1>
      <p>Understanding the technology behind Arabic character recognition can help us appreciate the intricate details involved in digitizing handwritten characters.
        AraboScripto  uses Convolutional Neural Networks (CNNs) to analyze and interpret each stroke and dot of Arabic script.Experience the convenience of our Arabic Handwritten Character Recognition tool by simply uploading a picture of your handwritten Arabic character, our tool will accurately identify it and outputs the corresponding names of that character. 
        Whether you're transcribing ancient manuscripts or seeking to understand complex Arabic calligraphy,
         AraboScripto provides a seamless solution. 
        </p>
      
    </div>
    </div>
  );
}

export default LearnMore;
