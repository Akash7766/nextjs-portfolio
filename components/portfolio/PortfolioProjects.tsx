import Link from "next/link";
import React from "react";
import { Paths } from "../../@shared/constant/Paths";
import { IProject } from "../../@shared/interfaces/_project_interface";
import style from "../../styles/Projects.module.css";

interface Iprops {
  project: IProject;
}
const PortfolioProjects = ({ project }: Iprops) => {
  const { name, _id, image1 } = project;
  return (
    <div className={`${style.projects}`}>
      <img src={image1} alt="" className={`${style.projects_image}`} />
      <div className={`${style.projects_title}`}>
        <div className="text-center">
          <h2 className="text-2xl mb-5">{name}</h2>
          <div className="flex gap-2">
            <a href={project.live_link} target="_blank" rel="noreferrer">
              <button className="btn btn-outline btn-info rounded-none uppercase">
                Live Link
              </button>
            </a>
            <Link href={Paths.ProjetDetails(_id)}>
              <button className="btn btn-outline btn-warning rounded-none uppercase">
                Project Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioProjects;
