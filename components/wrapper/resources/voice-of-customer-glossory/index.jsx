"use client";

import { useState } from "react";
import { FaTimes } from "react-icons/fa";


export default function VoiceOfCustomerGlossaryWrapper({data}) {
  const [selectedTerm, setSelectedTerm] = useState(null);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="container text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-main-heading font-extrabold text-charcoal-gray mb-4 leading-tight">
              {data.title}
            </h1>
            <p className="text-paragraph text-gray-600">
              {data.description}
            </p>
          </div>
        </div>

        {/* Decorative shapes */}
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-primary/10 rounded-full"></div>
        <div className="absolute -top-12 -right-12 w-64 h-64 border-8 border-primary/10 rounded-2xl transform rotate-12"></div>
      </section>

      {/* Glossary Section */}
      <section className="py-16">
        <div className="container">
          {/* Glossary Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {data.glossary.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedTerm(item)}
                className="bg-primary/5 shadow-sm hover:shadow-md transition border border-gray-100 rounded-xl px-2 py-10 cursor-pointer text-center font-medium text-gray-800 hover:text-primary text-paragraph"
              >
                {item.term}
              </button>
            ))}
          </div>

          {/* Modal */}
          {selectedTerm && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
              onClick={() => setSelectedTerm(null)}
            >
              <div
                className="bg-white rounded-xl max-w-lg w-[90%] overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex justify-between items-center bg-primary text-white px-5 py-3">
                  <h2 className="text-lg font-semibold">{selectedTerm.term}</h2>
                  <button
                    onClick={() => setSelectedTerm(null)}
                    className="text-white cursor-pointer hover:text-gray-200"
                  >
                    <FaTimes size={18} />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 text-gray-700 text-base leading-relaxed">
                  {selectedTerm.definition}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
