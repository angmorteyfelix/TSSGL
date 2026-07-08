import React from 'react';
import { services, companyData } from '../data';

const Services = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="relative bg-gradient-to-r from-tssglBlue via-slate-900 to-slate-950 text-white">
        <div className="absolute top-12 right-6 hidden lg:block">
          <div className="relative h-72 w-72 overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-slate-950/30">
            <img
              src="/images/photo-main-bg.png"
              alt="Maritime logistics operations"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-tssglYellow mb-4">Service portfolio</p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">Maritime and logistics solutions designed for safe, reliable port performance.</h1>
              <p className="mt-6 max-w-2xl text-lg text-slate-200">
                We deliver ship agency, cargo coordination, offshore support and chandlery services across Ghana and the Gulf of Guinea with regulatory precision and operational speed.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-lg shadow-slate-950/20">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Port coverage</p>
                <p className="mt-4 text-3xl font-semibold">Tema · Takoradi</p>
              </div>
              <div className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-lg shadow-slate-950/20">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Operations</p>
                <p className="mt-4 text-3xl font-semibold">24/7 readiness</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        <div className="space-y-16">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`grid gap-8 rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-xl shadow-slate-200/40 lg:grid-cols-[45%_55%] ${index % 2 !== 0 ? 'lg:grid-cols-[55%_45%]' : ''}`}
            >
              <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-100 shadow-sm">
                {service.image ? (
                  <>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full min-h-[20rem] w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                  </>
                ) : (
                  <div className="flex h-80 w-full items-center justify-center bg-slate-200 text-6xl text-slate-500">
                    {service.icon}
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-tssglYellow mb-3">{service.title}</p>
                  <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
                  <p className="mt-4 max-w-2xl text-gray-600">{service.description}</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {service.details?.map((detail) => (
                    <div key={detail.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">{detail.title}</h3>
                      <p className="text-gray-600">{detail.text}</p>
                    </div>
                  ))}
                </div>

                {service.items && (
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Core advantages</h3>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-gray-700">
                          <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-tssglBlue text-white">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-tssglBlue text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-tssglYellow mb-4">Ready to deploy</p>
          <h2 className="text-4xl font-bold mb-4">Your next port call deserves expert support.</h2>
          <p className="text-slate-200 mb-8">
            Contact our operations team to coordinate vessel arrival, customs clearance and offshore logistics with confidence.
          </p>
          <a
            href={`tel:${companyData.contact.phone}`}
            className="inline-flex items-center justify-center rounded-full bg-tssglYellow px-10 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-slate-900/30 hover:bg-yellow-500 transition"
          >
            Call Operations: {companyData.contact.phone}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;