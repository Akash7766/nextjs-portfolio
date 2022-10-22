import React from "react";
import HomeActionButton from "../components/home/HomeActionButton";
import HomeDescription from "../components/home/HomeDescription";

const HomePage = () => {
  return (
    <div className="bg-[#FFFFF] h-full flex justify-center items-center flex-col">
      <div className="w-full px-5 sm:px-0 sm:w-[600px] h-full flex justify-center flex-col">
        <HomeDescription />
        <HomeActionButton />
      </div>
    </div>
  );
};

export default HomePage;
