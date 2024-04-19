import React, { useState } from 'react';
import axios from 'axios';  // Import Axios for making API requests

import './UploadPicture.css';  // Import the CSS file for styling

function UploadPicture() {
  const [selectedFile, setSelectedFile] = useState(null);  // State to store the selected file
  const [previewImage, setPreviewImage] = useState('');  // State to hold the preview image URL
  const [fileValid, setFileValid] = useState(true);  // State to track if the file is valid
  const [showConvertButton, setShowConvertButton] = useState(false);  // State to show/hide the convert button
  const [predictedLetter, setPredictedLetter] = useState('');  // State to hold the predicted letter

  const onFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      if (file.type === 'image/png') {  // Check if the selected file is a PNG image
        setSelectedFile(file);
        setPreviewImage(URL.createObjectURL(file));  // Create a URL for the uploaded file
        setFileValid(true);
        setShowConvertButton(true);  // Show the convert button
      } else {
        setFileValid(false);  // Set fileValid to false if the file is not a PNG image
        setShowConvertButton(false);  // Hide the convert button
      }
    }
  };

  const onConvertClick = () => {
    const formData = new FormData();  // Create a new FormData object
    formData.append('file', selectedFile);  // Append the selected file to the FormData object
    axios.post('http://localhost:5000/convert', formData)  // Send a POST request to the server
      .then(response => {
        setPredictedLetter(response.data.message);  // Set the predicted letter based on the response from the server
      })
      .catch(error => {
        console.error('Conversion failed:', error);  // Log an error if the conversion fails
        alert('Failed to convert the image.');  // Show an alert to the user
      });
  };

  return (
    <div className="upload-container">
      <label htmlFor="fileInput" className="upload-label">
        <span className="upload-icon">+</span>
        <span className="upload-instructions">Upload handwriting</span>
      </label>
      <input
        id="fileInput"
        type="file"
        onChange={onFileChange}
        style={{ display: 'none' }} 
        accept="image/png"
      />
      {previewImage && <img src={previewImage} alt="Preview" className="image-preview"/>}
      {selectedFile && fileValid && <div className="file-detail">{selectedFile.name}</div>}
      {!fileValid && <div className="error-message">Please upload a PNG image.</div>}
      {showConvertButton && <button onClick={onConvertClick}>Convert</button>}
      {predictedLetter && <div className="predicted-letter">{predictedLetter}</div>}
    </div>
  );
}

export default UploadPicture;
