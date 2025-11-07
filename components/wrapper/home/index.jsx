import React from "react";
import Link from "next/link";
import Image from "next/image";
import Clients from "@/components/Clients";
import TestimonialsSection from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import SecondaryCard from "@/components/common/SecondaryCard";
import homeData from "@/lib/data/home/data.json";
import {
  FaSlack,
  FaGoogle,
  FaEnvelope,
  FaWindows,
  FaHubspot,
  FaGlobe,
  FaLayerGroup,
  FaCommentDots,
  FaMobileAlt,
} from "react-icons/fa";
import { SiSalesforce } from "react-icons/si";

const iconMap = {
  FaSlack: <FaSlack size={36} />,
  FaGoogle: <FaGoogle size={36} />,
  FaEnvelope: <FaEnvelope size={36} />,
  FaWindows: <FaWindows size={36} />,
  FaHubspot: <FaHubspot size={36} />,
  SiSalesforce: <SiSalesforce size={36} />,
  FaGlobe: <FaGlobe size={24} />,
  FaLayerGroup: <FaLayerGroup size={24} />,
  FaCommentDots: <FaCommentDots size={24} />,
  FaMobileAlt: <FaMobileAlt size={24} />,
};

const HomeWrapper = () => {
  const { hero, surveys, conversionSection, clientsSection, integrations, testimonial, cta } = homeData;

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-primary text-white pt-[200px] !pb-[220px] overflow-hidden">
        <div className="container px-6">
          <h1 className="mx-auto max-w-5xl text-center font-extrabold leading-[1.05] tracking-tight text-main-heading">
            {hero.title}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-center text-paragraph text-white/90">
            {hero.subtitle}
          </p>

          <div className="flex justify-center mt-8">
            <Link
              href={hero.buttonLink}
              className="inline-flex items-center rounded-xl bg-white px-6 py-3 font-semibold text-primary shadow-sm hover:shadow-md transition"
            >
              {hero.buttonText}
            </Link>
          </div>
        </div>

        {/* Curve */}
        <div className="absolute inset-x-0 -bottom-px">
          <svg
            viewBox="0 0 1440 90"
            xmlns="http://www.w3.org/2000/svg"
            className="block w-full h-16 sm:h-20 md:h-24 lg:h-28"
            preserveAspectRatio="none"
          >
            <path fill="#ffffff" d="M0,70 C480,100 960,40 1440,70 L1440,90 L0,90 Z" />
          </svg>
        </div>
      </section>

      {/* Clients */}
      <section className="container">
        <div className="py-16">
          <Clients data={clientsSection} />
        </div>
      </section>

      {/* Surveys */}
      <section className="bg-primary/5 py-16">
        <div className="container">
          <h2 className="font-semibold text-center text-gray-900 text-secondary-heading">
            {surveys.title}
          </h2>
          <p className="mt-4 max-w-2xl text-center mx-auto text-gray-600 text-paragraph">
            {surveys.description}
          </p>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {surveys.cards.map((item, i) => (
              <SecondaryCard key={i} {...item} icon={iconMap[item.icon]} />
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Link
              href={surveys.buttonLink}
              className="inline-flex items-center rounded-xl bg-[var(--color-primary)] px-6 py-3 font-semibold text-white shadow-sm hover:shadow-md transition"
            >
              {surveys.buttonText}
            </Link>
          </div>
        </div>
      </section>

      {/* Conversion */}
      <section className="py-16 bg-white">
        <div className="container grid lg:grid-cols-2 items-center gap-12">
          <div>
            <h2 className="font-semibold text-gray-900 text-secondary-heading">
              {conversionSection.title}
            </h2>
            <p className="mt-4 text-gray-600 text-paragraph max-w-md">
              {conversionSection.description}
            </p>

            <Link
              href={conversionSection.buttonLink}
              className="inline-flex items-center mt-8 rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-sm hover:shadow-md transition"
            >
              {conversionSection.buttonText}
            </Link>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src={conversionSection.image}
              alt="Alium survey dashboard preview"
              width={450}
              height={300}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="bg-primary text-white py-16 mt-16">
        <div className="container grid lg:grid-cols-2 items-center gap-16">
          <div>
            <h2 className="font-semibold text-white text-main-heading leading-[56px]">
              {integrations.title}
            </h2>
            <p className="mt-5 text-white/90 text-paragraph max-w-md">
              {integrations.description}
            </p>

            <Link
              href={integrations.buttonLink}
              className="inline-flex items-center gap-2 mt-10 rounded-full bg-white px-8 py-4 font-semibold text-primary shadow-sm hover:shadow-md transition"
            >
              {integrations.buttonText}
            </Link>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-3 gap-6 justify-items-center">
            {integrations.items.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 hover:bg-white/20 transition rounded-2xl w-28 h-28 flex items-center justify-center"
                title={item.name}
              >
                {iconMap[item.icon]}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container">
        <div className="py-16">
          <TestimonialsSection data={testimonial} />
        </div>
      </section>

      {/* CTA */}
      <section className="container">
        <div className="py-16">
          <CallToAction data={cta} />
        </div>
      </section>
    </main>
  );
};

export default HomeWrapper;
