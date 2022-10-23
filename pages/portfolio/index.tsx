import { Key } from "react";
import PortfolioProjects from "../../components/portfolio/PortfolioProjects";

const PortfolioPage = ({ projects }: any) => {
  return (
    <div>
      <div className="py-10 mx-5 md:mx-16">
        <h2 className="text-3xl sm:text-5xl text-center border-b-2 pb-3 text-info mb-10">
          <i className="fa-solid fa-briefcase-medical mr-3"></i>My recent work
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project: any, index: Key | null | undefined) => (
            <PortfolioProjects key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`https://akash-rahman-api.vercel.app/api/projects`);
  const projects = await res.json();

  // Pass projects to the page via props
  return {
    props: {
      projects,
    },
  };
}
