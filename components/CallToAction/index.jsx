import React from "react";
import Link from "next/link";

const CallToAction = ({ data }) => {
  if (!data) return null;

  const { heading, subheading, buttonText, buttonLink } = data;

  return (
    <div className="">
      <div className="relative bg-primary text-white text-center rounded-[40px] py-10 lg:px-unset px-4 overflow-hidden">
        {/* Background Shapes */}
        <div className="absolute top-0 left-0 w-38 h-38 bg-white/10 rounded-full -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-38 h-38 bg-white/10 rotate-45 rounded-2xl translate-x-1/4 translate-y-1/4"></div>

        {/* Content */}
        <h2 className="font-extrabold text-white text-secondary-heading">
          {heading}
        </h2>
        <p className="mt-4 text-white/90 text-paragraph max-w-3xl mx-auto">
          {subheading}
        </p>

        <div className="mt-10">
          <Link
            href={buttonLink || "#"}
            className="inline-flex items-center rounded-[20px] bg-white px-8 py-4 font-semibold 
              text-[var(--color-primary)] shadow-sm hover:shadow-md transition"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
