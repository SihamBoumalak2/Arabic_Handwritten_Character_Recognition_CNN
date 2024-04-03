import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero'; 
import Navbar from './components/navbar/Navbar'
import UploadPicture from './components/UploadPicture/UploadPicture';
import LearnMore from './components/LearnMore/LearnMore'; 

  function App() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/UploadPicture" element={<UploadPicture />} />
            <Route path="/learn-more" element={<LearnMore />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
  


export default App;
