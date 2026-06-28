import React from 'react';
import { fleetData } from '../data';

const Fleet = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-tssglBlue">Our Fleet</h1>
          <div className="h-1.5 w-20 bg-tssglYellow mt-4"></div>
          <p className="text-gray-600 mt-6 max-w-xl">
            A reliable, high-performance craft maintained to international safety standards for offshore and coastal operations.
          </p>
        </div>

        {fleetData.map((vessel, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
            {/* Vessel Image */}
            <div className="lg:w-1/2 bg-tssglBlue h-64 lg:h-auto relative overflow-hidden">
              <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest z-10">
                {vessel.status}
              </div>
              {vessel.image ? (
                <img
                  src={vessel.image}
                  alt={`${vessel.name} vessel`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-blue-200 p-6">
                  <span className="text-lg italic font-serif opacity-50 underline decoration-tssglYellow">Vessel Image: {vessel.name}</span>
                </div>
              )}
            </div>

            {/* Technical Details */}
            <div className="lg:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-tssglBlue mb-2">{vessel.name}</h2>
              <p className="text-tssglYellow font-semibold uppercase tracking-wider mb-8">{vessel.type}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {Object.entries(vessel.specs).map(([key, value]) => (
                  <div key={key} className="border-b border-gray-100 pb-2">
                    <p className="text-xs text-gray-400 uppercase font-bold">{key}</p>
                    <p className="text-gray-800 font-medium">{value}</p>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-tssglBlue mb-3">Operational Capabilities:</h4>
                <ul className="grid grid-cols-1 gap-2">
                  {vessel.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <span className="text-tssglYellow mr-2">▶ </span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fleet;