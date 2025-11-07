"use client";

import Link from "next/link";
import {
  FaChevronDown,
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

export default function HeaderWrapper() {
  return (
    <header
      className={`fixed top-0 left-1/2 -translate-x-1/2 mt-4 w-[90%] max-w-[1200px] rounded-[10px] z-50 transition-all duration-300 bg-white backdrop-blur-md shadow-lg`}
    >
      <div className="flex justify-between items-center py-3 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-primary text-white rounded-[4px] p-1">
            <BiSolidBarChartAlt2 size={14} />
          </div>
          <span className="font-bold text-paragraph text-gray-900">Alium</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="/">Home</Link>

          {/* PRODUCTS DROPDOWN */}
          <div className="relative group">
            <Link href="/products" className="flex items-center gap-1">
              Product <FaChevronDown size={10} />
            </Link>
            <div className="absolute hidden group-hover:block bg-white shadow-xl rounded-xl w-[600px] p-6 border border-gray-100">
              <h4 className="text-gray-800 font-semibold mb-4">Our Products</h4>

              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                <Link href="/product/alium-for-websites" className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition">
                  <FaGlobe className="text-primary mt-1" />
                  <div>
                    <div className="font-medium text-gray-800">Alium for Websites</div>
                    <div className="text-sm text-gray-500">Build a website users love</div>
                  </div>
                </Link>

                <Link href="/pricing-policy" className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition">
                  <FaTags className="text-primary mt-1" />
                  <div>
                    <div className="font-medium text-gray-800">Pricing Policy</div>
                    <div className="text-sm text-gray-500">Pricing Policy</div>
                  </div>
                </Link>

                <Link href="/product/alium-for-emails" className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition">
                  <FaEnvelope className="text-primary mt-1" />
                  <div>
                    <div className="font-medium text-gray-800">Alium for Email/Link</div>
                    <div className="text-sm text-gray-500">Send the right message</div>
                  </div>
                </Link>

                <Link href="/products/api" className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition">
                  <FaCogs className="text-primary mt-1" />
                  <div>
                    <div className="font-medium text-gray-800">Alium API (Coming Soon!)</div>
                    <div className="text-sm text-gray-500">Do more with feedback</div>
                  </div>
                </Link>

                <Link href="/product/alium-in-page" className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition">
                  <FaAlignLeft className="text-primary mt-1" />
                  <div>
                    <div className="font-medium text-gray-800">Alium In-page</div>
                    <div className="text-sm text-gray-500">Feedback in your webpage</div>
                  </div>
                </Link>

                <Link href="/products/integrations" className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition">
                  <FaListUl className="text-primary mt-1" />
                  <div>
                    <div className="font-medium text-gray-800">Integrations (Coming Soon!)</div>
                    <div className="text-sm text-gray-500">Integrate your tech stack</div>
                  </div>
                </Link>

                <Link href="/products/apps" className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition">
                  <FaAndroid className="text-primary mt-1" />
                  <div>
                    <div className="font-medium text-gray-800">Alium for Apps (Coming Soon!)</div>
                    <div className="text-sm text-gray-500">In-app feedback</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* SOLUTIONS DROPDOWN */}
          <div className="relative group">
            <Link href="/solutions" className="flex items-center gap-1">
              Solutions <FaChevronDown size={10} />
            </Link>

            <div className="absolute hidden group-hover:block bg-white shadow-xl rounded-xl w-[700px] p-6 border border-gray-100">
              <div className="grid grid-cols-2 gap-8">
                {/* By Role */}
                <div>
                  <h4 className="text-gray-800 font-semibold mb-4">By Role</h4>
                  <div className="space-y-3">
                    <Link href="/solution/product-teams" className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition">
                      <FaChartLine className="text-primary mt-1" />
                      <div>
                        <div className="font-medium text-gray-800">For Product Teams</div>
                        <div className="text-sm text-gray-500">Optimize user experience</div>
                      </div>
                    </Link>

                    <Link href="/solution/marketing-teams" className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition">
                      <FaBullseye className="text-primary mt-1" />
                      <div>
                        <div className="font-medium text-gray-800">For Marketing Teams</div>
                        <div className="text-sm text-gray-500">Build brand loyalty</div>
                      </div>
                    </Link>

                    <Link href="/solution/cx-professionals" className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition">
                      <FaUsers className="text-primary mt-1" />
                      <div>
                        <div className="font-medium text-gray-800">For CX Professionals</div>
                        <div className="text-sm text-gray-500">Improve customer journeys</div>
                      </div>
                    </Link>

                    <Link href="/solution/analysts-and-researchers" className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition">
                      <FaLightbulb className="text-primary mt-1" />
                      <div>
                        <div className="font-medium text-gray-800">For Analysts & Researchers</div>
                        <div className="text-sm text-gray-500">Make insights actionable</div>
                      </div>
                    </Link>

                    <Link href="/solution/people-and-culture" className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition">
                      <FaCogs className="text-primary mt-1" />
                      <div>
                        <div className="font-medium text-gray-800">For People & Culture</div>
                        <div className="text-sm text-gray-500">Engage your employees</div>
                      </div>
                    </Link>

                    <Link href="/solution/digital-and-innovation" className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition">
                      <FaGlobe className="text-primary mt-1" />
                      <div>
                        <div className="font-medium text-gray-800">For Digital & Innovation</div>
                        <div className="text-sm text-gray-500">Drive customer-centricity</div>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* By Industry */}
                <div className="border-l border-gray-100 pl-6">
                  <h4 className="text-gray-800 font-semibold mb-4">By Industry</h4>
                  <div className="space-y-3">
                    <Link href="/solution/financial-services" className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition">
                      <FaBuilding className="text-primary mt-1" />
                      <div>
                        <div className="font-medium text-gray-800">Finance & Insurance</div>
                        <div className="text-sm text-gray-500">Build trust and innovate</div>
                      </div>
                    </Link>

                    <Link href="/solution/travel-tourism-and-aviation" className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition">
                      <FaPlane className="text-primary mt-1" />
                      <div>
                        <div className="font-medium text-gray-800">Travel, Tourism & Aviation</div>
                        <div className="text-sm text-gray-500">Deliver world-class journey</div>
                      </div>
                    </Link>

                    <Link href="/solution/ecommerce-retail" className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition">
                      <FaShoppingBag className="text-primary mt-1" />
                      <div>
                        <div className="font-medium text-gray-800">E-Commerce & Retail</div>
                        <div className="text-sm text-gray-500">Improve conversions</div>
                      </div>
                    </Link>

                    <Link href="/solution/automotive" className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition">
                      <FaCar className="text-primary mt-1" />
                      <div>
                        <div className="font-medium text-gray-800">Automotive</div>
                        <div className="text-sm text-gray-500">Fuel service excellence</div>
                      </div>
                    </Link>

                    <Link href="/solution/software-it-and-technology" className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition">
                      <FaMicrochip className="text-primary mt-1" />
                      <div>
                        <div className="font-medium text-gray-800">Software, IT & Technology</div>
                        <div className="text-sm text-gray-500">Continuously optimize</div>
                      </div>
                    </Link>

                    <Link href="/solution/telecom" className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition">
                      <FaPhone className="text-primary mt-1 rotate-90" />
                      <div>
                        <div className="font-medium text-gray-800">Telecom</div>
                        <div className="text-sm text-gray-500">Connect with customers</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link href="/about">About</Link>

          {/* RESOURCES DROPDOWN */}
          <div className="relative group">
            <Link href="#" className="flex items-center gap-1">
              Resources <FaChevronDown size={10} />
            </Link>

            <div className="absolute hidden group-hover:block bg-white shadow-xl rounded-xl w-[320px] p-6 border border-gray-100">
              <div className="space-y-4">
                <Link href="/resources/voice-of-customer" className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition">
                  <FaMicrochip className="text-primary mt-1" />
                  <div>
                    <div className="font-medium text-gray-800">Voice of Customer (VoC)</div>
                    <div className="text-sm text-gray-500">A quick guide to what VoC is</div>
                  </div>
                </Link>

                <Link href="/resources/voice-of-customer-glossary" className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition">
                  <FaBuilding className="text-primary mt-1" />
                  <div>
                    <div className="font-medium text-gray-800">VoC Glossary</div>
                    <div className="text-sm text-gray-500">Technical terms and definitions</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <Link href="/contact">Contact</Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <Link href="https://app.aliumsurvey.com/" className="text-gray-800 font-medium">
            Sign In
          </Link>
          <Link
            href="https://app.aliumsurvey.com/"
            className="bg-[#3b37ff] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#2d2adb] transition"
          >
            Get Free Access
          </Link>
        </div>
      </div>
    </header>
  );
}
