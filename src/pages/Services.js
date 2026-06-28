import React from 'react';
import { services, companyData } from '../data';

const Services = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-tssglBlue py-20 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-blue-200 max-w-2xl mx-auto px-6">
          Comprehensive maritime and logistics solutions tailored for the Gulf of Guinea.
        </p>
      </div>

      {/* Detailed Services List */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-12">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Image/Icon Placeholder */}
              <div className="w-full md:w-1/2 h-64 bg-gray-100 rounded-2xl flex items-center justify-center text-6xl shadow-inner border border-gray-100">
                {service.image ? (
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                ) : (
                  <span className="text-6xl">{service.icon}</span>
                )}
              </div>
              
              {/* Text Content */}
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-tssglBlue mb-4">{service.title}</h2>
                <div className="h-1 w-20 bg-tssglYellow mb-6"></div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700 font-medium">
                    <span className="text-tssglYellow mr-2">✓</span> 24/7 Operations Support
                  </li>
                  <li className="flex items-center text-gray-700 font-medium">
                    <span className="text-tssglYellow mr-2">✓</span> Fully Insured and Licensed
                  </li>
                  <li className="flex items-center text-gray-700 font-medium">
                    <span className="text-tssglYellow mr-2">✓</span> Compliant with Local Regulations
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* "Ready to Work" Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-tssglBlue mb-6">Need a Port Agent in Ghana?</h2>
          <p className="text-gray-600 mb-10">
            Our team is standing by to coordinate your vessel's arrival, logistics, and crew requirements.
          </p>
          <a 
            href={`tel:${companyData.contact.phone}`}
            className="bg-tssglYellow text-tssglBlue font-bold py-4 px-10 rounded-sm hover:bg-yellow-500 transition shadow-lg inline-block"
          >
            Call Operations: {companyData.contact.phone}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;