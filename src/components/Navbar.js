import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { companyData } from '../data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-tssglBlue text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <Link to="/" className="text-2xl font-bold tracking-tight">
              TSS<span className="text-tssglYellow">GL</span>
              
            </Link>
            <Link to="/" className="flex items-center gap-2">
             <img 
                  src="/images/Thalassa_logo.png" 
                  alt="TSSGL Logo" 
                  className="h-12 w-auto"
                />
            </Link>
            <span className="text-[10px] uppercase tracking-widest text-blue-200 block">
              THALASSA AND<br />
              SHORE SERVICES<br />
              GHANA LTD.
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 font-medium">
            <Link to="/" className="hover:text-tssglYellow transition-colors">HOME</Link>
            <Link to="/about" className="hover:text-tssglYellow transition-colors">ABOUT US</Link>
            <Link to="/services" className="hover:text-tssglYellow transition-colors">SERVICES</Link>
            <Link to="/fleet" className="hover:text-tssglYellow transition-colors">FLEET</Link>
            <Link to="/contact" className="hover:text-tssglYellow transition-colors">CONTACT</Link>
          </div>

          {/* Right-side: support badge + mobile menu button */}
          <div className="flex items-center gap-4">
            <div className="bg-tssglYellow text-tssglBlue px-4 py-2 rounded-md font-bold text-sm hidden lg:block">
              OPS/247: {companyData.contact.phone}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon: menu / close */}
              {isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation panel */}
      {typeof window !== 'undefined' && (
        <div id="mobile-menu" aria-hidden={!isOpen} className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-tssglBlue text-white transition-all duration-150` }>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:text-tssglYellow">HOME</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:text-tssglYellow">ABOUT US</Link>
            <Link to="/services" className="block px-3 py-2 rounded-md text-base font-medium hover:text-tssglYellow">SERVICES</Link>
            <Link to="/fleet" className="block px-3 py-2 rounded-md text-base font-medium hover:text-tssglYellow">FLEET</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:text-tssglYellow">CONTACT</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;