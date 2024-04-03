import React from 'react';
import './Features.css';
import { useNavigate } from 'react-router-dom';

function Features() {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/learn-more');
  };

  const handleConvertToHandwritingClick = () => {
    navigate('/UploadPicture');
  };

  return (
    <div className="features-section">
      <div className="feature-card">
        <h3>Learn More About Handwritten Character Recognition</h3>
        <p>Discover the technology behind transforming handwriting into digital text.</p>
        <button className="feature-button" onClick={handleLearnMoreClick}>
          Learn More
        </button>

      </div>
      <div className="feature-card">
        <h3>Handwriting Recognizer</h3>
        <p>Predict the corresponding Arabic character in the image.</p>
        <button onClick={handleConvertToHandwritingClick}>Convert my Handwriting</button>
      </div>
    </div>
  );
}

export default Features;
