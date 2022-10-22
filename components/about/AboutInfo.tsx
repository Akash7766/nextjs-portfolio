import React from "react";

const AboutInfo = () => {
  return (
    <>
      <div className=" md:col-span-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-8 text-white">
          Frontend Web Developer.
        </h2>
        <p>
          Hi. <br />I am Minhazur Rahman Akash. I am a professional Frontend Web
          Developer. Recently i have done some good project with MERN
          technology. I also know basic of NodeJs , MongoDB , Express Js for
          full stack. <br /> <br />
          Now i am looking for a job where i can share my skill properly. I am
          very handworking and determined. If you want to checkout my recent
          project then please go to Portfolio page. Thank you for your time{" "}
          {":)"} .
        </p>
      </div>
      <div className=" md:col-span-4">
        <h2 className="text-xl sm:text-2xl mb-5 font-bold">
          Personal Information
        </h2>
        <p>Name: Minhazur Rahman Akash</p>
        <p>Age: 22 Years</p>
        <p>Country: Bangladesh</p>
        <p>Address: Tejgaon, Dhaka 1208</p>
        <p>Email: minhazur.akash1@gmail.com</p>
        <p>Freelance: Available</p>
        <button className="btn btn-outline btn-info border-4 rounded-none mt-8">
          <a
            target="_blank"
            href="https://drive.google.com/file/d/14Rus18tZUvA1cPYiGiMDP-kQUeExcgLO/view?usp=sharing"
            download
            rel="noreferrer"
          >
            Download Resume
          </a>
        </button>
      </div>
    </>
  );
};

export default AboutInfo;
