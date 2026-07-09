import React from 'react';
import { services } from '../data';

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

        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-tssglYellow">Service portfolio</p>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                Maritime and logistics solutions designed for safe, reliable port performance.
              </h1>
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

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:gap-10">
          {services.map((service) => {
            const imageSrc = service.image?.startsWith('./') ? service.image.replace('./', '/') : service.image;

            return (
              <article
                key={service.title}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)] lg:grid lg:grid-cols-[1.05fr_0.95fr]"
              >
                <div className="order-2 p-6 sm:p-8 lg:order-1 lg:p-10">
                  <div className="mb-4 inline-flex rounded-full bg-slate-100 px-4 py-2 text-2xl">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-semibold text-tssglBlue sm:text-3xl">{service.title}</h2>
                  <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{service.description}</p>

                  <ul className="mt-6 space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-slate-700 sm:text-base">
                        <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-tssglYellow" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {service.details.map((detail) => (
                      <div key={detail.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                        <h3 className="font-semibold text-slate-900">{detail.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-600">{detail.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <img
                    src={imageSrc}
                    alt={service.title}
                    className="h-64 w-full object-cover sm:h-72 lg:h-full"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Services;
