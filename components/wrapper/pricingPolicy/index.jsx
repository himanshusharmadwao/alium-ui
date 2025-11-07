import CallToAction from "@/components/CallToAction";
import Link from "next/link";

export default function PricingPolicyWrapper() {

    const cta = {
        heading: "Join the Team Shaping the Future of Customer Insights",
        subheading:
            "At Alium, we’re on a mission to help businesses truly understand their customers — the why behind every decision. We’re looking for passionate, curious people who want to build tools that make digital experiences more human.",
        buttonText: "Explore Careers",
        buttonLink: "/careers",
    };

    return (
        <>
            {/* Hero Section */}
            <section className="pt-40 pb-20 relative overflow-hidden">
                <div className="container text-center relative z-10">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-main-heading font-extrabold text-charcoal-gray mb-4 leading-tight">
                            Our Pricing Policy
                        </h1>
                        <p className="text-paragraph text-gray-600">
                            We are giving Free Access of our plateform to first 100 valuable customers. Sign up below to get Free Access.
                        </p>
                    </div>
                </div>
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-primary/10 rounded-full"></div>
                <div className="absolute -top-12 -right-12 w-64 h-64 border-8 border-primary/10 rounded-2xl transform rotate-12"></div>
            </section>

            {/* Section 2: Features Section */}
            <div className="bg-primary/5 py-16">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-semibold leading-snug mb-6">
                            Signing Up With Alium Gives You More Than Just Feedback Software.
                        </h2>
                    </div>

                    <ul className="md:w-1/2 space-y-4 text-lg">
                        <li className="flex items-start gap-3">
                            <span>✔</span> Unlimited feedback items and campaigns
                        </li>
                        <li className="flex items-start gap-3">
                            <span>✔</span> As many user accounts as you need
                        </li>
                        <li className="flex items-start gap-3">
                            <span>✔</span> Extensive training and ongoing support
                        </li>
                        <li className="flex items-start gap-3">
                            <span>✔</span> Dedicated Customer Success Manager
                        </li>
                        <li className="flex items-start gap-3">
                            <span>✔</span> New product and feature information first
                        </li>
                    </ul>
                </div>
            </div>

            {/* /* Call to Action  */}
            <section className="container">
                <div className="py-16">
                    <CallToAction data={cta} />
                </div>
            </section>
        </>
    );
}