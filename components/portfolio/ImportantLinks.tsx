import React from "react";
import { IProject } from "../../@shared/interfaces/_project_interface";

interface Iprops {
  project: IProject;
}
const ImportantLinks = ({ project }: Iprops) => {
  return (
    <div className="my-10">
      <h2 className="text-2xl text-white my-5">Important Links -</h2>
      <div className="flex gap-5 flex-wrap">
        <a href={project?.live_link} target="_blank" rel="noreferrer">
          <button className="btn btn-outline btn-info rounded-none">
            Live Site
          </button>
        </a>
        <a href={project?.git_client} target="_blank" rel="noreferrer">
          <button className="btn btn-outline btn-warning rounded-none">
            Github client
          </button>
        </a>
        {project?.git_server && (
          <a href={project?.git_server} target="_blank" rel="noreferrer">
            <button className="btn btn-outline btn-secondary rounded-none">
              Github Server
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ImportantLinks;
