import { GetServerSideProps } from "next";
import router, { useRouter } from "next/router";
import { IProject } from "../../../@shared/interfaces/_project_interface";
import ImportantLinks from "../../../components/portfolio/ImportantLinks";
import ProjectScreenShot from "../../../components/portfolio/ProjectScreenShot";
import UsesTechnology from "../../../components/portfolio/UsesTechnology";

const PortfolioProjectDetails = ({ project }: any) => {
  return (
    <div>
      <div className="py-10 mx-5 md:mx-16">
        <h2 className="text-3xl sm:text-5xl text-center border-b-2 pb-3 text-info">
          {project?.name}
        </h2>

        {/* Technology list  */}
        <UsesTechnology />

        {/* import link  */}
        <ImportantLinks project={project} />

        {/* Screenshot  */}
        <ProjectScreenShot project={project} />

        {/* description */}
        <div className="my-10">
          <h2 className="text-2xl text-white my-5 font-bold">
            About This Project -
          </h2>
          <div>
            <p className="text-white text-md">{project?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export const getServerSideProps = async (context: any) => {
  const { params } = context;
  const res = await fetch(`http://localhost:3000/api/projects/${params._id}`);
  const project = await res.json();

  return {
    props: {
      project,
    },
  };
};
export default PortfolioProjectDetails;
