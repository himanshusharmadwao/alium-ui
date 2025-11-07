"use client";

import Accordion from "@/components/ui/Accordion";
import { iconMap } from "@/lib/iconMap";

export default function ContactWrapper({ data }) {
  const { hero, contactSection, faq } = data;

  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="container text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-main-heading font-extrabold text-charcoal-gray mb-4 leading-tight">
              {hero.title}
            </h1>
            <p className="text-paragraph text-gray-600">{hero.subtitle}</p>
          </div>
        </div>

        {hero.backgroundDecor?.circles?.map((circle, i) => (
          <div
            key={i}
            className={`absolute ${circle.position.includes("top") ? `-${circle.position.split("-")[0]}-12` : `-${circle.position.split("-")[0]}-12`} ${circle.position.includes("left") ? `-${circle.position.split("-")[1]}-12` : `-${circle.position.split("-")[1]}-12`} ${circle.style}`}
          ></div>
        ))}
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-primary/5">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-secondary-heading font-bold text-charcoal-gray mb-6">
                {contactSection.heading}
              </h2>
              <p className="text-gray-600 text-paragraph mb-8">
                {contactSection.description}
              </p>

              <div className="space-y-6">
                {contactSection.contactInfo.map((info, i) => (
                  <div key={i} className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mr-4">
                      {iconMap[info.icon]}
                    </div>
                    <div>
                      <p className="font-semibold text-paragraph text-charcoal-gray">
                        {info.title}
                      </p>
                      <p className="text-sm text-gray-500">{info.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 h-[370px] rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src={contactSection.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 bg-white p-8 md:p-12 rounded-2xl shadow-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-paragraph font-medium text-gray-700 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      placeholder="John"
                      className="w-full px-4 py-3 text-paragraph bg-primary/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-paragraph font-medium text-gray-700 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      placeholder="Doe"
                      className="w-full px-4 py-3 text-paragraph bg-primary/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-paragraph font-medium text-gray-700 mb-2"
                  >
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 text-paragraph bg-primary/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="inquiry"
                    className="block text-paragraph font-medium text-gray-700 mb-2"
                  >
                    How can we help?
                  </label>
                  <select
                    id="inquiry"
                    className="w-full px-4 py-3 text-paragraph bg-primary/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
                  >
                    <option>Sales Inquiry</option>
                    <option>Technical Support</option>
                    <option>Partnership</option>
                    <option>General Question</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-paragraph font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Tell us more about your inquiry..."
                    className="w-full px-4 py-3 text-paragraph bg-primary/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white px-8 py-4 rounded-xl shadow-soft hover:bg-opacity-90 text-paragraph font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container">
        <div className="py-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-secondary-heading font-bold text-charcoal-gray mb-4">
              {faq.heading}
            </h2>
            <p className="text-gray-600 text-paragraph">{faq.description}</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <Accordion items={faq.items} />
          </div>
        </div>
      </section>
    </>
  );
}
