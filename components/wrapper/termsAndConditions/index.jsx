"use client";

import Link from "next/link";

export default function TermsAndConditionsWrapper({ data }) {
  const { hero, sections, contact } = data;

  return (
    <section className="pt-32 pb-20 px-6 md:px-0 bg-white text-gray-800">
      <div className="container">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-center font-extrabold text-main-heading leading-tight max-w-4xl mb-12 mx-auto">
            {hero?.title || "Terms & Conditions"}
          </h1>
          {hero?.subtitle && (
            <p className="text-gray-600 text-paragraph mx-auto mb-4">
              {hero.subtitle}
            </p>
          )}
          {hero?.description && (
            <p className="text-gray-600 text-paragraph mx-auto">
              {hero.description}
            </p>
          )}
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {sections?.map((section) => (
            <section key={section.id}>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                {section.id}. {section.title}
              </h2>

              {/* Paragraph Content */}
              {section.content?.map((para, index) => (
                <p key={index} className="text-gray-600 text-paragraph leading-relaxed mb-3">
                  {para}
                </p>
              ))}

              {/* Optional Points (bulleted list) */}
              {section.points && (
                <ul className="list-disc pl-6 text-gray-600 text-paragraph leading-relaxed mb-3">
                  {section.points.map((point, idx) => (
                    <li key={idx} className="mb-1">
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              {/* Optional Post-Points Paragraphs */}
              {section.postPoints && (
                <div className="mt-3 space-y-2">
                  {section.postPoints.map((p, idx) => (
                    <p key={idx} className="text-gray-600 text-paragraph leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Last updated: November {new Date().getFullYear()}</p>
        </div>
      </div>
    </section>
  );
}
