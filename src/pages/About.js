import React, { useEffect, useState } from "react";
import { aboutContent, coreValues } from "../data";
import { companyData } from "../data";
const About = () => {
  const [loadedText, setLoadedText] = useState({});

  const formatText = (text) => {
    if (!text) return null;
    const lines = text.split(/\r?\n/);
    return lines.map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) return <br key={`br-${idx}`} />;
      // Detect all-caps heading lines (e.g., WHY CHOOSE TSSGL?) and render bold
      if (trimmed === trimmed.toUpperCase() && trimmed.replace(/[^A-Z0-9]/g, '').length > 2) {
        return (
          <p key={idx} className="text-gray-800 font-bold mb-2">
            {trimmed}
          </p>
        );
      }
      const bulletMatch = trimmed.match(/^•\s*(.+?):\s*(.*)$/);
      if (bulletMatch) {
        const title = bulletMatch[1];
        const rest = bulletMatch[2];
        return (
          <p key={idx} className="text-gray-600">
            <strong>{title}:</strong>{' '}{rest}
          </p>
        );
      }
      return (
        <p key={idx} className="text-gray-600">
          {line}
        </p>
      );
    });
  };

  useEffect(() => {
    const textEntries = aboutContent.filter((content) => content.isTextFile);
    if (!textEntries.length) return;

    Promise.all(
      textEntries.map((entry) =>
        fetch(entry.text)
          .then((response) => response.text())
          .then((text) => ({ title: entry.title, text }))
          .catch(() => ({ title: entry.title, text: "Unable to load content." }))
      )
    ).then((results) => {
      const contentMap = {};
      results.forEach((result) => {
        contentMap[result.title] = result.text;
      });
      setLoadedText(contentMap);
    });
  }, []);

  const getText = (content) => {
    if (content.isTextFile) {
      return loadedText[content.title] ?? "Loading...";
    }
    return content.text;
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-gradient-to-r from-tssglBlue via-slate-900 to-slate-900 text-white">
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="absolute top-10 right-4 hidden lg:block">
            <div className="relative h-72 w-72 overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-slate-950/30">
              <img
                src="/images/photo-main-bg.png"
                alt="Maritime operations"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            </div>
          </div>
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-tssglYellow mb-4">About Thalassa And Shore Services</p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">Professional maritime agency and logistics solutions for Ghana and West Africa.</h1>
              <p className="max-w-2xl text-base leading-8 text-slate-200">
                TSSGL combines local market intelligence, regulatory expertise and 24/7 operational readiness to deliver seamless ship agency, cargo logistics and offshore support across Ghana’s busiest ports.
              </p>
            </div>
            <div className="rounded-[2rem] bg-white/10 p-8 shadow-xl shadow-black/10 backdrop-blur-md">
              <p className="text-sm uppercase tracking-[0.24em] text-tssglYellow mb-4">Our promise</p>
              <p className="text-slate-100 leading-relaxed">
                We are committed to safe, efficient and compliant operations delivered with transparency and speed. From pre-arrival planning to post-voyage reporting, TSSGL keeps your maritime activity running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="space-y-10">
            {aboutContent.map((content, index) => (
              <section key={index} className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/40">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-tssglYellow mb-2">{content.title}</p>
                    {/* <h2 className="text-2xl font-semibold text-slate-900">{content.title === 'Who We Are' ? 'Who we are' : content.title}</h2> */}  
                  </div>
                </div>
                {content.isTextFile ? (
                  <div className="prose prose-slate max-w-none text-gray-700">
                    {formatText(getText(content))}
                  </div>
                ) : (
                  <p className="text-gray-700 leading-relaxed">{getText(content)}</p>
                )}
              </section>
            ))}
          </div>

          <aside className="space-y-8">
            <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/40">
              <p className="text-sm uppercase tracking-[0.24em] text-tssglYellow mb-4">At a glance</p>
              <dl className="grid gap-4">
                <div className="rounded-3xl bg-slate-50 p-5">
                  <dt className="text-sm uppercase tracking-[0.24em] text-slate-500">Headquarters</dt>
                  <dd className="mt-2 text-base font-semibold text-slate-900">{companyData.contact.hq}</dd>
                </div>
                <div className="rounded-3xl bg-slate-50 p-5">
                  <dt className="text-sm uppercase tracking-[0.24em] text-slate-500">Operations</dt>
                  <dd className="mt-2 text-base font-semibold text-slate-900">{companyData.contact.ops247}</dd>
                </div>
                <div className="rounded-3xl bg-slate-50 p-5">
                  <dt className="text-sm uppercase tracking-[0.24em] text-slate-500">Contact</dt>
                  <dd className="mt-2 text-base font-semibold text-slate-900">{companyData.contact.email}</dd>
                </div>
              </dl>
            </div>
            <div className="rounded-[2rem] bg-tssglBlue p-8 text-white shadow-xl shadow-slate-900/20">
              <p className="text-sm uppercase tracking-[0.24em] text-tssglYellow mb-4">Why partner with us?</p>
              <ul className="space-y-4 text-sm leading-7">
                <li className="rounded-3xl bg-white/10 p-4">Local port intelligence and customs expertise for faster clearance.</li>
                <li className="rounded-3xl bg-white/10 p-4">24/7 operational support that minimizes waiting time and maximizes efficiency.</li>
                <li className="rounded-3xl bg-white/10 p-4">Integrated logistics services from port agency to offshore and chandlery support.</li>
              </ul>
            </div>
          </aside>
        </div>

        <section className="mt-16">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-tssglYellow mb-3">Core values</p>
              <h2 className="text-3xl font-bold text-slate-900">Guiding our work every day</h2>
            </div>
            <div className="rounded-full bg-slate-100 px-5 py-3 text-sm text-slate-700">Built on safety, efficiency, integrity and partnership.</div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {coreValues.map((cvalues, index) => (
              <div key={index} className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/40">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{cvalues.title}</h3>
                <p className="text-gray-700 leading-relaxed">{cvalues.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;