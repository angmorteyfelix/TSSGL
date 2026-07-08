import React from 'react';
import { fleetData } from '../data';

const Fleet = () => {
  const totalVessels = fleetData.length;
  const activeVessels = fleetData.filter((vessel) => vessel.status === 'Active').length;
  const standbyVessels = totalVessels - activeVessels;

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-tssglYellow mb-4">Fleet overview</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Modern maritime assets built for offshore and coastal performance.</h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-slate-600">
            Our vessels are operated and maintained to international safety standards, delivering dependable support across ship agency, crew transfer and logistics missions.
          </p>
        </header>

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 text-center shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Total vessels</p>
            <p className="mt-4 text-4xl font-bold text-slate-900">{totalVessels}</p>
          </div>
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 text-center shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Active vessels</p>
            <p className="mt-4 text-4xl font-bold text-emerald-600">{activeVessels}</p>
          </div>
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 text-center shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Standby / support</p>
            <p className="mt-4 text-4xl font-bold text-slate-900">{standbyVessels}</p>
          </div>
        </div>

        <div className="space-y-12">
          {fleetData.map((vessel, index) => (
            <section
              key={vessel.name}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/40 lg:grid lg:grid-cols-[45%_55%] lg:gap-6"
            >
              <div className="relative h-80 lg:h-auto">
                {vessel.image ? (
                  <>
                    <img
                      src={vessel.image}
                      alt={`${vessel.name} vessel`}
                      className="h-full w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  </>
                ) : (
                  <div className="flex h-full items-center justify-center bg-slate-200 text-slate-500 px-6 text-center">
                    <span className="text-lg font-semibold">Vessel image not available</span>
                  </div>
                )}
                <span className={`absolute top-5 left-5 inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] ${vessel.status === 'Active' ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-slate-950'}`}>
                  {vessel.status}
                </span>
              </div>

              <div className="p-8 md:p-10">
                <div className="flex flex-col gap-2 lg:items-start">
                  <p className="text-sm uppercase tracking-[0.3em] text-tssglYellow">{vessel.type}</p>
                  <h2 className="text-3xl font-bold text-slate-900">{vessel.name}</h2>
                  <p className="text-slate-600 max-w-2xl">{vessel.description}</p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {Object.entries(vessel.specs).map(([key, value]) => (
                    <div key={key} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{key}</p>
                      <p className="mt-2 text-base font-semibold text-slate-900">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-[1.75rem] border border-slate-200 bg-slate-100 p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Operational capabilities</h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {vessel.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="rounded-3xl bg-white p-4 text-sm text-slate-700 shadow-sm">
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fleet;