import React from "react";
import Image from "next/image";
import { FaUsers, FaLightbulb, FaHandshake } from "react-icons/fa";
import CallToAction from "@/components/CallToAction";
import TeamMembers from "@/components/TeamMembers";
import PrimaryCard from "@/components/common/PrimaryCard";

// Map for dynamic icon rendering
const iconMap = {
  FaUsers: FaUsers,
  FaLightbulb: FaLightbulb,
  FaHandshake: FaHandshake,
};

const AboutWrapper = ({ data }) => {
  const { hero, journey, principles, teamMembers, cta } = data;

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-40 pb-24 text-center">
        <div className="container">
          <span className="text-primary font-semibold">{hero.tag}</span>
          <h1 className="mt-4 font-extrabold text-main-heading leading-tight max-w-4xl mx-auto">
            {hero.title}
          </h1>
          <p
            className="mt-6 text-gray-600 max-w-2xl mx-auto text-paragraph"
            dangerouslySetInnerHTML={{ __html: hero.description }}
          />
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-16 bg-primary/5">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="h-[500px] overflow-hidden rounded-2xl shadow-soft-lg relative">
              <Image
                src={journey.image}
                alt="Alium team collaborating in office"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div>
            <h2 className="font-bold text-secondary-heading mb-6">
              {journey.heading}
            </h2>
            {journey.paragraphs.map((p, i) => (
              <p key={i} className={`text-gray-600 text-paragraph ${i > 0 ? "mt-4" : ""}`}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="container">
        <div className="py-16 text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <h2 className="font-bold text-secondary-heading mb-4">
              {principles.heading}
            </h2>
            <p className="text-gray-600 text-paragraph">{principles.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.items.map((item, i) => {
              const Icon = iconMap[item.icon];
              return (
                <PrimaryCard
                  key={i}
                  icon={<Icon size={28} />}
                  title={item.title}
                  text={item.text}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container">
        <div className="py-16">
          <TeamMembers teamMembers={teamMembers} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="container">
        <div className="py-16">
          <CallToAction data={cta} />
        </div>
      </section>
    </main>
  );
};

export default AboutWrapper;
