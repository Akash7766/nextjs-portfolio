import React from "react";
import { IProject } from "../../../@shared/interfaces/_project_interface";

interface Iprops {
  project: IProject;
}
const ProjectScreenShot = ({ project }: Iprops) => {
  return (
    <div className="my-10">
      <h2 className="text-2xl text-white my-5">
        Some Screenshot from <span className="text-info">{project?.name}</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-info p-3 overflow-hidden">
          <img
            className=" hover:scale-125 transition-all "
            src={project?.image1}
            alt=""
          />
        </div>
        <div className="bg-info p-3 overflow-hidden">
          <img
            className=" hover:scale-125 transition-all "
            src={project?.image2}
            alt=""
          />
        </div>
        <div className="bg-info p-3 overflow-hidden">
          <img
            className=" hover:scale-125 transition-all "
            src={project?.image3}
            alt=""
          />
        </div>
        <div className="bg-info p-3 overflow-hidden">
          <img
            className=" hover:scale-125 transition-all"
            src={project?.image4 ? project?.image4 : project?.image1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectScreenShot;
