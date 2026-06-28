import React from 'react';
import { companyData } from '../data';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="bg-tssglBlue py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Contact Our Operations Team</h1>
        <p className="text-blue-200 max-w-xl mx-auto px-6">
          Available 24/7 for vessel agency, offshore support, and emergency logistics across all Ghanaian ports.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-tssglBlue mb-8">Get In Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-blue-50 p-4 rounded-lg text-2xl mr-4">📍</div>
                <div>
                  <h4 className="font-bold text-gray-900">Headquarters</h4>
                  <p className="text-gray-600">{companyData.contact.hq}</p>
                  <p className="text-gray-500 text-sm">{companyData.contact.location}</p>
                </div>
              </div>

              <div className="flex items-start border-l-4 border-tssglYellow pl-4">
                <div className="bg-yellow-50 p-4 rounded-lg text-2xl mr-4">📞</div>
                <div>
                  <h4 className="font-bold text-gray-900 uppercase text-xs tracking-widest text-tssglYellow">24/7 Operations</h4>
                  <p className="text-xl font-bold text-tssglBlue">{companyData.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-50 p-4 rounded-lg text-2xl mr-4">✉️</div>
                <div>
                  <h4 className="font-bold text-gray-900">Email Enquiries</h4>
                  <p className="text-gray-600 font-medium">{companyData.contact.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-inner border border-gray-100">
            <form className="grid grid-cols-1 gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Name</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-tssglBlue outline-none" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Vessel Name / Company</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-tssglBlue outline-none" placeholder="e.g. M/V Thunder" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Message</label>
                <textarea rows="4" className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-tssglBlue outline-none" placeholder="How can we assist your operations?"></textarea>
              </div>
              <button type="submit" className="bg-tssglBlue text-white font-bold py-4 rounded hover:bg-blue-800 transition shadow-lg">
                Send Request
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;