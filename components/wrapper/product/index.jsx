"use client";

import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import InsightSection from "@/components/InsightSection";
import Link from "next/link";
import { iconMap } from "@/lib/iconMap";

const ProductWrapper = ({ data }) => {
    if (!data) return null; // safety check

    const { hero, offerings, useCasesData, cta } = data;

    return (
        <main>
            {/* Hero Section */}
            <section className="pt-40 pb-24 bg-primary/5 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute bottom-0 -left-24 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl opacity-50"></div>

                <div className="container h-full flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
                        {/* Text Section */}
                        <div className="text-left space-y-8 z-10">
                            {
                                (() => {
                                    const words = hero.heading.trim().split(" ");
                                    const lastWord = words.pop();
                                    const firstPart = words.join(" ");
                                    return (
                                        <h1 className="text-main-heading font-extrabold leading-tight tracking-tight">
                                            {firstPart}{" "}
                                            <span className="relative inline-block">
                                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                                                    {lastWord}
                                                </span>
                                                <svg
                                                    className="absolute -bottom-3 left-0 w-full h-auto text-primary/80"
                                                    viewBox="0 0 198 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M2 13.5C25.3222 7.33333 91.0441 -5.49999 196 6.5"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                </svg>
                                            </span>
                                        </h1>
                                    );
                                })()
                            }

                            <p className="text-paragraph text-gray-600 leading-relaxed max-w-xl">
                                {hero.text}
                            </p>
                            <div className="pt-4">
                                <Link href={hero.buttonLink}>
                                    <span className="inline-block bg-primary text-white px-8 py-4 rounded-xl shadow-soft hover:bg-opacity-90 transform hover:-translate-y-1 transition-all duration-300 font-bold text-lg cursor-pointer">
                                        {hero.buttonText}
                                    </span>
                                </Link>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="relative flex items-center justify-center h-full z-10">
                            <div className="absolute -top-10 right-0 w-40 h-40 bg-purple-200/20 rounded-full blur-2xl animate-pulse"></div>
                            <div className="absolute -bottom-10 left-0 w-40 h-40 bg-blue-200/20 rounded-full blur-2xl animate-pulse delay-500"></div>
                            <div className="relative w-full max-w-[450px] transform lg:scale-110 lg:translate-x-8">
                                <div className="bg-white/60 backdrop-blur-md p-4 rounded-2xl shadow-soft-lg border border-white/50">
                                    <Image
                                        src={hero.image}
                                        alt="Product Hero Image"
                                        width={900}
                                        height={600}
                                        className="w-full h-auto rounded-xl object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Offerings Section */}
            <section className="container">
                <div className="py-16 text-center">
                    {/* Section Header */}
                    <div className="max-w-3xl mx-auto mb-16">
                        <h2 className="text-secondary-heading font-bold text-charcoal-gray mb-4">
                            {offerings.heading}
                        </h2>
                        <p className="text-gray-600 text-paragraph">
                            {offerings.description}
                        </p>
                    </div>

                    {/* Offerings Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {offerings.items.map((item, i) => {
                            // Dynamically map icons from react-icons
                            const Icon = iconMap[item.icon];

                            return (
                                <div
                                    key={i}
                                    className="bg-primary/5 p-8 rounded-2xl shadow-soft hover:shadow-soft-lg transform hover:-translate-y-2 transition-all duration-300 text-left"
                                >
                                    {/* Icon */}
                                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                        {Icon && Icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-charcoal-gray mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-paragraph">{item.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-16 bg-primary/5">
                <div className="container">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-secondary-heading font-bold mb-4">
                            {useCasesData.heading}
                        </h2>
                        <p className="text-gray-600 text-paragraph">
                            {useCasesData.subheading}
                        </p>
                    </div>

                    {/* Use Case Cards */}
                    <div className="space-y-36">
                        {useCasesData.items.map((item, i) => (
                            <InsightSection key={i} data={item} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Call To Action */}
            <section className="container py-16 !mt-16">
                <CallToAction data={cta} />
            </section>
        </main>
    );
};

export default ProductWrapper;
