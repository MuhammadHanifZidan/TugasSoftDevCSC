import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, FacilityPage, GalleryPage, TestimonialPage } from "./pages";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop'; 
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GalleryPage/>}/>
          <Route path="/testimonial" element={<TestimonialPage/>}/>          
          <Route path="/facility" element={<FacilityPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;