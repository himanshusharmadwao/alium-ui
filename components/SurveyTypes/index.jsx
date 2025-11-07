import React from "react";
import { FaGlobe, FaEnvelope, FaLayerGroup, FaCommentDots, FaMobileAlt } from "react-icons/fa";
import Link from "next/link";

const surveys = [
    {
        icon: <FaGlobe size={24} />,
        title: "Web Survey",
        subtitle: "Engage Visitors Instantly on Your Website",
        desc: "Create beautiful, responsive surveys that blend seamlessly with your site’s design — perfect for gathering feedback, measuring satisfaction, or running quick polls in real time.",
    },
    {
        icon: <FaEnvelope size={24} />,
        title: "Link / Email Survey",
        subtitle: "Reach People Directly in Their Inbox",
        desc: "Send personalized surveys through email or shareable links. Ideal for NPS, post-purchase feedback, or customer satisfaction studies — no setup, just share and collect.",
    },
    {
        icon: <FaLayerGroup size={24} />,
        title: "In-Page Survey",
        subtitle: "Capture Contextual Insights as Users Browse",
        desc: "Trigger short, unobtrusive surveys within specific pages or user journeys. Understand what visitors think in the moment — right where they interact.",
    },
    {
        icon: <FaCommentDots size={24} />,
        title: "Pop-Up Survey",
        subtitle: "Spark Quick Responses Without Interrupting Flow",
        desc: "Launch lightweight, customizable pop-up surveys that appear at the right time — exit intent, scroll depth, or time on page. Get instant insights without hurting experience.",
    },
    {
        icon: <FaMobileAlt size={24} />,
        title: "App Survey",
        subtitle: "Understand User Sentiment Inside Your App",
        desc: "Collect feedback from mobile users directly within your iOS or Android app. Perfect for post-update reviews, feature testing, or in-app experience optimization.",
    },
];

const SurveyTypes = () => {
    return (
        <div className="">
            <h2 className="font-semibold text-center text-gray-900 text-secondary-heading">
                Reach Your Audience Wherever They Are
            </h2>
            <p className="mt-4 max-w-2xl text-center mx-auto text-gray-600 text-paragraph">
                Alium makes it effortless to collect feedback across every channel — from websites and
                apps to emails and in-page experiences. Choose your survey type, connect with your
                audience, and capture insights that drive smarter decisions.
            </p>

            {/* Grid of cards */}
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center items">
                {surveys.map((item, i) => (
                    <div
                        key={i}
                        className="bg-white shadow-sm hover:shadow-md transition rounded-2xl p-6 text-left w-full max-w-sm"
                    >
                        <div className="text-primary bg-primary/10 w-10 h-10 flex items-center justify-center rounded-lg mb-4">
                            {item.icon}
                        </div>
                        <h3 className="font-semibold text-gray-900 text-2xl">{item.title}</h3>
                        <h4 className="font-medium text-gray-700 mt-1 text-xl">{item.subtitle}</h4>
                        <p className="text-gray-600 mt-3 text-lg leading-relaxed">{item.desc}</p>
                        <Link
                            href="#"
                            className="inline-block mt-5 px-4 py-2 rounded-md bg-primary text-white text-sm font-semibold hover:shadow-md transition"
                        >
                            Start Here
                        </Link>
                    </div>
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 flex justify-center">
                <Link
                    href="#"
                    className="inline-flex items-center rounded-xl bg-[var(--color-primary)] px-6 py-3 font-semibold text-white shadow-sm hover:shadow-md transition"
                >
                    Get Free Access
                </Link>
            </div>
        </div>
    );
};

export default SurveyTypes;
