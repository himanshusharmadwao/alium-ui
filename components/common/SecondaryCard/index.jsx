"use client";

import Link from "next/link";

export default function SecondaryCard({ icon, title, subtitle, desc, linkTitle = "Start Here", linkHref = "#", className = "" }) {
  return (
    <div className={`shadow-sm hover:shadow-md transition rounded-2xl p-6 text-left w-full max-w-sm ${className} `}>
      {/* Icon */}
      <div className="text-primary bg-primary/10 w-10 h-10 flex items-center justify-center rounded-lg mb-4">
        {icon}
      </div>

      {/* Title & Subtitle */}
      <h3 className="font-semibold text-gray-900 text-2xl">{title}</h3>
      <h4 className="font-medium text-gray-700 mt-1 text-md">{subtitle}</h4>

      {/* Description */}
      <p className="text-gray-600 mt-3 text-lg leading-relaxed">{desc}</p>

      {/* CTA Button */}
      <Link
        href={linkHref}
        className="inline-block mt-5 px-4 py-2 rounded-md bg-primary text-white text-sm font-semibold hover:shadow-md transition"
      >
        {linkTitle}
      </Link>
    </div>
  );
}
