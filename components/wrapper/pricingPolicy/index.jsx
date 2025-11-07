"use client";

import CallToAction from "@/components/CallToAction";
import Link from "next/link";

export default function PricingPolicyWrapper({ data }) {
  const { hero, featuresSection, cta } = data;

  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="container text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-main-heading font-extrabold text-charcoal-gray mb-4 leading-tight">
              {hero.title}
            </h1>
            <p className="text-paragraph text-gray-600">{hero.description}</p>
          </div>
        </div>
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-primary/10 rounded-full"></div>
        <div className="absolute -top-12 -right-12 w-64 h-64 border-8 border-primary/10 rounded-2xl transform rotate-12"></div>
      </section>

      {/* Section 2: Features Section */}
      <div className="bg-primary/5 py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold leading-snug mb-6">
              {featuresSection.heading}
            </h2>
          </div>

          <ul className="md:w-1/2 space-y-4 text-lg">
            {featuresSection.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span>✔</span> {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <section className="container">
        <div className="py-16">
          <CallToAction data={cta} />
        </div>
      </section>
    </>
  );
}
