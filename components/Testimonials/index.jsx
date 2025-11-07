"use client";

import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
    {
        quote:
            "Alium has completely transformed our workflow. We're launching products twice as fast as before. It's an essential tool for any serious",
        name: "Sarah L.",
        role: "CTO, Innovate Inc.",
        image: "/images/avatar-1.jpg",
    },
    {
        quote:
            "The user interface is incredibly intuitive, and the customer support is top-notch. I was able to get my entire team onboarded in less than an hour.",
        name: "Michael B.",
        role: "Project Manager, Tech",
        image: "/images/avatar-1.jpg",
    },
    {
        quote:
            "As a startup, we need tools that are powerful but also affordable. Alium's pricing is unbeatable for the value it provides. Highly recommended!",
        name: "Jessica W.",
        role: "Founder, Creative Co.",
        image: "/images/avatar-1.jpg",
    },
    {
        quote:
            "As a startup, we need tools that are powerful but also affordable. Alium's pricing is unbeatable for the value it provides. Highly recommended!",
        name: "Jessica W.",
        role: "Founder, Creative Co.",
        image: "/images/avatar-1.jpg",
    },
    {
        quote:
            "As a startup, we need tools that are powerful but also affordable. Alium's pricing is unbeatable for the value it provides. Highly recommended!",
        name: "Jessica W.",
        role: "Founder, Creative Co.",
        image: "/images/avatar-1.jpg",
    }
];

const Testimonials = ({data}) => {
    return (
        <div className="text-center">
            {/* Heading */}
            <h2 className="font-semibold text-gray-900 text-secondary-heading">
                {data.heading}
            </h2>
            <p className="mt-4 text-gray-600 text-paragraph max-w-2xl mx-auto">
                {data.subHeading}
            </p>

            {/* Swiper Slider */}
            <div className="mt-16">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="!pb-14"
                >
                    {data.cards.map((t, i) => (
                        <SwiperSlide key={i}>
                            <div className="bg-white rounded-3xl p-8 text-left shadow-sm hover:shadow-md transition flex flex-col h-full">
                                <FaQuoteLeft className="text-[var(--color-primary)] text-2xl mb-4" />
                                <p className="text-gray-700 text-sm leading-relaxed mb-6">{`"${t.quote}"`}</p>

                                <div className="mt-auto flex items-center gap-3">
                                    <Image
                                        src={t.image}
                                        alt={t.name}
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                    <div>
                                        <p className="font-semibold text-gray-900">{t.name}</p>
                                        <p className="text-gray-500 text-sm">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
