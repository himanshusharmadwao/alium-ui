"use client";

import { motion } from "framer-motion";
import { iconMap } from "@/lib/iconMap";

import Link from "next/link";
import { FaHandSparkles } from "react-icons/fa";
import CallToAction from "@/components/CallToAction";
import InsightSection from "@/components/InsightSection";
import SecondaryCard from "@/components/common/SecondaryCard";

export default function SolutionsWrapper({ data }) {
  const { hero, businesses, insightData, solutionAppeal, cta } = data;

  return (
    <main>
      {/* HERO SECTION */}
      <section className="pt-40 pb-24 bg-gradient-to-br from-neutral-gray via-white to-primary/5 h-[700px] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                <FaHandSparkles className="mr-2" /> {hero.tag}
              </div>
              <h1 className="text-6xl lg:text-7xl font-extrabold text-charcoal-gray mb-6 leading-none">
                {hero.title.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                  {hero.title.split(" ").slice(-1)}
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
                {hero.subheading}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={hero.buttonLink}
                  className="bg-primary text-white px-8 py-4 rounded-xl shadow-soft hover:bg-opacity-90 transform hover:-translate-y-1 transition-all duration-300 text-lg font-semibold flex items-center justify-center"
                >
                  {hero.buttonText}
                </Link>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="relative bg-white rounded-3xl p-8 shadow-soft-lg border border-gray-100">
                {/* Top Cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {hero.visual.cards.map((card, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4 flex flex-col justify-center items-center gap-1"
                    >
                      {iconMap[card.icon]}
                      <div className="text-sm font-semibold text-charcoal-gray">
                        {card.title}
                      </div>
                      <div className="text-xs text-gray-500">{card.subtitle}</div>
                    </div>
                  ))}
                </div>

                {/* Analytics Bar */}
                <div className="bg-gradient-to-r from-primary/5 to-purple-50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-charcoal-gray">
                      {hero.visual.analytics.title}
                    </span>
                    {iconMap[hero.visual.analytics.icon]}
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full"
                      style={{ width: `${hero.visual.analytics.progress * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    {hero.visual.analytics.subtitle}
                  </div>
                </div>
              </div>

              {/* Floating Icon */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg rotate-12"
              >
                {iconMap[hero.visual.floatingIcon.icon]}
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center shadow-lg rotate-12"
              ></motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-charcoal-gray mb-4">
              {businesses.title}
            </h2>
            <p className="text-gray-600">{businesses.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businesses.cards.map((item, i) => (
              <SecondaryCard
                key={i}
                icon={iconMap[item.icon]}
                title={item.title}
                subtitle={item.subtitle}
                desc={item.description}
                linkText={item.linkText}
                linkUrl={item.linkHref}
                className="bg-primary/5"
              />
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHT SECTION */}
      <section className="py-16">
        <div className="container">
          <InsightSection data={insightData} />
        </div>
      </section>

      {/* SOLUTION APPEAL */}
      <section className="py-16 text-center bg-primary/5">
        <div className="container max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-primary/5 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-6">
            {iconMap["FaLightbulb"]}
            <span>{solutionAppeal.tag}</span>
          </div>

          <h2 className="text-primary-heading font-bold text-gray-900 mb-6">
            {solutionAppeal.title}
          </h2>

          <p className="text-paragraph mx-auto max-w-3xl text-gray-600 leading-relaxed">
            {solutionAppeal.description}
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container">
        <div className="py-16">
          <CallToAction data={cta} />
        </div>
      </section>
    </main>
  );
}
