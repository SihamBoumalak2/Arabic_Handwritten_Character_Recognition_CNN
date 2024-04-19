import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import necessary components from 'react-router-dom'
import Footer from './components/footer/Footer';  // Import the Footer component
import Hero from './components/hero/Hero';  // Import the Hero component
import Navbar from './components/navbar/Navbar';  // Import the Navbar component
import UploadPicture from './components/UploadPicture/UploadPicture';  // Import the UploadPicture component
import LearnMore from './components/LearnMore/LearnMore';  // Import the LearnMore component

function App() {
  return (
    <Router>   
      {/* Wrap the entire application in a Router component */}
      <div>
        <Navbar />  
        {/* // Render the Navbar component at the top of the page */}
        <Routes>  
          {/* // Define the routes for different components */}
          <Route path="/" element={<Hero />} />  
          {/* // Render the Hero component for the root path ('/') */}
          <Route path="/UploadPicture" element={<UploadPicture />} />  
          {/* // Render the UploadPicture component for the '/UploadPicture' path */}
          <Route path="/learn-more" element={<LearnMore />} />  
          {/* // Render the LearnMore component for the '/learn-more' path */}
        </Routes>
        <Footer />  
        {/* // Render the Footer component at the bottom of the page */}
      </div>
    </Router>
  );
}
export default App;  // Export the App component as the default export
