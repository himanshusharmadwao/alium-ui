import React from "react";
import HomeWrapper from "@/components/wrapper/home";
import homeData from "@/lib/data/home/data.json"

const Home = () => {
  return(
    <>
      <HomeWrapper data={homeData} />
    </>
  )
};

export default Home;
