import React from "react";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const FooterWrapper = () => {
  return (
    <footer className="bg-[var(--color-primary)] text-white rounded-t-[60px] mt-20 pt-16 pb-6">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Logo and tagline */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <BiSolidBarChartAlt2 size={18} />
              </div>
              <span className="font-bold text-paragraph">Alium</span>
            </Link>
            <p className="text-white/90 text-md">Turn Every Response Into Revenue.</p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-3 text-paragraph">Product</h3>
            <ul className="space-y-2 text-white/90 text-md">
              <li><Link href="#">Features</Link></li>
              <li><Link href="#">Pricing</Link></li>
              <li><Link href="#">Testimonials</Link></li>
              <li><Link href="#">Integrations</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3 text-paragraph">Company</h3>
            <ul className="space-y-2 text-white/90 text-md">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Contact</Link></li>
              <li>
                <Link href="/terms-and-conditions">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-3 text-paragraph">Resources</h3>
            <ul className="space-y-2 text-white/90 text-md">
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Help Center</Link></li>
              <li><Link href="#">API Docs</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-white/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-md text-white/80">
          <p>© {new Date().getFullYear()} Alium. All rights reserved.</p>
          <Link
            href="#"
            className="flex items-center gap-2 text-white/80 hover:text-white transition"
          >
            <FaLinkedinIn size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterWrapper;
