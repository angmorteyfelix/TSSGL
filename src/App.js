import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Fleet from './pages/Fleet';
import Contact from './pages/Contact';
import Services from './pages/Services';
import WhatsAppButton from './components/WhatsAppButton';

// We will create these simple components in the next step

const ServicesH = () => <div className="p-20 text-center text-2xl">Our Maritime Services</div>;

function App() {
  return ( 
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services_h" element={<ServicesH />} />
      </Routes>
      <WhatsAppButton />
    </div>
  );
}

export default App;