// "use client";
// import Image from "next/image";
// import CallToAction from "@/components/CallToAction";
// import { FaCubes, FaChartLine, FaCheckCircle } from "react-icons/fa";
// import InsightSection from "@/components/InsightSection";

// const ProductWrapper = () => {
//     const hero = {
//         heading: (
//             <>
//                 Turn Every Website Visit into{" "}
//                 <span className="relative inline-block">
//                     <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
//                         Actionable
//                     </span>
//                     <svg
//                         className="absolute -bottom-3 left-0 w-full h-auto text-primary/80"
//                         viewBox="0 0 198 16"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path
//                             d="M2 13.5C25.3222 7.33333 91.0441 -5.49999 196 6.5"
//                             stroke="currentColor"
//                             strokeWidth="4"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                         ></path>
//                     </svg>
//                 </span>{" "}
//                 Feedback
//             </>
//         ),
//         text: "Alium for Websites helps you capture your visitors’ true voice — right where the experience happens. Launch beautifully embedded surveys that blend seamlessly into your site’s design, collect instant insights, and uncover what drives engagement, drop-offs, and satisfaction.",
//         buttonText: "Get Free Access",
//         image:
//             "/images/product-banner.png",
//     };

//     const offerings = {
//         heading: "Our Core Offerings",
//         description:
//             "Two powerful products, one seamless ecosystem. Discover how Alium can elevate your team's potential.",
//         items: [
//             {
//                 icon: <FaCubes className="text-3xl text-primary" />,
//                 title: "Real-Time Feedback Collection",
//                 text: "Capture what your customers think and feel as they interact with your website. In-context feedback means higher accuracy, better insights, and faster optimization.",
//             },
//             {
//                 icon: <FaChartLine className="text-3xl text-primary" />,
//                 title: "Advanced Analytics Dashboard",
//                 text: "Turn responses into intelligence. Visualize trends, segment audiences, and measure the impact of changes—all in one intuitive dashboard.",
//             },
//         ],
//     };

//     const useCasesData = {
//         heading: "How Our Customers Use Alium",
//         subheading:
//             "From agile startups to global enterprises, teams of all sizes leverage Alium to solve their biggest challenges.",
//         items: [
//             {
//                 tag: "Rapid Prototyping",
//                 heading: "Accelerate Your Product Launch",
//                 description:
//                     "Use Alium to bring your product ideas to life faster. Build and refine prototypes in minutes, share live previews with your team, and collect feedback all in one place — helping you move from concept to launch in record time.",
//                 points: [
//                     {
//                         title: "Instant Sharing",
//                         text: "Share your work instantly with live previews.",
//                     },
//                     {
//                         title: "Collaborative Feedback",
//                         text: "Get quick feedback from your team in one place.",
//                     },
//                     {
//                         title: "Version Management",
//                         text: "Keep every version organized as your product evolves.",
//                     },
//                 ],
//                 image: {
//                     src: "/images/product-launch.png",
//                     alt: "Rapid Prototyping Dashboard",
//                 },
//                 reverse: false,
//             },
//             {
//                 tag: "Rapid Prototyping",
//                 heading: "Accelerate Your Product Launch",
//                 description:
//                     "Use Alium to bring your product ideas to life faster. Build and refine prototypes in minutes, share live previews with your team, and collect feedback all in one place — helping you move from concept to launch in record time.",
//                 points: [
//                     {
//                         title: "Instant Sharing",
//                         text: "Share your work instantly with live previews.",
//                     },
//                     {
//                         title: "Collaborative Feedback",
//                         text: "Get quick feedback from your team in one place.",
//                     },
//                     {
//                         title: "Version Management",
//                         text: "Keep every version organized as your product evolves.",
//                     },
//                 ],
//                 image: {
//                     src: "/images/dashboard-new-2.png",
//                     alt: "Rapid Prototyping Dashboard",
//                 },
//                 reverse: true,
//             }
//         ],
//     };

//     const cta = {
//         heading: "Experience Alium in Action",
//         subheading:
//             "Discover how our real-time feedback solutions can transform your digital experience strategy. Start today — it’s free to get started.",
//         buttonText: "Start Free Trial",
//         buttonLink: "/get-started",
//     };

//     return (
//         <main>
//             {/* Hero Section */}
//             <section className="pt-40 pb-24 bg-primary/5 relative overflow-hidden">
//                 <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-60"></div>
//                 <div className="absolute bottom-0 -left-24 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl opacity-50"></div>

//                 <div className="container h-full flex items-center">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
//                         <div className="text-left space-y-8 z-10">
//                             <h1 className="text-main-heading font-extrabold leading-tight tracking-tight">
//                                 {hero.heading}
//                             </h1>
//                             <p className="text-paragraph text-gray-600 leading-relaxed max-w-xl">
//                                 {hero.text}
//                             </p>
//                             <div className="pt-4">
//                                 <button className="bg-primary text-white px-8 py-4 rounded-xl shadow-soft hover:bg-opacity-90 transform hover:-translate-y-1 transition-all duration-300 font-bold text-lg">
//                                     {hero.buttonText}
//                                 </button>
//                             </div>
//                         </div>

//                         <div className="relative flex items-center justify-center h-full z-10">
//                             <div className="absolute -top-10 right-0 w-40 h-40 bg-purple-200/20 rounded-full blur-2xl animate-pulse"></div>
//                             <div className="absolute -bottom-10 left-0 w-40 h-40 bg-blue-200/20 rounded-full blur-2xl animate-pulse delay-500"></div>
//                             <div className="relative w-full max-w-[450px] transform lg:scale-110 lg:translate-x-8">
//                                 <div className="bg-white/60 backdrop-blur-md p-4 rounded-2xl shadow-soft-lg border border-white/50">
//                                     <Image
//                                         src={hero.image}
//                                         alt="Alium Product Dashboard"
//                                         width={900}
//                                         height={600}
//                                         className="w-full h-auto rounded-xl object-cover"
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Offerings Section */}
//             <section className="container">
//                 <div className="py-16 text-center">
//                     {/* Section Header */}
//                     <div className="max-w-3xl mx-auto mb-16">
//                         <h2 className="text-secondary-heading font-bold text-charcoal-gray mb-4">
//                             {offerings.heading}
//                         </h2>
//                         <p className="text-gray-600 text-paragraph">{offerings.description}</p>
//                     </div>

//                     {/* Offerings Grid */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                         {offerings.items.map((item, i) => (
//                             <div
//                                 key={i}
//                                 className="bg-primary/5 p-8 rounded-2xl shadow-soft hover:shadow-soft-lg transform hover:-translate-y-2 transition-all duration-300 text-left"
//                             >
//                                 {/* Icon */}
//                                 <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
//                                     {item.icon}
//                                 </div>

//                                 {/* Content */}
//                                 <h3 className="text-2xl font-bold text-charcoal-gray mb-3">
//                                     {item.title}
//                                 </h3>
//                                 <p className="text-gray-600 text-paragraph">{item.text}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Usecase section */}
//             <section className="py-16 bg-primary/5">
//                 <div className="container">
//                     {/* Section Header */}
//                     <div className="text-center max-w-3xl mx-auto mb-16">
//                         <h2 className="text-secondary-heading font-bold mb-4">
//                             {useCasesData.heading}
//                         </h2>
//                         <p className="text-gray-600 text-paragraph">{useCasesData.subheading}</p>
//                     </div>

//                     {/* Use Case Cards */}
//                     <div className="space-y-36">
//                         {useCasesData.items.map((item, i) => (
//                             <InsightSection key={i} data={item} />
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Call to Action */}
//             <section className="container py-16 !mt-16">
//                 <CallToAction data={cta} />
//             </section>
//         </main>
//     );
// };

// export default ProductWrapper


"use client";

import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import InsightSection from "@/components/InsightSection";
import { FaCubes, FaChartLine } from "react-icons/fa";
import Link from "next/link";

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
                            const Icon =
                                item.icon === "FaCubes"
                                    ? FaCubes
                                    : item.icon === "FaChartLine"
                                        ? FaChartLine
                                        : null;

                            return (
                                <div
                                    key={i}
                                    className="bg-primary/5 p-8 rounded-2xl shadow-soft hover:shadow-soft-lg transform hover:-translate-y-2 transition-all duration-300 text-left"
                                >
                                    {/* Icon */}
                                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                        {Icon && <Icon className="text-3xl text-primary" />}
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
