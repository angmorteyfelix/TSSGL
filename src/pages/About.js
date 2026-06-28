import React, { useEffect, useState } from "react";
import { aboutContent, coreValues } from "../data";

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">About Us</h1>
      <div className="space-y-8">
        {aboutContent.map((content, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{content.title}</h2>
            {content.isTextFile ? (
              <div style={{ textAlign: 'justify' }} className="whitespace-pre-line">
                {formatText(getText(content))}
              </div>
            ) : (
              <p className="text-gray-600">{getText(content)}</p>
            )}
          </div>
        ))} 
      </div>
      <hr className="my-12 border-t border-gray-300" />
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Core Values</h1>
      <div className="space-y-8">
        {coreValues.map((cvalues, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{cvalues.title}</h2>
            <p className="text-gray-600">{cvalues.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;