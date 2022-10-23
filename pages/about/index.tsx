import React from "react";
import AboutInfo from "../../components/about/AboutInfo";
import MyServices from "../../components/about/MyServices";

const AboutPage = ({ services }: any) => {
  return (
    <div>
      <div className="py-10 mx-5 md:mx-16">
        <h2 className="text-3xl sm:text-5xl text-center border-b-2 pb-3 text-info">
          <i className="fa-solid fa-user-tie mr-3"></i>About Me
        </h2>
      </div>
      <div
        className="grid grid-cols-1 md:grid-flow-col px-5 md:px-14 gap-8 text-white"
        data-aos="fade-right"
      >
        <AboutInfo />
      </div>
      <MyServices services={services} />
    </div>
  );
};

export default AboutPage;

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`https://akash-rahman-api.vercel.app/api/services`);
  const services = await res.json();

  // Pass services to the page via props
  return {
    props: {
      services,
    },
  };
}
