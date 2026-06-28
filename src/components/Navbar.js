import React from 'react';
import { Link } from 'react-router-dom';
import { companyData } from '../data';

const Navbar = () => {
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
            <span className="text-[11px] uppercase  tracking-widest text-blue-200 hidden sm:block">
            THALASSA AND SHORE SERVICES GHANA LTD.
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

          {/* 24/7 Support Badge */}
          <div className="bg-tssglYellow text-tssglBlue px-4 py-2 rounded-md font-bold text-sm hidden lg:block">
            OPS/247: {companyData.contact.phone}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;