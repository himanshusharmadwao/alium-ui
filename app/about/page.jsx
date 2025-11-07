import AboutWrapper from "@/components/wrapper/about";
import React from "react";
import aboutData from "@/lib/data/about/data.json"

const AboutPage = () => {
    return (
        <>
            <AboutWrapper data={aboutData} />
        </>
    )
};

export default AboutPage;
