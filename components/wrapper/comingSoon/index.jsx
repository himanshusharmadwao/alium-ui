"use client";

import Link from "next/link";
import React from "react";
import { BiSolidBarChartAlt2 } from "react-icons/bi";

const ComingSoonWrapper = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">

            <h1 className="text-5xl font-bold mb-4 text-primary">Coming Soon</h1>
            <p className="text-lg max-w-xl mb-12">
                We’re working hard to bring you something amazing. Stay tuned!
            </p>

            <Link
                href="/"
                className="inline-block bg-[#3b37ff] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#2d2adb] transition"
            >
                Go Back Home
            </Link>

        </section>
    );
};

export default ComingSoonWrapper;
