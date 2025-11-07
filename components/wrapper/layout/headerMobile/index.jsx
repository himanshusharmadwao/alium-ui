"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaChevronDown,
  FaChevronUp,
  FaBars,
  FaTimes,
  FaGlobe,
  FaEnvelope,
  FaAlignLeft,
  FaAndroid,
  FaTags,
  FaCogs,
  FaListUl,
  FaUsers,
  FaChartLine,
  FaLightbulb,
  FaBullseye,
  FaBuilding,
  FaPlane,
  FaShoppingBag,
  FaCar,
  FaMicrochip,
  FaPhone,
} from "react-icons/fa";
import { BiSolidBarChartAlt2 } from "react-icons/bi";

export default function HeaderMobileWrapper() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg lg:hidden">
      <div className="flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-primary text-white rounded-[4px] p-1">
            <BiSolidBarChartAlt2 size={14} />
          </div>
          <span className="font-bold text-gray-900">Alium</span>
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="text-gray-700 focus:outline-none"
        >
          <FaBars size={22} />
        </button>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] max-w-[320px] bg-white z-50 shadow-xl transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary text-white rounded-[4px] p-1">
              <BiSolidBarChartAlt2 size={14} />
            </div>
            <span className="font-bold text-gray-900">Alium</span>
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 focus:outline-none"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="h-[calc(100vh-60px)] overflow-y-auto">
          <nav className="flex flex-col px-4 py-4 text-gray-800 font-medium">
            <Link href="/" className="py-2 border-b border-gray-100">
              Home
            </Link>

            {/* Product Dropdown */}
            <div className="border-b border-gray-100 py-2">
              <button
                onClick={() => toggleDropdown("product")}
                className="flex justify-between items-center w-full"
              >
                Product
                {openDropdown === "product" ? (
                  <FaChevronUp size={12} />
                ) : (
                  <FaChevronDown size={12} />
                )}
              </button>

              {openDropdown === "product" && (
                <div className="pl-4 mt-2 flex flex-col gap-3 text-sm text-gray-600">
                  <Link href="#" className="flex items-center gap-2">
                    <FaGlobe className="text-primary" /> Alium for Websites
                  </Link>
                  <Link href="#" className="flex items-center gap-2">
                    <FaTags className="text-primary" /> Pricing Policy
                  </Link>
                  <Link href="#" className="flex items-center gap-2">
                    <FaEnvelope className="text-primary" /> Alium for Email/Link
                  </Link>
                  <Link href="#" className="flex items-center gap-2">
                    <FaAlignLeft className="text-primary" /> Alium In-page
                  </Link>
                  <Link href="#" className="flex items-center gap-2">
                    <FaCogs className="text-primary" /> Alium API (Coming Soon!)
                  </Link>
                  <Link href="#" className="flex items-center gap-2">
                    <FaListUl className="text-primary" /> Integrations (Coming Soon!)
                  </Link>
                  <Link href="#" className="flex items-center gap-2">
                    <FaAndroid className="text-primary" /> Alium for Apps (Coming Soon!)
                  </Link>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="border-b border-gray-100 py-2">
              <button
                onClick={() => toggleDropdown("solutions")}
                className="flex justify-between items-center w-full"
              >
                Solutions
                {openDropdown === "solutions" ? (
                  <FaChevronUp size={12} />
                ) : (
                  <FaChevronDown size={12} />
                )}
              </button>

              {openDropdown === "solutions" && (
                <div className="pl-4 mt-2 text-sm text-gray-600 space-y-5">
                  {/* By Role */}
                  <div>
                    <div className="font-semibold text-gray-700 mb-2">
                      By Role
                    </div>
                    <ul className="flex flex-col gap-3">
                      <li className="flex items-center gap-2">
                        <FaChartLine className="text-primary" />
                        <Link href="#">For Product Teams</Link>
                      </li>
                      <li className="flex items-center gap-2">
                        <FaBullseye className="text-primary" />
                        <Link href="#">For Marketing Teams</Link>
                      </li>
                      <li className="flex items-center gap-2">
                        <FaUsers className="text-primary" />
                        <Link href="#">For CX Professionals</Link>
                      </li>
                      <li className="flex items-center gap-2">
                        <FaLightbulb className="text-primary" />
                        <Link href="#">For Analysts & Researchers</Link>
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCogs className="text-primary" />
                        <Link href="#">For People & Culture</Link>
                      </li>
                      <li className="flex items-center gap-2">
                        <FaGlobe className="text-primary" />
                        <Link href="#">For Digital & Innovation</Link>
                      </li>
                    </ul>
                  </div>

                  {/* By Industry */}
                  <div>
                    <div className="font-semibold text-gray-700 mb-2">
                      By Industry
                    </div>
                    <ul className="flex flex-col gap-3">
                      <li className="flex items-center gap-2">
                        <FaBuilding className="text-primary" />
                        <Link href="#">Finance & Insurance</Link>
                      </li>
                      <li className="flex items-center gap-2">
                        <FaPlane className="text-primary" />
                        <Link href="#">Travel, Tourism & Aviation</Link>
                      </li>
                      <li className="flex items-center gap-2">
                        <FaShoppingBag className="text-primary" />
                        <Link href="#">E-Commerce & Retail</Link>
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCar className="text-primary" />
                        <Link href="#">Automotive</Link>
                      </li>
                      <li className="flex items-center gap-2">
                        <FaMicrochip className="text-primary" />
                        <Link href="#">Software, IT & Technology</Link>
                      </li>
                      <li className="flex items-center gap-2">
                        <FaPhone className="text-primary" />
                        <Link href="#">Telecom</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* About */}
            <Link href="/about" className="py-2 border-b border-gray-100">
              About
            </Link>

            {/* Resources Dropdown */}
            <div className="border-b border-gray-100 py-2">
              <button
                onClick={() => toggleDropdown("resources")}
                className="flex justify-between items-center w-full"
              >
                Resources
                {openDropdown === "resources" ? (
                  <FaChevronUp size={12} />
                ) : (
                  <FaChevronDown size={12} />
                )}
              </button>

              {openDropdown === "resources" && (
                <div className="pl-4 mt-2 flex flex-col gap-3 text-sm text-gray-600">
                  <Link href="/resources/voice-of-customer" className="flex items-center gap-2">
                    <FaMicrochip className="text-primary" /> Voice of Customer (VoC)
                  </Link>
                  <Link href="/resources/voice-of-customer-glossary" className="flex items-center gap-2">
                    <FaBuilding className="text-primary" /> VoC Glossary
                  </Link>
                </div>
              )}
            </div>

            {/* Contact */}
            <Link href="/contact" className="py-2 border-b border-gray-100">
              Contact
            </Link>

            {/* CTA */}
            <div className="mt-4 pb-8">
              <Link
                href="https://app.aliumsurvey.com/"
                className="block text-center bg-[#3b37ff] text-white py-2 rounded-lg font-medium hover:bg-[#2d2adb] transition"
              >
                Get Free Access
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
