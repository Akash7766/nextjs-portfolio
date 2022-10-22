import React from "react";
import { IService } from "../../@shared/interfaces/_service_interface";

interface Iprops {
  service: IService;
}
const SingleService = ({ service }: Iprops) => {
  const { name, description, icon } = service;
  return (
    <div className="flex text-white border border-indigo-500 p-5 hover:bg-slate-700 transition-all">
      <i className={icon}></i>
      <div>
        <h2 className="text-2xl mb-3">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SingleService;
