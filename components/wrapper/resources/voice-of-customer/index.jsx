"use client";

import CallToAction from "@/components/CallToAction";
import InsightSection from "@/components/InsightSection";
import { iconMap } from "@/lib/iconMap";

export default function VoiceOfCustomerWrapper({ data }) {
  const { hero, whatIsVoC, whyVoCMatters, voCAdvantage, effectiveVoC, customerCentricity, cta } = data;

  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="container text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-main-heading font-extrabold text-charcoal-gray mb-4 leading-tight">
              {hero.title}
            </h1>
            <p className="text-paragraph text-gray-600">{hero.subtitle}</p>
          </div>
        </div>
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-primary/10 rounded-full"></div>
        <div className="absolute -top-12 -right-12 w-64 h-64 border-8 border-primary/10 rounded-2xl transform rotate-12"></div>
      </section>

      {/* What is VoC Section */}
      <section className="py-16 text-center bg-primary/5">
        <div className="container max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-primary/5 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-6">
            {iconMap[whatIsVoC.icon]}
            <span>{whatIsVoC.tag}</span>
          </div>
          <h2 className="text-secondary-heading font-bold text-gray-900 mb-6">{whatIsVoC.heading}</h2>
          <p className="text-paragraph mx-auto max-w-5xl text-gray-600 leading-relaxed">{whatIsVoC.description}</p>
        </div>
      </section>

      {/* Insight Section (optional) */}
      {whyVoCMatters && (
        <section className="py-16">
          <div className="container">
            <InsightSection data={whyVoCMatters} />
          </div>
        </section>
      )}

      {/* VoC Advantages Section */}
      <section className="py-20 relative overflow-hidden bg-primary/5">
        <div className="container text-center relative z-10">
          <h2 className="text-main-heading font-bold text-charcoal-gray mb-6 leading-tight">
            {voCAdvantage.title}
          </h2>
          <p className="text-paragraph text-gray-600 max-w-5xl mx-auto mb-16">
            {voCAdvantage.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {voCAdvantage.features.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 !text-5xl text-blue-600">
                  {iconMap[item.icon]}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps / Methodology Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-main-heading font-bold text-charcoal-gray mb-6 leading-tight">
              {effectiveVoC.title}
            </h2>
            <p className="text-paragraph text-gray-600">{effectiveVoC.description}</p>
          </div>
          <hr className="border-gray-200 mb-16" />
          <h3 className="text-paragraph font-semibold text-gray-500 uppercase mb-10">{effectiveVoC.stepsTitle}</h3>
          <div className="space-y-12">
            {effectiveVoC.steps.map((step, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 flex items-center justify-center bg-indigo-600 rounded-full shadow-lg">
                    {iconMap[step.icon]}
                  </div>
                </div>
                <div>
                  <h4 className="text-secondary-heading font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-paragraph leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer centricity */}
      <section className="py-16 text-center bg-primary/5">
        <div className="container max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-primary/5 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-6">
            {iconMap[customerCentricity.icon]}
            <span>{customerCentricity.tag}</span>
          </div>
          <h2 className="text-secondary-heading font-bold text-gray-900 mb-6">{customerCentricity.title}</h2>
          <p className="text-paragraph mx-auto max-w-5xl text-gray-600 leading-relaxed">{customerCentricity.description}</p>
        </div>
      </section>

      {/* CTA Sections */}
      {cta.map((item, index) => (
        <section key={index} className="container">
          <div className="py-16">
            <CallToAction data={item} />
          </div>
        </section>
      ))}
    </>
  );
}
