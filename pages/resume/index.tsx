import Head from "next/head";
import React from "react";
import EducationResume from "../../components/resume/EducationResume";
import TechnicalSkill from "../../components/resume/TechnicalSkill";

const ResumePage = () => {
  return (
    <>
      <Head>
        <title>Akash Rahman - Resume</title>
      </Head>
      <div>
        <div className="py-10 mx-5 md:mx-16">
          <h2 className="text-3xl sm:text-5xl text-center border-b-2 pb-3 text-info">
            <i className="fa-solid fa-trophy mr-5"></i>Resume
          </h2>
        </div>
        <div
          className="grid lg:grid-cols-2 lg:pt-10 pb-10 mx-5 md:mx-16 text-white gap-10"
          data-aos="fade-left"
        >
          <div>
            <EducationResume />
          </div>
          <div className="flex justify-between lg:grid grid-cols-2">
            <TechnicalSkill />
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumePage;
