import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { services_h } from '../data';

const Home = () => {
  const images = [
    '/images/gradient.png',
    '/images/photo-main-bg.png',
    '/images/gradient.png',
    '/images/T.image.png',
    '/images/gradient.png',
    '/images/craft.png',
    '/images/gradient.png',
    '/images/drift.png',
    '/images/gradient.png',
    '/images/alongside.png'
    
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent(c => (c + 1) % images.length), 5000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="flex flex-col">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[85vh] flex items-center bg-tssglBlue">
        {/* Background Overlay with fading slideshow */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          {/* Slideshow images (fade transition) */}
          <div className="w-full h-full relative">
            {images.map((src, i) => (
              <div
                key={i}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
                style={{ backgroundImage: `url(${src})` }}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Leading the Way in <span className="text-tssglYellow uppercase">Maritime Logistics</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed font-light font-serif">
              Providing premier Shipping Agency, Offshore Support, and Supply Chain solutions across the Gulf of Guinea.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/services" 
                className="bg-tssglYellow hover:bg-yellow-500 text-tssglBlue font-bold py-4 px-10 rounded-sm transition-all shadow-lg"
              >
                Our Services
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white hover:bg-white hover:text-tssglBlue py-4 px-10 rounded-sm transition-all font-bold"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>


  {/* --- SERVICES HIGHLIGHT --- */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-tssglBlue">Our Core Expertise</h2>
      <div className="h-1.5 w-24 bg-tssglYellow mx-auto mt-4"></div>
      <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
        TSSGL provides a comprehensive suite of maritime services tailored to the unique demands of the Gulf of Guinea.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services_h.map((service1, index) => (
        <Link to="/services" key={index} className="p-8 border border-gray-100 rounded-xl bg-gray-50 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
          <div className="text-4xl mb-6">{service1.icon}</div>
          <h3 className="text-xl font-bold text-tssglBlue mb-4">{service1.title}</h3>
          <p className="text-gray-600 leading-relaxed text-sm">
            {service1.description}
          </p>
          <span className="text-tssglBlue font-bold text-xs uppercase tracking-widest group-hover:text-tssglYellow transition-colors">
            Read More ?
          </span>
        </Link>
      ))}
    </div>
  </div>
</section>

{/* --- QUICK STATS / TRUST BAR --- */ }
      <section className="bg-gray-100 py-10 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-tssglBlue">24/7</p>
              <p className="text-sm text-gray-600 uppercase tracking-widest">Operations</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-tssglBlue">Ghana</p>
              <p className="text-sm text-gray-600 uppercase tracking-widest">Office</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-tssglBlue">Full</p>
              <p className="text-sm text-gray-600 uppercase tracking-widest">Agency Support</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-tssglBlue">Safe</p>
              <p className="text-sm text-gray-600 uppercase tracking-widest">Global Standards</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
