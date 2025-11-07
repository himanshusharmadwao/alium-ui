"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function Accordion({ items }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleItem = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="space-y-6">
            {items.map((item, i) => (
                <div
                    key={i}
                    onClick={() => toggleItem(i)}
                    className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 bg-white shadow-soft hover:shadow-soft-lg border border-gray-500`}
                >
                    {/* Header */}
                    <div className="flex justify-between items-center font-semibold text-charcoal-gray text-paragraph">
                        <span>{item.question}</span>
                        <FaChevronDown
                            className={`transition-transform duration-300 text-gray-500 ${
                                activeIndex === i ? "rotate-180" : ""
                            }`}
                        />
                    </div>

                    {/* Animated Answer */}
                    <AnimatePresence>
                        {activeIndex === i && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.20, ease: "easeInOut" }}
                            >
                                <p className="mt-4 text-paragraph text-gray-600 leading-relaxed">
                                    {item.answer}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    )
}
