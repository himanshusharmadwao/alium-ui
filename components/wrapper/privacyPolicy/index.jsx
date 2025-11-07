"use client";

import Link from "next/link";

export default function PrivacyPolicyWrapper({ data }) {
  const { title, intro, sections } = data;

  return (
    <section className="pt-32 pb-20 px-6 md:px-0 bg-white text-gray-800">
      <div className="container">
        {/* Page Heading */}
        <div className="text-center mb-12">
          <h1 className="text-main-heading font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-paragraph text-gray-600 max-w-2xl mx-auto">{intro}</p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-secondary-heading font-semibold text-gray-900 mb-2">
                {section.heading}
              </h2>
              <p className="text-paragraph text-gray-600 leading-relaxed">{section.content}</p>
            </section>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Last updated: October {new Date().getFullYear()}</p>
        </div>
      </div>
    </section>
  );
}
