"use client";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function InsightSection({ data }) {
  if (!data) return null;

  const { tag, heading, description, points, image, reverse } = data;

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 items-center gap-12 ${
        reverse ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1" : ""
      }`}
    >
      {/* Image Section */}
      <div className="relative">
        <div className="rounded-3xl shadow-lg overflow-hidden">
          <Image
            src={image?.src}
            alt={image?.alt || "Section Image"}
            width={600}
            height={400}
            className="rounded-3xl object-cover"
          />
        </div>

        {/* Decorative Shapes */}
        <div className="absolute -bottom-4 left-[-30px] w-20 h-20 bg-primary/10 rounded-xl hidden lg:block"></div>
        <div className="absolute -top-4 right-[-40px] w-16 h-16 bg-primary/20 rounded-full  hidden lg:block"></div>
      </div>

      {/* Text Section */}
      <div>
        <h4 className="text-primary font-semibold tracking-wide uppercase mb-2">
          {tag}
        </h4>
        <h2 className="text-primary-heading font-bold text-gray-900 mb-4">
          {heading}
        </h2>
        <p className="text-gray-600 text-paragraph mb-6 leading-relaxed">
          {description}
        </p>

        <ul className="space-y-4">
          {points?.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <FaCheckCircle className="text-primary flex-shrink-0 mt-[2px]" size={22} />
              <p className="text-gray-700 text-paragraph">
                <span className="font-semibold">{point.title}:</span>{" "}
                {point.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
